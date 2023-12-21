import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineScoreboard } from "react-icons/md";
import { MdDriveFolderUpload } from "react-icons/md";


const SalesSideNav = () => {
  return (
    <div
      className=' bg-black h-[92vh] w-1/6 flex flex-col items-center justify-start pt-20'
    >

      <div className='flex flex-col text-white'>
        <ul className='flex flex-col gap-4 items-start'>
          <li className=' text-blue-300 text-sm'>Call Audit</li>
          <li className='flex justify-center items-center gap-2'> <FaRegFileAlt className=' text-2xl' /> Summary</li>
          <li className='flex justify-center items-center gap-2'><MdOutlineScoreboard className=' text-2xl' />Data Score</li>
          <li className='flex justify-center items-center transition-all duration-300 cursor-pointer
             border-white border-2 p-2 radius rounded hover:bg-blue-950 gap-2'
          >
            <MdDriveFolderUpload/>Upload Call Records

          </li>
        </ul>


        <ul className='flex flex-col gap-4 items-start mt-6'>
          <li className=' text-blue-300 text-sm'>AI Agent</li>
          <li className='flex justify-center items-center gap-2'> <FaRegFileAlt className=' text-2xl' /> Summary</li>
          <li className='flex justify-center items-center gap-2'><MdOutlineScoreboard className=' text-2xl' />Data Score</li>
        </ul>


      </div>

    </div>
  )
}

export default SalesSideNav