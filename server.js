const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. Configura la carpeta 'public' para el CSS, Imágenes y JS
app.use(express.static(path.join(__dirname, 'public')));

// 2. Rutas principales
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'productos.html'));
});

// 3. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`
    ==============================================
    SOLARIS PERUVIAN - DARK EDITION
    Servidor local: http://localhost:${PORT}
    ==============================================
    `);
});

