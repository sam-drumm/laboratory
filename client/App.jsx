import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from './auth0-utils'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { RequireAuth } from './components/Register/Authenticated'

import NewProject from './pages/Project/NewProject'
import Project from './pages/Project/Project'
import Home from './pages/Home/Home'
import Registration from './pages/Profile/RegisterProfile'
// import Profile from './pages/Profile/Profile'
import Verification from './components/Register/Verification'
import Category from './components/Category/Category'
import UserHome from './pages/User/UserHome'
import UpdateProject from './pages/Project/UpdateProject'
import Search from './components/Search/Search'
import SearchBar from './components/Search/SearchBar'

function App () {
  const navigate = useNavigate()
  cacheUser(useAuth0, navigate)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/profile' element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
        } /> */}
        <Route path='/profile/home' element={<UserHome/>}/>
        <Route path='/register' element={<Registration/>} />
        <Route path='/verification' element={<Verification/>} />
        <Route path='/projects/new' element={

          <NewProject />

        }/>
        <Route path='/projects/:id' element={<Project />}/>
        <Route path='/projects/edit/:id' element={

          <UpdateProject />

        }/>
        <Route path='/projects/search/:query' element={<Search />} />
        <Route path='/projects/search' element={<SearchBar />} />
        <Route path='/category' element={<Category />}/>
      </Routes>
    </div>
  )
}

export default App
