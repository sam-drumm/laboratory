import React from 'react'
import { useSelector } from 'react-redux'
import Registration from '../../components/Registration'

import { motion } from 'framer-motion'

export default function Profile () {
  const user = useSelector(globalState => globalState.user)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {
        (<Registration user={user}/>)
      }
    </motion.div>
  )
}
