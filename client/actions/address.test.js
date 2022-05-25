import {
  setAddress,
  clearAddress,
  CLEAR_ADDRESS,
  SET_ADDRESS
} from './address'

describe('showAddress', () => {
  it('returns the correct action', () => {
    const action = setAddress('mock address')
    expect(action.type).toBe(SET_ADDRESS)
  })
})

describe('clearAddress', () => {
  it('returns the correct action', () => {
    const action = clearAddress('mock address')
    expect(action.type).toBe(CLEAR_ADDRESS)
  })
})
