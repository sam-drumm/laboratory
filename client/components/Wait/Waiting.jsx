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
              size='md'

              alignContent='centre'
              justifyContent='centre'
              display= 'flex'
              height= "inherit"
              background-color= "white"
              align-items= "center"
              position= "absolute"
              // left= "50%"
              // top= "50%"
              // height="60px"
              // width="60px"
              // margin="0px auto"
              // animation= "rotation .6s infinite linear"
              //  border-left=6px solid rgba(0,174,239,.15);
              //  border-right=6px solid rgba(0,174,239,.15);
              //  border-bottom=6px solid rgba(0,174,239,.15);
              //  border-top=6px solid rgba(0,174,239,.8);
              //  border-radius=100%;
            />
          </>
          : '\u00a0' }
      </div>
    </>
  )
}
