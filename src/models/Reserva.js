const mongoose = require('mongoose');

// Definindo o schema para a reserva
const reservaSchema = new mongoose.Schema({
    nomeSala: { type: String, required: true },
    data: { type: String, required: true },
    horario: { type: String, required: true },
    descricao: { type: String }
});

// Criando o modelo com base no schema
const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
