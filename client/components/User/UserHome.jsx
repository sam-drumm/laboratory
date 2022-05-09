import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProjectByAuthId } from '../../apis/projects'
import Carousel from '../Carousel/Carousel'
import { capsFirst } from '../utils'

import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag
  // useBreakpointValue
} from '@chakra-ui/react'

export default function UserHome () {
  const [userProjects, setUserProjects] = useState([])
  const { auth0Id, token, firstName } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    getProjectByAuthId(auth0Id, token)
      .then(projects => {
        setUserProjects(projects)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [auth0Id])

  if (auth0Id) {
    return (
      <>
        <p>Hey {firstName}</p>
        <Heading>
            Your Projects
        </Heading>

        <Carousel gap={32}>
          {userProjects.projectByUser?.map((post, index) => (
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
                  {capsFirst(post.project_title)}
                </Heading>
                <Text w="full">
                  {capsFirst(post.description)}
                </Text>
              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>
                  <Tag size="sm" variant="outline" colorScheme="green">
                      Category: {post.category}
                  </Tag>
                  <Tag size="sm" variant="outline" colorScheme="cyan">
                      Location: {post.region}
                  </Tag>
                </HStack>
                <Button
                  onClick={() => navigate(`./projects/${post.id}`)}
                  colorScheme="green"
                  fontWeight="bold"
                  color="gray.900"
                  size="sm"
                >
                    Edit
                </Button>
              </Flex>
            </Flex>
          ))}
        </Carousel>

        <Heading>
            Projects you're Following
        </Heading>


      </>

    )
  } else {
    return (
      <p>Mole</p>
    )
  }
}
