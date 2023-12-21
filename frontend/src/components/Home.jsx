import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className=' p-4 box-border flex justify-between items-center border-red-300 border-2'>
                <div>
                    <h4 className=" text-[2rem] text-white">fiXit</h4>
                </div>

                <div className='flex gap-2'>
                    <a className='text-white'>About Us</a>
                    <Link className='text-white' to={'/login'}>Login</Link>
                </div>
            </div>

            <div>

                <h1 className=' text-4xl text-white text-center'>
                    Fix Your Sales
                </h1>
                <h1 className='text-white text-8xl text-center font-body'>
                    Enabling Human Intelligence with Artificial Intelligence

                </h1>
            </div>

        </div>
    )
}

export default Home