class PedidoDao {

    constructor(db) {
        this._db = db;
    }
    adiciona(pedido){ 
        return new Promise((resolve, reject) => {
            this._db.run(
            `INSERT INTO pedidos (
                idempresa,
                produtos,
                valor,
                desconto,
                vendedor,
                dataentrega,
                situacao,
            ) VALUES (?,?,?,?,?,?,?)`
            ,[
                pedido.idempresa,
                pedido.produtos,
                pedido.valor,
                pedido.desconto,
                pedido.vendedor,
                pedido.dataentrega,
                pedido.situacao
            ],
            function(err) {
                if(err) {
                    console.log(err);
                    return reject('Não foi possível adicionar a pedido');
                }
                resolve();
            }
            )
        });
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM pedidos',
                (erro,resultados) => {
                   if (erro) return reject('Não foi possível listar as pedidos');
                   
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
                    FROM pedidos
                    WHERE id = ?
                `,
                [id],
                (erro, pedido) => {
                    if (erro) {
                        return reject('Não foi possível encontrar a pedido!');
                    }
                    return resolve(pedido);
                }
            );
        });
    }

    atualiza(pedido) {
        return new Promise((resolve, reject) => {
            console.log(pedido.id);
            debugger;
            this._db.run(`
                UPDATE pedidos SET
                idempresa = ?,
                produtos = ?,
                valor = ?,
                desconto = ?,
                vendedor = ?,
                dataentrega = ?,
                situacao = ?,
                WHERE id = ? 
            `,
            [
                pedido.idempresa,
                pedido.produtos,
                pedido.valor,
                pedido.desconto,
                pedido.vendedor,
                pedido.dataentrega,
                pedido.situacao,
                pedido.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar a pedido!');
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
                    FROM pedidos
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover a pedido!');
                    }
                    return resolve();
            });
        });
    }
}

module.exports = PedidoDao;