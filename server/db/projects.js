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

// function addProject (input, db = connection) {
//   const { auth0Id, category, projectTitle, description, seeking, started, skillType, skillDescription, region, success } = input
//   const project = { auth0_id: auth0Id, category, project_title: projectTitle, description, seeking, started, skill_type: skillType, skill_description: skillDescription, region, success }
//   return db('projects').insert({ project })
//     .then(() => db)
//     .then(getProjects)
// }

function addProject (newProject, db = connection) {
  const { auth0Id, category, projectTitle, description, seeking, started, skillType, skillDescription, region, success } = newProject
  return db('projects')
    .insert({
      auth0_id: auth0Id,
      category: category,
      project_title: projectTitle,
      description: description,
      seeking: seeking,
      started: started,
      skill_type: skillType,
      skill_description: skillDescription,
      region: region,
      success: success
    })
    .then((ids) => getProjectById(ids[0], db))
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
  return db('projects')
    .where('id', id)
    .first()
    .then(project => authorizeUpdate(project, auth0Id))
    .then(() => {
      return db('projects')
        .where('id', id)
        .delete()
    })
    .then(() => db)
    .then(getProjects)
    .then(sort)
}

async function getProjectById (id, db = connection) {
  return db('projects')
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
  return db('projects').select()
    .where('auth0_id', auth0Id)
}

/// is project owned by user?

async function authorizeUpdate (project, auth0Id) {
  if (project.auth0_id !== auth0Id) {
    throw new Error('Unauthorized')
  }
}

// function projectExists (uid, db = connection) {
//   return db('projects')
//     .count('project_title as n')
//     .where('project_title', uid)
//     .then((count) => {
//       return count[0].n > 0
//     })
// }
