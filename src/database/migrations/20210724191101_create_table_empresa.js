//migration de criaçao da tabela empresa e seus campos

exports.up = function(knex) {
    return knex.schema.createTable('empresa', function(table){
        table.increments('id')
        table.string('razao_social', 45).notNullable()
        table.string('cnpj', 45).notNullable().unique()
    })
  };
  
  exports.down = knex => knex.schema.dropTable('empresas')
