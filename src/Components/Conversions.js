import React from 'react'
import '../Sass/Conversions.sass'

const Conversions = ({ filteredResults, amount }) => {
  return (
    <div>
      {filteredResults
        ? filteredResults.map((obj, idx) => (
            <div className='row mt-3' id='main-content-wrapper' key={idx}>
              <div className='col text-left'>{(1 / Number(obj.rate)) * amount}</div>
              <div className='col text-left'>{obj.to}</div>
            </div>
          ))
        : 'hello'}
    </div>
  )
}

export default Conversions
