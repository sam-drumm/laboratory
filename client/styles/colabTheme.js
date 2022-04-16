import { extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'

const colabTheme = extendTheme({
  components: {
    Steps
  }
})

export default colabTheme
