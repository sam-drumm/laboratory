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
              thickness='15px'
              speed='.5s'
              emptyColor='gray.200'
              color='blue.500'
              size='lg'
              alignContent='centre'
              justifyContent='centre'
              display= 'flex'
              background-color= "white"
              align-items= "center"
              position= "absolute"
              left= "50%"
              top= "50%"
              height="100px"
              width="100px"

            />
          </>
          : '\u00a0' }
      </div>
    </>
  )
}
