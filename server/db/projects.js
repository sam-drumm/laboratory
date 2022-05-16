const connection = require('./connection')

module.exports = {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  authorizeUpdate,
  getProjectById,
  getProjectByAuthId
}

function sort (projectArray) {
  const allProjects = [...projectArray]
  allProjects.sort((a, b) => a.id - b.id)
  return allProjects
}

async function getProjects (db = connection) {
  return db('projects').select().then(sort)
}

async function addProject (input, db = connection) {
  const { auth0Id, category, projectTitle, description, seeking, started, skillType, skillDescription, region, success } = input
  const project = { auth0_id: auth0Id, category, project_title: projectTitle, description, seeking, started, skill_type: skillType, skill_description: skillDescription, region, success }
  return db('projects')
    .insert(project)
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

async function updateProject (newProject, auth0Id, db = connection) {
  return db('projects')
    .where('id', newProject.id)
    .first()
    .then(project => authorizeUpdate(project, auth0Id))
    .then(() => {
      return db('projects')
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
    .then(project => authorizeUpdate(project, auth0Id))
    .then(() => {
      return db('Projects')
        .where('id', id)
        .delete()
    })
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

async function getProjectById (id, db = connection) {
  return db('Projects')
    .select(
      'id',
      'project_title as projectTitle',
      'region',
      'category',
      'description',
      'seeking',
      'started',
      'success',
      'skill_type as skillType',
      'skill_description as skillDescription',
      'created_at as createdAt'
    )
    .where('id', id)
    .first()
}

async function getProjectByAuthId (auth0Id, db = connection) {
  return db('Projects').select()
    .where('auth0_id', auth0Id)
}

async function authorizeUpdate (project, auth0Id) {
  if (project.added_by_user !== auth0Id) {
    throw new Error('Unauthorized')
  }
}
