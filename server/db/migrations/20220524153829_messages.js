exports.up = function (knex) {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary()
    table.string('why', 1000)
    table.string('bring', 1000)
    table.string('share', 1000)
    table.integer('project_id').references('projects.id')
    table.string('auth0_id').references('users.auth0_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('messages')
}
