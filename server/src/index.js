import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// startet die Konfiguration aus der .env Datei, damit Umgebungsvariablen genutzt werden können
// in der react.app ist diese Funktionalität bereits integriert, im Node.js Backend muss sie explizit gestartet werden
dotenv.config();

// erstetellt eine Express Applikation, das ServerObjekt (startet den Express Server)
// macht es möglich Anfragen zu empfangen und Antworten zu senden(GET und POST requests)
const app = express();
// definiert den Port auf dem der Server läuft, entweder aus der Umgebungsvariable oder 5000 als Standardwert
const PORT = process.env.PORT || 5000;
// die Reihenfolge der Middleware-Nutzung ist wichtig!
// Middleware wird VON OBEN NACH UNTEN abgearbeitet
// 1. CORS checken - app.use(cors()); 
// 2. JSON parsen - app.use(express.json()); 
// 3. Route handler - app.get('/api', ...); 

// Middleware - Filter für eingehende Anfragen
// app.use() fügt Middleware-Funktionen hinzu, die auf jede request angewendet werden
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
app.get('/api', (request, response) => {
  response.json({ message: 'Tontastika CMS API - Ready for authentication & uploads!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});
