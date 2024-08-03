const express = require("express")
const app = express()
const connection = require('./content/server/database') //Requisitar a variável connection do arquivo de conexão database.js
const path = require('path')
const port = 3000 //Definir a porta

//Ler o corpo da requisição em .json
app.use(express.urlencoded({extended: true,}))
app.use(express.json())

//Definir a página inicial do servidor como index.html
app.get('/', function(req, res){
    res.sendFile(__dirname + '/content/views/index.html')
})

//Definir a URL da página de cadastro
app.get('/cadastro', function(req,res){
    res.sendFile(__dirname + '/content/views/cadastro.html')
})

//POST
app.post('/cadastro/save', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const dataNasc = req.body.dataNasc

    const query = `INSERT INTO cadastro (nome, email, dataNasc) VALUES('${nome}', '${email}', '${dataNasc}')`

    connection.query(query, function(err) {
        if(err){
            throw err
        }else{
            res.redirect('/cadastro')
        }
    })
})

//Criar um middleware que serve arquivos estáticos (imagens, CSS e JavaScript)
app.use(express.static('content'))

//Conectar o banco de dados ao servidor na porta definida
app.listen(port, function(){
    console.log(`Aplicação ativa na porta ${port}`)
    connection.connect(function(error){
        if(error){
            throw error
        }else{
           console.log('Banco de dados conectado!') //testar conexão 
        }
    })
})