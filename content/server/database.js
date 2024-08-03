const mysql = require("mysql")

//Conectar com o banco de dados
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'aniversariantes',
    user: 'root',
    password: ''
})

//Exportar a conexão para que ela possa ser utilizada em outros arquivos do projeto usando require()
module.exports = connection
