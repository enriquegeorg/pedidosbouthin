class EmpresaDao {

    constructor(db) {
        this._db = db;
    }
    adiciona(empresa){ 
        return new Promise((resolve, reject) => {
            this._db.run(
            `INSERT INTO empresas (
                razaosocial,
                nomefantasia,
                cnpj,
                ie,
                im,
                cep,
                endereco,
                bairro,
                cidade,
                telefone1,
                telefone2,
                email,
                situacaocadastral
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`
            ,[
                empresa.razaosocial,
                empresa.nomefantasia,
                empresa.cnpj,
                empresa.ie,
                empresa.im,
                empresa.cep,
                empresa.endereco,
                empresa.bairro,
                empresa.cidade,
                empresa.telefone1,
                empresa.telefone2,
                empresa.email,
                empersa.situacaocadastral
            ],
            function(err) {
                if(err) {
                    console.log(err);
                    return reject('Não foi possível adicionar a empresa');
                }
                resolve();
            }
            )
        });
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM empresas',
                (erro,resultados) => {
                   if (erro) return reject('Não foi possível listar as empresas');
                   
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
                    FROM empresas
                    WHERE id = ?
                `,
                [id],
                (erro, empresa) => {
                    if (erro) {
                        return reject('Não foi possível encontrar a empresa!');
                    }
                    return resolve(empresa);
                }
            );
        });
    }

    atualiza(empresa) {
        return new Promise((resolve, reject) => {
            console.log(empresa.id);
            debugger;
            this._db.run(`
                UPDATE empresas SET
                razaosocial = ?,
                nomefantasia = ?,
                cnpj = ?,
                ie = ?,
                im = ?,
                cep = ?,
                endereco = ?,
                bairro = ?,
                cidade = ?,
                telefone1 = ?,
                telefone2 = ?,
                email = ?,
                situacaocadastral = ?
                WHERE id = ? 
            `,
            [
                empresa.razaosocial,
                empresa.nomefantasia,
                empresa.cnpj,
                empresa.ie,
                empresa.im,
                empresa.cep,
                empresa.endereco,
                empresa.bairro,
                empresa.cidade,
                empresa.telefone1,
                empresa.telefone2,
                empresa.email,
                empresa.situacaocadastral,
                empresa.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar a empresa!');
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
                    FROM empresas
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover a empresa!');
                    }
                    return resolve();
            });
        });
    }
}

module.exports = EmpresaDao;