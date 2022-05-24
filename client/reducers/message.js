import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/message'

const emptyMessage = {
  id: null,
  auth0Id: '',
  projectId: '',
  why: '',
  bring: '',
  share: ''
}

export default function message (state = emptyMessage, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return action.message

    case CLEAR_MESSAGE:
      return emptyMessage

    default:
      return state
  }
}
