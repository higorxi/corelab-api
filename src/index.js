const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/TodoRoutes');
const cors = require('cors');  

const app = express();

connectDB(); 

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
app.use('/todos', todoRoutes);

// Inicie o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
