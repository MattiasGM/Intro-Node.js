
const express = require("express");

const app = express()

//conexao com BD MySQL
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
})

let dados = []

//connection
connection.connect((err) => {
    return err ? console.error('error conection: ' + err.stack) : console.log('connection as id: ' + connection.threadId)
})

//Inserir novos dados da tabela
connection.query("DELETE FROM cadastros WHERE nome='alguem'", (err, result) => {
    return err ? console.log('Erro ao inserir dados') : console.log('Cadastro realiazado com sucesso!')
})

//Sucess connection -- exibir dados salvos >
connection.query('SELECT * FROM cadastros', (err, rows, fields) => {
    return !err ? consultDados(rows) : console.log('Nenhum resultado encontrado')
})
//Consultar dados
const consultDados = (rows) => {
    dados = [...rows]
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3001)

module.exports = consultDados