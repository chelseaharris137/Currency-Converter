import React, { useEffect } from 'react'
import '../Sass/Form.sass'
import SDK from '@uphold/uphold-sdk-javascript';

//add env file

const sdk = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET
  });

const Form = () => {
  //have a hook to hold an array of objects
  //object has currency, image, selected key, and amount
  //if selected loop through array and set old


  //fetch to an api on change of hook
///first part of string is amount country --> second part is exhange rate
//multiple gets for 10 countries
//just grab the starting currency
//then loop through and find 10 countries
//display those to screen
  useEffect(()=>{
    sdk.getTicker("EUR")
    .then((data) =>   console.log(data))
  }, [])
  return (
    <div className='wrapper text-center'>
      <div className='background'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            value='Enter amount'
            aria-label='Enter amount'
            aria-describedby='button-addon2'
            onFocus={(e) => {
              e.target.value = ''
            }}
          />
          <div className='input-group-append'>
            <select className='custom-select'>
              <option selected>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>CAD</option>
              <option>ARS</option>
              <option>AUD</option>
              <option>IMR</option>
              <option>PTE</option>
              <option>JPY</option>
              <option>RUB</option>
              <option>CHF</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
