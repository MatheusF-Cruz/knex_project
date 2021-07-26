//migration de criaçao da tabela funcionario e seus campos

exports.up = function(knex) {
    return knex.schema.createTable('funcionario', function(table){
        table.increments('id')
        table.string('nome', 45).notNullable()
        table.string('cpf', 45).notNullable().unique()
        table.decimal('salario', 8,2)
        table.integer('empresa_id').notNullable().unsigned()

        table.foreign('empresa_id').references('id').inTable('empresa')
    })
  };
  
  exports.down = knex => knex.schema.dropTable('funcionario')
