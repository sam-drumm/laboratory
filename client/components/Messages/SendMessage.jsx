import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  InputLeftAddon,
  InputGroup,
  useDisclosure,
  propNames,
  Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent

} from '@chakra-ui/react'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Must be a valid phone number')
    .required('Phone is required')
    .max(50),
  email: Yup.string().email('Must be a valid email')
    .required('Email is required')
    .max(255),
  userMessage: Yup.string()
    .required('Message is required')
    .max(255)
})

function SendMessage (props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    onSubmit: values => {
      console.log(values)
      return null
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
      <Button

        size='lg'
        width="full"
        alignContent="center"
        marginTop={10}
        marginBottom={10}
        borderWidth={2}
        boxShadow='sm'

        onClick={onOpen}>{props.button}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box width="full">
                <form onSubmit={formik.handleSubmit}>

                  <FormControl mt={6}>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    {showAnyErrors('name')}
                    <Input
                      name='name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      placeholder="enter your first name"
                    ></Input>
                  </FormControl>

                  <FormControl mt={6}>
                    <FormLabel htmlFor='phone'>Phone</FormLabel>
                    {showAnyErrors('phone')}
                    <InputGroup>
                      <InputLeftAddon children='+64' />
                      <Input
                        name='phone'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      >
                      </Input>
                    </InputGroup>
                  </FormControl>

                  <FormControl mt={6}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    {showAnyErrors('email')}
                    <Input
                      name='email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    ></Input>
                  </FormControl>

                  <FormControl mt={6}>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    {showAnyErrors('message')}
                    <Textarea
                      name='message'
                      value={formik.values.userMessage}
                      onChange={formik.handleChange}
                    ></Textarea>
                  </FormControl>

                  <Button
                    width="full"
                    mt={8}
                    type='submit'
                  >
          Send
                  </Button>

                </form>
              </Box>
            </Flex>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} hidden={props.hidden}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SendMessage
