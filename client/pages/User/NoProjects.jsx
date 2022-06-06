import React from 'react'
import { featureData } from '../../components/Grid/gridData'
import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import Grid from '../../components/Grid/Grid'

export default function NoProjects () {
  return (
    <>

      <Flex mt={8} flex={1} align={'left'} justify={'center'}>
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
            }}>No project pitches right now,</Text>
          <br />{''}
          <Text color={'blue.400'} as={'span'}>
  why not kick one off?
          </Text>{''}
        </Heading>
      </Flex>
      <Grid features = {featureData}/>
    </>

  )
}
