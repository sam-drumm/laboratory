import React, { useEffect, useState } from 'react'
import { registerUser } from './registerHelper'
import { getAddresses } from '../../apis/address'
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
  Button,
  Select
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
  const [addresses, setAddresses] = useState([])
  const [data, setData] = useState('')

  async function handleChange (e) {
    e.preventDefault()
    if (e.target.value.length > 5) {
      setData({
        [e.target.name]: e.target.value
      })
    }
  }

  useEffect(() => {
    console.log('mole')
    getAddresses(data)
      .then(addressList => setAddresses(addressList))
      .catch(err => console.error(err))
  }, [data])

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      street_number: '',
      street: '',
      locality: '',
      city: '',
      region: '',
      postcode: '',
      meshblock: '',
      lon: null,
      lat: null,
      formatted: ''
    },
    onSubmit: values => {
      registerUser(values, authUser, navigate)
    },
    validationSchema: registerSchema
  })

  console.log(data)

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

          <FormControl>
            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            {showAnyErrors('firstName')}
            <Input
              name='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="enter your first name"
            ></Input>
          </FormControl>

          <FormControl mt={6}>
            <FormLabel htmlFor='lastName'>Surname</FormLabel>
            {showAnyErrors('lastName')}
            <Input
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="enter your last name"
            ></Input>
          </FormControl>

          <FormControl mt={3} isRequired>
            <FormLabel htmlFor='address'>Address</FormLabel>
            <Input
              name='address'
              onChange={handleChange}
              placeholder="Search for your address here"
            />
            <Select>
              {addresses.map((address) => (
                <option key={address.key}>{address.formatted}</option>
              ))}
            </Select>
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
