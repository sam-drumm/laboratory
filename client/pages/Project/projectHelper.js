import requestor from '../../consume'
import { dispatch, getState } from '../../store'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { setProject } from '../../actions/project'

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
    .then((res) => {
      const newProject = res.body
      newProject.token = token
      dispatch(setProject(newProject))
      return newProject
    })
    .catch(err => {
      console.error(err.message)
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
