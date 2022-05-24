exports.up = function (knex) {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary()
    table.string('project_id').references('projects.id')
    table.string('auth0_id').references('users.hash')
    table.string('why')
    table.string('bring')
    table.string('share')
  })
}

exports.down = function (knex) {

}
