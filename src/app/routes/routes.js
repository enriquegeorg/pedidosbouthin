const { check, validationResult } = require('express-validator/check');
const VagaDao = require('../infra/vaga-dao');
const db = require('../../config/database');

const VagaController = require('../controladores/vaga-controller');
const vagaController = new VagaController();
const BaseController = require('../controladores/base-controller');
const baseController = new BaseController();

module.exports = (app) => {

    const rotasBase = BaseController.rotas();
    const rotasVaga = VagaController.rotas();

    app.get(rotasBase.home, baseController.home());

    app.get(rotasVaga.lista, vagaController.lista());

    app.get(rotasVaga.dadosperiodo, vagaController.valoresPorPeriodo());

    app.get(rotasVaga.cadastro, vagaController.formularioCadastro());

    app.get(rotasVaga.edicao, vagaController.formularioEdicao());

    app.post(rotasVaga.lista, [
        check('job_type').isLength({ min: 5 }).withMessage("O nome da vaga deve ter no mínimo 5 caracteres"),
        check('client_id').isLength({ min: 5 }).withMessage("O nome do cliente deve ter no mínimo 5 caracteres"),
        check('candidate').isLength({ min: 5 }).withMessage("O nome do candidato deve ter no mínimo 5 caracteres"),
        check('value').isCurrency().withMessage("O preço precisa ter um valor monetário válido")
        ],vagaController.cadastra());

    app.put(rotasVaga.lista, vagaController.edita());

    app.delete(rotasVaga.delecao, vagaController.remove());
    
    //ERRO 1 - TRATAR
    app.get(rotasVaga.visualizaVaga, vagaController.visualizaVaga());
}
        
