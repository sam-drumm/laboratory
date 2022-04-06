exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.string('auth0_id').primary()
    // table.increments('id')
    table.string('user_name')
    table.string('first_name')
    table.string('surname')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
