import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import NewProject from './Projects/NewProject'
import Users from './Users'
import PingRoutes from './PingRoutes'
import Registration from './Register/Registration'
import Profile from './Register/Profile'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Verification from './Register/Verification'

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
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/verification' element={<Verification/>} />
        <Route path='/project/new' element={<NewProject />} />
      </Routes>
    </div>
  )
}

export default App
