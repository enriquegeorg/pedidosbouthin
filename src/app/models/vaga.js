const { check } = require('express-validator/check');

class Vaga {
    static validation(){
        return [
            check('job_type').isLength({ min: 5 }).withMessage("O nome da vaga deve ter no mínimo 5 caracteres"),
            check('client_id').isLength({ min: 5 }).withMessage("O nome do cliente deve ter no mínimo 5 caracteres"),
            check('candidate').isLength({ min: 5 }).withMessage("O nome do candidato deve ter no mínimo 5 caracteres"),
            check('value').isCurrency().withMessage("O preço precisa ter um valor monetário válido")
        ];
    }
}

module.exports = Vaga;