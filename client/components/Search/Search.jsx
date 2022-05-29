import React, { useEffect, useState } from 'react'
import { Box, Stack, Center, Spinner, Text, Container, Heading, HStack, Input, Button, Wrap,VStack, Tag, Flex } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProjects } from '../../actions/project'
import { capsFirst } from '../utils'
import { regionLookup, categoryLookup } from '../utils/lookup'


export default function Search () {
  const dispatch = useDispatch()

  const { query } = useParams()
  const projects = useSelector(state => state.projects)
  const [data, setData] = useState()

  const [searchParams, setSearchParams] = useState('')
  const navigate = useNavigate()

  async function handleSubmit () {
    navigate(`/projects/search/${searchParams}`)
    setSearchParams('')
  }

  function setPage () {
    dispatch(fetchProjects())
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(async () => {
    setPage()
  }, [])

  if (!projects) {
    return (
      <Center height='100vh'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='orange.500'
          size='xl'
        />
      </Center>)
  } else if (projects.length === 0) {
    return (
      <Center height='100vh'>
        <Text fontWeight='bold' fontSize='lg'>No data</Text>
      </Center>
    )
  } else {
    return (

      <VStack ml={8} mr={8} mb={150}>
        <HStack p={10}>
          <Input
            value={searchParams}
            type={'text'}
            onChange={(e) => {
              setSearchParams(e.target.value)
            }}
            placeholder={'Search for a Project'}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit()
              }
            }}
          />

          <Button onClick={() => {
            handleSubmit()
          }} >Search</Button>
        </HStack>

          {/* <Box border='8px' p={8}> */}
            <VStack direction={['column', 'row']} spacing='24px' ml={8} mr={8}>
                {
                  projects?.filter(post => {
                    if (query === '') {
                      return post
                    } if (post.description.toLowerCase().includes(query.toLowerCase())) {
                      return post
                    } else if (post.project_title.toLowerCase().includes(query.toLowerCase())) {
                      return post
                    }
                  }).map((post, index) => {
                    return <Box
                    key={index}
                    maxWidth={{ base: "350px", md: "575px", lg: "750px" }}
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    justifyContent="space-between"
                    flexDirection="row"
                    overflow='auto'
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
                          position="flex"
                        >
                          {capsFirst(post.project_title)}
                        </Heading>

              <HStack spacing={2} justify={'left'} mb={2}>
              <Wrap >

                <Tag padding={2} variant="outline" colorScheme="green">
                  {categoryLookup(post.category)}
                </Tag>
                <Tag variant="outline" colorScheme="cyan" padding={1}>
                  {regionLookup(post.region)}
                </Tag>

              </Wrap>
            </HStack>
                        <Text w="full">
                          {capsFirst(post.description.substring(0, 250))}...
                        </Text>
            <Button
              onClick={() => navigate(`/projects/${post.id}`)}
              colorScheme="gray"
              fontWeight="bold"
              color="gray.900"
              width="full"
              >
                    Find out more
            </Button>
              </VStack>

                    </Box>
                  })
                }
            </VStack>
          {/* </Box> */}
      </VStack>
    )
  }
}
