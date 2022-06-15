import requestor from '../../consume'
import { dispatch } from '../../store'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
// import { setProject } from '../../actions/project'

// export function getProject (id, user, consume = requestor) {
//   dispatch(setWaiting())
//   const headers = {
//     Accept: 'application/json',
//     userid: user.id
//   }

//   return consume(`/projects/${id}`, '', 'get', {}, headers)
//     .then((res) => {
//       const project = res.body
//       dispatch(setProject({
//         projectTitle: project.projectTitle,
//         category: project.category,
//         description: project.description,
//         seeking: project.seeking,
//         // purpose: project.purpose,
//         teamEstablished: project.teamEstablished,
//         started: project.started,
//         success: project.success,
//         skillType: project.skillType,
//         skillDescription: project.skillDescription
//       }))
//       return null
//     })
//     .catch((error) => {
//       dispatch(showError(error.message))
//     })
//     .finally(() => {
//       dispatch(clearWaiting())
//     })
// }

export function addProject (projectForm, token, consume = requestor) {
  dispatch(setWaiting())
  // const storeState = getState()
  // const { token } = storeState.user

  const newProject = {
    ...projectForm
  }

  // const newProject = {
  //   auth0Id: form.auth0Id,
  //   projectTitle: form.projectTitle,
  //   region: form.region,
  //   category: form.category,
  //   description: form.description,
  //   seeking: form.seeking,
  //   teamEstablished: form.teamEstablished,
  //   started: form.started,
  //   success: form.success,
  //   skillType: form.skillType,
  //   skillDescription: form.skillDescription
  // }

  return consume('/projects', token, 'post', newProject)
    .then(() => {
      return null
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
