import request from 'superagent'

// const serverURL = 'http://localhost:3000/api/v1'

export function getAddresses (query) {
  const keyAPI = 'XO9YG5MdhFek5S4qFzQxjg'
  const countryCode = 'nz'
  console.log(`https://api.addressable.co.nz/v2/autocomplete?api_key=${keyAPI}&country_code=${countryCode}&q=${query}`)

  return request
    .get(`https://api.addressable.co.nz/v2/autocomplete?api_key=${keyAPI}&country_code=${countryCode}&q=${query}`)
    .send()
    .set('Accept', 'application/json')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err.message)
    })
}