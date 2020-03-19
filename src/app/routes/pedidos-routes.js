const PedidosController = require('../controladores/pedidos-controller');
const pedidosController = new PedidosController();
const Pedido = require('../models/pedido');

module.exports = (app) => {

    const rotasPedido = PedidosController.rotas();

    app.get(rotasPedido.lista, pedidosController.lista());

    app.route(rotasPedido.cadastro)
    .get(pedidosController.formularioCadastro())
    .put(pedidosController.edita())
    .post(Pedido.validation(),pedidosController.cadastra());

    app.get(rotasPedido.edicao, pedidosController.formularioEdicao());

    app.delete(rotasPedido.delecao, pedidosController.remove());
    
    app.get(rotasPedido.visualizaPedido, pedidosController.visualizaPedido());
}
        
