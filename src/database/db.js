const Database = require('sqlite-async')

function execute (db){ //recebe do then algo relacionado ao banco de dados
    // CRIANDO AS TABELAS DO BANCO DE DADOS - SQL BANCO DE DADOS RELACIONAL (EXEMPLO: TODO PROFESSOR TEM AULAS E TODA AULA TEM HORA)
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );
        
        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id iNTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)//o data base é o banco de dados como ele pode demorar um pouco para abrir usa-se o then(então) nesse caso vou executar uma função (execute)
