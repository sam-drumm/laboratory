import { addProjects, getProjectById, getProjects, editProject } from '../apis/projects'

export const SET_PROJECT = 'SET_PROJECT'
export const SET_PROJECTS = 'SET_PROJECTS'
export const CLEAR_PROJECT = 'CLEAR_PROJECT'
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS'

export function setProject (project) {
  return {
    type: SET_PROJECT,
    project: project
  }
}

export function setProjects (projects) {
  return {
    type: SET_PROJECTS,
    projects: projects
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

export function fetchProjects () {
  return dispatch => {
    return getProjects()
      .then(projects => {
        dispatch(setProjects(projects))
        return null
      })
  }
}

// GET project by ID

export function fetchProject (id, token) {
  return dispatch => {
    return getProjectById(id, token)
      .then(project => {
        dispatch(setProject(project))
        return null
      })
      .catch(err => {
        console.error(err)
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

export function editProjects (project, token, auth0Id) {
  return dispatch => {
    return editProject(project, token, auth0Id)
      .then(project => {
        dispatch(setProject(project))
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }
}
