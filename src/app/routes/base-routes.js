
const BaseController = require('../controladores/base-controller');
const baseController = new BaseController();

module.exports = (app) => {

    const rotasBase = BaseController.rotas();
    
    app.get(rotasBase.home, baseController.home());
}