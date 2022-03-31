import React from 'react'
import {Image, Flex, Button, HStack, chakra } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'
import {Link} from 'react-scroll'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useSelector } from 'react-redux'
import data from './data'

const CTA = "Get Started"

function NavCopy () {
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
    <chakra.header id="header">
      <Flex 
      w="100%"
      px="6"
      py="5"
      align="centre"
      justify="space-between"
      >
        <Image src="https://static.wikia.nocookie.net/villains/images/8/87/ECorp.png" h="75px" />
        <HStack as="nav" spacing="5">
          {data.map((item,i) => (
            <Link key={i}>
              <Button variant="nav">{item.label}</Button>
            </Link>
          ))}
        </HStack>
        <HStack>
          <Button>
            {CTA}
          </Button>
        </HStack>
        <HStack>
        <IfAuthenticated>
          <p>Hello, {user.name} {user.roles ? `(${user.roles})` : null}</p>
          <section className='sign'>
            <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
          </section>
        </IfAuthenticated>
        </HStack>
        <HStack>
        <IfNotAuthenticated>
          <p>Hello, guest</p>
          <section className='sign'>
            <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
            <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
          </section>
        </IfNotAuthenticated>
        </HStack>
    </Flex>
    </chakra.header>
  )
}

export default NavCopy
