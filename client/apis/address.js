import request from 'superagent'

// const serverURL = 'http://localhost:3000/api/v1'

export function getAddress (query) {
  const keyAPI = 'XO9YG5MdhFek5S4qFzQxjg'
  const countryCode = 'nz'

  return request
    .get(`https://api.addressable.co.nz/v2/autocomplete?api_key=${keyAPI}&country_code=${countryCode}&q=${query}`)
    .send()
    .set('Accept', 'application/json')
    .then(res => {
      console.log(res.body)
      return res.body
    })
    .catch(err => {
      console.error(err.message)
    })
}
