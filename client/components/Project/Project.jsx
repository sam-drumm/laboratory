import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CountdownTimer from '../Countdown/CountdownTimer'
import { fetchProject } from '../../actions/project'
import { Box, Heading, Flex, Button, HStack } from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'

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
  const createdMS = new Date(createdAt).getTime()
  const expiryMS = createdMS + fourteenDaysMS

  useEffect(() => {
    dispatch(fetchProject(id, token))
  }, [])

  return (

    <Flex width="full" align="center" justifyContent="center" marginTop={10} marginBottom={10} padding={10}
    >
      <Box
        p={8}
        maxWidth="750px"
        borderWidth={2}
        borderRadius={8}
        boxShadow="lg"
      >

        <Box
          textAlign="centre"
          width="full"
          alignContent="center"
          // marginTop={10}
          // borderRadius={8}

          marginBottom={10}
          // borderWidth={2}
          // boxShadow='2xl'
        >
          <Heading>{projectTitle}</Heading>
          <p>{region}</p>
          <p>{category}</p>
          <p>{description}</p>
          <p>{seeking}</p>
          <p>{purpose}</p>
          <p>{teamEstablished}</p>
          <p>{started}</p>
          <p>{skillType}</p>
          <p>{skillDescription}</p>
          <p>{createdAt}</p>
        </Box>
        {/* <Box> */}
        <CountdownTimer targetDate={expiryMS}/>
        {/* </Box> */}
        <Button
          size='lg'
          width="full"
          alignContent="center"
          marginTop={10}
          marginBottom={10}
          borderWidth={2}
          boxShadow='2xl'
        >
          <p>Count me in!</p>
        </Button>
        <HStack spacing="auto">
          <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
    Facebook
          </Button>
          <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
    Twitter
          </Button>
          <Button colorScheme='blackAlpha' leftIcon={<FaGithub />}>
    GitHub
          </Button>
        </HStack>

      </Box>
    </Flex>

  )
}
