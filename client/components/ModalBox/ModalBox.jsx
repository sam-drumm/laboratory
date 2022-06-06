import React from 'react'
import { Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, Button, ModalFooter, ModalContent, useDisclosure } from '@chakra-ui/react'

export default function ModalBox (props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        variant="outline"
        _hover={{ bg: props.bg, borderColor: props.bc }}
        onClick={onOpen}>{props.button}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.body}
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
