import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { getProjectByAuthId } from '../../apis/projects'
import { capsFirst } from '../utils'

import Carousel from '../Carousel/Carousel'

import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  useBreakpointValue
} from '@chakra-ui/react'

export default function Projects (props) {
  //   const { userProjects } = props
  //   const [userProjects, setUserProjects] = useState([])
  //   const { auth0Id, token } = useSelector(state => state.user)
  const navigate = useNavigate()
  //   setUserProjects(props)

  console.log(props.props)
  const data = props.props
  //   useEffect(() => {
  //     getProjectByAuthId(props.auth0Id, props.token)
  //       .then(projects => {
  //         setUserProjects(projects)
  //         return null
  //       })
  //       .catch(err => {
  //         console.error(err)
  //         return false
  //       })
  //   }, [props.auth0Id])



  return (
<>
          <Flex p={8} flex={1} align={'left'} justify={'left'}>
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
            }}
          >
          Your Projects
          </Text>

        </Heading>
      </Flex>

    <Carousel gap={32}>
      {data?.map((post, index) => (
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
    </>
  )
}
