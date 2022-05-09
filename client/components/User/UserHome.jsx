import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProjectByAuthId } from '../../apis/projects'

export default function UserHome () {
  const [userProjects, setUserProjects] = useState([])
  const { auth0Id, token } = useSelector(state => state.user)

  useEffect(() => {
    getProjectByAuthId(auth0Id, token)
      .then(projects => {
        // console.log(projects)
        setUserProjects(projects)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [auth0Id])

  console.log(userProjects.projectByUser)

  if (auth0Id) {
    return (
      <>
        <p>Holy Moley</p>
        {userProjects.projectByUser.map(project => (
          <>
            {project.project_title}
          </>)
        )}
      </>

    )
  } else {
    return (
      <p>Mole</p>
    )
  }
}
