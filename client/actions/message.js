import { addMessages, getMessageById, getMessages } from '../apis/messages'

export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGES = 'SET_MESSAGES'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES'

export function setMessage (message) {
  return {
    type: SET_MESSAGE,
    message: message
  }
}

export function setMessages (messages) {
  return {
    type: SET_MESSAGES,
    messages: messages
  }
}

export function clearMessage () {
  return {
    type: CLEAR_MESSAGE
  }
}

export function clearMessages () {
  return {
    type: CLEAR_MESSAGES
  }
}

export function fetchMessages () {
  return dispatch => {
    return getMessages()
      .then(messages => {
        dispatch(setMessages(messages))
        return null
      })
  }
}


export function fetchMessage (id, token) {
  return dispatch => {
    return getMessageById(id, token)
      .then(message => {
        dispatch(setMessage(message))
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export function addMessage (message, token) {
  return dispatch => {
    return addMessages(message, token)
      .then(message => {
        dispatch(setMessage(message))
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }
}
