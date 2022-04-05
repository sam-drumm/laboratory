import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

function Registration () {
  const user = useSelector(state => state)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    auth0Id: '',
    email: ''
  })

  useEffect(() => {
    setForm({
      auth0Id: user?.auth0Id,
      email: user?.email
    })
  }, [user])

  async function handleClick () {
    await addUser(form)
    navigate('/')
  }

  return (
    <>
      <h2>Register</h2>
      <form>
        <label htmlFor='username'>Auth0 Id:</label>
        <input
          type='text'
          id='auth0Id'
          name='auth0Id'
          value={form.auth0Id}
          disabled={true}
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
          value={form.email}
          disabled={true}
        />

        <button type='button' onClick={handleClick}>Register</button>
      </form>
    </>
  )
}

export default Registration
