import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import project from './project'
import projects from './projects'
import waiting from './waiting'
import message from './message'
import messages from './messages'
import address from './address'

export default combineReducers({
  users,
  user,
  projects,
  project,
  waiting,
  message,
  messages,
  address
})
