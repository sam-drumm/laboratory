exports.up = function (knex) {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary()
    table.text('why')
    table.text('bring')
    table.text('share')
    table.integer('project_id').references('projects.id')
    table.text('auth0_id').references('users.auth0_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('messages')
}
