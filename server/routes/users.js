const express = require('express')
const { getUserRoles } = require('../auth0')
const db = require('../db/users')
const router = express.Router()

router.patch('/', async (req, res) => {
  const {
    auth0Id,
    firstName,
    lastName,
    email,
    streetNumber,
    street,
    locality,
    city,
    region,
    postcode,
    meshblock,
    lon,
    lat,
    formatted,
    following
  } = req.body

  const user = {
    auth0Id,
    firstName,
    lastName,
    email,
    streetNumber,
    street,
    locality,
    city,
    region,
    postcode,
    meshblock,
    lon,
    lat,
    formatted,
    following
  }

  try {
    await db.updateUser(user)
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({
      error: {
        title: 'failed to update user'
      }
    })
  }

  try {
    const addedUser = await db.getUsersByAuth(user.auth0Id)
    res.json(addedUser)
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({
      error: {
        title: 'failed to retrieve added user'
      }
    })
  }
})

router.post('/', async (req, res) => {
  const {
    auth0Id,
    firstName,
    lastName,
    email,
    streetNumber,
    street,
    locality,
    city,
    region,
    postcode,
    meshblock,
    lon,
    lat,
    formatted,
    following
  } = req.body

  const user = {
    auth0Id,
    firstName,
    lastName,
    email,
    streetNumber,
    street,
    locality,
    city,
    region,
    postcode,
    meshblock,
    lon,
    lat,
    formatted,
    following
  }

  try {
    await db.createUser(user)
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({
      error: {
        title: 'failed: user exists'
      }
    })
  }

  try {
    const addedUser = await db.getUsersByAuth(user.auth0Id)
    res.json(addedUser)
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({
      error: {
        title: 'failed to retrieve added user'
      }
    })
  }
})

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({ users })
      return null
    })
    .catch(err => {
      console.error(err)
      return res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/users/auth0|12334
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const isAdmin = await getUserRoles(id)
    const user = await db.getUsersByAuth(id)
    res.json({ ...user, isAdmin })
    return null
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({
      error: {
        title: 'failed to retrieve user'
      }
    })
  }
})

module.exports = router
