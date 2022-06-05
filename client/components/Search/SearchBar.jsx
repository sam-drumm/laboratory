import { Input, Button, HStack, VStack, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar () {
  const [searchParams, setSearchParams] = useState('')

  const navigate = useNavigate()

  async function handleSubmit () {
    navigate(`/projects/search/${searchParams}`)
    setSearchParams('')
  }

  return (
    <>
      <VStack>
        <HStack width='full'>
          <InputGroup size = 'lg'>
            <Input
              pr='4.5rem'
              value={searchParams}
              type={'text'}
              onChange={(e) => {
                setSearchParams(e.target.value)
              }}
              placeholder={'Search for projects'}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit()
                }
              }}
            />
            <InputRightElement width='5rem'>
              <Button
                h='1.75rem'
                size='sm'
                onClick={() => { handleSubmit() }} >Search</Button>
            </InputRightElement>
          </InputGroup>
        </HStack>
      </VStack>

    </>

  )
}
