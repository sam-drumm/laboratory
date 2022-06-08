import consume from './consume'
import { setUser } from './actions/user'
import { dispatch } from './store'
import { showError } from './actions/error'

const emptyUser = {
  auth0Id: '',
  email: '',
  firstName: '',
  lastName: '',
  following: '',
  token: '',
  formatted: ''
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
      const { firstName, lastName, email, following, formatted } = res.body
      if (firstName === undefined) {
        navigate('/register')
      }
      if (user.email_verified === false) {
        navigate('/verification')
      }
      saveUser({ auth0Id: user.sub, firstName, lastName, email, token, following, formatted })
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
