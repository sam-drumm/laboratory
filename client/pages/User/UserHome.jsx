import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProjectByAuthId, getProjectById } from '../../apis/projects'
import { userHomeData } from '../../components/Grid/gridData'
import { Button, Stack } from '@chakra-ui/react'

import UpdateProfile from '../Profile/UpdateProfile'
import Grid from '../../components/Grid/Grid'
import Projects from '../Projects/Projects'
import Following from '../../components/Following/Following'
import NoProjects from './NoProjects'
import MessageHome from '../../components/Messages/MessageHome'

export default function UserHome () {
  const [userProjects, setUserProjects] = useState([])
  const [followed, setFollowed] = useState([])
  const { auth0Id, token, following } = useSelector(state => state.user)
  const [resource, setResource] = useState(
    <Grid
      features = {userHomeData}
      headline = "Your Co_Lab Home"
      following="Dreams are for free but where can you find the people that can help to make them happen? Co_lab was built to connect people and turn ideas into reality."
    />
  )

  function getOwnedProjects () {
    getProjectByAuthId(auth0Id, token)
      .then(projects => {
        setUserProjects(projects)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }

  async function getFollowedProjects () {
    // const projectId = following?.toString().split(',').map(Number).filter(filtered => filtered !== 0)
    const projectId = following?.filter(filtered => filtered !== 0)
    const projectArray = []
    projectId.map((id) => {
      getProjectById(id)
        .then(project => (
          projectArray.push(project)
        ))
        .then(
          setFollowed(projectArray)
        )
        .catch(err => {
          console.error(err)
        })
    })
  }

  useEffect(() => {
    getOwnedProjects()
  }, [auth0Id])

  useEffect(() => {
    getFollowedProjects()
  }, [following])

  useEffect(() => {
  }, [resource])

  return (

    <>
      <Stack
        m={8}
        spacing={4}
        justify={'center'}
        direction={{ base: 'column', md: 'row' }}
      >
        <Button
          onClick={() => setResource(
            <Grid
              features = {userHomeData}
              headline = "Your Co_Lab Home"
              following="Dreams are for free but where can you find the people that can help to make them happen? Co_lab was built to connect people and turn ideas into reality."
            />
          )}
        >
         Home
        </Button>
        <Button
          onClick={() => setResource(<MessageHome headline="Messages"/>)}>
          Messages
        </Button>
        <Button onClick={() => setResource(
          (following.length >= 3 ? <Following
            following = {following}
            data={followed}
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
        <Button onClick={() => setResource(<UpdateProfile />)}>
          Your Profile
        </Button>
      </Stack>
      {resource}
    </>
  )
}
