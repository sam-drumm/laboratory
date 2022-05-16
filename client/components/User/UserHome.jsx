import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProjectByAuthId } from '../../apis/projects'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { dispatch } from '../../store'
import UpdateUser from '../Register/UpdateUser'
import Grid from '../Grid/Grid'
import Projects from '../Projects/Projects'
import NoProjects from './NoProjects'
import { featureData } from '../Grid/gridData'
import { Button, HStack } from '@chakra-ui/react'

export default function UserHome () {
  const [userProjects, setUserProjects] = useState([])
  const [resource, setResource] = useState(<Grid
    features = {featureData}
  />)
  const { auth0Id, token } = useSelector(state => state.user)

  useEffect(() => {
  }, [resource])

  useEffect(() => {
    dispatch(setWaiting)
    getProjectByAuthId(auth0Id, token)
      .then(projects => {
        setUserProjects(projects)
        dispatch(clearWaiting)
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
        <HStack m={8} spacing={4} justify={'center'}>
          <Button onClick={() => setResource(<Grid feature={featureData}/>)}>
            Messages
          </Button>
          <Button onClick={() => setResource(<Grid />)}>
            Following
          </Button>
          <Button onClick={() => setResource(
            (userProjects.projectByUser === null ? <Projects
              props = {userProjects.projectByUser}/>
              : <> <NoProjects/>
              </>)
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
