import React, { useEffect, useState } from 'react'
import {
  useSelector
} from 'react-redux'
import { registerUser } from './registerHelper'
import { useAuth0 } from '@auth0/auth0-react'

import { useNavigate } from 'react-router-dom'

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'

function Registration () {
  const authUser = useAuth0().user
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  const user = useSelector(state => state.user)

  useEffect(() => {
    setForm({
      firstName: '',
      lastName: ''
    })
  }, [user])

  function handleChange (e) {
    e.preventDefault()
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleSubmit () {
    registerUser(form, authUser, navigate)
  }

  return (
    <Flex width="full" align="center" justifyContent="center" >
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={2}
        borderRadius={8}
        boxShadow="lg"
      >

        <Box textAlign="centre">
          <Heading>Setup your Profile</Heading>
        </Box>
        <form>

          <FormControl isRequired={true}>
            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            <Input
              name='firstName'
              value={form.firstName}
              onChange={handleChange}
            ></Input>
          </FormControl>

          <FormControl isRequired={true} mt={6}>
            <FormLabel htmlFor='lastName'>Surname</FormLabel>
            <Input
              name='lastName'
              value={form.lastName}
              onChange={handleChange}
            ></Input>
          </FormControl>

          <Button
            width="full"
            mt={8}
            type='button'
            onClick={handleSubmit}
          >
          Register
          </Button>

        </form>
      </Box>
    </Flex>
  )
}

export default Registration
