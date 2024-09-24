class ReservaController {

    // Controlador para listar todas as reservas
    static listarReservas = (req, res) => {
        // Aqui futuramente vamos buscar as reservas no banco de dados
        res.status(200).json({
            message: 'Listando todas as reservas (dados fictícios)',
            reservas: [
                { id: 1, nomeSala: 'Sala 1', data: '2024-09-19', horario: '14:00', descricao: 'Reunião de projeto' },
                { id: 2, nomeSala: 'Sala 2', data: '2024-09-20', horario: '10:00', descricao: 'Apresentação de resultados' }
            ]
        });
    };

    // Controlador para criar uma nova reserva
    static criarReserva = (req, res) => {
        const { nomeSala, data, horario, descricao } = req.body;
        // Lógica para criar uma nova reserva
        res.status(201).json({
            message: 'Reserva criada com sucesso',
            reserva: { id: 3, nomeSala, data, horario, descricao }
        });
    };

    // Controlador para atualizar uma reserva
    static atualizarReserva = (req, res) => {
        const { id } = req.params;
        const { nomeSala, data, horario, descricao } = req.body;
        // Lógica para atualizar uma reserva existente
        res.status(200).json({
            message: `Reserva com ID ${id} atualizada com sucesso`,
            reserva: { id, nomeSala, data, horario, descricao }
        });
    };

    // Controlador para deletar uma reserva
    static deletarReserva = (req, res) => {
        const { id } = req.params;
        // Lógica para deletar uma reserva existente
        res.status(200).json({
            message: `Reserva com ID ${id} deletada com sucesso`
        });
    };
}

module.exports = ReservaController;

