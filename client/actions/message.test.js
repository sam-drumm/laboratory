import {
  setMessage,
  setMessages,
  SET_MESSAGE,
  SET_MESSAGES,
  clearMessage,
  clearMessages,
  CLEAR_MESSAGE,
  CLEAR_MESSAGES
} from './message'

describe('showMessage', () => {
  it('returns the correct action', () => {
    const action = setMessage('mock message')
    expect(action.type).toBe(SET_MESSAGE)
  })
})
describe('showMessages', () => {
  it('returns the correct action', () => {
    const action = setMessages('mock messages')
    expect(action.type).toBe(SET_MESSAGES)
  })
})
describe('clearMessage', () => {
  it('returns the correct action', () => {
    const action = clearMessage('mock message')
    expect(action.type).toBe(CLEAR_MESSAGE)
  })
})
describe('clearMessages', () => {
  it('returns the correct action', () => {
    const action = clearMessages('mock messages')
    expect(action.type).toBe(CLEAR_MESSAGES)
  })
})
