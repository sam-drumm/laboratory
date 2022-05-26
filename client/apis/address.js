import request from 'superagent'

export function getAddresses (query) {
  const keyAPI = 'XO9YG5MdhFek5S4qFzQxjg'
  const countryCode = 'nz'

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
