import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/react'

export default function Waiting () {
  const waiting = useSelector(state => state.waiting)

  return (
    <>
      <div>
        { waiting
          ? <>
            <Spinner
              thickness='5px'
              speed='.5s'
              emptyColor='gray.200'
              color='blue.500'
              size='lg'
              background-color= "white"
              height="100px"
              width="100px"

              alignContent='centre'
              justifyContent='centre'
              display= 'flex'
              align-items= "center"
              position= "absolute"
              left= "50%"
              top= "20%"
            />
          </>
          : '\u00a0' }
      </div>
    </>
  )
}
