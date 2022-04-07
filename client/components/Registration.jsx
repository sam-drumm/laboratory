import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../apis/users'

import { setUser } from '../actions/user'
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
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  const user = useSelector(state => state.user)

  useEffect(() => {
    setForm({
      auth0Id: user?.auth0Id,
      email: user?.email,
      token: user?.token
    })
  }, [user])

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleSubmit () {
    dispatch(setUser(form))
    try {
      await addUser(form)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
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

        {/* <section className='form'> */}
        <Box textAlign="centre">
          <Heading>Setup your Profile</Heading>
        </Box>
        <form
        // className='registration'
        >
          {/* <label htmlFor='auth0Id'>auth0Id</label>
        <input
        name='auth0Id'
        value={form.auth0Id}
        onChange={handleChange}
        disabled={true}
      ></input> */}
          <FormControl isRequired={true}>

            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            <Input
              name='firstName'

              value={form.firstName}
              onChange={handleChange}
            // disabled={true}
            ></Input>
          </FormControl>

          <FormControl isRequired={true} mt={6}>
            <FormLabel htmlFor='surname'>Surname</FormLabel>
            <Input
              name='surname'
              value={form.surname}
              onChange={handleChange}
            // disabled={true}
            ></Input>
          </FormControl>

          <FormControl isRequired={true} mt={6}>
            <FormLabel htmlFor='userName'>Username</FormLabel>
            <Input
              name='userName'
              value={form.userName}
              onChange={handleChange}
              // disabled={true}
            ></Input>
          </FormControl>
          {/* <label htmlFor='email'>Email</label>
        <input
        name='email'
        value={form.email}
        onChange={handleChange}
        disabled={true}
      ></input> */}

          {/* <label htmlFor='description' >Description</label>
        <textarea
        name='description'
        value={form.description}
        onChange={handleChange}
        cols={3}
      ></textarea> */}

          <Button
            width="full"
            mt={8}
            type='submit'
            variantColor="teal"
            variant="outline"
            onClick={handleSubmit}
          >
          Register
          </Button>
        </form>
        {/* </section> */}
      </Box>
    </Flex>
  )
}

export default Registration
