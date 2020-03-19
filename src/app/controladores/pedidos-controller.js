const { check, validationResult } = require('express-validator/check');
const PedidoDao = require('../infra/pedido-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class PedidoController {

    static rotas(){
        return {
            lista: '/pedidos',
            cadastro: '/pedidos/form',
            edicao: '/pedidos/form/:id',
            delecao: '/pedidos/:id',
            visualizaPedido: '/pedidos/view/:id',
        }
    }

    lista(){
        return function(req,resp){
            const pedidoDao = new PedidoDao(db);
            pedidoDao.lista().then(pedidos => resp.marko(templates.pedidos.lista,
                    {
                        pedidos: pedidos
                    })
            ).catch(erro => console.log(erro));
        };
    }

    formularioCadastro() {
        return function(req,resp){
            resp.marko(templates.pedidos.form, { pedido: {}})
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const pedidoDao = new PedidoDao(db);
        
            pedidoDao.buscaPorId(id)
                .then(pedido => 
                    resp.marko(templates.pedidos.form,
                        { pedido: pedido }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

    cadastra() {
        return function(req,resp){
            console.log(req.body);
            const pedidoDao = new PedidoDao(db);
    
            const erros = validationResult(req);
            if(!erros.isEmpty()){
                return resp.marko(templates.pedidos.form,
                    {
                        pedido: req.body,
                        errosValidacao: erros.array()
                    }
                );
            }
    
            pedidoDao.adiciona(req.body)
                .then(resp.redirect(PedidoController.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req,resp){
            console.log(req.body);
            const pedidoDao = new PedidoDao(db);
            pedidoDao.atualiza(req.body)
                .then(resp.redirect(PedidoController.rotas().lista))
                .catch(erro => console.log(erro));
            pedidoDao.alteraValorPerdido(req.body.id);
        };
    }

    remove() {
        return function(req,resp){
            const id = req.params.id;
            const pedidoDao = new PedidoDao(db);
            pedidoDao.remove(id)
            .then(()=> resp.status(200).end())
            .catch(erro => console.log(erro));
        };
    }

    visualizaPedido(){
        return function(req, resp) {
            const id = req.params.id;
            const pedidoDao = new PedidoDao(db);
            console.log(id);
            debugger;
            pedidoDao.buscaPorId(id)
                .then(pedido => 
                    resp.marko(templates.pedidos.visualiza,
                        { pedido: pedido }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

}

module.exports = PedidoController;