import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import project from './project'
import projects from './projects'

export default combineReducers({
  users,
  user,
  projects,
  project
})
