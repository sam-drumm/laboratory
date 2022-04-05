const express = require('express')
const checkJwt = require('../auth0')
const db = require('../db/projects')

const router = express.Router()

module.exports = router

// A public endpoint that anyone can access
// GET /api/v1/projects
router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects()
    res.json({ projects })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// use checkJwt as middleware
// POST /api/v1/projects
router.post('/', checkJwt, async (req, res) => {
  const { project } = req.body
  const auth0Id = req.user?.sub
  const newProject = {
    added_by_user: auth0Id,
    name: project.name,
    calories: project.calories
  }
  try {
    const projects = await db.addProject(newProject)
    res.json({ projects })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// use checkJwt as middleware
// PUT /api/v1/projects
router.put('/', checkJwt, async (req, res) => {
  const { project } = req.body
  const auth0Id = req.user?.sub
  const projectToUpdate = {
    id: project.id,
    added_by_user: auth0Id,
    name: project.name,
    calories: project.calories
  }
  try {
    const projects = await db.updateProject(projectToUpdate, auth0Id)
    res.json({ projects })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'Unauthorized: Only the user who added the project may update it'
      )
    }
    res.status(500).send(err.message)
  }
})

// use checkJwt as middleware
// DELETE /api/v1/projects
router.delete('/:id', checkJwt, async (req, res) => {
  const id = Number(req.params.id)
  const auth0Id = req.user?.sub
  try {
    const projects = await db.deleteProject(id, auth0Id)
    res.json({ projects })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'Unauthorized: Only the user who added the project may delete it'
      )
    }
    res.status(500).send(err.message)
  }
})
