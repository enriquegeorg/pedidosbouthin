const { check } = require('express-validator/check');

class Pedido {
    static validation(){
        return [
            check('idempresa').isLength({ min: 1 }).withMessage("Você deve vincular o pedido a uma empresa"),
            check('itens').isLength({ min: 1 }).withMessage("O pedido deve conter ao menos 1 item")
        ];
    }
}

module.exports = Pedido;