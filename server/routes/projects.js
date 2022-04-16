const express = require('express')
// const jwtAuthz = require('express-jwt-authz')
const {
  getUserRoles
  // checkJwt
} = require('../auth0')

const db = require('../db/projects')
const router = express.Router()

module.exports = router

// middleware for checking permissions (authorization)
// const checkAdmin = jwtAuthz(['read:my_private_route'], { customScopeKey: 'permissions' })

// POST /api/v1/users/protected
router.post('/', async (req, res) => {
  const { auth0Id, category, description, seeking, purpose, started, skillType, skillDescription } = req.body
  const project = { auth0Id, category, description, seeking, purpose, started, skillType, skillDescription }

  try {
    // await db.addUser(user)
    await db.addProject(project)
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({
      error: {
        title: 'failed: project exists'
      }
    })
  }

  // try {
  //   const addedUser = await db.getUsersByAuth(user.auth0Id)
  //   res.json(addedUser)
  // } catch (err) {
  //   console.error(err.message)
  //   return res.status(500).json({
  //     error: {
  //       title: 'failed to retrieve added user'
  //     }
  //   })
  // }
})

// const express = require('express')
// const checkJwt = require('../auth0')
// const db = require('../db/projects')

// const router = express.Router()

// module.exports = router

// // A public endpoint that anyone can access
// // GET /api/v1/projects
router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects()
    res.json({ projects })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// // use checkJwt as middleware
// // POST /api/v1/projects
// router.post('/', checkJwt, async (req, res) => {
//   const { project } = req.body
//   const auth0Id = req.user?.sub
//   const newProject = {
//     // added_by_user: auth0Id,
//     // name: project.name,
//     // calories: project.calories
//   }
//   try {
//     const projects = await db.addProject(newProject)
//     res.json({ projects })
//   } catch (err) {
//     console.error(err)
//     res.status(500).send(err.message)
//   }
// })

// // use checkJwt as middleware
// // PUT /api/v1/projects
// router.put('/', checkJwt, async (req, res) => {
//   const { project } = req.body
//   const auth0Id = req.user?.sub
//   const projectToUpdate = {
//     // id: project.id,
//     // added_by_user: auth0Id,
//     // name: project.name,
//     // calories: project.calories
//   }
//   try {
//     const projects = await db.updateProject(projectToUpdate, auth0Id)
//     res.json({ projects })
//   } catch (err) {
//     console.error(err)
//     if (err.message === 'Unauthorized') {
//       return res.status(403).send(
//         'Unauthorized: Only the user who added the project may update it'
//       )
//     }
//     res.status(500).send(err.message)
//   }
// })

// // use checkJwt as middleware
// // DELETE /api/v1/projects
// router.delete('/:id', checkJwt, async (req, res) => {
//   const id = Number(req.params.id)
//   const auth0Id = req.user?.sub
//   try {
//     const projects = await db.deleteProject(id, auth0Id)
//     res.json({ projects })
//   } catch (err) {
//     console.error(err)
//     if (err.message === 'Unauthorized') {
//       return res.status(403).send(
//         'Unauthorized: Only the user who added the project may delete it'
//       )
//     }
//     res.status(500).send(err.message)
//   }
// })
