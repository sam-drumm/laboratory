import React from 'react'
import { useSelector } from 'react-redux'
import Registration from '../Registration'

export default function Profile () {
  const user = useSelector(state => state.user)

  return (
    <>
      {
        (<Registration user={user}/>)
      }
    </>
  )
}
