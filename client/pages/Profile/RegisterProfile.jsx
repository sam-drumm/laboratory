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

function RegisterProfile () {
  const authUser = useAuth0().user
  const navigate = useNavigate()

  const [addresses, setAddresses] = useState([])
  const [data, setData] = useState('')
  const [selectedAddress, setSelectedAddress] = useState([])

  async function handleChange (e) {
    e.preventDefault()
    if (e.target.value.length > 5) {
      setData({
        [e.target.name]: e.target.value
      })
    }
    return () => (setData(''))
  }

  function handleSelectedAddress (e) {
    e.preventDefault()
    setSelectedAddress(e.target.value)
  }

  useEffect(() => {
    const address = JSON.stringify(data.address)
    getAddresses(address)
      .then(addressList => setAddresses(addressList))
      .catch(err => console.error(err))
  }, [data])

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: ''
    },
    onSubmit: values => {
      registerUser(values, selectedAddress, authUser, navigate)
    },
    validationSchema: registerSchema
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? <p className='inputError'>{formik.errors[inputName]}</p>
      : null
  }

  return (
    <Flex
      width='auto'
      align="center"
      justifyContent="center"
      marginTop={10}
      ml={5}
      mr={5}
    >
      <Box
        p={8}
        minWidth={{ base: '300px', md: '500px', lg: '750px' }}
        borderWidth={2}
        borderRadius={8}
        boxShadow="lg"

      >

        <Box textAlign="centre">
          <Heading>Setup your Profile</Heading>
        </Box>
        <form onSubmit={formik.handleSubmit}>

          <FormControl mt={6} isRequired >
            <FormLabel htmlFor='first-name'>First Name</FormLabel>
            {showAnyErrors('firstName')}
            <Input
              name='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
            ></Input>
          </FormControl>

          <FormControl mt={6} isRequired={'true'}>
            <FormLabel htmlFor='lastName'>Surname</FormLabel>
            {showAnyErrors('lastName')}
            <Input
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
            ></Input>
          </FormControl>

          <FormControl mt={3}>
            <FormLabel htmlFor='address'>Address search</FormLabel>
            <Input
              name='address'
              onChange={handleChange}
              placeholder="Search for your address here"
            />
            <Select
              mt={3}
              variant='outline'
              name='address'
              onChange={handleSelectedAddress}
              placeholder='Select your address'
            >
              {addresses?.map((address) => (
                <option value={JSON.stringify(address)}
                  key={address.formatted}
                  name='address'
                >{address.formatted}</option>
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

export default RegisterProfile
