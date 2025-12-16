import express from 'express';


const router = express.Router();

// diese Funktion ist erreichbar unter /auth/login und wird ausgeführt, wenn eine POST Anfrage an diese Route geschickt wird
router.post('/login', (request, response) => {
  response.json({ 
    message: 'Login-Route funktioniert!',
    receivedData: request.body 
  });
});

export default router;