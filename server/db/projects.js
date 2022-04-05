const connection = require('./connection')

module.exports = {
  getProjects,
  addProject,
  updateProject,
  deleteProject
}

function sort (ProjectArray) {
  const allProjects = [...ProjectArray]
  allProjects.sort((a, b) => a.id - b.id)
  return allProjects
}

async function getProjects (db = connection) {
  return db('Projects').select().then(sort)
}

async function addProject (Project, db = connection) {
  return db('Projects')
    .insert(Project)
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

async function updateProject (newProject, user, db = connection) {
  return db('Projects')
    .where('id', newProject.id)
    .first()
    .then(Project => authorizeUpdate(Project, user))
    .then(() => {
      return db('Projects')
        .where('id', newProject.id)
        .update(newProject)
    })
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

async function deleteProject (id, auth0Id, db = connection) {
  return db('Projects')
    .where('id', id)
    .first()
    .then(Project => authorizeUpdate(Project, auth0Id))
    .then(() => {
      return db('Projects')
        .where('id', id)
        .delete()
    })
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

function authorizeUpdate (Project, auth0Id) {
  if (Project.added_by_user !== auth0Id) {
    throw new Error('Unauthorized')
  }
}
