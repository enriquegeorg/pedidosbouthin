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
                value,
                refund_reason,
                billed_by,
                eventtype,
                lost_value
            ) VALUES (?,?,?,?,?,?,?,0)`
            ,[
                vaga.job_type,
                vaga.client_id,
                vaga.candidate,
                vaga.value,
                vaga.refund_reason,
                vaga.billed_by,
                vaga.eventtype,
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
            console.log(vaga.id);
            debugger;
            this._db.run(`
                UPDATE vagas SET
                job_type = ?,
                client_id = ?,
                candidate = ?,
                value = ?,
                refund_reason = ?,
                billed_by = ?,
                eventtype =?
                WHERE id = ? 
            `,
            [
                vaga.job_type,
                vaga.client_id,
                vaga.candidate,
                vaga.value,
                vaga.refund_reason,
                vaga.billed_by,
                vaga.eventtype,
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
            });
        });
    }

    alteraValorPerdido(id){
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                UPDATE vagas
                SET lost_value = CASE WHEN (refund_reason != '' AND value != '0') THEN value ELSE lost_value END,
                value= '0'
                WHERE ID = ?
                `, [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível alterar valor perdido!');
                    }
                    return resolve();
            });
        });
    }
}

module.exports = VagaDao;