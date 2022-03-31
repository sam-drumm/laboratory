import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Users from './Users'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Nav/NavBar'


function App () {
  cacheUser(useAuth0)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <>
            <NavBar/>
            <Users/>
            <PingRoutes/>
          </>
        } />
        <Route path='/register' element={<Registration/>} />
      </Routes>
    </div>
  )
}

export default App
