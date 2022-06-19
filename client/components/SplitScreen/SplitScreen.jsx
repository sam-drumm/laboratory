import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'

export default function SplitScreen (props) {
  const navigate = useNavigate()

  return (
    <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>

      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
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
              }}>
              {props.header}
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              {props.tag}
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            {props.message}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              onClick={() => navigate(`${props.navOne}`)}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500'
              }}>
              {props.buttonOne}
            </Button>
            <Button
              rounded={'full'}>{props.buttonTwo}
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image
          alt={'People shaking hands and connecting'}
          objectFit={'cover'}
          src={props.image}
        />
      </Flex>

    </Stack>
  )
}
