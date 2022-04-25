exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('hash')
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
  }
  )
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
