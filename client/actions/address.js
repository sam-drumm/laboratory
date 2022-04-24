import { getAddress } from '../apis/address'

export const SET_ADDRESS = 'SET_ADDRESS'
// export const SET_PROJECTS = 'SET_PROJECTS'
export const CLEAR_ADDRESS = 'CLEAR_ADDRESS'
// export const CLEAR_PROJECTS = 'CLEAR_PROJECTS'

export function setAddress (address) {
  return {
    type: SET_ADDRESS,
    address
  }
}

// export function setProjects (projects) {
//   return {
//     type: SET_PROJECTS,
//     projects: projects
//   }
// }

export function clearAddress () {
  return {
    type: CLEAR_ADDRESS
  }
}

// export function clearProjects () {
//   return {
//     type: CLEAR_PROJECTS
//   }
// }

// export function fetchProjects () {
//   return dispatch => {
//     return getProjects()
//       .then(projects => {
//         dispatch(setProjects(projects))
//         return null
//       })
//   }
// }

// GET ADDRESS

export function fetchAddress (query) {
  return dispatch => {
    return getAddress(query)
      .then(address => {
        dispatch(setAddress(address))
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }
}

// export function addProject (project, token) {
//   return dispatch => {
//     return addProjects(project, token)
//       .then(project => {
//         dispatch(setProject(project))
//         return null
//       })
//       .catch(err => {
//         console.error(err)
//       })
//   }
// }
