import React from 'react'
import { Stack, Flex } from '@chakra-ui/react'
import { LoremIpsum } from 'react-lorem-ipsum'

import ModalBox from '../ModalBox/ModalBox'
import ContactForm from '../Contact/ContactForm'

const Footer = () => {
  return (
    <Flex
      flex="auto"
      position="fixed"
      as="footer"
      width="100%"
      bottom={0}
      wrap="wrap"
      padding={4}
      bg="blue.400"
      color="white"
      zIndex={2}
    >
      <Stack
        direction='row'
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <ModalBox
          bc = "white"
          bg = "blue.200"
          button="Contact"
          title="Contact"
          body= {<ContactForm />}
          hidden= {true}
        />
        <ModalBox
          bc = "white"
          bg = "blue.200"
          button="Legal"
          title="Legal Information"
          body= {<LoremIpsum p='1' />}
        />
      </Stack>
    </Flex>
  )
}

export default Footer
