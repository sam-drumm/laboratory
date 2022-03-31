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
        <Text>Mole</Text>
        <a href='/users' className='nav-link'>Users</a>
        <Text>Examples</Text>
        <Text>Blog</Text>
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >

        <IfAuthenticated>
          <p>Hello, {user.name} {user.roles ? `(${user.roles})` : null}</p>
          <section className='sign'>
            <Button
              variant="outline"
              _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
            >
              <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
            </Button>
          </section>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <p>Hello, guest</p>
          <section className='sign'>
            <Button
              variant="outline"
              _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
            >
              <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
            </Button>
            <Button
              variant="outline"
              _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
            >
              <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
            </Button>
          </section>
        </IfNotAuthenticated>

      </Box>
    </Flex>
  )
}

export default Header
