const express = require('express')

//criando as rotas e estabelecendo seus controllers
const routes = express.Router()


const EmpresaController = require('./controllers/EmpresaController')
const FuncionarioController = require('./controllers/FuncionarioController')



routes.get('/empresa', EmpresaController.index)

routes.post('/funcionario', FuncionarioController.createfun)

module.exports = routes