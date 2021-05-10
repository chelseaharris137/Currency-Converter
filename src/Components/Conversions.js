import React from 'react'
import '../Sass/Conversions.sass'

const Conversions = ({ filteredResults, amount }) => {
  return (
    <div>
      {filteredResults
        ? filteredResults.map((obj, idx) => (
            <div className='row  justify-content-center mt-3' key={idx}>
              <div className='col-lg-3 col-md-4 col-6 col-sm-5 text-left'>{(1 / Number(obj.rate)) * amount}</div>
              <div className='col-lg-3 col-md-4 col-6 col-sm-5 text-left'>{obj.to}</div>
            </div>
          ))
        : 'hello'}
    </div>
  )
}

export default Conversions
