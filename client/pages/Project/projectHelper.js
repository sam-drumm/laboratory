import { dispatch, getState } from '../../store'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import requestor from '../../consume'

export function addProject (form, consume = requestor) {
  dispatch(setWaiting())
  const newProject = {
    auth0Id: form.auth0Id,
    projectTitle: form.projectTitle,
    region: form.region,
    category: form.category,
    description: form.description,
    seeking: form.seeking,
    teamEstablished: form.teamEstablished,
    started: form.started,
    success: form.success,
    skillType: form.skillType,
    skillDescription: form.skillDescription
  }
  const storeState = getState()
  const { token } = storeState.user

  return consume('/projects', token, 'post', newProject)
    .then(() => {
      // navigateTo('/projects/search')
      // const newProject = res.body
      // newProject.token = token
      // dispatch(setProject(newProject))
      return null
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
