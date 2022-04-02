import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../apis/users'

import { setUser } from '../actions/user'
import { useNavigate } from 'react-router-dom'

function Registration () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  const user = useSelector(state => state.user)

  useEffect(() => {
    setForm({
      auth0Id: user?.auth0Id,
      email: user?.email,
      token: user?.token
    })
  }, [user])

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleSubmit () {
    dispatch(setUser(form))
    try {
      await addUser(form)
      navigate('/profile')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='form'>

      <h2>Register Profile</h2>
      <form className='registration'>
        <label htmlFor='auth0Id'>auth0Id</label>
        <input
          name='auth0Id'
          value={form.auth0Id}
          onChange={handleChange}
          disabled={true}
        ></input>

        <label htmlFor='name'>Name</label>
        <input
          name='name'
          value={form.name}
          onChange={handleChange}
          // disabled={true}
        ></input>

        {/* <label htmlFor='email'>Email</label>
        <input
          name='email'
          value={form.email}
          onChange={handleChange}
          disabled={true}
        ></input> */}

        <label htmlFor='description' >Description</label>
        <textarea
          name='description'
          value={form.description}
          onChange={handleChange}
          cols={3}
        ></textarea>

        <button
          type='button'
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </section>
  )
}

export default Registration
