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
