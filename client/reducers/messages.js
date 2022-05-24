import { CLEAR_MESSAGES, SET_MESSAGES } from '../actions/message'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages
    case CLEAR_MESSAGES:
      return []
    default:
      return state
  }
}

export default reducer
