import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProject } from '../../actions/project'
import { Box } from '@chakra-ui/react'

// import { getProject } from './projectHelper'

export default function Project (props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { token } = useSelector(state => state.user)

  // const project = useSelector(state => state.project)
  // const user = useSelector(state => state.user)

  const project = useSelector(state => state.project)
  console.log(project)

  useEffect(() => {
    dispatch(fetchProject(id, token))
  }, [])

  // useEffect(() => {
  //   user.id && getProject(id, user)
  // }, [id, user])

  const {
    projectTitle,
    category,
    description,
    seeking,
    purpose,
    teamEstablished,
    started,
    skillType,
    skillDescription
  } = project

  return (
    <>

      <div>
        <Box>

          <h2>{category}</h2>
          {/* <p>{category}</p>
        <p>{description}</p>
        <p>{seeking}</p>
        <p>{purpose}</p>
        <p>{teamEstablished}</p>
        <p>{started}</p>
        <p>{skillType}</p>
        <p>{skillDescription}</p> */}
        </Box>
      </div>

    </>
  )
}
