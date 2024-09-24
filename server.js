const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Importando as rotas
const reservaRoutes = require('./src/routes/reservaRoutes');

// Definindo as rotas principais
app.use('/reservas', reservaRoutes);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
