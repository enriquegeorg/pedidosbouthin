const ProdutosController = require('../controladores/produtos-controller');
const produtosController = new ProdutosController();
const Produto = require('../models/produto');

module.exports = (app) => {

    const rotasProduto = ProdutosController.rotas();

    app.get(rotasProduto.lista, produtosController.lista());

    app.route(rotasProduto.cadastro)
    .get(produtosController.formularioCadastro())
    .put(produtosController.edita())
    .post(Produto.validation(),produtosController.cadastra());

    app.get(rotasProduto.edicao, produtosController.formularioEdicao());

    app.delete(rotasProduto.delecao, produtosController.remove());
    
    app.get(rotasProduto.visualizaProduto, produtosController.visualizaProduto());
}
        
