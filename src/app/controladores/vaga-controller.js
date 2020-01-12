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
            dadosPeriodo: '/dados',
            visualizaVaga: '/vagas/view/:id',
            dadosCandidatos:'/dados/candidatos',
            dadosClientes:'/dados/clientes',
            dadosClientesRecusa: '/dados/clientesrecusa',
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

    valoresPorPeriodo(){
        return function(req, resp){
            const vagaDao = new VagaDao(db);
            vagaDao.valoresPorPeriodo().then(periodos => resp.marko(templates.vagas.valoresPeriodo,
                {
                    periodos: periodos
                })
            ).catch(erro => console.log(erro));
        };
    }
    dadosCandidatos(){
        return function(req, resp){
            const vagaDao = new VagaDao(db);
            vagaDao.candidadosMaisRejeitados().then(candidatos => resp.marko(templates.vagas.dadosCandidatos,
                {
                    candidatos: candidatos
                })
            ).catch(erro => console.log(erro));
        };
    }
    dadosClientes(){
        return function(req, resp){
            const vagaDao = new VagaDao(db);
            vagaDao.clienteQueMaisRejeitam().then(clientes => resp.marko(templates.vagas.dadosClientes,
                {
                    clientes: clientes
                })
            ).catch(erro => console.log(erro));
        };
    }
    clientesRecusaramTodos(){
        return function(req, resp){
            const vagaDao = new VagaDao(db);
            vagaDao.clienteRecusaramTodos().then(clientesRecusa => resp.marko(templates.vagas.dadosClientesRecusa,
                {
                    clientesRecusa: clientesRecusa
                })
            ).catch(erro => console.log(erro));
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