exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.hash')
    table.string('category')
    table.string('description')
    table.string('seeking')
    table.string('purpose')
    table.string('started')
    table.string('skill_type')
    table.string('skill_description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
