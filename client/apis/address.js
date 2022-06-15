import request from 'superagent'
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const keyAPI = process.env.ADDRESSABLE_KEY || 'some_addressable_key'
const countryCode = 'nz'

export function getAddresses (query) {
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
