import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'

import Header from './components/Nav/Header'
import Footer from './components/Nav/Footer'
import App from './components/App'
import store from './store'
import config from './auth_config.json'

import colabTheme from './styles/colabTheme'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ChakraProvider theme={colabTheme}>
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
            <Footer />
          </Router>
        </Provider>
      </Auth0Provider>
    </ChakraProvider>,
    document.getElementById('app')
  )
})
