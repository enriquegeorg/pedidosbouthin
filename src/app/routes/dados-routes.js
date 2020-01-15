const DadosController = require('../controladores/dados-controller');
const dadosController = new DadosController();

module.exports = (app) => {

    const rotasDados = DadosController.rotas();

    app.get(rotasDados.dadosPeriodo, dadosController.valoresPorPeriodo());

    app.get(rotasDados.dadosCandidatos, dadosController.dadosCandidatos());

    app.get(rotasDados.dadosClientes, dadosController.dadosClientes());

    app.get(rotasDados.dadosClientesRecusa, dadosController.clientesRecusaramTodos());
} 