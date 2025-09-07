// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola Mundo con Express!');
});

// API simple
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API' });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
