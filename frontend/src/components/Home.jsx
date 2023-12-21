import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase.js";
import SalesGpt from './SalesGpt.jsx';
const Home = () => {


    const [email,setEmail] = useState("");

async function handleLogin(){
    try {
        
        const result =await signInWithPopup(auth,provider)
        const email = result.user.email
        if(email){
            localStorage.setItem("email",email);
            setEmail(email);
        }
    } catch (error) {
        // throw transfers the controls to the nearest catch block
        throw new Error(error)
    }
    

}
function handleLogout(){
    localStorage.removeItem('email')
    setEmail(null)
}

  useEffect(() => {
    const checkEmail = localStorage.getItem("email");
    if(checkEmail){
        setEmail(checkEmail);
    }

    const ourText = new SplitType('h1.animation-text', { types: 'chars' });
    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        color: 'gray',
        y: 1,
        opacity: 0.2,
      },
      {
        y: 0,
        background: '-webkit-linear-gradient(rgb(183,217,254))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'rgb(212,233,255)',
        
        opacity: 1,
        stagger: 0.06,
        duration: 1,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <main > 
      <nav className='p-4 box-border flex justify-between items-center px-8'>
        <div>
          <h4 className='text-[2rem] text-white'>fiXit</h4>
        </div>

        <div className='flex gap-2'>
          <a className='text-white cursor-pointer'>About Us</a>

         {
            email===null?
             <span className='text-white cursor-pointer' onClick={()=>handleLogin()}>
            Login
          </span>:
          <span className='text-white cursor-pointer'
            onClick={handleLogout}
            
          >
            Logout

          </span>
        } 
        </div>
      </nav>

      <div className=' flex flex-col h-[88vh] items-center justify-center p-44 box-border gap-10 whitespace-break-spaces'>
        <h1 className='animation-text text-6xl font-body font-bold text-center'>
          Fix Your Sales
        </h1>
        <h1 className='animation-text text-7xl font-semibold  text-center font-body m-0'>
          Enabling Human Intelligence with Artificial Intelligence
        </h1>

        <p className=' text-[1.3rem] text-orange-500' >Join the waitlist  </p>

      </div>

      {email!==null && <h1 className='text-white text-center'>Hello, {email}</h1>}
      {email!==null &&
        <SalesGpt/>
      
      }
    </main>

  );
};

export default Home;
