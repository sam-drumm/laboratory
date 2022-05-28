import React, { useEffect, useState } from 'react'
import { Box, Stack, Center, Spinner, Text, Container } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { searchProjects } from '../../apis/projects'

export default function Search () {
  const params = useParams()
  const [data, setData] = useState()

  useEffect(async () => {
    console.log(params)
    console.log(data)
  }, [data])

  useEffect(async () => {
    searchProjects(params)

    // const { data: posts, error } = await supabase
    //   .from('posts')
    //   .select('*')
    //   .textSearch('post_title', params.query)

    setData()
  }, [])

  if (!data) {
    return (
      <Center height='100vh'>
        <Spinner onl
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='orange.500'
          size='xl'
        />
      </Center>)
  } else if (data.length === 0) {
    return (
      <Center height='100vh'>
        <Text fontWeight='bold' fontSize='lg'>No data</Text>
      </Center>
    )
  } else {
    return (
      <Center>
        <Container maxW='container.xl'>
          <Box>
            <Stack spacing='6'>
              {
                data?.sort((postA, postB) => {
                  return postB.post_votes - postA.post_votes
                })
                  .map((post, index) => {
                    return <p id={post.id} key={post.id} index={index + 1} votes={post.post_votes} title={post.post_title} authorId={post.auth_id} type={post.post_type} url={post.post_url} postCreated={post.created_at} commentsNum={post.no_comments} />
                  })
              }
            </Stack>
          </Box>
        </Container>
      </Center>
    )
  }
}
