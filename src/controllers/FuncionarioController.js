//se conectando a database
const knex = require('../database')

//tratamento da rota /funcionario
module.exports = {
    async createfun(req, res, next) {
        try {
            //atribuindo as variaveis do corpo da requisição
            let { razao_social, cnpj, nome, cpf, salario } = req.body
            //buscando na database se existe o cnpj enviado pelo cliente
            const e = await knex('empresa').where({ 'cnpj': cnpj }).first()
            let e_id
            //se nao existir insira a empresa na database
            if (!e) {
                await knex('empresa').insert({
                    razao_social,
                    cnpj
                })
            } else {
                //se existir a empresa na database, armazenar seu id em memoria
                e_id = e.id
            }
            //buscando na database se existe o cpf enviado pelo cliente
            const f = await knex('funcionario').where({ 'cpf': cpf }).first()
            //se nao existir insira o funcionario na database
            if (!f) {
                await knex('funcionario').insert({
                    nome,
                    cpf,
                    salario,
                    empresa_id: e_id
                    

                })
                return res.status(201).json({ message: 'Funcionario cadastrado com Sucesso' })
            }else{
                return res.status(400).json({ message: 'Cpf já cadastrado'})
            }



            

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'erro nao previsto' })
        }
    }
}