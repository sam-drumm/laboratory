const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../../.env') })

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          project_id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          why: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique eget enim ut sagittis. Proin vitae mattis diam. Quisque quis mi a lorem porta tincidunt. Curabitur lacinia magna nisi, vitae condimentum massa gravida sed.',
          bring: 'Proin bibendum imperdiet nisl non pharetra. Praesent sit amet ante sodales orci maximus bibendum. Nulla auctor nec dui sed suscipit. Ut aliquet viverra odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          share: 'Maecenas egestas, quam sit amet finibus faucibus, ligula felis gravida justo, et suscipit neque magna id lorem. Nulla venenatis consequat elit eget rutrum.'
        },
        {
          id: 2,
          project_id: 1,
          auth0_id: 'auth0|98414f84d35ac900717bc280',
          why: 'Maecenas egestas, quam sit amet finibus faucibus, ligula felis gravida justo, et suscipit neque magna id lorem. Nulla venenatis consequat elit eget rutrum. Donec accumsan, libero et convallis blandit, lacus diam ultricies orci, in vulputate libero leo in sapien.',
          bring: 'Proin bibendum imperdiet nisl non pharetra. Praesent sit amet ante sodales orci maximus bibendum. Nulla auctor nec dui sed suscipit. Ut aliquet viverra odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          share: 'Donec finibus ex et fringilla porta. Praesent aliquam, libero id posuere lacinia, nibh felis blandit diam, a ornare augue lectus sit amet metus. Fusce aliquet pellentesque ornare. Vivamus tempor turpis ut dui lobortis, quis malesuada elit fringilla.'
        },
        {
          id: 3,
          project_id: 2,
          auth0_id: 'auth0|09414f84d35ac900717bc280',
          why: 'Maecenas egestas, quam sit amet finibus faucibus, ligula felis gravida justo, et suscipit neque magna id lorem. Nulla venenatis consequat elit eget rutrum. Donec accumsan, libero et convallis blandit, lacus diam ultricies orci, in vulputate libero leo in sapien.',
          bring: 'Proin bibendum imperdiet nisl non pharetra. Praesent sit amet ante sodales orci maximus bibendum. Nulla auctor nec dui sed suscipit. Ut aliquet viverra odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          share: 'Donec finibus ex et fringilla porta. Praesent aliquam, libero id posuere lacinia, nibh felis blandit diam, a ornare augue lectus sit amet metus. Fusce aliquet pellentesque ornare. Vivamus tempor turpis ut dui lobortis, quis malesuada elit fringilla.'
        },
        {
          id: 4,
          project_id: 2,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          why: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique eget enim ut sagittis. Proin vitae mattis diam. Quisque quis mi a lorem porta tincidunt. Curabitur lacinia magna nisi, vitae condimentum massa gravida sed. Mauris vel odio mollis, volutpat tortor nec, commodo ex. Maecenas fermentum id massa a tempus. Vivamus sapien sem, faucibus sed convallis sed, lacinia sagittis metus. Ut vel ultrices ante, eget maximus odio. Sed ac pwhyharetra purus. ',
          bring: ' Proin bibendum imperdiet nisl non pharetra. Praesent sit amet ante sodales orci maximus bibendum. Nulla auctor nec dui sed suscipit. Ut aliquet viverra odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sed iaculis lorem. Sed facilisis semper ligula id pulvinar. Duis et molestie sem. Mauris gravida, purus quis ullamcorper egestas, purus lacus suscipit magna, in accumsan augue neque suscipit enim. Vestibulum a consectetur erat. ',
          share: ' Maecenas egestas, quam sit amet finibus faucibus, ligula felis gravida justo, et suscipit neque magna id lorem. Nulla venenatis consequat elit eget rutrum. Donec accumsan, libero et convallis blandit, lacus diam ultricies orci, in vulputate libero leo in sapien. Integer condimentum risus in ante dignissim, sed ultrices orci vehicula. Praesent porta quam vitae massa aliquam tristique. Aliquam ornare tempor vehicula. Quisque aliquam sapien posuere efficitur suscipit. Quisque lobortis ultricies magna, quis finibus dolor eleifend cursus. '
        },
        {
          id: 5,
          project_id: 3,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          why: 'Maecenas egestas, quam sit amet finibus faucibus, ligula felis gravida justo, et suscipit neque magna id lorem. Nulla venenatis consequat elit eget rutrum. Donec accumsan, libero et convallis blandit, lacus diam ultricies orci, in vulputate libero leo in sapien.',
          bring: 'Proin bibendum imperdiet nisl non pharetra. Praesent sit amet ante sodales orci maximus bibendum. Nulla auctor nec dui sed suscipit. Ut aliquet viverra odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          share: 'Donec finibus ex et fringilla porta. Praesent aliquam, libero id posuere lacinia, nibh felis blandit diam, a ornare augue lectus sit amet metus. Fusce aliquet pellentesque ornare. Vivamus tempor turpis ut dui lobortis, quis malesuada elit fringilla.'
        },
        {
          id: 6,
          project_id: 4,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          why: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique eget enim ut sagittis. Proin vitae mattis diam. Quisque quis mi a lorem porta tincidunt. Curabitur lacinia magna nisi, vitae condimentum massa gravida sed. Mauris vel odio mollis, volutpat tortor nec, commodo ex. Maecenas fermentum id massa a tempus. Vivamus sapien sem, faucibus sed convallis sed, lacinia sagittis metus. Ut vel ultrices ante, eget maximus odio. Sed ac pharetra purus. ',
          bring: 'Proin bibendum imperdiet nisl non pharetra. Praesent sit amet ante sodales orci maximus bibendum. Nulla auctor nec dui sed suscipit. Ut aliquet viverra odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sed iaculis lorem. Sed facilisis semper ligula id pulvinar. Duis et molestie sem. Mauris gravida, purus quis ullamcorper egestas, purus lacus suscipit magna, in accumsan augue neque suscipit enim. Vestibulum a consectetur erat. ',
          share: 'Maecenas egestas, quam sit amet finibus faucibus, ligula felis gravida justo, et suscipit neque magna id lorem. Nulla venenatis consequat elit eget rutrum. Donec accumsan, libero et convallis blandit, lacus diam ultricies orci, in vulputate libero leo in sapien. Integer condimentum risus in ante dignissim, sed ultrices orci vehicula. Praesent porta quam vitae massa aliquam tristique. Aliquam ornare tempor vehicula. Quisque aliquam sapien posuere efficitur suscipit. Quisque lobortis ultricies magna, quis finibus dolor eleifend cursus.'
        }
      ])
    })
}
