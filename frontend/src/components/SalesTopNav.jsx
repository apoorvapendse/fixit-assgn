import React from 'react'

const SalesTopNav = () => {
  return (
    <div >
            <nav className='p-4 box-border flex justify-between items-center px-8 bg-black'>
        <div>
          <h4 className='text-[2rem] text-white'>fiXit</h4>
        </div>

        <div className='flex gap-2'>
          <a className='text-white cursor-pointer'>About Us</a>

        </div>
      </nav> 
    </div>  
  )
}

export default SalesTopNav