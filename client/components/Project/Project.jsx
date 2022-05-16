import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CountdownTimer from '../Countdown/CountdownTimer'
import { fetchProject } from '../../actions/project'
import { TagLabel, VStack, TagLeftIcon, Box, Heading, Tag, Flex, Button, Tooltip, HStack, Wrap, Stack } from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { FcGlobe, FcBinoculars, FcBullish, FcCollaboration, FcSupport, FcIdea } from 'react-icons/fc'
import { regionLookup, categoryLookup, skillLookup, seekingLookup, startedLookup } from '../utils/lookup'
import { FacebookShareButton } from 'react-share'
import { capsFirst } from '../utils'

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
    success,
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

          <Stack mb={4} mt={4} direction={['column', 'row']} >
            <Wrap>
              <Tag variant="outline" colorScheme="green">
                <TagLeftIcon as={FcGlobe}/>
                <TagLabel>Member located in {regionLookup(region)}</TagLabel>
              </Tag>
              {skill.map((item, i) =>
                <Tooltip label='These are the skills the project is seeking' key={i} openDelay={1500} closeDelay={250}>
                  <Tag variant='outline' colorScheme="pink">
                    <TagLeftIcon as={FcSupport}/>
                    <TagLabel>{skillLookup(item)}</TagLabel>
                  </Tag>
                </Tooltip>
              )}
              <Tag variant="outline" colorScheme="yellow">
                <TagLeftIcon as={FcIdea}/>
                <TagLabel>{startedLookup(started)}</TagLabel>
              </Tag>
              <Tag variant="outline" colorScheme="cyan">
                Purpose is {categoryLookup(category)}
              </Tag>
              <Tag variant='outline' colorScheme='gray'>
                <TagLeftIcon as={FcBinoculars} />
                <TagLabel>Seeking {seekingLookup(seeking)}</TagLabel>
              </Tag>
            </Wrap>
          </Stack>

          <VStack mb={6}>
            <div>
              <p>My Pitch: {description}</p>
            </div>

            <div>
              <h2>Success looks like: {success} </h2>
            </div>

            <div>
              <h2>How could these skills be used: {skillDescription} </h2>
            </div>

          </VStack>

          <VStack align={'left'} width='auto' >
            <Button rightIcon={<FcCollaboration/>}>
                Pitched by {firstName}, checkout their profile
            </Button>

          </VStack>

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
