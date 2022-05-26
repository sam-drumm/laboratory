import { SET_ADDRESS, CLEAR_ADDRESS } from '../actions/address'
import addressReducer from './address'

jest.mock('../auth0-utils')

describe('address reducer', () => {
  it('returns new address on "SET ADDRESS"', () => {
    const oldAddress = {
      street: 'dfasfsd',
      city: 'faasdf'
    }

    const action = {
      type: SET_ADDRESS,
      address: {
        street: 'ojijo',
        city: 'lkbukd'
      }
    }

    const newState = addressReducer(oldAddress, action)
    expect(newState.street).toBe('ojijo')
    expect(newState).not.toBe(oldAddress)
  })
  it('returns default object on clear address', () => {
    const oldAddress = {
      street: 'fdslkfjal',
      country: 'elrjekj'
    }
    const action = {
      CLEAR_ADDRESS
    }
    const newState = addressReducer(oldAddress, action)
    expect(newState.street).toBeNull()
    expect(newState).not.toBe(oldAddress)
  })

  //     const action = {
  //       type: SET_ADDRESS,
  //       errorMessage: 'mock error'
  //     }
  //     const newState = errorReducer(null, action)
  //     expect(newState).toBe('mock error')
  //   })

  //   it('returns null on "HIDE_ERROR"', () => {
  //     const action = {
  //       type: HIDE_ERROR
  //     }
  //     const newState = errorReducer('error message', action)
  //     expect(newState).toBeNull()
  //   })

//   it('returns old state on unknown action type', () => {
//     const action = {
//       type: 'RANDOM_OTHER_ACTION'
//     }
//     const newState = errorReducer(null, action)
//     expect(newState).toBeNull()
//   })
})
