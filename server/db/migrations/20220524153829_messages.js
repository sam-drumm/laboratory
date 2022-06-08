exports.up = function (knex) {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary()
    table.string('project_id').nullable()
    table.string('auth0_id').nullable()
    table.string('why')
    table.string('bring')
    table.string('share')

    table.foreign('project_id').references('projects.id')
    table.foreign('auth0_id').references('users.auth0_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('messages')
}
