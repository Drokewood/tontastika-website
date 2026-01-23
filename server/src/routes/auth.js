import express from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// Lade Umgebungsvariablen für DB-Zugriff
// dotenv sucht die env im aktuellen Verzeichnis, in dem wir uns befinden, in diesem Fall server/ dadurch kommt es nicht zu kollosionen mit der src/.env Datei
dotenv.config();

const router = express.Router();

// diese Funktion ist erreichbar unter /auth/login und wird ausgeführt, wenn eine POST Anfrage an diese Route geschickt wird
// das async erlaubt die Nutzung von await innerhalb der Funktion, ohne dieses Keyword würde await einen Fehler werfen
// also brauchen wir async um die Erlaubnis einzuholen von Javascript um einen await ausführen zu können und await pausiert die Funktion und holt daten vom Server
router.post('/login', async (request, response) => {
  // Extrahiere Email und Password aus dem Request-Body, also die eingegebenen Daten und speichert sie in Variablen
  const { email, password } = request.body;
  
  // VALIDIERUNG 1: Prüfen ob beide Felder vorhanden sind
  if (!email || !password) {
    return response.status(400).json({ 
      error: 'Email und Passwort erforderlich' 
    });
  }
  
  // VALIDIERUNG 2: Email-Format prüfen (einfache Prüfung mit @)
  if (!email.includes('@')) {
    return response.status(400).json({ 
      error: 'Ungültige Email-Adresse' 
    });
  }
  
  // Database User Lookup
  let connection;
  
  try {
    // Verbindung zur Datenbank herstellen
    // await bedeutet, dass der Code hier wartet bis die Verbindung hergestellt ist, bevor es weiter geht
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE || 'tontastika_cms'
    });
    
    // User in Datenbank suchen (Prepared Statement gegen SQL-Injection!)
    // es werden alle Daten des Users mit der abgefragten email geholt
    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    // VALIDIERUNG 3: Prüfen ob User existiert
    if (rows.length === 0) {
      return response.status(401).json({ 
        error: 'Ungültige Anmeldedaten' 
      });
    }
    
    // User gefunden!
    const user = rows[0];
    console.log('✅ User gefunden:', user.email, 'Rolle:', user.role);
    
    // MICRO-TASK #7: Passwort überprüfen
    // bcrypt.compare hashed das Klartextpasswort aus der Eingabe und vergleicht das Ergebnis mit dem in der DB gehashten Passwort
    const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);
    
    if (!isPasswordCorrect) {
      return response.status(401).json({ 
        error: 'Ungültige Anmeldedaten' 
      });
    }
    
    console.log('✅ Passwort korrekt!');
    
    // Später (Task #8): req.session.userId = user.id
    
    response.json({ 
      message: 'Login erfolgreich!',
      email: user.email,
      role: user.role
    });
    
  } catch (error) {
    console.error('❌ Datenbank-Fehler:', error);
    return response.status(500).json({ 
      error: 'Interner Server-Fehler' 
    });
  } finally {
    // Verbindung immer schließen (auch bei Fehler!)
    if (connection) {
      await connection.end();
    }
  }
});

export default router;