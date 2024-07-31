import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className='flex flex-col'>
        <div className="lds-dual-ring"></div>
        <p>Loading...</p>
      </div>
      
    </div>
  )
}

export default Spinner