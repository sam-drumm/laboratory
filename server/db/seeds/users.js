const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../../.env') })

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          first_name: 'sandy',
          last_name: 'bojangles',
          email: 'kelmarna@email.nz',
          street_number: '102',
          street: 'Metehau Street',
          locality: 'Marshland',
          city: 'Christchurch',
          region: 'Canterbury',
          postcode: '8083',
          meshblock: '4009482',
          lon: 172.664203,
          lat: -43.465657,
          following: [1, 2],
          formatted: '102 Metehau Street, Marshland, Christchurch'
        },
        {
          id: 2,
          auth0_id: 'auth0|98414f84d35ac900717bc280',
          first_name: 'watch',
          last_name: 'butachican',
          email: 'peach@email.nz',
          street_number: '102',
          street: 'Marsden Avenue',
          locality: 'Mount Eden',
          city: 'Auckland',
          region: 'Auckland',
          postcode: '1024',
          meshblock: '0559001',
          lon: 174.749051,
          lat: -36.892524,
          following: [3, 4],
          formatted: '102 Marsden Avenue, Mount Eden, Auckland'
        },
        {
          id: 3,
          auth0_id: 'auth0|09414f84d35ac900717bc280',
          first_name: 'kelly',
          last_name: 'europa',
          email: 'kelly@email.nz',
          street_number: '102',
          street: 'Marsden Road',
          locality: 'Greymouth',
          city: 'Greymouth',
          region: 'West Coast',
          postcode: '7805',
          meshblock: '4005246',
          lon: 171.206931,
          lat: -42.467814,
          following: [5, 6],
          formatted: '102 Marsden Road, Greymouth'
        },
        {
          id: 4,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          first_name: 'joe',
          last_name: 'smoking',
          email: 'joe@camel.usa',
          street_number: '102',
          street: 'Marlborough Ridge Drive',
          locality: 'Fairhall',
          city: 'Fairhall',
          region: 'Marlborough',
          postcode: '7272',
          meshblock: '4016913',
          lon: 173.874434,
          lat: -41.537846,
          following: [7, 8],
          formatted: '102 Marlborough Ridge Drive, Fairhall'
        }
      ])
    )
}
