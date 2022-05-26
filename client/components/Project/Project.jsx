import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { addFollowing, removeFollowing } from '../Register/updateHelper'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import CountdownTimer from '../Countdown/CountdownTimer'
import { fetchProject } from '../../actions/project'
import { useDisclosure, TagLabel, VStack, TagLeftIcon, Box, Heading, Tag, Flex, Button, Tooltip, HStack, Wrap, Stack, Alert, AlertIcon, AlertDescription, CloseButton, useToast } from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { FcGlobe, FcBinoculars, FcCollaboration, FcSupport, FcIdea, FcLike, FcRedo } from 'react-icons/fc'
import { regionLookup, categoryLookup, skillLookup, seekingLookup, startedLookup } from '../utils/lookup'
import { capsFirst } from '../utils'
import SendMessage from '../Messages/SendMessage'
import { fetchUsers } from '../../actions/user'

export default function Project () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()
  const [userProject, setUserProject] = useState(false)
  const [followed, setFollowed] = useState(false)
  const [skill, setSkill] = useState([])
  const authUser = useAuth0().user
  const { id } = useParams()
  const {
    isOpen: isVisible,
    onOpen,
    onClose
  } = useDisclosure({ defaultIsOpen: false })
  const { projectTitle, region, category, description, seeking, started, success, skillType, skillDescription, createdAt, authId } = useSelector(state => state.project)
  const { token, following, auth0Id } = useSelector(state => state.user)
  const users = useSelector(state => state.users)
  const name = users.find(({ auth0Id }) => auth0Id === authId)
  const createdMS = new Date(createdAt).getTime()
  const fourteenDaysMS = 14 * 24 * 60 * 60 * 1000
  const expiryMS = createdMS + fourteenDaysMS

  async function saveHandler () {
    await addFollowing(following, Number(id), authUser)
    onOpen()
    toast({
      title: 'Added!',
      description: 'We\'ve added this pitch to your follow list.',
      status: 'success',
      duration: 10000,
      isClosable: true,
      position: 'top'
    })
  }

  async function removeHandler () {
    await removeFollowing(following, Number(id), authUser)
    onClose()
    toast({
      title: 'Removed',
      description: 'We\'ve removed this pitch from your follow list.',
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: 'top'
    })
  }


  function setPage () {
    dispatch(fetchUsers())
      .then(
        dispatch(fetchProject(id, token))
      )
      .then(
        setSkill(skillType.split(',').map(Number))
      )
      .catch(err => {
        console.error(err)
      })
  }

  function setOwner () {
    try {
      if (auth0Id === authId) {
        setUserProject(true)
      }
      if (auth0Id !== authId) {
        setUserProject(false)
      }
      if (following.includes(id)) {
        setFollowed(true)
        onOpen()
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setPage()
    setOwner()
  }, [token])

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
            <Heading>{capsFirst(projectTitle)}</Heading>

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

            {userProject ? (
              (null)
            )
              : <Button rightIcon={<FcCollaboration/>}>
                Pitched by {name?.firstName}, checkout their profile
              </Button>
            }
          </Box>

          <CountdownTimer targetDate={expiryMS}/>

          {userProject ? (
            <HStack>
              <Button
                onClick={() => navigate(`/projects/edit/${id}`)}
                rightIcon={<FcRedo/>}
                size='lg'
                width="full"
                alignContent="center"
                marginTop={10}
                marginBottom={10}
                borderWidth={2}
                boxShadow='sm'>
                Edit your Pitch
              </Button>
            </HStack>

          )
            : (

              <HStack>
                <SendMessage
                  button="Great, this sounds like me!"
                  title={`Keen to connect with ${name?.firstName}, who's leading: ${projectTitle}?`}
                  hidden={true}
                  firstname={name?.firstName}
                />

                {isVisible ? (
                  <Alert status='success'
                    borderRadius={'md'}>
                    <AlertIcon />
                    <Box>
                      <AlertDescription>
          Added to your favorites for later.
                      </AlertDescription>
                    </Box>

                    <CloseButton
                      alignSelf='flex-start'
                      position='relative'
                      right={-1}
                      top={-1}
                      onClick={removeHandler}
                    />
                  </Alert>

                )

                  : (
                    <Button
                      onClick={saveHandler}
                      rightIcon={<FcLike/>}
                      size='lg'
                      width="full"
                      alignContent="center"
                      marginTop={10}
                      marginBottom={10}
                      borderWidth={2}
                      boxShadow='sm'> Save for later
                    </Button>
                  )}
              </HStack>

            )}

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
