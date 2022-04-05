exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          user_name: 'kelmarna',
          first_name: 'sandy',
          surname: 'bojangles',
          email: 'kelmarna@email.nz'
        },
        {
          id: 2,
          auth0_id: 'auth0|98414f84d35ac900717bc280',
          user_name: 'donna',
          first_name: 'watch',
          surname: 'butachican',
          email: 'peach@email.nz'
        },
        {
          id: 3,
          auth0_id: 'auth0|09414f84d35ac900717bc280',
          user_name: 'keiligh',
          first_name: 'kelly',
          surname: 'europa',
          email: 'kelly@email.nz'
        },
        {
          id: 4,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          user_name: 'joecamel',
          first_name: 'joe',
          surname: 'smoking',
          email: 'joe@camel.usa'
        }
      ])
    })
}
