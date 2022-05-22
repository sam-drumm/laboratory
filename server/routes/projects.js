const express = require('express')
const {
  checkJwt
} = require('../auth0')
const db = require('../db/projects')
const router = express.Router()
const log = require('../logger')

module.exports = router

// POST /api/v1/users/protected
router.post('/', async (req, res) => {
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

router.patch('/edit/:id',
// checkJwt,
  (req, res) => {
    const { auth0Id, category, projectTitle, description, seeking, started, skillType, skillDescription, region, success } = req.body
    const updatedProject = { auth0Id, category, projectTitle, description, seeking, started, skillType, skillDescription, region, success }
    console.log(updatedProject)
    db.updateProject(updatedProject)
      .then((project) => {
        res.status(200).json(project)
        return null
      })
      .catch((err) => {
        log(err.message)
        res.status(500).json({
          error: {
            title: 'Unable to update project'
          }
        })
      })
  })

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

router.get('/', (req, res) => {
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

router.get('/user/auth', async (req, res) => {
  try {
    const projectByUser = await db.getProjectByAuthId(req.query.query)
    res.json({ projectByUser })
  } catch (err) {
    console.error('error bro')
    res.status(500).send(err.message)
  }
})
