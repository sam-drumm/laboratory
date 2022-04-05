import React from 'react'
import { useSelector } from 'react-redux'
import Registration from './Registration'

export default function Profile () {
  const user = useSelector(globalState => globalState.user)

  return (
    <>
      {
        (<Registration user={user}/>)
      }
    </>
  )
}
