import React from 'react'

export const Footer = ({toAmo , reset}) => {
  return (
    <div className='row fixed-bottom'>
        <button className='btn btn-danger col-2' onClick={reset}>Reset</button>
        <div className='col-8 bg-dark text-white text-center '>{toAmo}</div>
        <button className='btn btn-primary col-2'>Pay Now</button>

    </div>
  )
}
