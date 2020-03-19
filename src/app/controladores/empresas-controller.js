const { check, validationResult } = require('express-validator/check');
const EmpresaDao = require('../infra/empresa-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class EmpresaController {

    static rotas(){
        return {
            lista: '/empresas',
            cadastro: '/empresas/form',
            edicao: '/empresas/form/:id',
            delecao: '/empresas/:id',
            visualizaEmpresa: '/empresas/view/:id',
        }
    }

    lista(){
        return function(req,resp){
            const empresaDao = new EmpresaDao(db);
            empresaDao.lista().then(empresas => resp.marko(templates.empresas.lista,
                    {
                        empresas: empresas
                    })
            ).catch(erro => console.log(erro));
        };
    }

    formularioCadastro() {
        return function(req,resp){
            resp.marko(templates.empresas.form, { empresa: {}})
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const empresaDao = new EmpresaDao(db);
        
            empresaDao.buscaPorId(id)
                .then(empresa => 
                    resp.marko(templates.empresas.form,
                        { empresa: empresa }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

    cadastra() {
        return function(req,resp){
            console.log(req.body);
            const empresaDao = new EmpresaDao(db);
    
            const erros = validationResult(req);
            if(!erros.isEmpty()){
                return resp.marko(templates.empresas.form,
                    {
                        empresa: req.body,
                        errosValidacao: erros.array()
                    }
                );
            }
    
            empresaDao.adiciona(req.body)
                .then(resp.redirect(EmpresaController.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req,resp){
            console.log(req.body);
            const empresaDao = new EmpresaDao(db);
            empresaDao.atualiza(req.body)
                .then(resp.redirect(EmpresaController.rotas().lista))
                .catch(erro => console.log(erro));
            empresaDao.alteraValorPerdido(req.body.id);
        };
    }

    remove() {
        return function(req,resp){
            const id = req.params.id;
            const empresaDao = new EmpresaDao(db);
            empresaDao.remove(id)
            .then(()=> resp.status(200).end())
            .catch(erro => console.log(erro));
        };
    }

    visualizaEmpresa(){
        return function(req, resp) {
            const id = req.params.id;
            const empresaDao = new EmpresaDao(db);
            console.log(id);
            debugger;
            empresaDao.buscaPorId(id)
                .then(empresa => 
                    resp.marko(templates.empresas.visualiza,
                        { empresa: empresa }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

}

module.exports = EmpresaController;