import {
  setProject,
  setProjects,
  SET_PROJECT,
  SET_PROJECTS,
  clearProject,
  clearProjects,
  CLEAR_PROJECT,
  CLEAR_PROJECTS
} from './project'

describe('showProject', () => {
  it('returns the correct action', () => {
    const action = setProject('mock project')
    expect(action.type).toBe(SET_PROJECT)
  })
})
describe('showProjects', () => {
  it('returns the correct action', () => {
    const action = setProjects('mock projects')
    expect(action.type).toBe(SET_PROJECTS)
  })
})
describe('clearProject', () => {
  it('returns the correct action', () => {
    const action = clearProject('mock project')
    expect(action.type).toBe(CLEAR_PROJECT)
  })
})
describe('clearProjects', () => {
  it('returns the correct action', () => {
    const action = clearProjects('mock projects')
    expect(action.type).toBe(CLEAR_PROJECTS)
  })
})
