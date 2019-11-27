const VagaDao = require('../infra/vaga-dao');

const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send(
            `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
            `
        );
    });

    app.get('/vagas', function(req, resp){

        const vagaDao = new VagaDao(db);
        vagaDao.lista().then(vagas => resp.marko(
                require('../views/vagas/lista/lista.marko'),
                {
                    vagas: vagas
                })
         ).catch(erro => console.log(erro));
    });

    app.get('/vagas/form', function(req,resp){
        resp.marko(require('../views/vagas/form/form.marko'))
    });
    app.post('/vagas', function(req,resp){
        console.log(req.body);
        const vagaDao = new VagaDao(db);
        vagaDao.adiciona(req.body)
            .then(resp.redirect('/vagas'))
            .catch(erro => console.log(erro));
        });
}
        
