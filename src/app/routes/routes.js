const vagaRoutes = require('./vaga-routes');
const baseRoutes = require('./base-routes');


module.exports = (app) => {
    baseRoutes(app);
    vagaRoutes(app);
}
        
