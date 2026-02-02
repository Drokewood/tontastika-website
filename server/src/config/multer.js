import multer from 'multer';
import path from 'path';

// Speicherort für hochgeladene Dateien
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ordner wo Bilder gespeichert werden
  },
  filename: (req, file, cb) => {
    // Eindeutiger Dateiname: timestamp-originalname.jpg
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

// Multer Konfiguration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB max
  }
});

export default upload;
