const express = require('express')
const { checkJwt } = require('../auth0')
const db = require('../db/projects')
const router = express.Router()
const log = require('../logger')

module.exports = router

// Open Routes

// get by project id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const getProject = await db.getProjectById(id)
    const project = JSON.parse(JSON.stringify(getProject))
    return res.json(project)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to retrieve project!'
      }
    })
  }
})

router.get('/', async (req, res) => {
  db.getProjects()
    .then(projects => {
      res.json({ projects })
      return null
    })
    .catch(err => {
      console.error(err)
      return res.status(500).json({ message: 'Something went wrong' })
    })
})

// Authenticated Routes

// POST /api/v1/projects/protected
router.post('/', checkJwt, async (req, res) => {
  const { auth0Id, category, description, success, projectTitle, seeking, started, skillType, skillDescription, region } = req.body
  const project = { auth0Id, category, description, success, projectTitle, seeking, started, skillType, skillDescription, region }
  try {
    await db.addProject(project)
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({
      error: {
        title: 'failed: project exists'
      }
    })
  }
})

// Update project
// Can only edit if you own project. Need to add this.

router.patch('/edit', checkJwt, async (req, res) => {
  const { id, auth0Id, category, description, seeking, started, skillType, skillDescription, region, success } = req.body
  const updatedProject = { id, auth0Id, category, description, seeking, started, skillType, skillDescription, region, success }
  try {
    await db.updateProject(updatedProject)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to update project'
      }
    })
  }
})

router.get('/user/auth', checkJwt, async (req, res) => {
  try {
    const projectByUser = await db.getProjectByAuthId(req.query.query)
    res.json({ projectByUser })
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to get projects from user'
      }
    })
  }
})
