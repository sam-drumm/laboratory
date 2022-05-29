import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { capsFirst } from '../utils'

import Carousel from '../Carousel/Carousel'

import { Button, Flex, Heading, Text, VStack, HStack, Tag, useBreakpointValue, Wrap } from '@chakra-ui/react'
import CountdownTimer from '../Countdown/CountdownTimer'
import { categoryLookup, regionLookup } from '../utils/lookup'

export default function Following (props) {
  const navigate = useNavigate()
  const [follow, setFollow] = useState([])
  const fourteenDaysMS = 14 * 24 * 60 * 60 * 1000

  function findFollowing () {
    setFollow(props.data.filter(follow => follow !== 0))
  }

  useEffect(() => {
    findFollowing()
  }, [])

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
          Pitches you're following.
          </Text>
        </Heading>
      </Flex>

      <Carousel gap={32} >
        {follow.reverse().map((project, index) => (
          <Flex

            key={index}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
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
                {capsFirst(project.projectTitle)}
              </Heading>

              <Text w="full">
                {capsFirst(project.description.substring(0, 250))}...
              </Text>
            </VStack>

            <Flex justifyContent="space-around" mb={6}>
              <CountdownTimer targetDate={
                (new Date(project.createdAt).getTime() + fourteenDaysMS)
              }/>
            </Flex>

            <HStack spacing={2} justify={'left'} mb={2}>
              <Wrap>

                <Tag padding={2} variant="outline" colorScheme="green">
                  {categoryLookup(project.category)}
                </Tag>
                <Tag variant="outline" colorScheme="cyan" padding={1}>
                  {regionLookup(project.region)}
                </Tag>

              </Wrap>
            </HStack>
            <Button
              onClick={() => navigate(`/projects/${project.id}`)}
              colorScheme="grey"
              fontWeight="bold"
              color="gray.900"

            >
                    Find out more
            </Button>
          </Flex>

        ))}
      </Carousel>

    </>
  )
}
