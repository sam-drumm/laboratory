const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select(
      // 'id',
      'auth0_id as auth0Id',
      'email',
      'first_name as firstName',
      'last_name as lastName',
      'street_number as streetNumber',
      'street',
      'locality',
      'city',
      'region',
      'postcode',
      'meshblock',
      'lon',
      'lat',
      'formatted',
      'following'
    )
}

function getUsersByAuth (auth0Id, db = connection) {
  return db('users')
    .select(
      // 'id',
      'auth0_id as auth0Id',
      'email',
      'first_name as firstName',
      'last_name as lastName',
      'street_number as streetNumber',
      'street',
      'locality',
      'city',
      'region',
      'postcode',
      'meshblock',
      'lon',
      'lat',
      'formatted',
      'following'
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
        auth0_id: user.auth0Id,
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        street_number: user.streetNumber,
        street: user.street,
        locality: user.locality,
        city: user.city,
        region: user.region,
        postcode: user.postcode,
        meshblock: user.meshblock,
        lon: user.lon,
        lat: user.lat,
        formatted: user.formatted,
        following: user.following
      })
    })
}

function updateUser (user, db = connection) {
  return db('users')
    .where('auth0_id', user.auth0Id)
    .update({
      auth0_id: user.auth0Id,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      street_number: user.streetNumber,
      street: user.street,
      locality: user.locality,
      city: user.city,
      region: user.region,
      postcode: user.postcode,
      meshblock: user.meshblock,
      lon: user.lon,
      lat: user.lat,
      formatted: user.formatted,
      following: user.following
    })
    .then(() => getUsersByAuth(user.auth0Id, db))
}

function userExists (uid, db = connection) {
  return db('users')
    .count('auth0_id as n')
    .where('auth0_id', uid)
    .then((count) => {
      return count[0].n > 0
    })
}

module.exports = {
  getUsers,
  createUser,
  getUsersByAuth,
  updateUser
}
