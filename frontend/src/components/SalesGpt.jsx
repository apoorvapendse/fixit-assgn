import React from 'react'
import SalesTopNav from './SalesTopNav'
import SalesSideNav from './SalesSideNav'
import SearchContainer from './SearchContainer'

const SalesGpt = () => {
  return (
    <div className=' mt-4 bg-white flex flex-col'>
      
      {/* Navbar */}
        <SalesTopNav/>    
      {/* SideNav */}
      <div className='flex'>

      <SalesSideNav/>

      <SearchContainer/>
      </div>

    </div>
  )
}

export default SalesGpt