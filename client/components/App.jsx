import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import NewProject from './Projects/NewProject'
import Project from './Project/Project'
import Users from './Users'
import Carousel from './Carousel/Carousel'
import Home from './Home'

import PingRoutes from './PingRoutes'
import Registration from './Register/Registration'
import Profile from './Register/Profile'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Verification from './Register/Verification'
import AddressTest from './Address/AddressLookup'

function App () {
  const navigate = useNavigate()
  cacheUser(useAuth0, navigate)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <>
            <Home/>
            {/* <Carousel/> */}
            {/* <Users/>
            <PingRoutes/>
            <Projects/> */}
          </>
        } />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/verification' element={<Verification/>} />
        <Route path='/projects/new' element={<NewProject />}/>
        <Route path='/projects/:id' element={<Project />}/>
        <Route path='/address' element={<AddressTest />}/>
      </Routes>
    </div>
  )
}

export default App
