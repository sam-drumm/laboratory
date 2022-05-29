import React, { useEffect, useState } from 'react'
import { Box, Stack, Center, Spinner, Text, Container, Heading, HStack, Input, Button, VStack } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProjects } from '../../actions/project'

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

      <VStack>
        <HStack>
          <Input
            value={searchParams}
            type={'text'}
            onChange={(e) => {
              setSearchParams(e.target.value)
            }}
            placeholder={'Search for anything'}
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

        <Container maxW='container.xl'>
          <Box>
            <Stack spacing='6'>
              <Box >
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
                      p={3}
                      maxW='sm'
                      borderWidth='1px'
                      borderRadius='lg'
                      overflow='hidden'
                      display='flex'
                      alignItems='baseline'
                      key={index}>
                      {post.project_title}
                    </Box>
                  })
                }
              </Box>
            </Stack>
          </Box>
        </Container>
      </VStack>
    )
  }
}
