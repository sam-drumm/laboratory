const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select('id',
      'auth0_id as auth0Id',
      'user_name as userName',
      'first_name as firstName',
      'surname',
      'email'
    )
}

function addUser (input, db = connection) {
  const { auth0Id, userName, firstName, surname, email } = input
  const user = { auth0_id: auth0Id, user_name: userName, first_name: firstName, surname, email }
  return db('users')
    .insert(user)
}

module.exports = {
  getUsers,
  addUser
}
