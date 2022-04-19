import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import { capsFirst } from './utils'
import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag
} from '@chakra-ui/react'

export default function HomeProjectCarousel () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((res) => setData(res))
    return null
  }, [])

  return (
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
  )
}
