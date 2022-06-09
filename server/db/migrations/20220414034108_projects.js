exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id')
    table.string('project_title')
    table.string('category')
    table.string('region')
    table.string('description', 2500)
    table.string('success', 2500)
    table.string('seeking', 2500)
    table.string('started')
    table.specificType('skill_type', 'integer ARRAY')
    table.string('skill_description', 2500)
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
