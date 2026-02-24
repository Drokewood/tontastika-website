import express from 'express';
import { requireAdmin } from './auth.js'; 
import upload from '../config/multer.js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// POST /api/images/upload - Bild hochladen (nur Admins!)
// Middleware-Chain: requireAdmin → multer.single('image') → Handler
// der upload baut eine gesicherte Verbindung zum SERVER auf und legt dort das Bild ab
router.post('/upload', requireAdmin, upload.single('image'), async (request, response) => {
  // Wenn wir hier ankommen:
  // 1. User ist Admin (requireAdmin hat geprüft) ✅
  // 2. Multer hat File gespeichert ✅
  // 3. File-Info ist in request.file verfügbar ✅
  
  // Prüfen ob File hochgeladen wurde
  if (!request.file) {
    return response.status(400).json({ 
      error: 'Kein Bild hochgeladen' 
    });
  }

  // hier wird die Connection zur DB geöffnet
  let connection;
  
  try {
    // Verbindung zur DB aufbauen
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });

    // INSERT Query: ist eine Hülle für die Metadaten des Bildes, die in der DB gespeichert werden sollen
    const insertQuery = `
      INSERT INTO images (filename, original_name, path, size, mimetype, uploaded_by)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    // hier befüllen wir die insertQuery mit den Daten aus request.file und der userId aus der express-Session und aus der Multer Middleware, also die Daten aus dem Upload des Nutzers
    // und führen den Insert in die DB aus
    const [result] = await connection.execute(insertQuery, [
      request.file.filename,           // generierter Filename von Multer
      request.file.originalname,       // Original-Name vom User
      request.file.path,               // vollständiger Pfad
      request.file.size,               // Größe in Bytes
      request.file.mimetype,           // z.B. image/jpeg
      request.session.userId           // wer hat hochgeladen?
    ]);

    // Success Response mit File-Info UND DB-Info
    response.json({
      message: 'Bild erfolgreich hochgeladen und in DB gespeichert!',
      file: {
        id: result.insertId,           // DB Auto-Increment ID
        filename: request.file.filename,
        originalName: request.file.originalname,
        size: request.file.size,
        mimetype: request.file.mimetype,
        path: request.file.path,
        uploadedBy: request.session.userId
      }
    });

  } catch (error) {
    console.error('❌ Fehler beim Speichern in DB:', error);
    
    // Wenn DB fehlschlägt: File ist auf Disk aber nicht in DB
    // TODO: Später cleanup implementieren (File löschen wenn DB-Insert fehlschlägt)
    
    return response.status(500).json({ 
      error: 'Fehler beim Speichern in Datenbank',
      details: error.message 
    });
    
  } finally {
    // Connection IMMER schließen
    if (connection) {
      await connection.end();
    }
  }
});

export default router;