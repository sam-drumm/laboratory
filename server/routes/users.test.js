const request = require('supertest')
const server = require('../server')
const db = require('../db/users')
const { getMockToken } = require('./mockToken')

jest.mock('../db/users')

const mockUser =

  {
    auth0Id: 'auth0|12345',
    email: 'testemail@email.test',
    firstName: 'Joe',
    lastName: 'Bloggs',
    streetNumber: '123',
    street: 'Fake Street',
    locality: 'Marshland',
    city: 'Fakeville',
    region: 'Testbury',
    postcode: '1234',
    meshblock: '12345678',
    lon: 123.4567,
    lat: -321.234567,
    formatted: '123 Fake Street, Marshland, Fakeville',
    following: [
      1,
      2,
      3
    ]
  }

const mockAuthHeader = {
  Authorization: `Bearer ${getMockToken()}`
}

describe('GET /api/v1/user', () => {
  it('responds with an object', () => {
    db.getUsers.mockImplementation(() => Promise.resolve(mockUser))
    return request(server)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.users).not.toBeUndefined()
        return null
      })
  })
  it('returns the correct data', () => {
    db.getUsers.mockImplementation(() => Promise.resolve(mockUser))
    return request(server)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.users.auth0Id).toBe('auth0|12345')
        expect(res.body.users.email).toBe('testemail@email.test')
        expect(res.body.users.firstName).toEqual('Joe')
        expect(res.body.users.lastName).toEqual('Bloggs')
        expect(res.body.users.streetNumber).toEqual('123')
        expect(res.body.users.following[0]).toEqual(1)
        expect(res.body.users.following[1]).toEqual(2)
        expect(res.body.users.following[2]).toEqual(3)
        return null
      })
  })
  it('responds with 500 status error during a DB error', () => {
    db.getUsers.mockImplementation(() => Promise.reject(
      new Error('mock getUser error')
    ))
    return request(server)
      .get('/api/v1/users')
      .expect(500)
      .then(res => {
        expect(res.body.message).toBe('failed to get users')
        return null
      })
  })
})

describe('get /api/v1/:id', () => {
  it('responds with 401 with no token', () => {
    // db.getUsersByAuth.mockImplementation(() => Promise.resolve(mockUser))
    return request(server)
      .get('/api/v1/users/auth0|12345')
      // .set(mockAuthHeader)
      .then(res => {
        expect(res.status).toBe(401)
        return null
      })
  })
})
