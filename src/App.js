import React from 'react'
import Form from './Components/Form'
import Navigation from './Components/Nav'
import Footer from './Components/Footer'
import './Sass/App.sass'

const App = () => {
  return (
    <div className='container' fluid='md'>
      <div className='row'>
        <div className='col mt-3'>
          <Navigation />
        </div>
      </div>
      <div className='row'>
        <div className='col text-center mt-5'>
          <h1>Currency Converter</h1>
          <p className='maincopy'>
            <span>Receive competitive and transparent pricing with no hidden spreads. See how we compare.</span>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col mt-5'>
          <Form />
        </div>
      </div>
      <div className='row'>
        <div className='col mt-5'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
