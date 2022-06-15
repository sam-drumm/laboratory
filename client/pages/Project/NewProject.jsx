import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  // useDispatch,
  useSelector
} from 'react-redux'
// import { addProject } from '../../actions/project'
import { addProject } from '../Project/projectHelper'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Stack, Radio, RadioGroup, Textarea, Select, useToast } from '@chakra-ui/react'

import Category from '../../components/Category/Category'

function NewProject () {
  const toast = useToast()
  const {
    auth0Id
  } = useSelector(state => state.user)

  const navigate = useNavigate()

  const [projectTitle, setProjectTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [success, setSuccess] = useState('')
  const [seeking, setSeeking] = useState('')
  const [teamEstablished, setTeamEstablished] = useState('')
  const [started, setStarted] = useState('')
  const [skillDescription, setSkillDescription] = useState('')
  const [region, setRegion] = useState('')

  const [selectedItems, setSelectedItems] = useState([])

  const skillType = selectedItems.map(skill =>
    skill.value
  )

  const newProject = ({
    auth0Id,
    projectTitle,
    category,
    description,
    success,
    seeking,
    // purpose,
    teamEstablished,
    started,
    skillType,
    skillDescription,
    region
  })

  function handleSubmit (e) {
    e.preventDefault()
    if (skillType.length >= 2) {
      try {
        addProject(newProject)
        navigate('/')
        // dispatch(addProject(form, token))
        toast({
          title: 'Your pitch is live',
          description: 'You can find your pitch in your user home, under your projects tab.',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top'
        })
        // setProjectTitle('')
        // setCategory('')
        // setDescription('')
        // setSuccess('')
        // setSeeking('')
        // setPurpose('')
        // setTeamEstablished('')
        // setStarted('')
        // setSkillDescription('')
        // setRegion('')
        // setSelectedItems([])
      } catch (err) {
        console.error(err)
      }
    } else {
      toast({
        title: 'Double-check the skills section.',
        description: 'You need to add at least two skills that you\'re seeking.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
        position: 'top'
      })
      return null
    }
  }

  return (
    <>
      <Flex
        width="full"
        align="center"
        justifyContent="center"
        marginTop={10}
        marginBottom={110}
      >
        <Box
          p={8}
          width="500px"
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
                type="text"
                maxLength={75}
              />

            </FormControl>

            <FormControl mt={6} isRequired>
              <FormLabel htmlFor='category' >Category</FormLabel>
              <RadioGroup onChange={setCategory} value={category}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Radio value='1'>Just for Fun</Radio>
                  <Radio value='2'>Commercial</Radio>
                  <Radio value='3'>Community</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl mt={6} isRequired>
              <FormLabel htmlFor='region'>Nearest Region</FormLabel>
              <Select
                defaultValue={0}
                name='region'
                onChange={(e) => setRegion(e.target.value)}>

                <option value="0">Select you nearest region</option>
                <option value="4">Northland - Dargaville</option>
                <option value="2">Northland - Kaikohe</option>
                <option value="1">Northland - Kaitaia</option>
                <option value="3">Northland - Kawakawa</option>
                <option value="120">Northland - Kerikeri</option>
                <option value="173">Northland - Mangawhai</option>
                <option value="6">Northland - Maungaturoto</option>
                <option value="121">Northland - Paihia</option>
                <option value="5">Northland - Whangarei</option>
                <option value="0"> </option>
                <option value="160">Auckland - Albany</option>
                <option value="13">Auckland - Auckland City</option>
                <option value="161">Auckland - Botany Downs</option>
                <option value="162">Auckland - Clevedon</option>
                <option value="18">Auckland - Franklin</option>
                <option value="8">Auckland - Great Barrier Island</option>
                <option value="9">Auckland - Helensville</option>
                <option value="163">Auckland - Henderson</option>
                <option value="10">Auckland - Hibiscus Coast</option>
                <option value="164">Auckland - Kumeu</option>
                <option value="165">Auckland - Mangere</option>
                <option value="15">Auckland - Manukau</option>
                <option value="166">Auckland - New Lynn</option>
                <option value="12">Auckland - North Shore</option>
                <option value="167">Auckland - Onehunga</option>
                <option value="17">Auckland - Papakura</option>
                <option value="168">Auckland - Pukekohe</option>
                <option value="169">Auckland - Remuera</option>
                <option value="14">Auckland - Waiheke Island</option>
                <option value="11">Auckland - Waitakere</option>
                <option value="170">Auckland - Waiuku</option>
                <option value="7">Auckland - Warkworth</option>
                <option value="142">Auckland - Wellsford</option>
                <option value="0"> </option>
                <option value="130">Waikato - Cambridge</option>
                <option value="19">Waikato - Coromandel</option>
                <option value="25">Waikato - Hamilton</option>
                <option value="23">Waikato - Huntly</option>
                <option value="26">Waikato - Matamata</option>
                <option value="24">Waikato - Morrinsville</option>
                <option value="172">Waikato - Ngaruawahia</option>
                <option value="176">Waikato - Ngatea</option>
                <option value="28">Waikato - Otorohanga</option>
                <option value="21">Waikato - Paeroa</option>
                <option value="140">Waikato - Raglan</option>
                <option value="31">Waikato - Taumarunui</option>
                <option value="38">Waikato - Taupo</option>
                <option value="27">Waikato - Te Awamutu</option>
                <option value="30">Waikato - Te Kuiti</option>
                <option value="20">Waikato - Thames</option>
                <option value="29">Waikato - Tokoroa/Putaruru</option>
                <option value="39">Waikato - Turangi</option>
                <option value="22">Waikato - Waihi</option>
                <option value="125">Waikato - Whangamata</option>
                <option value="155">Waikato - Whitianga</option>
                <option value="0"> </option>
                <option value="32">Bay of Plenty - Katikati</option>
                <option value="174">Bay of Plenty - Kawerau</option>
                <option value="139">Bay of Plenty - Mt. Maunganui</option>
                <option value="36">Bay of Plenty - Opotiki</option>
                <option value="171">Bay of Plenty - Papamoa</option>
                <option value="37">Bay of Plenty - Rotorua</option>
                <option value="33">Bay of Plenty - Tauranga</option>
                <option value="34">Bay of Plenty - Te Puke</option>
                <option value="141">Bay of Plenty - Waihi Beach</option>
                <option value="35">Bay of Plenty - Whakatane</option>
                <option value="0"> </option>
                <option value="40">Gisborne - Gisborne</option>
                <option value="41">Gisborne - Ruatoria</option>
                <option value="0"> </option>
                <option value="44">Hawke's Bay - Hastings</option>
                <option value="43">Hawke's Bay - Napier</option>
                <option value="132">Hawke's Bay - Waipukurau</option>
                <option value="42">Hawke's Bay - Wairoa</option>
                <option value="0"> </option>
                <option value="50">Taranaki - Hawera</option>
                <option value="46">Taranaki - Mokau</option>
                <option value="47">Taranaki - New Plymouth</option>
                <option value="48">Taranaki - Opunake</option>
                <option value="49">Taranaki - Stratford</option>
                <option value="0"> </option>
                <option value="51">Whanganui - Ohakune</option>
                <option value="54">Whanganui - Taihape</option>
                <option value="52">Whanganui - Waiouru</option>
                <option value="53">Whanganui - Whanganui</option>
                <option value="0"> </option>
                <option value="56">Manawatu - Bulls</option>
                <option value="45">Manawatu - Dannevirke</option>
                <option value="138">Manawatu - Feilding</option>
                <option value="58">Manawatu - Levin</option>
                <option value="129">Manawatu - Manawatu</option>
                <option value="55">Manawatu - Marton</option>
                <option value="59">Manawatu - Pahiatua</option>
                <option value="57">Manawatu - Palmerston North</option>
                <option value="128">Manawatu - Woodville</option>
                <option value="0"> </option>
                <option value="131">Wairarapa - Carterton</option>
                <option value="61">Wairarapa - Featherston</option>
                <option value="126">Wairarapa - Greytown</option>
                <option value="62">Wairarapa - Martinborough</option>
                <option value="60">Wairarapa - Masterton</option>
                <option value="0"> </option>
                <option value="63">Wellington - Kapiti</option>
                <option value="65">Wellington - Lower Hutt City</option>
                <option value="64">Wellington - Porirua</option>
                <option value="66">Wellington - Upper Hutt City</option>
                <option value="67">Wellington - Wellington City</option>
                <option value="0"> </option>
                <option value="70">Nelson Bays - Golden Bay</option>
                <option value="71">Nelson Bays - Motueka</option>
                <option value="73">Nelson Bays - Murchison</option>
                <option value="72">Nelson Bays - Nelson</option>
                <option value="0"> </option>
                <option value="75">Marlborough - Blenheim</option>
                <option value="76">Marlborough - Marlborough Sounds</option>
                <option value="74">Marlborough - Picton</option>
                <option value="0"> </option>
                <option value="78">West Coast - Greymouth</option>
                <option value="79">West Coast - Hokitika</option>
                <option value="77">West Coast - Westport</option>
                <option value="0"> </option>
                <option value="87">Canterbury - Akaroa</option>
                <option value="83">Canterbury - Amberley</option>
                <option value="88">Canterbury - Ashburton</option>
                <option value="178">Canterbury - Belfast</option>
                <option value="81">Canterbury - Cheviot</option>
                <option value="86">Canterbury - Christchurch City</option>
                <option value="85">Canterbury - Darfield</option>
                <option value="90">Canterbury - Fairlie</option>
                <option value="179">Canterbury - Ferrymead</option>
                <option value="89">Canterbury - Geraldine</option>
                <option value="180">Canterbury - Halswell</option>
                <option value="82">Canterbury - Hanmer Springs</option>
                <option value="143">Canterbury - Kaiapoi</option>
                <option value="80">Canterbury - Kaikoura</option>
                <option value="181">Canterbury - Lyttelton</option>
                <option value="91">Canterbury - Mt Cook</option>
                <option value="84">Canterbury - Rangiora</option>
                <option value="177">Canterbury - Rolleston</option>
                <option value="182">Canterbury - Selwyn</option>
                <option value="0"> </option>
                <option value="95">Timaru - Oamaru - Kurow</option>
                <option value="96">Timaru - Oamaru - Oamaru</option>
                <option value="93">Timaru - Oamaru - Timaru</option>
                <option value="92">Timaru - Oamaru - Twizel</option>
                <option value="94">Timaru - Oamaru - Waimate</option>
                <option value="0"> </option>
                <option value="100">Otago - Alexandra</option>
                <option value="106">Otago - Balclutha</option>
                <option value="98">Otago - Cromwell</option>
                <option value="104">Otago - Dunedin</option>
                <option value="105">Otago - Lawrence</option>
                <option value="107">Otago - Milton</option>
                <option value="102">Otago - Palmerston</option>
                <option value="99">Otago - Queenstown</option>
                <option value="101">Otago - Ranfurly</option>
                <option value="103">Otago - Roxburgh</option>
                <option value="175">Otago - Tapanui</option>
                <option value="97">Otago - Wanaka</option>
                <option value="0"> </option>
                <option value="127">Southland - Bluff</option>
                <option value="115">Southland - Edendale</option>
                <option value="111">Southland - Gore</option>
                <option value="113">Southland - Invercargill</option>
                <option value="110">Southland - Lumsden</option>
                <option value="109">Southland - Otautau</option>
                <option value="114">Southland - Riverton</option>
                <option value="117">Southland - Stewart Island</option>
                <option value="108">Southland - Te Anau</option>
                <option value="116">Southland - Tokanui</option>
                <option value="112">Southland - Winton</option>
                <option value="0"> </option>
                <option value="118">Chatham Islands</option>

              </Select>

            </FormControl>

            <Box textAlign="centre" mt={6}>
              <Heading> Idea details</Heading>
            </Box>

            <FormControl mt={3} isRequired>
              <FormLabel htmlFor='description'>Pitch</FormLabel>
              <Textarea
                name='description'
                onChange={(e) => setDescription(e.target.value)}
                placeholder='How would you describe your project to others if you only had 100 words?'
                maxLength={500}
              >
              </Textarea>
            </FormControl>

            <FormControl mt={3} isRequired>
              <FormLabel htmlFor='success'>Sucessful outcome</FormLabel>
              <Textarea
                name='description'
                onChange={(e) => setSuccess(e.target.value)}
                placeholder='What would would end users get if this pitch was sucessful?'
                maxLength={500}
              >
              </Textarea>
            </FormControl>

            <FormControl isRequired>
              <FormLabel mt={6}htmlFor='seeking' >Looking for</FormLabel>
              <RadioGroup onChange={setSeeking} value={seeking}>
                <Stack direction='column'>
                  <Radio value='4'>Like-minded people to spitball the idea with.</Radio>
                  <Radio value='3'>Pro-bono or voluntary contributions to help develop idea.</Radio>
                  <Radio value='1'>Commerical partners to develop the idea and take shareholding.</Radio>
                  <Radio value='2'>Skilled people to develop idea at an agreed rate.</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel mt={6} htmlFor='teamEstablished'>Team</FormLabel>
              <RadioGroup onChange={setTeamEstablished} value={teamEstablished}>
                <Stack direction='column'>
                  <Radio value='1'>I’m looking to add to an established team</Radio>
                  <Radio value='2'>I’m looking to form a new team</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel mt={6} htmlFor='started'>Started</FormLabel>
              <RadioGroup onChange={setStarted} value={started}>
                <Stack direction='column'>
                  <Radio value='1'>Brand spanking new idea</Radio>
                  <Radio value='2'>Already in motion</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <Box textAlign="centre" mt={6}>
              <Heading>Skills</Heading>
            </Box>

            <FormControl mt={3}>
              <FormLabel htmlFor='skillType'></FormLabel>
              <Category
                isRequired
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
              />
            </FormControl>

            <FormControl mt={3} isRequired>
              <FormLabel htmlFor='skillDescription'>Skill Description</FormLabel>
              <Textarea
                name='skillDescription'
                onChange={(e) => setSkillDescription(e.target.value)}
                placeholder="How do you see these skills being used in your project?"
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

    </>

  )
}

export default NewProject
