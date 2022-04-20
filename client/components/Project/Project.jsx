import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProject } from '../../actions/project'
import { Box, Heading, Flex } from '@chakra-ui/react'

export default function Project (props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { token } = useSelector(state => state.user)
  const project = useSelector(state => state.project)

  useEffect(() => {
    dispatch(fetchProject(id, token))
  }, [])

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

    <Flex width="full" align="center" justifyContent="center" >
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={2}
        borderRadius={8}
        boxShadow="lg"
      >

        <Box textAlign="centre">
          <Heading>{projectTitle}</Heading>
        </Box>

        <p>{category}</p>
        <p>{description}</p>
        <p>{seeking}</p>
        <p>{purpose}</p>
        <p>{teamEstablished}</p>
        <p>{started}</p>
        <p>{skillType}</p>
        <p>{skillDescription}</p>

      </Box>
    </Flex>

  )
}
