import { SET_ADDRESS, CLEAR_ADDRESS } from '../actions/address'

const emptyAddress = {
  street: '',
  city: '',
  state: '',
  postalCode: '',
  country: ''
}

export default function address (state = emptyAddress, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return action.address

    case CLEAR_ADDRESS:
      return emptyAddress

    default:
      return state
  }
}
