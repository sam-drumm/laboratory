import request from 'superagent'

const rootUrl = '/api/v1'

export function getProjectByAuthId (auth0Id, token) {
  console.log(auth0Id, token)
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
}

export function addProjects (project) {
  return request.post(rootUrl + '/projects')
    .send(project)
}

export function getProjectById (id, token) {
  return request
    .get(`${rootUrl}/projects/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => res.body)
}
