import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CountdownTimer from '../Countdown/CountdownTimer'
import { fetchProject } from '../../actions/project'
import { Box, Heading, Tag, Flex, Button, HStack, Stack } from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { regionLookup, categoryLookup, skillLookup } from '../utils/lookup'
import { FcCollaboration } from 'react-icons/fc'

export default function Project () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { token, firstName } = useSelector(state => state.user)
  const [skill, setSkill] = useState([])

  const {
    projectTitle,
    region,
    category,
    description,
    seeking,
    started,
    skillType,
    skillDescription,
    createdAt
  } = useSelector(state => state.project)

  const createdMS = new Date(createdAt).getTime()
  const fourteenDaysMS = 14 * 24 * 60 * 60 * 1000
  const expiryMS = createdMS + fourteenDaysMS

  useEffect(() => {
    dispatch(fetchProject(id, token))
  }, [])

  useEffect(() => {
    setSkill(skillType.split(',').map(Number))
  }, [region])

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
          marginBottom={10}
        >
          <Heading>{projectTitle}</Heading>
          <HStack mb={4} mt={4}>
            <Tag size="lg" variant="outline" colorScheme="green">
              {regionLookup(region)}
            </Tag>
            <Tag size="lg" variant="outline" colorScheme="cyan">
              {categoryLookup(category)}
            </Tag>
            <Button rightIcon={<FcCollaboration size={25}/>}>
              <p>Pitched by {firstName}, checkout their profile</p>
            </Button>
          </HStack>

          <p>{description}</p>
          <p>{seeking}</p>
          <p>{started}</p>
          <HStack mt={4}>
            {skill.map((item, i) =>
              <Tag variant='outline'
                mr={2} size='lg' key={i}>{skillLookup(item)}</Tag>
            )}
          </HStack>

        </Box>
        <CountdownTimer targetDate={expiryMS}/>
        <Button
          size='lg'
          width="full"
          alignContent="center"
          marginTop={10}
          marginBottom={10}
          borderWidth={2}
          boxShadow='sm'
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
