import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth0-utils'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IfAuthenticated, IfNotAuthenticated } from '../Register/Authenticated'

import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure

} from '@chakra-ui/react'
import Waiting from '../Wait/Waiting'

export default function Header (props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin (event) {
    event.preventDefault()
    login()
  }

  function handleLogoff (event) {
    event.preventDefault()
    logout({
      returnTo: window.location.origin
    })
  }

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  return (
    <>
      <IfAuthenticated>
        <Flex
          position="sticky"
          width="100%"
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
              <a href='./'>Co_lab</a>
            </Heading>
          </Flex>

          <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
            <HamburgerIcon />
          </Box>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <a href='/users' className='nav-link'>Find Teams 🧑🏽‍🤝‍🧑🏻</a>
            <a href='/projects/new' className='nav-link'>Pitch an Idea 🧠</a>
            <a href='/users' className='nav-link'>Favorites 💖</a>

          </Stack>

          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, md: 0 }}
          >

            <section className='sign'>

              <Button
                variant="outline"
                _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
              >
                <a href='/' onClick={handleLogoff} className='nav-link'>My Co_Lab</a>
              </Button>
              <Button
                variant="outline"
                _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
              >
                <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
              </Button>
            </section>
          </Box>
        </Flex>
      </IfAuthenticated>

      <IfNotAuthenticated>
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
              <a>Co_lab</a>
            </Heading>
          </Flex>

          <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
            <HamburgerIcon />
          </Box>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 4, md: 1 }}
            display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <Text>mole</Text>
            <a href='/users' className='nav-link'>Users</a>
            <Text>next</Text>
            <Text>quarri3</Text>
          </Stack>

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
        </Flex>
      </IfNotAuthenticated>

    </>
  )
}
