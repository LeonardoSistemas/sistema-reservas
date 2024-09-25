class ReservaController {

    // Controlador para listar todas as reservas
    static listarReservas = async (req, res) => {
        try {
            const reservas = await Reserva.find();
            res.status(200).json(reservas);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar reservas', error });
        }
    };

    // Controlador para criar uma nova reserva
    static criarReserva = async (req, res) => {
        const { nomeSala, data, horario, descricao } = req.body;

        try {
            const novaReserva = new Reserva({ nomeSala, data, horario, descricao });
            await novaReserva.save();
            res.status(201).json(novaReserva);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar reserva', error });
        }
    };

    // Controlador para atualizar uma reserva
    static atualizarReserva = async (req, res) => {
        const { id } = req.params;
        const { nomeSala, data, horario, descricao } = req.body;

        try {
            const reservaAtualizada = await Reserva.findByIdAndUpdate(id, { nomeSala, data, horario, descricao }, { new: true });
            res.status(200).json(reservaAtualizada);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar reserva', error });
        }
    };

    // Controlador para deletar uma reserva
    static deletarReserva = async (req, res) => {
        const { id } = req.params;

        try {
            await Reserva.findByIdAndDelete(id);
            res.status(200).json({ message: `Reserva com ID ${id} deletada com sucesso` });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar reserva', error });
        }
    };
}

module.exports = ReservaController;

