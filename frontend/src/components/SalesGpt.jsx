import React from 'react'
import SalesTopNav from './SalesTopNav'
import SalesSideNav from './SalesSideNav'

const SalesGpt = () => {
  return (
    <div className=' mt-4 bg-white'>
      
      {/* Navbar */}
        <SalesTopNav/>    
      {/* SideNav */}
      <SalesSideNav/>
    </div>
  )
}

export default SalesGpt