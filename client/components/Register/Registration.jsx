import React from 'react'
import { registerUser } from './registerHelper'
import { useAuth0 } from '@auth0/auth0-react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long')
})

function Registration () {
  const authUser = useAuth0().user
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: ''
    },
    onSubmit: values => {
      registerUser(values, authUser, navigate)
    },
    validationSchema: registerSchema
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? <p className='inputError'>{formik.errors[inputName]}</p>
      : null
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
        <form onSubmit={formik.handleSubmit}>

          <FormControl isRequired>
            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            {showAnyErrors('firstName')}
            <Input
              name='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
            ></Input>
          </FormControl>

          <FormControl isRequired mt={6}>
            <FormLabel htmlFor='lastName'>Surname</FormLabel>
            {showAnyErrors('lastName')}
            <Input
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
            ></Input>
          </FormControl>

          <Button
            width="full"
            mt={8}
            type='submit'
          >
          Register
          </Button>

        </form>
      </Box>
    </Flex>
  )
}

export default Registration
