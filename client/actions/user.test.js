import {
  setUser,
  setUsers,
  SET_USER,
  SET_USERS,
  clearUser,
  clearUsers,
  CLEAR_USER,
  CLEAR_USERS
} from './user'

describe('showUser', () => {
  it('returns the correct action', () => {
    const action = setUser('mock user')
    expect(action.type).toBe(SET_USER)
  })
})
describe('showUsers', () => {
  it('returns the correct action', () => {
    const action = setUsers('mock users')
    expect(action.type).toBe(SET_USERS)
  })
})
describe('clearUser', () => {
  it('returns the correct action', () => {
    const action = clearUser('mock user')
    expect(action.type).toBe(CLEAR_USER)
  })
})
describe('clearUsers', () => {
  it('returns the correct action', () => {
    const action = clearUsers('mock users')
    expect(action.type).toBe(CLEAR_USERS)
  })
})
