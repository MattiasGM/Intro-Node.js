
const express = require("express");

const app = express()

//conexao com BD MySQL
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})

let dados = []

//connection
connection.connect((err) => {
    return err ? console.error('error conection: ' + err.stack) : console.log('connection as id: ' + connection.threadId)
})

//Inserir novos dados da tabela //Para deletar usar "DELETE FROM cadastros WHERE nome='alguem'"

const submitForm = (firstName, lastName, email, password) => {
    let insert = `INSERT INTO cadastros (firstName, lasName, email, password) VALUES ('a','s','d','v')`
    connection.query(insert, (err, result) => {
        return err ? console.log('Erro ao inserir dados') : console.log('Cadastro realiazado com sucesso!')
    })
}

//Sucess connection -- exibir dados salvos >
connection.query('SELECT * FROM cadastros', (err, rows, fields) => {
    return !err ? consultDados(rows) : console.log('Nenhum resultado encontrado')
})
//Consultar dados
const consultDados = (rows) => {
    dados = [...rows]
    console.log(dados)
}

app.listen(3001)

module.exports = submitForm