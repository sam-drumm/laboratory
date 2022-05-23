import { getAddresses } from '../apis/address'

export const SET_ADDRESS = 'SET_ADDRESS'
export const CLEAR_ADDRESS = 'CLEAR_ADDRESS'

export function setAddress (address) {
  return {
    type: SET_ADDRESS,
    address
  }
}

export function clearAddress () {
  return {
    type: CLEAR_ADDRESS
  }
}

export function fetchAddress (query) {
  return dispatch => {
    return getAddresses(query)
      .then(address => {
        dispatch(setAddress(address))
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }
}
