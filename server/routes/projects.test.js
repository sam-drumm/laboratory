const request = require('supertest')
const server = require('../server')
const db = require('../db/projects')
const { getMockToken } = require('./mockToken')

jest.mock('../db/projects')

const mockProject =
{
  id: 123,
  auth0_id: 'auth0|12345',
  project_title: 'Class aptent taciti sociosqu',
  category: '1',
  region: '12',
  description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sed est risus. Vestibulum ut lectus in nunc egestas lacinia. Sed id augue sed augue iaculis viverra ut id tellus. Integer iaculis, felis sit amet pellentesque dapibus, nisi tellus hendrerit nisl, fringilla mollis augue quam non orci. Aenean blandit rhoncus nibh, nec luctus ligula rutrum quis. Vivamus at risus id diam finibus placerat a vel dui. Pellentesque vitae dignissim lorem. Donec lacinia lectus et eros blandit efficitur. Quisque ornare, nibh ut finibus tempor, metus nisl aliquam est, quis porttitor sem nulla quis libero. Donec tristique gravida.',
  success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
  seeking: '1',
  started: '1',
  skill_type: [
    1,
    2,
    3
  ],
  skill_description: ' Aliquam id condimentum quam, eget convallis magna. Suspendisse lacinia turpis hendrerit ligula sollicitudin, sit amet placerat nibh iaculis. Sed sit amet maximus felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc diam tellus, gravida ut nibh nec, vestibulum vehicula metus. Duis elementum massa eu elit porta, ac facilisis enim finibus. Curabitur ut mi libero.',
  created_at: '2022-01-01T20:01:01.595Z'
}

describe('GET /api/v1/project', () => {
  it('responds with an object', () => {
    db.getProjects.mockImplementation(() => Promise.resolve(mockProject))
    return request(server)
      .get('/api/v1/projects')
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.projects).not.toBeUndefined()
        return null
      })
  })
  it('has the correct datatypes', () => {
    db.getProjects.mockImplementation(() => Promise.resolve(mockProject))
    return request(server)
      .get('/api/v1/projects')
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.projects.id).toBe(123)
        expect(res.body.projects.auth0_id).toBe('auth0|12345')
        expect(res.body.projects.project_title).toBe('Class aptent taciti sociosqu')
        expect(res.body.projects.skill_type[0]).toEqual(1)
        expect(res.body.projects.skill_type[1]).toEqual(2)
        expect(res.body.projects.skill_type[2]).toEqual(3)
        return null
      })
  })
  it('responds with 500 status error during a DB error', () => {
    db.getProjects.mockImplementation(() => Promise.reject(
      new Error('mock getUser error')
    ))
    return request(server)
      .get('/api/v1/projects')
      .expect(500)
      .then(res => {
        expect(res.body.message).toBe('failed to get users')
        return null
      })
  })
})
