import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import Header from './components/Nav/Header'

import store from './store'

import config from './auth_config.json'

import App from './components/App'

const breakpoints = createBreakpoints({
  sm: '360px',
  md: '768px',
  lg: '1024px',
  xl: '1440px'
})

const newTheme = {
  ...theme,
  breakpoints
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ChakraProvider theme={newTheme}>
      <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        redirectUri={window.location.origin}
        audience={config.audience}
      >
        <Provider store={store}>
          <Router>
            <Header/>
            <App />
          </Router>
        </Provider>
      </Auth0Provider>
    </ChakraProvider>,
    document.getElementById('app')
  )
})
