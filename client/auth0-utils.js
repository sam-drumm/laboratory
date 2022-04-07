import consume from './consume'
import { setUser } from './actions/user'
import { dispatch } from './store'
import { showError } from './actions/error'

const emptyUser = {
  id: null
}

function saveUser (user = emptyUser) {
  dispatch(setUser(user))
}

export async function cacheUser (useAuth0, navigate) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      const token = await getAccessTokenSilently()
      const res = await consume(`/users/${user.sub}`, token)
      const { id, firstName, lastName, email } = res.body
      if (id === undefined) {
        navigate('/register')
      }
      saveUser({ id, firstName, lastName, email, token })
    } catch (err) {
      dispatch(showError('Unable to set the current user'))
    }
  } else {
    saveUser()
  }
}

export function getLoginFn (useAuth0) {
  return useAuth0().loginWithRedirect
}

export function getLogoutFn (useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated (useAuth0) {
  return useAuth0().isAuthenticated
}

export function getRegisterFn (useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/register`
  return () => loginWithRedirect({
    redirectUri,
    screen_hint: 'signup',
    scope: 'role:member'
  })
}
