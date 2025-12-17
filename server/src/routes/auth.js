import express from 'express';


const router = express.Router();

// diese Funktion ist erreichbar unter /auth/login und wird ausgeführt, wenn eine POST Anfrage an diese Route geschickt wird
router.post('/login', (request, response) => {
  // Extrahiere Email und Password aus dem Request-Body
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
  
  // Wenn alle Validierungen erfolgreich → Später kommt hier DB-Abfrage + bcrypt
  response.json({ 
    message: 'Validierung erfolgreich!',
    email: email 
  });
});

export default router;