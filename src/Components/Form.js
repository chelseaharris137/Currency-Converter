import React, { useEffect, useState } from 'react'
import Conversions from './Conversions'
import SDK from '@uphold/uphold-sdk-javascript'
import '../Sass/Form.sass'

const sdk = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET
})

const Form = () => {
  const currencyOptions = ['USD', 'EUR', 'GBP', 'CAD', 'ARS', 'AUD', 'HKD', 'SGD', 'JPY', 'MXN', 'CHF']
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [amount, setAmount] = useState(0)
  const [filteredResults, setFilteredResults] = useState()
  const formValidation = (input) => {
    if (isNaN(input.target.value)) {
      alert('Please enter a number value')
    } else {
      setAmount(Number(input.target.value))
    }
  }
  useEffect(() => {
    sdk.getTicker(selectedCurrency).then((result) => {
      console.log(result)
      let filtered = []
      result.forEach((obj) => {
        const pair = obj.pair
        for (let i = 0; i < currencyOptions.length; i++) {
          let withDash = currencyOptions[i] + '-' + selectedCurrency
          let withoutDash = currencyOptions[i] + selectedCurrency
          if (pair == withDash || pair == withoutDash) {
            const rate = (Number(obj.bid) + Number(obj.ask)) / 2
            filtered.push({ from: selectedCurrency, to: currencyOptions[i], rate: rate })
          }
        }
      })
      setFilteredResults(filtered)
    })
  }, [selectedCurrency])

  return (
    <div className='wrapper text-center'>
      <div className='background'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter amount'
            aria-label='Enter amount'
            aria-describedby='button-addon2'
            onFocus={(e) => {
              e.target.placeholder = ''
            }}
            onChange={(e) => formValidation(e)}
          />
          <div className='input-group-append'>
            <select defaultValue={selectedCurrency} className='custom-select' onChange={(e) => setSelectedCurrency(e.target.value)}>
              {currencyOptions.map((option, idx) => (
                <option value={option} key={idx}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='row mt-5'>{filteredResults ? <Conversions filteredResults={filteredResults} amount={amount} /> : ''}</div>
    </div>
  )
}

export default Form
