import requestor from '../../consume'
import { dispatch, getState } from '../../store'
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { setUser } from '../../actions/user'
import { showError } from '../../actions/error'

export function registerUser (user, address, authUser, navigateTo, consume = requestor) {
  const newUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    street_number: address.streetNumber,
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

  dispatch(setWaiting())

  return consume('/users', token, 'post', newUser)
    .then((res) => {
      const newUser = res.body
      newUser.token = token
      dispatch(setUser(newUser))
      // navigateTo(`/gardens/${user.gardenId}`)
      navigateTo('/')
      return newUser
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
