const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Middleware para habilitar o CORS
app.use(cors());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/reservas_salas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado ao MongoDB');
})
.catch((error) => {
    console.log('Erro ao conectar ao MongoDB:', error);
});

// Importando as rotas
const reservaRoutes = require('./src/routes/reservaRoutes');

// Definindo as rotas principais
app.use('/reservas', reservaRoutes);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
