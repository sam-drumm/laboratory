import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '../../actions/project'

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Radio,
  RadioGroup,
  Textarea

} from '@chakra-ui/react'

function NewProject () {
  const { auth0Id, token } = useSelector(state => state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [projectTitle, setProjectTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [seeking, setSeeking] = useState('')
  const [purpose, setPurpose] = useState('')
  const [teamEstablished, setTeamEstablished] = useState('')
  const [started, setStarted] = useState('')
  const [skillType, setSkillType] = useState('')
  const [skillDescription, setSkillDescription] = useState('')

  const form = ({
    auth0Id,
    projectTitle,
    category,
    description,
    seeking,
    purpose,
    teamEstablished,
    started,
    skillType,
    skillDescription
  })

  async function handleSubmit (event) {
    event.preventDefault()
    console.log(form)
    try {
      dispatch(addProject(form, token))
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Flex width="full" align="center" justifyContent="center" >
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={2}
        borderRadius={8}
        boxShadow="lg"
      >

        <Box textAlign="centre">
          <Heading> What's your idea?</Heading>
        </Box>
        <form onSubmit={handleSubmit}>

          <FormControl mt={3} isRequired>
            <FormLabel htmlFor='projectTitle'>Project Title</FormLabel>
            <Input
              name='projectTitle'
              onChange={(e) => setProjectTitle(e.target.value)}
              placeholder="e.g. Mural on K’rd, Build an app for Vege Delivery"
            />

          </FormControl>

          <FormControl mt={6} isRequired>
            <FormLabel htmlFor='category' >Category</FormLabel>
            <RadioGroup onChange={setCategory} value={category}>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Radio value='1'>Fun</Radio>
                <Radio value='2'>Application</Radio>
                <Radio value='3'>Community</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <Box textAlign="centre" mt={6}>
            <Heading> Idea Details</Heading>
          </Box>

          <FormControl mt={3} isRequired>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea
              name='description'
              onChange={(e) => setDescription(e.target.value)}
              placeholder='How would you describe your project if you only had 100 words'>
            </Textarea>
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={6}htmlFor='seeking' >Looking for</FormLabel>
            <RadioGroup onChange={setSeeking} value={seeking}>
              <Stack direction='column'>
                <Radio value='1'>Partners to develop the idea and share in any future rewards</Radio>
                <Radio value='2'>Skilled people to develop idea at an agreed rate </Radio>
                <Radio value='3'>Pro-bono or voluntary contributions</Radio>
                <Radio value='4'>I just want some people to spitball with and figure out the rest later</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={6}htmlFor='purpose'>Purpose</FormLabel>
            <RadioGroup onChange={setPurpose} value={purpose}>
              <Stack direction='column'>
                <Radio value='1'>Community benefit non profit</Radio>
                <Radio value='2'>For commercialisation</Radio>
                <Radio value='3'>Just for fun</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={6}htmlFor='teamEstablished'>Team</FormLabel>
            <RadioGroup onChange={setTeamEstablished} value={teamEstablished}>
              <Stack direction='column'>
                <Radio value='1'>I’m looking to add to an established team</Radio>
                <Radio value='2'>I’m looking to form a new team</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={6}htmlFor='started'>Status</FormLabel>
            <RadioGroup onChange={setStarted} value={started} placeholder="Select a post type">
              <Stack direction='column'>
                <Radio value='1'>Brand spanking new idea</Radio>
                <Radio value='2'>Already in motion</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <Box textAlign="centre" mt={6}>
            <Heading>Skills</Heading>
          </Box>

          <FormControl mt={3} isRequired>
            <FormLabel htmlFor='skillType'>Skill Category</FormLabel>
            <Textarea
              name='skillCategory'
              onChange={(e) => setSkillType(e.target.value)}
              placeholder="e.g. Website, Campaiging, Accountancy"
            ></Textarea>
          </FormControl>

          <FormControl mt={3} isRequired>
            <FormLabel htmlFor='skillDescription'>Skill Description</FormLabel>
            <Textarea
              name='skillDescription'
              onChange={(e) => setSkillDescription(e.target.value)}
              placeholder="Someone to Build a Website"
            ></Textarea>
          </FormControl>

          <Button
            width="full"
            mt={8}
            type='submit'
          >
          Register
          </Button>

        </form>
      </Box>
    </Flex>
  )
}

export default NewProject
