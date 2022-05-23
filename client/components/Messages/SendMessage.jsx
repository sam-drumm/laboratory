import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  Flex, Box, FormControl, FormLabel, Input, Button, Textarea, InputLeftAddon, InputGroup, useDisclosure, propNames, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, List, ListItem, ListIcon, Tooltip, VStack
} from '@chakra-ui/react'
import { FcAbout, FcAddDatabase, FcAddressBook, FcAlarmClock, FcCollaboration, FcMakeDecision, FcReadingEbook, FcShare } from 'react-icons/fc'

function SendMessage (props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [why, setWhy] = useState('')
  const [bring, setBring] = useState('')
  const [share, setShare] = useState('')
  const { auth0Id, token } = useSelector(state => state.user)

  const form = ({
    auth0Id,
    why,
    bring,
    share
  })

  async function handleSubmit (e) {
    e.preventDefault()
    onClose()
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

        onClick={onOpen}>{props.button}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <VStack>
              <List spacing={3}>

                <Tooltip label = "*Why anonymised? We want to build a community that's less reliant on labels. So we don't share information like age, gender, ethnicity or other identifying unless it's import to you to share." openDelay={1500} closeDelay={250}>
                  <ListItem>
                    <ListIcon as={FcShare} color='green.500'/>
                We'll share your anonymised* profile details with {props.firstname}. This helps to better see if your skills, personality and interests fit with the project and the team.</ListItem>
                </Tooltip>

                <ListItem>
                  <ListIcon as={FcReadingEbook} />
                You'll get {props.firstname}'s anonymised profile details, to build a better sense of if you think you would work well together.
                </ListItem>
                <ListItem>
                  <ListIcon as={FcMakeDecision} color='green.500' />
                If you both indicate that you're keen to move forward, then we'll unlock profile information so you can meet up online or in real life.
                </ListItem>
                <ListItem>
                  <ListIcon as={FcCollaboration} color='green.500' />
                We have a bunch of collaboration tools that you can explore and choose to use if you go forward.
                </ListItem>
              </List>

              <form onSubmit={handleSubmit}>
                <FormControl mt={3} >
                  <FormLabel htmlFor='why'>Why are you keen to get involved?</FormLabel>
                  <Input
                    name='why'
                    size='lg'
                    onChange={(e) => setWhy(e.target.value)}
                    type="text"
                    maxLength={250}
                  />
                </FormControl>

                <FormControl mt={3} >
                  <FormLabel htmlFor='bring'>Why do you think you might be able to bring?</FormLabel>
                  <Input
                    name='bring'
                    size='lg'
                    onChange={(e) => setBring(e.target.value)}
                    type="text"
                    maxLength={250}
                  />
                </FormControl>

                <FormControl mt={3} >
                  <FormLabel htmlFor='share'>Anything else you want to share?</FormLabel>
                  <Input
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
                >
          Send
                </Button>

              </form>

            </VStack>

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
