
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('empresa').del()
    .then(function () {
      // Inserts seed entries
      return knex('empresa').insert([
        {
           razao_social: 'selia',
          cnpj: '11.111.111/0002-11'
        },
        {
           razao_social: 'google',
           cnpj: '12.111.111/0002-11' 
         },
      ]);
    });
};
