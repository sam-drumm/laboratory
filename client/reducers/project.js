import { SET_PROJECT, CLEAR_PROJECT } from '../actions/project'

const emptyProject = {}

export default function project (state = emptyProject, action) {
  switch (action.type) {
    case SET_PROJECT:
      return action.project

    case CLEAR_PROJECT:
      return emptyProject

    default:
      return state
  }
}
