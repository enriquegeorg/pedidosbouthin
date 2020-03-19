const { check, validationResult } = require('express-validator/check');
const ProdutoDao = require('../infra/produto-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class ProdutoController {

    static rotas(){
        return {
            lista: '/produtos',
            cadastro: '/produtos/form',
            edicao: '/produtos/form/:id',
            delecao: '/produtos/:id',
            visualizaProduto: '/produtos/view/:id',
        }
    }

    lista(){
        return function(req,resp){
            const produtoDao = new ProdutoDao(db);
            produtoDao.lista().then(produtos => resp.marko(templates.produtos.lista,
                    {
                        produtos: produtos
                    })
            ).catch(erro => console.log(erro));
        };
    }

    formularioCadastro() {
        return function(req,resp){
            resp.marko(templates.produtos.form, { produto: {}})
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const produtoDao = new ProdutoDao(db);
        
            produtoDao.buscaPorId(id)
                .then(produto => 
                    resp.marko(templates.produtos.form,
                        { produto: produto }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

    cadastra() {
        return function(req,resp){
            console.log(req.body);
            const produtoDao = new ProdutoDao(db);
    
            const erros = validationResult(req);
            if(!erros.isEmpty()){
                return resp.marko(templates.produtos.form,
                    {
                        produto: req.body,
                        errosValidacao: erros.array()
                    }
                );
            }
    
            produtoDao.adiciona(req.body)
                .then(resp.redirect(ProdutoController.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req,resp){
            console.log(req.body);
            const produtoDao = new ProdutoDao(db);
            produtoDao.atualiza(req.body)
                .then(resp.redirect(ProdutoController.rotas().lista))
                .catch(erro => console.log(erro));
            produtoDao.alteraValorPerdido(req.body.id);
        };
    }

    remove() {
        return function(req,resp){
            const id = req.params.id;
            const produtoDao = new ProdutoDao(db);
            produtoDao.remove(id)
            .then(()=> resp.status(200).end())
            .catch(erro => console.log(erro));
        };
    }

    visualizaProduto(){
        return function(req, resp) {
            const id = req.params.id;
            const produtoDao = new ProdutoDao(db);
            console.log(id);
            debugger;
            produtoDao.buscaPorId(id)
                .then(produto => 
                    resp.marko(templates.produtos.visualiza,
                        { produto: produto }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

}

module.exports = ProdutoController;