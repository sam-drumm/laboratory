import React from 'react'
import { Flex, Box, VStack, Heading, Stack, useBreakpointValue, Text } from '@chakra-ui/react'

export default function MessageHome (props) {
  return (

    <Stack
      p={8}
    >
      <VStack margin={'auto'}>
        <Heading
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          width='full'
          mb={4}
        >
          <Text
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
            {props.headline}
          </Text>
        </Heading>
      </VStack>

      <Flex width='full' align="center" justifyContent="center">
        <Box
          mb={125}
          p={8}
          minWidth={{ base: '300px', md: '500px', lg: '750px' }}
          borderWidth={2}
          borderRadius={8}
          boxShadow="lg"

        >

          <Heading>
          Inbox
          </Heading>
          <Heading>
          Outbox
          </Heading>
        </Box>
      </Flex>
    </Stack>
  )
}
