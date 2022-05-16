import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CountdownTimer from '../Countdown/CountdownTimer'
import { fetchProject } from '../../actions/project'
import { useDisclosure, TagLabel, VStack, TagLeftIcon, Box, Heading, Tag, Flex, Button, Tooltip, HStack, Wrap, Stack, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { FcGlobe, FcBinoculars, FcCollaboration, FcSupport, FcIdea, FcLike } from 'react-icons/fc'
import { regionLookup, categoryLookup, skillLookup, seekingLookup, startedLookup } from '../utils/lookup'
import { capsFirst } from '../utils'
import SendMessage from '../Messages/SendMessage'

export default function Project () {
  const dispatch = useDispatch()
  const {
    isOpen: isVisible,
    onOpen
  } = useDisclosure({ defaultIsOpen: false })
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

  function saveHandler (e) {
    e.preventDefault()
    onOpen()
  }

  const createdMS = new Date(createdAt).getTime()
  const fourteenDaysMS = 14 * 24 * 60 * 60 * 1000
  const expiryMS = createdMS + fourteenDaysMS

  useEffect(() => {
    dispatch(fetchProject(id, token))
  }, [])

  useEffect(() => {
    setSkill(skillType.split(',').map(Number))
  }, [region])

  // useEffect(() => {
  // }, [resource])

  return (
    <>

      <Flex width="full" align="center" justifyContent="center" marginBottom={20} padding={10}
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

            <VStack mb={6} className='project-text'>
              <div>
                <b>Project Pitch </b>
                <h2>{capsFirst(description)}</h2>
              </div>

              <div>
                <b>Skills will enable... </b>
                <h2>{capsFirst(skillDescription)} </h2>
              </div>

              <div>
                <b>Success would look like...</b>
                <h2>{capsFirst(success)} </h2>
              </div>
            </VStack>

            <Button rightIcon={<FcCollaboration/>}>
                Pitched by {firstName}, checkout their profile
            </Button>
          </Box>

          <CountdownTimer targetDate={expiryMS}/>

          <HStack>
            <SendMessage
              button="Great, this sounds like me!"
              title={`Contact form for ${projectTitle}`}
              hidden="false" />

            {isVisible ? (
              <Alert status='success'
                borderRadius={'md'}>
                <AlertIcon />
                <Box>
                  <AlertDescription>
          Added to your favorites for later.
                  </AlertDescription>
                </Box>
              </Alert>
            )

              : <Button
                onClick={saveHandler}
                rightIcon={<FcLike/>}
                size='lg'
                width="full"
                alignContent="center"
                marginTop={10}
                marginBottom={10}
                borderWidth={2}
                boxShadow='sm'> Save for later
              </Button>}
          </HStack>

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
    </>

  )
}
