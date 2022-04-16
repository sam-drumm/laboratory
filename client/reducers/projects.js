import { CLEAR_PROJECTS, SET_PROJECTS } from '../actions/project'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects
    case CLEAR_PROJECTS:
      return []
    default:
      return state
  }
}

export default reducer
