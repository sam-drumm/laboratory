import React from 'react'
import ModalBox from '../ModalBox/ModalBox'
import ContactForm from '../Contact/ContactForm'

import { LoremIpsum } from 'react-lorem-ipsum'
import {
  Stack,
  Flex
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      flex="auto"
      marginTop={10}
      as="footer"
      width="100%"
      position="fixed"
      bottom={0}
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="blue.400"
      color="white"
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
