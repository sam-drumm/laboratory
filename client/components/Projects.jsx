import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProjects } from '../actions/project'

function Projects (props) {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)
  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  return (
    <>
      <section className='projects'>
        <p className='title'>Projects in the database</p>
        <table>
          <thead>
            <tr>
              <th>
              id
              </th>
              <th>
              category
              </th>
              <th>
              purpose
              </th>
              <th>
              started
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project =>
              <tr key={project.id}>
                <td>
                  {project.category}
                </td>
                <td>
                  {project.description}
                </td>
                <td>
                  {project.purpose}
                </td>
                <td>
                  {project.started}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Projects
