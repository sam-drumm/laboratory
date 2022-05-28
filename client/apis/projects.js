import request from 'superagent'

const rootUrl = '/api/v1'

export function getProjectByAuthId (auth0Id, token) {
  return request
    .get(`${rootUrl}/projects/user/auth`)
    .set('authorization', `Bearer ${token}`)
    .query({ query: auth0Id })
    .then(res => {
      return res.body
    })
    .catch(console.error('error'))
}

export function getProjects () {
  return request.get(rootUrl + '/projects')
    .then(res => {
      return res.body.projects
    })
    .catch(err => {
      console.error(err.message)
    })
}

export function addProjects (project) {
  return request.post(rootUrl + '/projects')
    .send(project)
    .catch(err => {
      console.error(err.message)
    })
}

export function editProject (project, token, auth0Id) {
  return request
    .patch(rootUrl + '/projects/edit')
    .set('authorization', `Bearer ${token}`)
    .send(project, auth0Id)
    .catch(console.error('error'))
}

export function getProjectById (id, token) {
  return request
    .get(`${rootUrl}/projects/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err.message)
    })
}

export function searchProjects (query, token) {
  return request
    .get(`${rootUrl}/projects/search/${query}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err.message)
    })
}
