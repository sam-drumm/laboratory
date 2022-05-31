const express = require('express')
const { checkJwt } = require('../auth0')
const db = require('../db/messages')
const router = express.Router()
const log = require('../logger')

// Open Routes

router.get('/', async (req, res) => {
  db.getMessages()
    .then(messages => {
      res.json({ messages })
      return null
    })
    .catch(err => {
      console.error(err)
      return res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const getMessage = await db.getMessageById(id)
    const message = JSON.parse(JSON.stringify(getMessage))
    return res.json(message)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to retrieve message!'
      }
    })
  }
})

// Authenticated Routes

router.post('/', checkJwt, async (req, res) => {
  const { auth0Id, id, why, bring, share } = req.body
  const message = { auth0Id, id, why, bring, share }
  try {
    await db.addMessage(message)
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({
      error: {
        title: 'failed: message exists'
      }
    })
  }
})

module.exports = router
