import request from 'superagent'

// const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getAddressAPI () {
  return request
    .get('https://api.addressable.co.nz/v2/autocomplete?api_key=XO9YG5MdhFek5S4qFzQxjg')
    // Accepting and saving as JSON as our databases are in JSON and if the user wants to save their favourite quote back into our database, it would work in this format
    .set('Accept', 'application/json')
    .then(res => {
      console.log(res.body)
      return res.body
    })
    .catch(err => {
      console.error(err.message)
    })
}