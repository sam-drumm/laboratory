import request from 'superagent'

const rootUrl = '/api/v1'

export function getMessageByAuthId (auth0Id, token) {
  return request
    .get(`${rootUrl}/messages/user/auth`)
    .set('authorization', `Bearer ${token}`)
    .query({ query: auth0Id })
    .then(res => {
      return res.body
    })
    .catch(console.error('error'))
}

export function getMessages (token) {
  return request.get(rootUrl + '/messages')
    .set('authorization', `Bearer ${token}`)

    .then(res => {
      return res.body
    })
}

export function addMessages (message, token) {
  return request.post(rootUrl + '/messages')
    .set('authorization', `Bearer ${token}`)
    .send(message)
}

export function getMessageById (id, token) {
  return request
    .get(`${rootUrl}/messages/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body
    })
}
