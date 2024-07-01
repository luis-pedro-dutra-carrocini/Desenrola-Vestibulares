const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'test_user',
  password: 'test_password',
  database: 'bd_enem',
  port: 3312
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});
