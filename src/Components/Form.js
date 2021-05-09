import React, { useEffect, useState } from 'react'
import '../Sass/Form.sass'
import SDK from '@uphold/uphold-sdk-javascript'

//add env file

const sdk = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET
  });

const Form = () => {
  const [currencyOptions, setCurrencyOptions] = useState(['USD', 'EUR', 'GBP', 'CAD', 'ARS', 'AUD', 'IMR', 'PTE', 'JPY', 'RUB', 'CHF']);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [amount, setAmount] = useState(0);
  const [allCurrencyResults, setAllCurrencyResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([])
  //i need to find 10 currencies i can use with api
  //need to figure out how to filter the results
  //currentResults.filter()
  //then loop currencyOptions inside filter
  //if selected + option[i]
  //then set final results

  useEffect(()=>{
    sdk.getTicker(selectedCurrency)
    .then((data) =>   setAllCurrencyResults(data))
  }, [selectedCurrency])
  return (
    <div className='wrapper text-center'>
      <div className='background'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='0'
            aria-label='Enter amount'
            aria-describedby='button-addon2'
            onFocus={(e) => {
              e.target.value = ''
            }}
            onChange={e => setAmount(Number(e.target.value))}
          />
          <div className='input-group-append'>
            <select className='custom-select' onChange={e => setSelectedCurrency(e.target.value)}>
              {currencyOptions.map((option, idx)=> (<option value={option} key={idx}>{option}</option>))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
