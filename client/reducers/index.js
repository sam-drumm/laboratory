import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import project from './project'
import projects from './projects'
import waiting from './waiting'

export default combineReducers({
  users,
  user,
  projects,
  project,
  waiting
})
