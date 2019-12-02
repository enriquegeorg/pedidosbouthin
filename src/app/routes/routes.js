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
                    <h1> Hunter Co </h1>
                    <a href="/vagas"> Lista de Vagas </a>
                    <br>
                    <a href="/dados"> Dados qualitativos e quantitativos </a>
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

    app.get('/dados', function(req, resp){
        const vagaDao = new VagaDao(db);
        vagaDao.valoresPorPeriodo().then(periodos => resp.marko(
            require('../views/vagas/lista/dados.marko'),
            {
                periodos: periodos
            })
        ).catch(erro => console.log(erro));
    });

    app.get('/vagas/form', function(req,resp){
        resp.marko(require('../views/vagas/form/form.marko'), { vaga: {}})
    });

    app.get('/vagas/form/:id', function(req, resp) {
        const id = req.params.id;
        const vagaDao = new VagaDao(db);
    
        vagaDao.buscaPorId(id)
            .then(vaga => 
                resp.marko(
                    require('../views/vagas/form/form.marko'),
                    { vaga: vaga }
                )
            )
            .catch(erro => console.log(erro));
    
    });

    app.post('/vagas', function(req,resp){
        console.log(req.body);
        const vagaDao = new VagaDao(db);
        vagaDao.adiciona(req.body)
            .then(resp.redirect('/vagas'))
            .catch(erro => console.log(erro));
    });

    app.put('/vagas', function(req,resp){
        console.log(req.body);
        const vagaDao = new VagaDao(db);
        vagaDao.atualiza(req.body)
            .then(resp.redirect('/vagas'))
            .catch(erro => console.log(erro));
        vagaDao.alteraValorPerdido(req.body.id);
    });

    app.delete('/vagas/:id', function(req,resp){
        const id = req.params.id;
        const vagaDao = new VagaDao(db);
        vagaDao.remove(id)
        .then(()=> resp.status(200).end())
        .catch(erro => console.log(erro));
    });
}
        
