const VagaDao = require('../infra/vaga-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class DadosController {
    static rotas(){
        return {
            dadosPeriodo: '/dados',
            dadosCandidatos:'/dados/candidatos',
            dadosClientes:'/dados/clientes',
            dadosClientesRecusa: '/dados/clientesrecusa',
        }
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
}
module.exports = DadosController;