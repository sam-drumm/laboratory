import { dispatch, getState } from '../../store'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { setProject } from '../../actions/project'
import requestor from '../../consume'

export function addProject (form, consume = requestor) {
  dispatch(setWaiting())
  const storeState = getState()
  const { token } = storeState.user
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
  return consume('/projects', token, 'post', newProject)
    .then((res) => {
      // navigateTo('/projects/search')
      const newProject = res.body
      newProject.token = token
      // newProject.token = token
      dispatch(setProject(newProject))
      return newProject
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
