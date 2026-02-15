-- Mimetype ist ein Dateityplable, die die Art der Datei beschreibt, z.B. "image/jpeg" für JPEG-Bilder oder "image/png" für PNG-Bilder. Es ist wichtig, den Mimetype zu speichern, um sicherzustellen, dass die Anwendung die Datei korrekt verarbeiten und anzeigen kann.
-- uploaded_by ist ein Fremdschlüssel, der auf die ID des Benutzers verweist, der das Bild hochgeladen hat. Dies ermöglicht es, die Bilder mit den Benutzern zu verknüpfen und sicherzustellen, dass nur autorisierte Benutzer Zugriff auf ihre eigenen Bilder haben.
CREATE TABLE IF NOT EXISTS images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  original_name VARCHAR(255) NOT NULL,
  path VARCHAR(512) NOT NULL,
  size INT NOT NULL,
  mimetype VARCHAR(100) NOT NULL,
  uploaded_by INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE CASCADE
);