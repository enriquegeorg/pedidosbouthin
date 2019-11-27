class VagaDao {

    constructor(db) {
        this._db = db;
    }
    adiciona(vaga){ 
        return new Promise((resolve, reject) => {
            this._db.run(
            `INSERT INTO vagas (
                job_type,
                client_id,
                candidate,
                value
            ) VALUES (?,?,?,?)`
            ,[
                vaga.job_type,
                vaga.client_id,
                vaga.candidate,
                vaga.value
            ],
            function(err) {
                if(err) {
                    console.log(err);
                    return reject('Não foi possível adicionar a vaga');
                }
                resolve();
            }
            )
        });
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM vagas',
                (erro,resultados) => {
                   if (erro) return reject('Não foi possível listar as vagas');
                   
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
                    FROM vagas
                    WHERE id = ?
                `,
                [id],
                (erro, vaga) => {
                    if (erro) {
                        return reject('Não foi possível encontrar a vaga!');
                    }
                    return resolve(vaga);
                }
            );
        });
    }

    atualiza(vaga) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE vagas SET
                refund_reason = ?,
                billed_by = ?,
                WHERE id = ? 
            `,
            [
                vaga.refund_reason,
                vaga.billed_by,
                vaga.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar a vaga!');
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
                    FROM vagas
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover a vaga!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = VagaDao;