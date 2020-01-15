const { check, validationResult } = require('express-validator/check');
const VagaDao = require('../infra/vaga-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class VagaController {

    static rotas(){
        return {
            lista: '/vagas',
            cadastro: '/vagas/form',
            edicao: '/vagas/form/:id',
            delecao: '/vagas/:id',
            visualizaVaga: '/vagas/view/:id',
        }
    }

    lista(){
        return function(req,resp){
            const vagaDao = new VagaDao(db);
            vagaDao.lista().then(vagas => resp.marko(templates.vagas.lista,
                    {
                        vagas: vagas
                    })
            ).catch(erro => console.log(erro));
        };
    }

    formularioCadastro() {
        return function(req,resp){
            resp.marko(templates.vagas.form, { vaga: {}})
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const vagaDao = new VagaDao(db);
        
            vagaDao.buscaPorId(id)
                .then(vaga => 
                    resp.marko(templates.vagas.form,
                        { vaga: vaga }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

    cadastra() {
        return function(req,resp){
            console.log(req.body);
            const vagaDao = new VagaDao(db);
    
            const erros = validationResult(req);
            if(!erros.isEmpty()){
                return resp.marko(templates.vagas.form,
                    {
                        vaga: req.body,
                        errosValidacao: erros.array()
                    }
                );
            }
    
            vagaDao.adiciona(req.body)
                .then(resp.redirect(VagaController.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req,resp){
            console.log(req.body);
            const vagaDao = new VagaDao(db);
            vagaDao.atualiza(req.body)
                .then(resp.redirect(VagaController.rotas().lista))
                .catch(erro => console.log(erro));
            vagaDao.alteraValorPerdido(req.body.id);
        };
    }

    remove() {
        return function(req,resp){
            const id = req.params.id;
            const vagaDao = new VagaDao(db);
            vagaDao.remove(id)
            .then(()=> resp.status(200).end())
            .catch(erro => console.log(erro));
        };
    }

    visualizaVaga(){
        return function(req, resp) {
            const id = req.params.id;
            const vagaDao = new VagaDao(db);
            console.log(id);
            debugger;
            vagaDao.buscaPorId(id)
                .then(vaga => 
                    resp.marko(templates.vagas.visualiza,
                        { vaga: vaga }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

}

module.exports = VagaController;