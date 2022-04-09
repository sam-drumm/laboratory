const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select(
      'id',
      'email',
      'first_name as firstName',
      'last_name as lastName',
      'auth0_id as auth0Id'
    )
}

function getUsersByAuth (auth0Id, db = connection) {
  return db('users')
    .select(
      'id',
      'email',
      'first_name as firstName',
      'last_name as lastName',
      'auth0_id as auth0Id'
    )
    .where('auth0_id', auth0Id)
    .first()
}

function createUser (user, db = connection) {
  return userExists(user.auth0Id, db)
    .then((exists) => {
      if (exists) {
        throw new Error('User exists')
      }
      return false
    })
    .then(() => {
      return db('users').insert({
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        auth0_id: user.auth0Id
      })
    })
}

function userExists (uid, db = connection) {
  return db('users')
    .count('id as n')
    .where('auth0_id', uid)
    .then((count) => {
      return count[0].n > 0
    })
}

function addUser (input, db = connection) {
  const { auth0Id, firstName, lastName, email } = input
  const user = { auth0_id: auth0Id, first_name: firstName, last_name: lastName, email }
  return db('users')
    .insert(user)
}

function getUserById (id, db = connection) {
  return db('users')
    .select('id', 'auth0_id as auth0Id', 'email', 'first_name as firstName', 'last_name as lastName')
    .where('id', id)
    .first()
}

module.exports = {
  getUsers,
  addUser,
  getUserById,
  createUser,
  getUsersByAuth
}
