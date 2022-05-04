// carosel if authid === state.user.auth0-id

import { getProjectByAuthId } from '../../../server/db/projects'
import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserHome () {
  const [userprojects, setUserProjects] = useState([])
  const auth0id = useSelector(state => state.user.auth0id)
  //   const dispatch = useDispatch()
  //   const navigate = useNavigate()

  useEffect(() => {
    getProjectByAuthId(auth0id)
      .then(projects => {
        setUserProjects(projects)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [])

  return (
    <>
      {userprojects.map((project) => (
        <>
          {project.seeking}
        </>)
      )}
    </>

  )
}
