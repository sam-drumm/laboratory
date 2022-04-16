import { addProjects, getProjects } from '../apis/projects'

export const SET_PROJECT = 'SET_PROJECT'
export const SET_PROJECTS = 'SET_PROJECTS'
export const CLEAR_PROJECT = 'CLEAR_PROJECT'
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS'

export function setProject (project) {
  return {
    type: SET_PROJECT,
    project
  }
}

export function setProjects (projects) {
  return {
    type: SET_PROJECTS,
    projects
  }
}

export function clearProject () {
  return {
    type: CLEAR_PROJECT
  }
}

export function clearProjects () {
  return {
    type: CLEAR_PROJECTS
  }
}

export function fetchEvents () {
  return dispatch => {
    return getProjects()
      .then(projects => {
        dispatch(setProjects(projects))
        return null
      })
  }
}

export function addProject (project, token) {
  return dispatch => {
    return addProjects(project, token)
      .then(project => {
        dispatch(setProject(project))
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }
}
