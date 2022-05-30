import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import NewProject from './Projects/NewProject'
import Project from './Project/Project'
import Home from './Home'

import Registration from './Register/Registration'
import Profile from './Register/Profile'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Verification from './Register/Verification'
import Category from './Projects/Category'
import UserHome from './User/UserHome'
import UpdateProject from './Project/UpdateProject'
import Search from './Search/Search'
import SearchBar from './Search/SearchBar'

function App () {
  const navigate = useNavigate()
  cacheUser(useAuth0, navigate)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile/home' element={<UserHome/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/verification' element={<Verification/>} />
        <Route path='/projects/new' element={<NewProject />}/>
        <Route path='/projects/:id' element={<Project />}/>
        <Route path='/projects/edit/:id' element={<UpdateProject />}/>
        <Route path='/projects/search/:query' element={<Search />} />
        <Route path='/projects/search' element={<SearchBar />} />
        <Route path='/category' element={<Category />}/>
      </Routes>
    </div>
  )
}

export default App
