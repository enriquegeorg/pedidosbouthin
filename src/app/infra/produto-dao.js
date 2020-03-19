class ProdutoDao {

    constructor(db) {
        this._db = db;
    }
    adiciona(produto){ 
        return new Promise((resolve, reject) => {
            this._db.run(
            `INSERT INTO produtos (
                descricao,
                valor
            ) VALUES (?,?)`
            ,[
                produto.descricao,
                produto.valor,
            ],
            function(err) {
                if(err) {
                    console.log(err);
                    return reject('Não foi possível adicionar a produto');
                }
                resolve();
            }
            )
        });
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM produtos',
                (erro,resultados) => {
                   if (erro) return reject('Não foi possível listar as produtos');
                   
                   return resolve(resultados);
                }
            )
        });
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM produtos
                    WHERE id = ?
                `,
                [id],
                (erro, produto) => {
                    if (erro) {
                        return reject('Não foi possível encontrar a produto!');
                    }
                    return resolve(produto);
                }
            );
        });
    }

    atualiza(produto) {
        return new Promise((resolve, reject) => {
            console.log(produto.id);
            debugger;
            this._db.run(`
                UPDATE produtos SET
                descricao = ?,
                valor = ?
                WHERE id = ? 
            `,
            [
                produto.descricao,
                produto.valor,
                produto.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar a produto!');
                }

                resolve();
            });
        });
    }

    remove(id) {

    return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE 
                    FROM produtos
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover a produto!');
                    }
                    return resolve();
            });
        });
    }
}

module.exports = ProdutoDao;