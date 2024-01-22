const express = require('express');
const connectDB = require('./config/db'); 

const app = express();

connectDB(); 

// Inicie o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
