const connection = require('./connection')

module.exports = {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  authorizeUpdate,
  getProjectById,
  getProjectByAuthId,
  searchProjects
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

async function updateProject (newProject,
  db = connection) {
  // return db('projects')
  //   .where('id', newProject.id)
  //   .first()
  //   // .then(project => authorizeUpdate(project, auth0Id))
  //   .then(() => {
  return db('projects')
    .where('id', newProject.id)
    // .first()
    // .then(project => authorizeUpdate(project))
    .update({
      category: newProject.category,
      description: newProject.description,
      seeking: newProject.seeking,
      started: newProject.started,
      skill_type: newProject.skillType,
      skill_description: newProject.skillDescription,
      region: newProject.region,
      success: newProject.success
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
      'auth0_id as authId',
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
  if (project.auth0_id !== auth0Id) {
    throw new Error('Unauthorized')
  }
}

async function searchProjects (query, db = connection) {
  console.log('db', query)
  return db('Projects').select()
    .query({ description: query })
    .then(sort)
}

// async function getProjects (db = connection) {
//   return db('projects').select().then(sort)
// }
