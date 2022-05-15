import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/react'

// import { FiLoader } from 'react-icons/fi'

export default function Waiting () {
  const waiting = useSelector(state => state.waiting)

  return (
    <>
      <div>
        { waiting
          ? <>
            <Spinner

              thickness='50px'
              speed='1s'
              emptyColor='gray.200'
              color='blue.500'
              size='sm'
              ali
              alignContent='centre'
              justifyContent='centre'
              display= 'flex'
              height= "inherit"
              background-color= "white"
              align-items= "center"
            />
          </>
          : '\u00a0' }
      </div>
    </>
  )
}
