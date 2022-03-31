import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'

import store from './store'

import config from './auth_config.json'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ChakraProvider>
      <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        redirectUri={window.location.origin}
        audience={config.audience}
      >
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </Auth0Provider>
    </ChakraProvider>,
    document.getElementById('app')
  )
})
