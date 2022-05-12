import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showError } from '../../actions/error'
import regionLookup from '../utils/regionLookup'

import Carousel from './Carousel'
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
import { getAllProjects } from '../Projects/projectsHelper'
import { capsFirst } from '../utils'
import CountdownTimer from '../Countdown/CountdownTimer'

export default function HomeProjectCarousel () {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getAllProjects()
      .then(projects => {
        setData(projects)
        return null
      })
      .catch(err => {
        dispatch(showError(err.message))
        return false
      })
  }, [])

  const fourteenDaysMS = 14 * 24 * 60 * 60 * 1000

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
          Live Projects
          </Text>

        </Heading>
      </Flex>

      <Carousel gap={32}>
        {data.reverse().map((project, index) => (
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
              >
                {capsFirst(project.project_title)}
              </Heading>
              <Text w="full">
                {capsFirst(project.description)}
              </Text>
            </VStack>

            <Flex justifyContent="space-around" mb={6}>
              <CountdownTimer targetDate={
                (new Date(project.created_at).getTime() + fourteenDaysMS)
              }/>
            </Flex>

            <Flex justifyContent="space-between">
              <HStack spacing={2}>
                <Tag size="sm" variant="outline" colorScheme="green">
                      Category: {project.category}
                </Tag>
                <Tag size="sm" variant="outline" colorScheme="cyan">
                  {regionLookup(project.region)}
                </Tag>
              </HStack>
              <Button
                onClick={() => navigate(`./projects/${project.id}`)}
                colorScheme="green"
                fontWeight="bold"
                color="gray.900"
                size="sm"
              >
                    Find out more
              </Button>
            </Flex>
          </Flex>
        ))}
      </Carousel>

    </>
  )
}
