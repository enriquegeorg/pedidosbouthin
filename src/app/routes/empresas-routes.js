const EmpresasController = require('../controladores/empresas-controller');
const empresasController = new EmpresasController();
const Empresa = require('../models/empresa');

module.exports = (app) => {

    const rotasEmpresa = EmpresasController.rotas();

    app.get(rotasEmpresa.lista, empresasController.lista());

    app.route(rotasEmpresa.cadastro)
    .get(empresasController.formularioCadastro())
    .put(empresasController.edita())
    .post(Empresa.validation(),empresasController.cadastra());

    app.get(rotasEmpresa.edicao, empresasController.formularioEdicao());

    app.delete(rotasEmpresa.delecao, empresasController.remove());
    
    app.get(rotasEmpresa.visualizaEmpresa, empresasController.visualizaEmpresa());

}
        
