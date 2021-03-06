import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { getRegisterFn } from '../../auth0-utils'
import { Box, Button, Container, Heading, SimpleGrid, Icon, Text, Stack, HStack, VStack, useBreakpointValue, Flex } from '@chakra-ui/react'
import { IfAuthenticated, IfNotAuthenticated } from '../Register/Authenticated'

export default function Grid (props) {
  const register = getRegisterFn(useAuth0)
  const navigate = useNavigate()

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  return (

    <Flex
      w={'90%'}
      margin={'auto'}
      mb={20}
      flex={1}
      direction='column'
      position='relative'
      p={8}
    >

      <Stack
        spacing={4}
        as={Container}
        maxW={'5xl'}
        textAlign={'center'}
        w={'full'}
      >
        {props.headline ? (
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              left={1}
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
              }}
            >
              {props.headline}
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              {props.tag}
            </Text>{' '}
          </Heading>
        )
          : <></>
        }

        <Text color={'gray.600'} fontSize={'xl'}>
          {props.following}
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10} paddingBottom="75px"
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {props.features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={feature.icon} boxSize="2em"/>
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        margin='auto'
      >
        <IfAuthenticated>
          <Button
            onClick={() => navigate('/profile/home')}>
        My Co_Lab
          </Button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Button onClick={handleRegister}>
          Join Now
          </Button>
        </IfNotAuthenticated>
        <Button
          onClick={() => navigate('/projects/search')
          }>
          Search Project Pitches
        </Button>
        <Button
          onClick={() => navigate('/projects/new')
          }>
          Pitch Your Project
        </Button>
      </Stack>
    </Flex>
  )
}
