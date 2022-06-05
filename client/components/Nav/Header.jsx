import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from '../Register/Authenticated'
import { ButtonGroup, Box, Stack, Heading, Flex, Button, useDisclosure, Icon, Link } from '@chakra-ui/react'
import { FcCollaboration, FcGlobe, FcLike } from 'react-icons/fc'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Header () {
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

  function handleHome (e) {
    e.preventDefault()
    firstName ? navigate('./profile/home') : navigate('./')
  }

  return (

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
      <Link align="center" mr={5} onClick={() => navigate('./')}>
        <Heading size="lg" letterSpacing={'tighter'}>Co_lab
        </Heading>
      </Link>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={8}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <IfAuthenticated>
          <Link onClick={() => navigate('/projects/new')} className='nav-link'>Pitch an Idea <Icon as={FcGlobe} boxSize="1.75em"/></Link>
          <Link onClick={() => navigate('/profile/home')} className='nav-link'>Favorites <Icon as={FcLike} boxSize="1.75em"/></Link>
          <Link onClick={() => navigate('/projects/search')} className='nav-link'>Search Projects <Icon as={FcCollaboration} boxSize="1.75em"/></Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link onClick={() => navigate('/projects/new')} className='nav-link'>Pitch an Idea <Icon as={FcGlobe} boxSize="1.75em"/></Link>
          <Link onClick={() => navigate('/projects/search')} className='nav-link'>Search Projects <Icon as={FcCollaboration} boxSize="1.75em"/></Link>
        </IfNotAuthenticated>
      </Stack>

      <IfAuthenticated>

        <ButtonGroup
          spacing={4}
          display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        >
          <Button
            variant="outline"
            _hover={{ bg: 'blue.200', borderColor: 'white' }}
            onClick = {handleHome}>
            {(firstName ? `${firstName}'s Co_Lab` : 'Co_Lab') }
          </Button>

          <Button
            onClick={handleLogoff}
            href='./'
            variant="outline"
            _hover={{ bg: 'blue.200', borderColor: 'white' }}>Log out
          </Button>
        </ButtonGroup>

      </IfAuthenticated>

      <IfNotAuthenticated>

        <ButtonGroup spacing={4}>
          <Button
            onClick={handleLogin}
            href='./'
            variant="outline"
            _hover={{ bg: 'blue.200', borderColor: 'white' }}>Login
          </Button>
          <Button
            onClick={handleRegister}
            href='./'
            variant="outline"
            _hover={{ bg: 'blue.200', borderColor: 'white' }}>Join Co_lab
          </Button>
        </ButtonGroup>

      </IfNotAuthenticated>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon/>
      </Box>

    </Flex>

  )
}
