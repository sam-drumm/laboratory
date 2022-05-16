import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { updateUser } from './updateHelper'
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
  Select,
  useBreakpointValue,
  Text
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

function UpdateUser () {
  const authUser = useAuth0().user
  const { firstName, lastName, addressFormatted } = useSelector(state => state.user)
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
      updateUser(values, selectedAddress, authUser, navigate)
    },
    validationSchema: registerSchema
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? <p className='inputError'>{formik.errors[inputName]}</p>
      : null
  }

  return (
    <>
      <Flex p={8} flex={1} align={'left'} justify={'center'}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          <Text
            left={1}
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1
            }}>Update your Details</Text>
        </Heading>
      </Flex>

      <Flex width="full" align="center" justifyContent="center" marginTop={5}>
        <Box
          p={8}
          minWidth='500px'
          maxWidth="500px"
          borderWidth={2}
          borderRadius={8}
          boxShadow="lg"
        >

          {/* <Box textAlign="centre">
          <Heading>Update your Details</Heading>
        </Box> */}
          <form onSubmit={formik.handleSubmit}>

            <FormControl mt={6}>
              <FormLabel htmlFor='firstName'>First Name</FormLabel>
              {showAnyErrors('firstName')}
              <Input
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                placeholder={firstName}
              ></Input>
            </FormControl>

            <FormControl mt={6}>
              <FormLabel htmlFor='lastName'>Surname</FormLabel>
              {showAnyErrors('lastName')}
              <Input
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                placeholder={lastName}
              ></Input>
            </FormControl>

            <FormControl mt={3}>
              <FormLabel htmlFor='address'>Address search</FormLabel>
              <Input
                name='address'
                onChange={handleChange}
                placeholder={addressFormatted}
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
          Update
            </Button>

          </form>
        </Box>
      </Flex>
    </>
  )
}

export default UpdateUser
