import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import imagesRoute from './routes/images.js';
import session from 'express-session';
import { runMigrations } from './runMigrations.js';
import upload from './config/multer.js';

// die index des Servers ist quasi das Gegenstück zur App.js in der App, es definiert die Funktionen des Servers

// startet die Konfiguration aus der .env Datei, damit Umgebungsvariablen genutzt werden können
// in der react.app ist diese Funktionalität bereits integriert, im Node.js Backend muss sie explizit gestartet werden
dotenv.config();

// erstetellt eine Express Applikation, das ServerObjekt (startet den Express Server)
// macht es möglich Anfragen zu empfangen und Antworten zu senden(GET und POST requests)
const app = express();
// definiert den Port auf dem der Server läuft, entweder aus der Umgebungsvariable oder 5000 als Standardwert
const PORT = process.env.SERVER_PORT || 5000;
// die Reihenfolge der Middleware-Nutzung ist wichtig!
// Middleware wird VON OBEN NACH UNTEN abgearbeitet
// 1. CORS checken - app.use(cors()); 
// 2. JSON parsen - app.use(express.json()); 
// 3. Session-Management - app.use(session(...));
// 4. Route handler - app.get('/api', ...); 

// Middleware - Filter für eingehende Anfragen
// app.use() fügt Middleware-Funktionen hinzu, die auf jede request angewendet wird
app.use(cors({
  // erlaubt Anfragen von der angegebenen Client-URL, standardmäßig localhost:3000
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  // ermöglicht das Senden von Cookies und Authentifizierungsinformationen
  credentials: true
}));
// parst eingehende JSON-Daten automatisch in JavaScript-Objekte um
// Beispiel: '{"username":"admin"}' (String) → { username: "admin" } (Objekt)
// Macht req.body verwendbar! Ohne das wäre req.body undefined oder ein String!
app.use(express.json());

// Session Management für Login-System
// Muss NACH express.json() und VOR den Routes kommen
app.use(session({
  secret: process.env.SESSION_SECRET,        // Verschlüsselt Session-Cookies
  // Session nur speichern wenn sich wirklich etwas geändert hat, um performance zu sparen  Wenn true wird jede Änderung, auch wenn es nur ein neu laden ist, als Änderung gespeichert
  // so wird nur gespeichert wenn sich die Session ändert, also ein login oder logout stattfindet
  resave: false,                             
  saveUninitialized: false,                  // Leere Sessions NICHT speichern
  cookie: { 
    maxAge: 24 * 60 * 60 * 1000,            // 24 Stunden Gültigkeit
    httpOnly: true,                          // Kein JavaScript-Zugriff (XSS-Schutz)
    secure: false                            // true nur mit HTTPS (später in Production)
  }
}));

// Health check endpoint - überprüft ob der Server läuft
// Erreichbar unter: http://localhost:5000/health
// Wird genutzt von: Docker, Monitoring-Tools, manuelle Tests

// request = eingehende Anfrage vom Client (enthält: body, params, query, headers)
// response = Antwort, die an den Client gesendet wird (Methoden: json(), send(), status())
app.get('/health', (request, response) => {
  // sendet JSON-Objekt zurück an den Client
  response.json({ 
    status: 'OK', 
    message: 'Tontastika CMS Server is running!',
    // aktueller Zeitstempel im ISO-Format
    timestamp: new Date().toISOString() 
  });
});

// API routes placeholder
// definiert nur eine einzelne Route
// Diese Route benötigt keine Middleware (z.B. Session), daher kann sie direkt hier definiert werden
// Im Gegensatz zu app.use() die ganze Router-Module laden würde
app.get('/api', (request, response) => {
  response.json({ message: 'Tontastika CMS API - Ready for authentication & uploads!' });
});

// Routes registrieren
// Alle Routen, die mit /auth beginnen, werden von authRoute behandelt, hier werden also mehrere Routen definiert, zum Beispiel /auth/login, /auth/logout, /auth/me
app.use('/auth', authRoute);
app.use('/api/images', imagesRoute);

// Session Test Route - Verifiziert dass Sessions funktionieren
// Erreichbar unter: http://localhost:5000/test/session
app.get('/test/session', (request, response) => {
  // Initialisiere View-Counter wenn noch nicht vorhanden
  if (!request.session.viewCount) {
    request.session.viewCount = 0;
  }
  
  // Erhöhe Counter bei jedem Aufruf
  request.session.viewCount++;
  
  response.json({
    message: 'Session Test erfolgreich!',
    viewCount: request.session.viewCount,
    sessionID: request.sessionID,
    info: 'Wenn viewCount bei jedem Reload hochgeht = Sessions funktionieren! ✅'
  });
});

// --- hier geht es morgen weiter ---
// Start server mit Migrations
async function startServer() {
  try {
    // Erst Migrations ausführen
    await runMigrations();
    
    // Dann Server starten
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`🏥 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('💥 Server konnte nicht starten:', error.message);
    process.exit(1); // Beendet den Prozess bei Fehler
  }
}

startServer();
