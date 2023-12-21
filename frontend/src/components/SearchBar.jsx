import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";

const SearchBar = () => {
    const [query,setQuery] = useState("");

    const [answer,setAnswer] = useState("");
    async function handleSubmission(){
        console.log("query:",query)

        const response = await fetch("http://localhost:8000/api/get-output",{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify({
                query
            })
        })

        if(response.status===200){
            let reply = await response.json();
            console.log(reply.output)
            setAnswer(reply.output)
        }
    }

  return (
    <div className='mt-4 flex items-center gap-5 flex-col'>
        <p className=' text-5xl text-center'>fiXit</p>
        <div className='flex justify-between items-center mt-5 p-5 border-2 rounded-lg border-gray-500 w-[65vw]'>
            <input type="text" className=' outline-none w-[90vh]' 
            onChange={(e)=>setQuery(e.target.value)}
            placeholder='Sales GPT can help you to browse uncovered topics'
            value={query}
            
            />
            <IoSend className=' text-2xl cursor-pointer'
                onClick={handleSubmission}
            />
        </div>

    <div className=' bg-black text-green-400 w-[60%] max-h-[40%]'>

        {answer!==""?<p className=' overflow-scroll bg-black'> {answer}</p>:<></>}
    </div>

    </div>

    
  )
}

export default SearchBar