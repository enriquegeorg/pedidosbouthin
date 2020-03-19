const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome_completo, 
    email,
    senha
) SELECT 'Enrique Georg', 'enriquegeorg@gmail.com.br', '123' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'enriquegeorg@gmail.com.br')
`;

const VAGAS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS vagas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    candidate TEXT NOT NULL,
    client_id TEXT NOT NULL,
    eventtype TEXT NOT NULL,
    process_id TEXT NOT NULL,
    dt_event DATETIME NOT NULL,
    job_type TEXT NOT NULL,
    value REAL,
    lost_value REAL,
    refund_reason TEXT,
    billed_by TEXT,
    periodo_cobranca DATE
)
`;

const EMPRESAS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS empresas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    razaosocial TEXT NOT NULL,
    nomefantasia TEXT,
    cnpj TEXT NOT NULL,
    ie TEXT,
    im TEXT,
    cep TEXT,
    endereco TEXT,
    bairro TEXT,
    cidade TEXT,
    telefone1 TEXT,
    telefone2 TEXT,
    email TEXT,
    situacaocadastral TEXT
)
`;
const INSERIR_EMPRESA_1 = 
`
INSERT INTO empresas(razaosocial,cnpj) 
SELECT 'Sr. Bouthin', '33999333999' WHERE NOT EXISTS (SELECT * FROM empresas WHERE razaosocial = 'Sr. Bouthin')
`;
const PRODUTOS_SCHEMA = 
`CREATE TABLE IF NOT EXISTS produtos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL, 
    valor REAL
)
`;
const PEDIDOS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idempresa INTEGER NOT NULL,
    produtos TEXT NOT NULL,
    valor REAL,
    desconto REAL,
    vendedor TEXT,
    datacriacao CURRENT_TIMESTAMP,
    dataentrega DATE,
    situacao  TEXT,
    FOREIGN KEY(idempresa) REFERENCES empresas(id)
)
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    // bd.run(VAGAS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(EMPRESAS_SCHEMA);
    bd.run(INSERIR_EMPRESA_1);
    bd.run(PRODUTOS_SCHEMA);
    bd.run(PEDIDOS_SCHEMA);


    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;