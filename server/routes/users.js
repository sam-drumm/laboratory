const express = require('express')
// const jwtAuthz = require('express-jwt-authz')
const {
  getUserRoles
  // checkJwt
} = require('../auth0')

const db = require('../db/users')
const router = express.Router()

// middleware for checking permissions (authorization)
// const checkAdmin = jwtAuthz(['read:my_private_route'], { customScopeKey: 'permissions' })

// POST /api/v1/users/protected
router.post('/', async (req, res) => {
  const { auth0Id, userName, firstName, lastName, email } = req.body
  const user = { auth0Id, userName, firstName, lastName, email }

  try {
    // await db.addUser(user)
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

// GET /api/v1/users/
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
