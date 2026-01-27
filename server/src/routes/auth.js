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

  // sollte eine Validierung fehlschlagen, wird die Funktion mit return beendet und eine Fehlermeldung zurückgegeben
  // es würden also keine Verbindung aufgebaut werden, und keine Daten gestohlen werden können
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
  
  // Database User Lookup, wird erst erstellt wenn die Validierungen erfolgreich sind
  let connection;
  
  try {
    // Verbindung zur Datenbank herstellen
    // await bedeutet, dass der Code hier wartet bis die Verbindung hergestellt ist, bevor es weiter geht
    connection = await mysql.createConnection({
      // das geschieht NACH der validierung, die Logindaten die nun folgen, haben nichts mit den validierungsdaten zu tun, die vom Webseitennnutzer kommen
      // der connection block sagt nach der validierung, cool ich darf rein 
      // und baut eine connection zur db auf. 
      // ich will auf die db, die bei 'Host', also unserem Server liegt, bzw im Docker Container
      // für den 'user' in mysql (tontastika_user)
      // mit dem 'password' für das mysql(damit ich auch da hinneinkomme)
      // und der 'database' name (damit ich weiß wo ich eigentlich nach Daten suchen will)
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
    
    // User gefunden, die Daten aus der DB sind in rows[0] und werden in user gespeichert
    const user = rows[0];
    // TODO: VOR PRODUCTION: Email aus Log entfernen oder auf process.env.NODE_ENV === 'development' prüfen
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

    // Session-Daten setzen
    // user.id und user.role sind die Daten, die aus der DB geholt wurden
    // request.session ist das Session-Objekt, das durch das express-session Middleware bereitgestellt wird
    // Hier speichern wir die User-ID und Rolle in der Session, damit wir sie später für Authentifizierung und Autorisierung verwenden können
    // --------------------------------------------------------------
    // die eigentliche Arbeit erledigt express session, dieses Objekt wird mit einem Setter und Getter versehen
    // schon während des Schreibens registriert der Setter Änderungen und markiert die Session als "dirty", also verändert
    // Nach dem response speichert der Setter die Änderungen im Session Store 
    request.session.userId = user.id;
    request.session.role = user.role;
    
    // Antwort an den Client, also das Frontend senden (ohne Passwort)
    // um die Daten im Client anzeigen und weiter verarbeiten zu können
    // die role ist zum Beispiel wichtig um zu wissen ob der User Admin Rechte hat oder nicht
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

router.post('/logout', (request, response) => {
  // Session einreißen, um den User auszuloggen
  // ein Callback ist eine Funktion die SPÄTER ausgeführt wird
  // destroy() ist asynchron: löscht Session im Hintergrund, ruft dann den Callback auf
  // Der Callback bekommt (err) als Parameter: null bei Erfolg, Error-Objekt bei Fehler
  request.session.destroy((err) => {
    if (err) {
      return response.status(500).json({ 
        error: 'Fehler beim Ausloggen' 
      });
    }
    response.json({ message: 'Logout erfolgreich!' });
  });
});

// TEST-ENDPOINT: Session überprüfen
// Dieser Endpoint prüft ob ein User eingeloggt ist (Session existiert)
// Browser sendet Cookie automatisch mit → express-session lädt Session-Daten
// -----------------------------------------------
// /me ist die route die wir aufrufen um zu prüfen ob der user eingeloggt ist
router.get('/me', (request, response) => {
  // Prüfen ob userId in Session vorhanden ist
  if (request.session.userId) {
    // Session existiert! User ist eingeloggt
    response.json({
      loggedIn: true,
      userId: request.session.userId,
      role: request.session.role
    });
  } else {
    // Keine Session → User ist NICHT eingeloggt
    response.json({ 
      loggedIn: false 
    });
  }
});

export default router;