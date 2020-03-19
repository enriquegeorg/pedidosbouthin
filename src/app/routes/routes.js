const vagaRoutes = require('./vaga-routes');
const baseRoutes = require('./base-routes');
const dadosRoutes = require('./dados-routes');
const empresasRoutes = require('./empresas-routes');
const pedidosRoutes = require('./pedidos-routes');
const produtosRoutes = require('./produtos-routes');


module.exports = (app) => {
    baseRoutes(app);
    vagaRoutes(app);
    dadosRoutes(app);
    empresasRoutes(app);
    pedidosRoutes(app);
    produtosRoutes(app);
}
        
