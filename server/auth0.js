const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const request = require('superagent')

// const path = require('path')
// require('dotenv').config({ path: path.join(__dirname, '.env') })

const domain = process.env.AUTH0_DOMAIN || 'https://laboratory.au.auth0.com'
const ssoAudience = process.env.AUTH0_SSO_AUDIENCE || 'some_sso_audience'
const clientId = process.env.AUTH0_API_EXPLORER_CLIENTID || 'some_client_id'
const secret = process.env.AUTH0_API_EXPLORER_SECRET || 'some_secret'

// const getUserRoles = async (uid) => {
//   const accessToken = await getAccessToken()
//   const { body } = await request(`${domain}/api/v2/users/${uid}/roles`)
//     .set({ authorization: `Bearer ${accessToken}` })

//   return body[0]?.name
// }

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

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`
  }),
  audience: ssoAudience,
  issuer: `${domain}/`,
  algorithms: ['RS256']
})

module.exports = {
  checkJwt,
  getAccessToken
}
