import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CountdownTimer from '../Countdown/CountdownTimer'
import { fetchProject } from '../../actions/project'
import { Box, Heading, Tag, Flex, Button, HStack } from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { regionLookup, categoryLookup, skillLookup } from '../utils/lookup'
import { FcCollaboration } from 'react-icons/fc'
import { capsFirst } from '../utils'
import CategoryFinder from './CategoryFinder'

export default function Project () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { token, firstName } = useSelector(state => state.user)
  const [skill, setSkill] = useState('')

  const {
    projectTitle,
    region,
    category,
    description,
    seeking,
    started,
    skillType,
    skillDescription,
    createdAt
  } = useSelector(state => state.project)

  const createdMS = new Date(createdAt).getTime()
  const fourteenDaysMS = 14 * 24 * 60 * 60 * 1000
  const expiryMS = createdMS + fourteenDaysMS

  useEffect(() => {
    dispatch(fetchProject(id, token))
    // setSkill(skillType.split(',').map(Number))
    // const a = skillLookup(skillType)
  }, [])

  useEffect(() => {
    setSkill(skillType.split(',').map(Number))
    // skillType.split(',').map(Number)
    // setSkill(a)
  }, [createdAt])

  // console.log(skillType)
  // console.log(typeof skillType)

  // var mole = a.map((skill) => {
  //   skillLookup(skill)
  // })

  console.log(typeof skillType)
  console.log(skill[0])

  // const a = skill.forEach(element => console.log(element))
  // console.log(a)

  // function lookup()

  // const c = skillLookup.apply(skill)

  // console.log(c)

  return (

    <Flex width="full" align="center" justifyContent="center" marginTop={10} marginBottom={10} padding={10}
    >

      <Box
        p={8}
        maxWidth="750px"
        borderWidth={2}
        borderRadius={8}
        boxShadow="lg"
      >

        <Box
          textAlign="centre"
          width="full"
          alignContent="center"
          marginBottom={10}
        >
          <Heading>{projectTitle}</Heading>
          <HStack mb={4} mt={4}>
            <Tag size="lg" variant="outline" colorScheme="green">
              {regionLookup(region)}
            </Tag>
            <Tag size="lg" variant="outline" colorScheme="cyan">
              {categoryLookup(category)}
            </Tag>
            <Button rightIcon={<FcCollaboration size={25}/>}>
              <p>Pitched by {firstName}, checkout their profile</p>
            </Button>
          </HStack>
          <>
            <p>Hello{(skillLookup(skill[0]))}</p>
            {/* {skill.map(skill => <>{skill}</>)} */}
          </>
          <p>{description}</p>
          <p>{seeking}</p>
          <p>{started}</p>
          {/* {skill} */}
          /
          {skillType}
          {/* {
            seeking.map(function (item, i) {
              console.log('test')
              return <p key={i}>Test</p>
            })
          } */}
          {/* <p>{skill?.map((item) => {
            <>{item}</>
          })}</p> */}
          {/* <CategoryFinder
            items = {skill}
          /> */}
          {/* <p>{skillLookup(skillType)}</p>
          {skillType.map((item) => {
            skillLookup(item)
          })} */}
          <p>{skillDescription}</p>
        </Box>
        <CountdownTimer targetDate={expiryMS}/>
        <Button
          size='lg'
          width="full"
          alignContent="center"
          marginTop={10}
          marginBottom={10}
          borderWidth={2}
          boxShadow='sm'
        >
          <p>Count me in!</p>
        </Button>
        <HStack spacing="auto">
          <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
    Facebook
          </Button>
          <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
    Twitter
          </Button>
          <Button colorScheme='blackAlpha' leftIcon={<FaGithub />}>
    GitHub
          </Button>
        </HStack>

      </Box>
    </Flex>

  )
}
