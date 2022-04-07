// const path = require('path')
// require('dotenv').config({ path: path.join(__dirname, '../../.env') })

exports.seed = function (knex) {
  return knex('users')
    .del() // Deletes ALL existing entries
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          first_name: 'sandy',
          last_name: 'bojangles',
          email: 'kelmarna@email.nz'
        },
        {
          id: 2,
          auth0_id: 'auth0|98414f84d35ac900717bc280',
          first_name: 'watch',
          last_name: 'butachican',
          email: 'peach@email.nz'
        },
        {
          id: 3,
          auth0_id: 'auth0|09414f84d35ac900717bc280',
          first_name: 'kelly',
          last_name: 'europa',
          email: 'kelly@email.nz'
        },
        {
          id: 4,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          first_name: 'joe',
          last_name: 'smoking',
          email: 'joe@camel.usa'
        }
      ])
    )
}
