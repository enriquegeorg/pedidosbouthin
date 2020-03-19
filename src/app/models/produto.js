const { check } = require('express-validator/check');

class Produto {
    static validation(){
        return [
            check('descricao').isLength({ min: 5 }).withMessage("A descrição do produto deve ter mais de 5 caractéres"),
            check('valor').isCurrency().withMessage("Informe um valor monetário válido")
        ];
    }
}

module.exports = Produto;