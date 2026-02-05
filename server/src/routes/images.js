import express from 'express';
import { requireAdmin } from './auth.js'; 
import upload from '../config/multer.js'; 

const router = express.Router();

// POST /api/images/upload - Bild hochladen (nur Admins!)
// Middleware-Chain: requireAdmin → multer.single('image') → Handler
router.post('/upload', requireAdmin, upload.single('image'), (request, response) => {
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
  
  // File-Info zurückgeben
  response.json({
    message: 'Bild erfolgreich hochgeladen!',
    file: {
      filename: request.file.filename,
      originalName: request.file.originalname,
      size: request.file.size,
      mimetype: request.file.mimetype,
      path: request.file.path
    }
  });
});

export default router;