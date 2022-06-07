import { extendTheme } from '@chakra-ui/react'
// import { StepsStyleConfig as Steps } from 'chakra-ui-steps'

const colabTheme = extendTheme({
  // components: {
  //   Steps
  // },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em'
  }
})

export default colabTheme
