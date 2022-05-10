import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProjectByAuthId } from '../../apis/projects'
import UpdateUser from '../Register/UpdateUser'
import Grid from '../Grid/Grid'
import Projects from '../Projects/Projects'

import {
  Button,

  Heading,

  HStack,
  VStack

} from '@chakra-ui/react'

export default function UserHome () {
  const [userProjects, setUserProjects] = useState([])
  const [resource, setResource] = useState(<Grid />)
  const { auth0Id, token } = useSelector(state => state.user)

  useEffect(() => {
  }, [resource])

  useEffect(() => {
    getProjectByAuthId(auth0Id, token)
      .then(projects => {
        setUserProjects(projects)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [auth0Id])

  if (auth0Id) {
    return (
      <>
        <HStack spacing={4}>
          <Button onClick={() => setResource(<Grid />)}>
            Messages
          </Button>
          <Button onClick={() => setResource(<Grid />)}>
            Following
          </Button>
          <Button onClick={() => setResource(
            <Projects
              props = {userProjects.projectByUser}
            />
          )}>
            Your Projects
          </Button>
          <Button onClick={() => setResource(<UpdateUser />)}>
          Update your Profile
          </Button>
        </HStack>

        {resource}

      </>

    )
  } else {
    return (
      <p>Mole</p>
    )
  }
}
