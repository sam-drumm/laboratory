exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id')
    table.text('project_title')
    table.string('category')
    table.string('region')
    table.text('description')
    table.text('success')
    table.string('seeking')
    table.string('started')
    table.specificType('skill_type', 'integer ARRAY')
    table.text('skill_description')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
