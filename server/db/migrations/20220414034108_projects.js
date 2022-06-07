exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.string('hash').references('users.hash')
    table.string('project_title')
    table.string('category')
    table.string('region')
    table.string('description')
    table.string('success')
    table.string('seeking')
    table.string('started')
    table.specificType('skill_type', 'integer ARRAY')
    table.string('skill_description')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
