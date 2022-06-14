exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id')
    table.string('project_title')
    table.string('category')
    table.string('region')
    table.string('description', 1000)
    table.string('success', 1000)
    table.string('seeking')
    table.string('started')
    table.specificType('skill_type', 'integer ARRAY')
    table.string('skill_description', 1000)
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
