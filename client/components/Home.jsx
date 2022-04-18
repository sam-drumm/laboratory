import React, { useState, useEffect } from 'react'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
  HStack,
  Tag
} from '@chakra-ui/react'

import Carousel from './Carousel/Carousel'
import { capsFirst } from './Carousel/utils'

export default function SplitScreen () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((res) => setData(res))
    return null
  }, [])

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
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
              Connecting people
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
              to make awesome thing happen
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}>
              Create Project
              </Button>
              <Button rounded={'full'}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>

      <Carousel gap={32}>
        {data.slice(5, 15).map((post, index) => (
          <Flex
            key={index}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            color="gray.300"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <VStack mb={6}>
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                textAlign="left"
                w="full"
                mb={2}
              >
                {capsFirst(post.title)}
              </Heading>
              <Text w="full">{capsFirst(post.body)}</Text>
            </VStack>

            <Flex justifyContent="space-between">
              <HStack spacing={2}>
                <Tag size="sm" variant="outline" colorScheme="green">
                      User: {post.userId}
                </Tag>
                <Tag size="sm" variant="outline" colorScheme="cyan">
                      Post: {post.id - 5}
                </Tag>
              </HStack>
              <Button
                onClick={() => alert(`Post ${post.id - 5} clicked`)}
                colorScheme="green"
                fontWeight="bold"
                color="gray.900"
                size="sm"
              >
                    More
              </Button>
            </Flex>
          </Flex>
        ))}
      </Carousel>
    </>
  )
}
