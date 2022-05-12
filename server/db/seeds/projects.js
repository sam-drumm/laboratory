const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../../.env') })

exports.seed = function (knex) {
  return knex('projects')
    .del()
    .then(() =>
      knex('projects').insert([
        {
          id: 1,
          auth0_id: 'auth0|djf9asdf0as9',
          category: 1,
          project_title: 'Build a community Garden',
          description: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          seeking: 'dsfdsijf',
          success: 'fun',
          started: 'sdfljs',
          skill_type: [2, 19],
          skill_description: 'dfljasdofi',
          region: 9
        },
        {
          id: 2,
          category: 2,
          auth0_id: 'auth0|oujasdi0324975',
          project_title: 'Create an app to help identify bad landlords',
          description: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          seeking: 'slkfns',
          success: 'community',
          started: 'smfnsk',
          skill_type: [10, 18, 1, 6, 8],
          skill_description: 'sfnsj',
          region: 49

        },
        {
          id: 3,
          auth0_id: 'auth0|jfkd043897um',
          category: 3,
          project_title: 'Start a local kombuthca brand',
          description: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          seeking: 'slfdsfdsijf',
          success: 'commerical',
          started: 'sdsldkfjsfljs',
          skill_type: [10, 13],
          skill_description: 'fdsijosi',
          region: 48

        },
        {
          id: 4,
          auth0_id: 'auth0|mopiw032m',
          category: 1,
          project_title: 'Sell widgets at the local market',
          description: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
          seeking: 'gkastj',
          success: 'commerical',
          started: 'stuhwtwothw',
          skill_type: [17, 2, 5, 1],
          skill_description: 'odsifjdoifj',
          region: 54

        },
        {
          id: 5,
          auth0_id: 'auth0|fdk098d0',
          category: 2,
          project_title: 'Create a local tool sharing system',
          description: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
          seeking: 'gkastj',
          success: 'community',
          started: 'stuhwtwothw',
          skill_type: [10, 3, 11, 1],
          skill_description: 'odsifjdoifj',
          region: 17

        },
        {
          id: 6,
          auth0_id: 'auth0|uyirwo8wr72j',
          category: 3,
          project_title: 'Paint a mural on the side of Krd',
          description: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
          seeking: 'gkastj',
          success: 'fun',
          started: 'stuhwtwothw',
          skill_type: [10, 13, 1, 7, 19],
          skill_description: 'odsifjdoifj',
          region: 1

        },
        {
          id: 7,
          auth0_id: 'auth0|qvnsi08932n',
          category: 1,
          project_title: 'Start a dancing in the dark chapter',
          description: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
          seeking: 'gkastj',
          success: 'fun',
          started: 'stuhwtwothw',
          skill_type: [1, 2, 4, 6, 13],
          skill_description: 'odsifjdoifj',
          region: 23

        },
        {
          id: 8,
          auth0_id: 'auth0|ocvshgf99',
          category: 2,
          project_title: 'Offer free after-school tuition club',
          description: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
          seeking: 'gkastj',
          success: 'community',
          started: 'stuhwtwothw',
          skill_type: [10, 13, 11, 1, 9],
          skill_description: 'odsifjdoifj',
          region: 87

        },
        {
          id: 9,
          auth0_id: 'auth0|bjxliaufg893420',
          category: 3,
          project_title: 'Build a local movement to overthrow the Torys',
          description: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
          seeking: 'gkastj',
          success: 'community',
          started: 'stuhwtwothw',
          skill_type: [9, 10, 12, 16],
          skill_description: 'odsifjdoifj',
          region: 32

        },
        {
          id: 10,
          auth0_id: 'auth0|vbjkfd0089asdf',
          category: 1,
          project_title: 'Make a custom doorbell prototype',
          description: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
          seeking: 'gkastj',
          success: 'commerical',
          started: 'stuhwtwothw',
          skill_type: [4, 7],
          skill_description: 'odsifjdoifj',
          region: 1

        },
        {
          id: 11,
          auth0_id: 'auth0|oiudfa97897',
          category: 2,
          project_title: 'Start a rap night',
          description: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
          seeking: 'gkastj',
          success: 'fun',
          started: 'stuhwtwothw',
          skill_type: [5, 19],
          skill_description: 'odsifjdoifj',
          region: 43

        },
        {
          id: 12,
          auth0_id: 'auth0|lakfua9a9f89a8',
          category: 3,
          project_title: 'Get drunk in the park with friends',
          description: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio',
          seeking: 'gkastj',
          success: 'fun',
          started: 'stuhwtwothw',
          skill_type: [11, 14],
          skill_description: 'odsifjdoifj',
          region: 32

        },
        {
          id: 13,
          auth0_id: 'auth0|oiuafoiu9789',
          category: 1,
          project_title: 'Build a local electric scooter',
          description: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
          seeking: 'gkastj',
          success: 'commerical',
          started: 'stuhwtwothw',
          skill_type: [1, 3],
          skill_description: 'odsifjdoifj',
          region: 88
        }
      ])
    )
}
