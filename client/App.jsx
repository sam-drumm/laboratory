import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from './auth0-utils'
import NewProject from './components/Projects/NewProject'
import Project from './components/Project/Project'
import Home from './pages/Home/Home'

import Registration from './components/Register/Registration'
import Profile from './components/Register/Profile'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Verification from './components/Register/Verification'
import Category from './components/Projects/Category'
import UserHome from './components/User/UserHome'
import UpdateProject from './components/Project/UpdateProject'
import Search from './components/Search/Search'
import SearchBar from './components/Search/SearchBar'
import { RequireAuth } from './components/Register/Authenticated'

function App () {
  const navigate = useNavigate()
  cacheUser(useAuth0, navigate)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
        } />
        <Route path='/profile/home' element={<UserHome/>}/>
        <Route path='/register' element={<Registration/>} />
        <Route path='/verification' element={<Verification/>} />
        <Route path='/projects/new' element={
          <RequireAuth>
            <NewProject />
          </RequireAuth>
        }/>
        <Route path='/projects/:id' element={<Project />}/>
        <Route path='/projects/edit/:id' element={
          <RequireAuth>
            <UpdateProject />
          </RequireAuth>
        }/>
        <Route path='/projects/search/:query' element={<Search />} />
        <Route path='/projects/search' element={<SearchBar />} />
        <Route path='/category' element={<Category />}/>
      </Routes>
    </div>
  )
}

export default App
