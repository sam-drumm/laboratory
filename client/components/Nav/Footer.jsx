import React from 'react'
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

const Footer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

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
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <a>Co_lab</a>
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>Example</Text>
        <a href='/users' className='nav-link'>Example</a>
        <Text>Example</Text>
        <Text>Example</Text>
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >

      </Box>
    </Flex>
  )
}

export default Footer
