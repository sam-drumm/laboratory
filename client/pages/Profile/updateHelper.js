import requestor from '../../consume'
import { dispatch, getState } from '../../store'
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { setUser } from '../../actions/user'
// import { showError } from '../../actions/error'

export function updateUser (user, selectedAddress, authUser, navigateTo, consume = requestor) {
  dispatch(setWaiting())
  const address = (JSON.parse(selectedAddress))
  const newUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    streetNumber: address.street_number,
    street: address.street,
    locality: address.locality,
    city: address.city,
    region: address.region,
    postcode: address.postcode,
    meshblock: address.meshblock,
    lon: address.lon,
    lat: address.lat,
    formatted: address.formatted,
    email: authUser.email,
    auth0Id: authUser.sub
  }
  const storeState = getState()
  const { token } = storeState.user

  return consume('/users', token, 'patch', newUser)
    .then((res) => {
      const newUser = res.body
      newUser.token = token
      dispatch(setUser(newUser))
      navigateTo('/profile/home')
      return newUser
    })
    .catch(err => {
      console.error(err.message)
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function addFollowing (following, follow, authUser, consume = requestor) {
  dispatch(setWaiting())
  following.push(follow)
  console.log(following)
  const newUser = {
    auth0Id: authUser.sub,
    following: [following]
  }
  const storeState = getState()
  const { token } = storeState.user

  return consume('/users', token, 'patch', newUser)
    .then((res) => {
      const newUser = res.body
      newUser.token = token
      dispatch(setUser(newUser))
      return newUser
    })
    .catch(err => {
      console.error(err.message)
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function removeFollowing (following, follow, authUser, consume = requestor) {
  dispatch(setWaiting())
  const arraz = following.split(',').map(Number)
  const filtered = arraz.filter(element => element !== follow)
  const newUser = {
    auth0Id: authUser.sub,
    following: [filtered]
  }
  const storeState = getState()
  const { token } = storeState.user

  return consume('/users', token, 'patch', newUser)
    .then((res) => {
      const newUser = res.body
      newUser.token = token
      dispatch(setUser(newUser))
      return newUser
    })
    .catch(err => {
      console.error(err.message)
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
