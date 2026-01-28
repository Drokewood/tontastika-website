import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// Lade Umgebungsvariablen
dotenv.config();

// Funktion zum Erstellen eines Test-Editor-Users
async function seedEditor() {
  let connection;
  
  try {
    // Verbindung zur Datenbank herstellen
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE || 'tontastika_cms'
    });

    console.log('📊 Verbunden mit MySQL Datenbank');

    // Editor-Daten
    const editorEmail = 'editor@tontastika.de';
    const editorPassword = 'EditorTest123!'; 
    
    // Prüfen ob Editor bereits existiert
    const [existingEditor] = await connection.execute(
      'SELECT id FROM users WHERE email = ?',
      [editorEmail]
    );

    if (existingEditor.length > 0) {
      console.log('⚠️  Editor-User existiert bereits!');
      return;
    }

    // Passwort hashen
    console.log('🔐 Hashe Passwort...');
    const passwordHash = await bcrypt.hash(editorPassword, 10);

    // Editor in Datenbank einfügen (rolle: 'editor'!)
    const [result] = await connection.execute(
      'INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)',
      [editorEmail, passwordHash, 'editor']  // ← 'editor' statt 'admin'!
    );

    console.log('✅ Editor-User erfolgreich erstellt!');
    console.log('📧 Email:', editorEmail);
    console.log('🔑 Passwort:', editorPassword);
    console.log('🎭 Rolle: editor');
    console.log('🆔 User ID:', result.insertId);

  } catch (error) {
    console.error('❌ Fehler beim Erstellen des Editor-Users:', error.message);
    process.exit(1);
  } finally {
    // Verbindung schließen
    if (connection) {
      await connection.end();
      console.log('👋 Verbindung geschlossen');
    }
  }
}

// Script ausführen
seedEditor();
