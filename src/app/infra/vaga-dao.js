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

    valoresPorPeriodo(){
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                SELECT 
                strftime('%Y-%m', periodo_cobranca) as periodo, 
                printf("%.2f", SUM(value)) as total_valor, 
                printf("%.2f", SUM(lost_value)) as total_valor_perdido 
                FROM vagas GROUP BY strftime('%Y-%m', periodo_cobranca)
                `
                ,
                (erro,resultados) => {
                   if (erro) return reject('Não foi possível calcular valores por periodo');
                   
                   return resolve(resultados);
                }
            )
        });
    }
    candidadosMaisRejeitados(){
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                SELECT candidate AS nome_candidato, 
                count(candidate) as qtd_rejeicoes 
                FROM vagas 
                WHERE eventtype='CANDIDATE_SENT' AND lost_value > 0 
                GROUP BY nome_candidato 
                HAVING count(nome_candidato) > 1 
                ORDER BY qtd_rejeicoes DESC LIMIT 10
                `
                ,
                (erro,resultados) => {
                   if (erro) return reject('Não foi possível verificar quais foram os candidados mais rejeitados');
                   
                   return resolve(resultados);
                }
            )
        });
    }
    clienteQueMaisRejeitam(){
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                SELECT client_id AS nome_cliente, 
                count(client_id) as qtd_rejeicoes 
                FROM vagas 
                WHERE eventtype='CANDIDATE_SENT' AND lost_value > 0 
                GROUP BY nome_cliente 
                HAVING count(nome_cliente) > 1 
                ORDER BY qtd_rejeicoes DESC LIMIT 10
                `
                ,
                (erro,resultados) => {
                   if (erro) return reject('Não foi possível encontrar os clientes que mais rejeitam candidatos');
                   
                   return resolve(resultados);
                }
            )
        });
    }
    clienteRecusaramTodos(){
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                SELECT v2.client_id as clientes_recusaram_todos, 
                count(v2.client_id) as qtd_rejeicoes
                FROM (SELECT client_id FROM vagas WHERE eventtype='CANDIDATE_SENT' AND lost_value > 0 GROUP BY client_id HAVING count(client_id) > 0 ORDER BY count(client_id) DESC) as v2
                INNER JOIN vagas as v
                WHERE v.client_id=v2.client_id AND v.eventtype='CANDIDATE_APPROVED' 
                GROUP BY v.client_id HAVING count(v.client_id) < 1 
                `
                ,
                (erro,resultados) => {
                   if (erro) return reject('Não foi possível encontrar os clientes que rejeitam todos os candidatos');
                   
                   return resolve(resultados);
                }
            )
        });
    }
}

module.exports = VagaDao;