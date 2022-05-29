import { Input, Button, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar () {
  const [searchParams, setSearchParams] = useState('')
  const navigate = useNavigate()

  async function handleSubmit () {
    navigate(`/projects/search/${searchParams}`)
    setSearchParams('')
  }

  // useEffect(() => {
  //   console.log(searchParams)
  // }, [searchParams])

  return (
    <>
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

    </>

  )
}
