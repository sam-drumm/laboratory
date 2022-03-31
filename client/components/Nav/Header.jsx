import React from 'react'
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Image
} from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth0-utils'
import { useSelector } from 'react-redux'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())
  const user = useSelector(state => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin (event) {
    event.preventDefault()
    login()
  }

  function handleLogoff (event) {
    event.preventDefault()
    logout()
  }

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  return (
    <Flex
      as="nav"
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
          <Image src="https://static.wikia.nocookie.net/villains/images/8/87/ECorp.png" h="75px" />
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
        <Text>Docs</Text>
        <a href='/' className='nav-link'>Log out</a>
        <Text>Examples</Text>
        <Text>Blog</Text>
        <IfAuthenticated>
          <p>Hello, {user.name} {user.roles ? `(${user.roles})` : null}</p>
          <section className='sign'>
            <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
          </section>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <p>Hello, guest</p>
          <section className='sign'>
            <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
            <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
          </section>
        </IfNotAuthenticated>
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
        >
          Create account
        </Button>
      </Box>
    </Flex>
  )
}

export default Header
