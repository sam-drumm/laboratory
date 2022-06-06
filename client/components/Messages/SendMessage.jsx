import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getRegisterFn, getIsAuthenticated } from '../../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { Flex, FormControl, FormLabel, Button, Textarea, useDisclosure, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, List, ListItem, ListIcon, Tooltip, VStack, useToast } from '@chakra-ui/react'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'
import { addMessage } from '../../actions/message'

function SendMessage (props) {
  const toast = useToast()
  const register = getRegisterFn(useAuth0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [why, setWhy] = useState('')
  const [bring, setBring] = useState('')
  const [share, setShare] = useState('')
  const { auth0Id, token } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const isAuthenticated = getIsAuthenticated(useAuth0)

  const form = ({
    auth0Id,
    id,
    why,
    bring,
    share
  })

  async function handleSubmit (e) {
    e.preventDefault()
    if (isAuthenticated === true) {
      dispatch(addMessage(form, token))
      toast({
        title: "Awesome, we've sent your details on.",
        description: "You can now view more of profile and project details to decide if you're keen to collaborate.",
        status: 'success',
        duration: 10000,
        isClosable: true,
        position: 'top-end'
      })
      navigate('/profile/home')
      onClose()
    } else {
      register()
    }
  }

  return (

    <>
      <Button
        size='lg'
        width="full"
        alignContent="center"
        marginTop={10}
        marginBottom={10}
        borderWidth={2}
        boxShadow='sm'
        onClick={(onOpen)
        }>{props.button}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Flex>
              <VStack>
                <List spacing={3} width='full'>

                  <Tooltip label = "*Why anonymised? We want to build a community that's little less reliant on labels. So we don't share information like age, gender, ethnicity or other identifying info unless you explicitly want to." openDelay={1500} closeDelay={250}>
                    <ListItem>
                      <ListIcon as={RiNumber1} color='green.300' />
                We'll share your anonymised* profile details with {props.firstname}. This helps to better see if your skills, personality and interests fit with the project and the team.</ListItem>
                  </Tooltip>

                  <ListItem>
                    <ListIcon as={RiNumber2} color='green.400'/>
                You'll also get {props.firstname}'s profile details, to build a better sense of if you think you would work well together.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiNumber3} color='green.500' />
                If you both indicate that you're keen to move forward, then we'll unlock profile information so you can meet up online or in real life.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiNumber4} color='green.600' />
                We have a bunch of collaboration tools that you can explore and choose to use if you go forward.
                  </ListItem>
                </List>

                <form onSubmit={handleSubmit}>
                  {/* <VStack> */}
                  <FormControl mt={3} >
                    <FormLabel htmlFor='why'>Why are you keen to get involved?</FormLabel>
                    <Textarea
                      name='why'
                      size='lg'
                      onChange={(e) => setWhy(e.target.value)}
                      type="text"
                      maxLength={250}
                    />
                  </FormControl>

                  <FormControl mt={3} width='full'>
                    <FormLabel htmlFor='bring'>What might be able to bring to the project?</FormLabel>
                    <Textarea
                      name='bring'
                      size='lg'
                      onChange={(e) => setBring(e.target.value)}
                      type="text"
                      maxLength={250}
                    />
                  </FormControl>

                  <FormControl mt={3} >
                    <FormLabel htmlFor='share'>Anything else that you want to share?</FormLabel>
                    <Textarea
                      size='lg'
                      name='share'
                      onChange={(e) => setShare(e.target.value)}
                      type="text"
                      maxLength={250}
                    />
                  </FormControl>

                  <Button
                    width="full"
                    mt={8}
                    type='submit'
                    onClick={handleSubmit}
                  >
                    {(isAuthenticated ? 'Send' : 'You\'ll need to Login first!')}
                  </Button>
                  {/* </VStack> */}

                </form>
              </VStack>
            </Flex>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} hidden={props.hidden}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SendMessage
