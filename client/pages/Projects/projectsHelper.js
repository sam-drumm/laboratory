import requestor from '../../consume'
import { dispatch } from '../../store'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'

export async function getAllProjects (consume = requestor) {
  dispatch(setWaiting())
  return consume('/projects')
    .then((res) => {
      const { projects } = res.body
      return projects
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export async function getProjectsByAuthID (consume = requestor) {
  dispatch(setWaiting())
  return consume('/projects')
    .then((res) => {
      const { projects } = res.body
      return projects
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
