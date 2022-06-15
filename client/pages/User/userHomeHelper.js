// import { dispatch, getState } from '../../store'
// import { setWaiting, clearWaiting } from '../../actions/waiting'
// import { showError } from '../../actions/error'
// import requestor from '../../consume'

// export function getProject (id, consume = requestor) {
//   dispatch(setWaiting())
//   return consume(`/projects/${id}`)
//     .then((res) => {
//       const { title, date, volunteersNeeded, description } = res.body
//       return { title, date, description, volunteersNeeded }
//     })
//     .catch((err) => {
//       dispatch(showError(err.message))
//     })
//     .finally(() => {
//       dispatch(clearWaiting())
//     })
// }

// export function updateProject (projectId, project, navigateTo, consume = requestor) {
//   dispatch(setWaiting())
//   const storeState = getState()
//   const { token } = storeState.user
//   const projectToUpdate = {
//     id: Number(project.id),
//     ...project
//   }
//   return consume(`/projects/${project.id}`, token, 'patch', projectToUpdate)
//     .then(() => {
//       navigateTo(`/projects/${projectId}`)
//       return null
//     })
//     .catch((err) => {
//       dispatch(showError(err.message))
//     })
//     .finally(() => {
//       dispatch(clearWaiting())
//     })
// }
