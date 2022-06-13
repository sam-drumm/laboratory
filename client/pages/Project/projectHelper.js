import requestor from '../../consume'
import { dispatch } from '../../store'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { setProject } from '../../actions/project'

export function getProject (id, user, consume = requestor) {
  dispatch(setWaiting())
  const headers = {
    Accept: 'application/json',
    userid: user.id
  }

  return consume(`/projects/${id}`, '', 'get', {}, headers)
    .then((res) => {
      const project = res.body
      dispatch(setProject({
        projectTitle: project.projectTitle,
        category: project.category,
        description: project.description,
        seeking: project.seeking,
        purpose: project.purpose,
        teamEstablished: project.teamEstablished,
        started: project.started,
        success: project.success,
        skillType: project.skillType,
        skillDescription: project.skillDescription
      }))
      return null
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}