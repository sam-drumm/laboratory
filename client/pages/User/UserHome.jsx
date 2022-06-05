import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProjectByAuthId, getProjectById } from '../../apis/projects'
import UpdateUser from '../Register/UpdateUser'
import Grid from '../Grid/Grid'
import Projects from '../Projects/Projects'
import Following from '../Following/Following'
import NoProjects from './NoProjects'
import MessageHome from '../Messages/MessageHome'
import { userHomeData } from '../Grid/gridData'
import { Button, HStack } from '@chakra-ui/react'

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

  async function getOwnedProjects () {
    await getProjectByAuthId(auth0Id, token)
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
    const projectId = following.split(',').map(Number).filter(filtered => filtered !== 0)
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
      <HStack m={8} spacing={4} justify={'center'}>
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
          (following.length >= 4 ? <Following
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
        <Button onClick={() => setResource(<UpdateUser />)}>
          Your Profile
        </Button>
      </HStack>
      {resource}
    </>
  )
}
