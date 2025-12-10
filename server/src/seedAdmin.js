import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// Lade Umgebungsvariablen
dotenv.config();

// Funktion zum Erstellen des ersten Admin-Users
async function seedAdmin() {
  let connection;
  
  try {
    // Verbindung zur Datenbank herstellen
    // hier werden die Nutzerdaten für den Login festgelegt
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE || 'tontastika_cms'
    });

    console.log('📊 Verbunden mit MySQL Datenbank');

    // Admin-Daten (ACHTUNG: Später über Umgebungsvariablen oder interaktiv!)
    const adminEmail = 'admin@tontastika.de';
    const adminPassword = 'ChangeMe123!'; 
    
    // Prüfen ob Admin bereits existiert
    const [existingAdmin] = await connection.execute(
      'SELECT id FROM users WHERE email = ?',
      [adminEmail]
    );

    if (existingAdmin.length > 0) {
      console.log('⚠️  Admin-User existiert bereits!');
      return;
    }

    // Passwort hashen (bcrypt mit 10 rounds = sicher & performant)
    // eine Round ist dabei ein Durchlauf des Hashing-Algorithmus, je öfter, desto sicherer, aber auch langsamer
    // 10-12 Runden sind standard
    console.log('🔐 Hashe Passwort...');
    const passwordHash = await bcrypt.hash(adminPassword, 10);

    // Admin in Datenbank einfügen
    // Sendet eine SQL-Anfrage an die Datenbank, um den neuen Admin-User zu erstellen
    // Die Antwort der Datenbank wird in der Variable 'result' gespeichert
    const [result] = await connection.execute(
      // SQL-Befehl zum Einfügen eines neuen Users
      'INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)',
      // Diese Werte werden in die SQL-Anfrage eingesetzt, wo zuvor noch die Platzhalter '?' standen
      [adminEmail, passwordHash, 'admin']
    );

    console.log('✅ Admin-User erfolgreich erstellt!');
    console.log(`📧 Email: ${adminEmail}`);
    console.log(`🔑 Passwort: ${adminPassword}`);
    console.log('⚠️  WICHTIG: Passwort nach erstem Login ändern!');
    console.log(`🆔 User ID: ${result.insertId}`);

  } catch (error) {
    console.error('❌ Fehler beim Erstellen des Admin-Users:', error.message);
    process.exit(1);
  } finally {
    // Verbindung schließen
    if (connection) {
      await connection.end();
      console.log('🔌 Datenbankverbindung geschlossen');
    }
  }
}

// Script ausführen
seedAdmin();
