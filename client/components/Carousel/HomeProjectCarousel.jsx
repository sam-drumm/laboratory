import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showError } from '../../actions/error'
import { regionLookup, categoryLookup } from '../utils/lookup'

import Carousel from './Carousel'
import {
  Button,
  Flex,
  Heading,
  Wrap,
  Text,
  VStack,
  HStack,
  Tag,
  useBreakpointValue

} from '@chakra-ui/react'
import { getAllProjects } from '../Projects/projectsHelper'
import { capsFirst } from '../utils'
import CountdownTimer from '../Countdown/CountdownTimer'
import { clearWaiting, setWaiting } from '../../actions/waiting'

export default function HomeProjectCarousel () {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function getProjects () {
    dispatch(setWaiting)
    return getAllProjects()
      .then(projects => {
        setData(projects)
        return null
      })
      .catch(err => {
        dispatch(showError(err.message))
        // return false
      })
      .finally(() => {
        dispatch(clearWaiting)
      })
  }

  useEffect(() => {
    getProjects()
  }, [])

  const fourteenDaysMS = 14 * 24 * 60 * 60 * 1000

  return (
    <>

      <Flex flex={1} align={'left'} justify={'left'}>
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
                position="flex"
              >
                {capsFirst(project.project_title)}
              </Heading>

              <Text w="full">
                {capsFirst(project.description.substring(0, 250))}...
              </Text>
            </VStack>

            <Flex justifyContent="space-around" mb={6}>
              <CountdownTimer targetDate={
                (new Date(project.created_at).getTime() + fourteenDaysMS)
              }/>
            </Flex>

            {/* <Flex justifyContent="space-between"> */}

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
              onClick={() => navigate(`./projects/${project.id}`)}
              colorScheme="gray"
              fontWeight="bold"
              color="gray.900"
            >
                    Find out more
            </Button>
          </Flex>
          // </Flex>
        ))}
      </Carousel>

    </>
  )
}
