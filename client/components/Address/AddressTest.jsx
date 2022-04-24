import React, { useState } from 'react'
import { getAddress } from '../../apis/address'
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'

export default function AddressTest () {
  const [address, setAddress] = useState('')
  const [data, setData] = useState([])

  async function handleChange (e) {
    e.preventDefault()
    setAddress({
      [e.target.name]: e.target.value
    })
    if (e.target.value.length > 6) {
      getAddress(e.target.value)
        .then(addy => {
          setData(addy)
          return null
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  async function handleSelect (e) {
    e.preventDefault()
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    })
    this.setAddress = this.address
  }

  console.log(address)

  return (
    <FormControl mt={3} isRequired>
      <FormLabel htmlFor='address'>Address</FormLabel>
      <Input
        name='address'
        // onChange={(e) => searchData(e.target.value)}
        onChange={handleChange}
        placeholder="e.g. Mural on K’rd, Build an app for Vege Delivery"
      />
      <Select>
        {data.map((addy) => (
          <option key={addy.key} value={addy.id}>{addy.formatted}</option>
        ))}
        onSelect={handleSelect}
      </Select>
    </FormControl>
  )
}
