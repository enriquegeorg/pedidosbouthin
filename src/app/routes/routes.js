const vagaRoutes = require('./vaga-routes');
const baseRoutes = require('./base-routes');
const dadosRoutes = require('./dados-routes');


module.exports = (app) => {
    baseRoutes(app);
    vagaRoutes(app);
    dadosRoutes(app);
}
        
