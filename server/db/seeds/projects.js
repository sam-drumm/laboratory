const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../../.env') })

exports.seed = function (knex) {
  return knex('projects')
    .del()
    .then(() =>
      knex('projects').insert([
        {
          id: 1,
          auth0_id: 'rowValue1',
          category: 13,
          description: 'saniutdy',
          seeking: 'dsfdsijf',
          purpose: 'tirtjwnlwemail.nz',
          started: 'sdfljs',
          skill_type: 'dfjasdkfj',
          skill_description: 'dfljasdofi'
        },
        {
          id: 2,
          category: 'fdsinf',
          auth0_id: 'rowValue1',
          description: 'slkfnjd',
          seeking: 'slkfns',
          purpose: 'fslkjfsnz',
          started: 'smfnsk',
          skill_type: 'fsmnkf',
          skill_description: 'sfnsj'
        },
        {
          id: 3,
          auth0_id: 'rowValue1',
          category: 'sfjns',
          description: 'skfjs',
          seeking: 'slfdsfdsijf',
          purpose: 'dsfslkdtirtjwnlwemail.nz',
          started: 'sdsldkfjsfljs',
          skill_type: 'dfjasdsifjsdijkfj',
          skill_description: 'fdsijosi'
        },
        {
          id: 4,
          auth0_id: 'rowValue1',
          category: 'fidjsaf',
          description: 'dskjfisdah',
          seeking: 'gkastj',
          purpose: 'ughweo',
          started: 'stuhwtwothw',
          skill_type: 'wjbtwo',
          skill_description: 'odsifjdoifj'
        }
      ])
    )
}
