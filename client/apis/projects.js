import request from 'superagent'

const rootUrl = '/api/v1'

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

export function getProjectById (id) {
  return request
    .get(`${rootUrl}/projects/${id}`)
    // .set('authorization', `Bearer ${token}`)
    .then(res => res.body)
}
