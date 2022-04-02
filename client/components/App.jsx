import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Users from './Users'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Profile from '../pages/Profile/Profile'

function App () {
  const navigate = useNavigate()
  cacheUser(useAuth0, navigate)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <>
            <Users/>
            <PingRoutes/>
          </>
        } />
        {/* <Route path='/profile' element={<Profile/>} /> */}
        <Route path='/register' element={<Registration/>} />
      </Routes>
    </div>
  )
}

export default App
