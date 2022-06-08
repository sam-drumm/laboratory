exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.string('hash')
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('street_number')
    table.string('street')
    table.string('locality')
    table.string('city')
    table.string('region')
    table.string('postcode')
    table.string('meshblock')
    table.float('lon')
    table.float('lat')
    table.string('formatted')
    table.specificType('following', 'integer ARRAY')
  }
  )
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
