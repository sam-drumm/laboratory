import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CountdownTimer from '../Countdown/CountdownTimer'
import { fetchProject } from '../../actions/project'
import { Box, Heading, Flex, Button } from '@chakra-ui/react'

export default function Project (props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { token } = useSelector(state => state.user)
  const project = useSelector(state => state.project)
  const {
    project_title: projectTitle,
    region,
    category,
    description,
    seeking,
    purpose,
    team_established: teamEstablished,
    started,
    skillType,
    skillDescription,
    created_at: createdAt
  } = project

  const fourteenDaysMS = 14 * 24 * 60 * 60 * 1000
  const timeMS = new Date().getTime()
  const createdMS = project.createdAt.getTime()
  const expiryMS = createdMS + fourteenDaysMS



  useEffect(() => {
    dispatch(fetchProject(id, token))
  }, [])

  return (

    <Flex width="full" align="center" justifyContent="center" marginTop={10} marginBottom={10}>
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
        <p>{region}</p>
        <p>{category}</p>
        <p>{description}</p>
        <p>{seeking}</p>
        <p>{purpose}</p>
        <p>{teamEstablished}</p>
        <p>{started}</p>
        <p>{skillType}</p>
        <p>{skillDescription}</p>
        <Button m={6}>
          <p>Count me in!</p>
        </Button>
        <CountdownTimer targetDate={expiryMS} />

      </Box>
    </Flex>

  )
}
