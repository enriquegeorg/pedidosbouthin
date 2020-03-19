const { check } = require('express-validator/check');

class Empresa {
    static validation(){
        return [
            check('razaosocial').isLength({ min: 5 }).withMessage("A razão social deve ter no mínimo 5 caracteres"),
            check('cnpj').isLength({ min: 9 }).withMessage("O CNPJ deve ter no mínimo 9 caracteres")
        ];
    }
}

module.exports = Empresa;