import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProject } from '../../actions/project'

// import { getProject } from './projectHelper'

export default function Project (props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  // const project = useSelector(state => state.project)
  // const user = useSelector(state => state.user)

  const project = useSelector(state => state.projects)
  useEffect(() => {
    dispatch(fetchProject(id))
  }, [])

  // useEffect(() => {
  //   user.id && getProject(id, user)
  // }, [id, user])

  // const {
  //   projectTitle,
  //   category,
  //   description,
  //   seeking,
  //   purpose,
  //   teamEstablished,
  //   started,
  //   skillType,
  //   skillDescription
  // } = project

  return (
    <>

      <div>

        <h2>{project.projectTitle}</h2>
        {/* <p>{category}</p>
        <p>{description}</p>
        <p>{seeking}</p>
        <p>{purpose}</p>
        <p>{teamEstablished}</p>
        <p>{started}</p>
        <p>{skillType}</p>
        <p>{skillDescription}</p> */}

      </div>

    </>
  )
}
