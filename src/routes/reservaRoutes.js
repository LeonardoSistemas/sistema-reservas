const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Definindo as rotas e mapeando para os controladores
router.get('/', reservaController.listarReservas);
router.post('/', reservaController.criarReserva);
router.put('/:id', reservaController.atualizarReserva);
router.delete('/:id', reservaController.deletarReserva);

module.exports = router;
