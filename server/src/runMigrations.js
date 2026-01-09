import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function runMigrations() {
  let connection;
  
  try {
    // Verbindung zur Datenbank herstellen
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'db',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    console.log('📊 Verbindung zu MySQL hergestellt');

    // Migrations-Ordner finden
    const migrationsDir = path.join(__dirname, '..', 'migrations');
    
    // Alle .sql Dateien im Ordner lesen
    const files = await fs.readdir(migrationsDir);
    const sqlFiles = files
      .filter(file => file.endsWith('.sql'))
      .sort(); // Sortiert nach Dateinamen (001, 002, etc.)

    console.log(`🔍 Gefundene Migrations: ${sqlFiles.length}`);

    // Jede Migration ausführen
    for (const file of sqlFiles) {
      const filePath = path.join(migrationsDir, file);
      const sql = await fs.readFile(filePath, 'utf-8');
      
      console.log(`▶️  Führe aus: ${file}`);
      await connection.query(sql);
      console.log(`✅ Erfolgreich: ${file}`);
    }

    console.log('🎉 Alle Migrations erfolgreich ausgeführt!');

  } catch (error) {
    console.error('❌ Fehler bei Migrations:', error.message);
    throw error; // Server soll nicht starten wenn Migrations fehlschlagen
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}