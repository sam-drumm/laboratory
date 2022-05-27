import React from 'react'

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Radio,
  RadioGroup,
  Textarea,
  Select,
  useToast,
  Tooltip,
  Container,
  useBreakpointValue,
  Text
} from '@chakra-ui/react'
import Category from '../Projects/Category'

export default function MessageHome (props) {
  return (

    <>

      <Box p={4} paddingBottom="250px">
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>

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
              {props.headline}
            </Text>
          </Heading>
        </Stack>

        <Heading>
          Inbox (for your projects)
        </Heading>
        <Heading>
          Outbox (Pitches your've contacted )
        </Heading>
      </Box>

    </>
  )
}
