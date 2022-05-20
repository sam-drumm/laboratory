import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth0-utils'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IfAuthenticated, IfNotAuthenticated } from '../Register/Authenticated'
import { ButtonGroup, Box, Skeleton, Stack, Heading, Flex, Button, useDisclosure, Icon } from '@chakra-ui/react'
import { FcCollaboration, FcGlobe, FcLike } from 'react-icons/fc'

export default function Header (props) {
  const { firstName } = useSelector(state => state.user)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)
  const navigate = useNavigate()

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
          bg="blue.400"
          color="white"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}
              onClick={() => navigate('./')}>Co_lab
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
            <a href='/users' className='nav-link'>Find Teams <Icon as={FcCollaboration} boxSize="1.75em"/></a>
            <a href='/projects/new' className='nav-link'>Pitch an Idea <Icon as={FcGlobe} boxSize="1.75em"/></a>
            <a href='/users' className='nav-link'>Favorites <Icon as={FcLike} boxSize="1.75em"/></a>

          </Stack>
          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, md: 0 }}
          >
            <ButtonGroup spacing={4}>

              <Button
                variant="outline"
                _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
              >
                {(firstName ? <a href='/profile/home'>{firstName}'s Co_Lab</a> : <a href='/profile/home'>Co_Lab</a>) }
              </Button>

              <Button
                variant="outline"
                _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
              >
                <a href='/' onClick={handleLogoff}>Log out</a>
              </Button>
            </ButtonGroup>

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
          bg="blue.400"
          color="white"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <a onClick={() => navigate('./')}>Co_lab</a>
            </Heading>
          </Flex>

          <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
            <HamburgerIcon />
          </Box>

          <ButtonGroup spacing={4}>
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
          </ButtonGroup>

        </Flex>
      </IfNotAuthenticated>

    </>
  )
}
