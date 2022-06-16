const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const request = require('superagent')

const domain = process.env.AUTH0_DOMAIN || 'https://laboratory.au.auth0.com'
const clientId = process.env.AUTH0_API_EXPLORER_CLIENTID || 'some_client_id'
const secret = process.env.AUTH0_API_EXPLORER_SECRET || 'some_secret'

const userHasAdminRole = async (uid) => {
  const accessToken = await getAccessToken()
  const { body } = await request(`${domain}/api/v2/users/${uid}/roles`)
    .set({ authorization: `Bearer ${accessToken}` })

  return isAdmin(body)
}

const isAdmin = (roles) => {
  if (roles) {
    return roles.some(r => r.name === 'admin')
  }
  return false
}

const getAccessToken = async () => {
  const data = {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: secret,
    audience: `${domain}/api/v2/`
  }

  const { body } = await request.post(`${domain}/oauth/token`)
    .send(data)
    .type('form')
  return body.access_token
}

// Authorization middleware.
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://laboratory/api',
  issuer: `${domain}/`,
  algorithms: ['RS256']
})

module.exports = {
  userHasAdminRole,
  isAdmin,
  checkJwt
}
