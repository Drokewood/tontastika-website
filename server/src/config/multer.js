import multer from 'multer';
import path from 'path';

// Speicherort für hochgeladene Dateien
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb = callback Funktion, die Callback wird hier nicht definiert sondern von multer bereitgestellt
    cb(null, 'uploads/'); // Ordner wo Bilder gespeichert werden
      // ↑     ↑
      // |     └─ "Speichere im uploads/-Ordner"
      // └─ "Kein Error"
  },
  filename: (req, file, cb) => {
    // Eindeutiger Dateiname: timestamp-originalname.jpg
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
    // ↑     ↑
    // |     └─ "Nutze diesen Dateinamen"
    // └─ "Kein Error"
  }
});

// Multer Konfiguration
const upload = multer({
  storage: storage,
  limits: {
    // 5MB max
    fileSize: 5 * 1024 * 1024 
  }
});

export default upload;
