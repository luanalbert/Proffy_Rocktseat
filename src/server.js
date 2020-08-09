//Configurações do servidor
const express = require('express') //const contento a requisição importação do express
const server = express()

const {   
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configuração do servidor 

const nunjucks = require('nunjucks')// importação do nunjucks engine
//configurações do nunjucks
nunjucks.configure('src/views',{
    express: server, //express ja executando
    noCache: true, // desativação do cache
})
// configurar arquivos estáticos (css, scripts e imagens)
server
// recerber os dados do req.body
.use(express.urlencoded({ extended: true }))
// as estilização estão sendo trazidas aqui (CSS)
.use(express.static("public"))
 //rotas  da aplicação
.get("/",pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//porta 5500 start do servidor
.listen(5500)

