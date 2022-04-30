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
            <img src='./images/Mr_Robot_Logo.png' />
            <Spinner
              thickness='500px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </>
          : '\u00a0' }
      </div>
    </>
  )
}
