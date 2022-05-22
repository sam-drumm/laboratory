import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProjectByAuthId, getProjectById } from '../../apis/projects'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { dispatch } from '../../store'
import UpdateUser from '../Register/UpdateUser'
import Grid from '../Grid/Grid'
import Projects from '../Projects/Projects'
import Following from '../Following/Following'
import NoProjects from './NoProjects'
import { featureData } from '../Grid/gridData'
import { Button, HStack } from '@chakra-ui/react'

export default function UserHome () {
  const [userProjects, setUserProjects] = useState([])
  const { auth0Id, token, following } = useSelector(state => state.user)

  const projectId = following.split(',').map(Number).filter(filtered => filtered !== 0)

  const projectArray = []
  const [resource, setResource] = useState(

    <Grid
      features = {featureData}
    />

  )

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

  projectId?.map((id) => {
    dispatch(setWaiting)
    getProjectById(id)
      .then(project => (
        projectArray.push(project)
      ))
      .then(
        dispatch(clearWaiting)
      )
      .catch(err => {
        console.error(err)
      })
  })

  return (
    <>
      <HStack m={8} spacing={4} justify={'center'}>
        <Button onClick={() => setResource(<Grid feature={featureData}/>)}>
            Messages
        </Button>
        <Button onClick={() => setResource(
          (following.length >= 4 ? <Following
            following = {following}
            data={projectArray}
          />
            : <NoProjects/>
          )
        )}>
            Following
        </Button>
        <Button onClick={() => setResource(
          (userProjects.projectByUser.length >= 1 ? <Projects
            props = {userProjects.projectByUser}/>
            : <NoProjects/>)
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
}
