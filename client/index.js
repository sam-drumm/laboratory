import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'
import store from './store'
import config from './auth_config.json'
import colabTheme from './styles/colabTheme'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        redirectUri={window.location.origin}
        audience={config.audience}>
        <Provider store={store}>
          <ChakraProvider theme={colabTheme}>
            <App />
          </ChakraProvider>
        </Provider>
      </Auth0Provider>
    </Router>,
    document.getElementById('app')
  )
})
