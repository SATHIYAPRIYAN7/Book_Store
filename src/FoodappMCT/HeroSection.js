import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection({bookcat,setbookcat,nav,setnav}) {

    const Navigate=useNavigate();

    const[cat,setcat]=useState([])

function handlecat(){

    fetch("https://books-backend.p.goit.global/books/category-list")
    .then(res=> res.json()).then(data=>setcat(data))
}

useEffect(()=>{
     handlecat();
},[])

function handlecat1(e){
    setbookcat(e);
      Navigate('/catpage')
      setnav(!nav)
}
function handleicon(){
    Navigate('/')
    setnav(!nav)
   }


  return (
    <div  className={`my-6 ml-10 mr-10 sm:mr-0 ${nav ? 'hidden' : 'block'} sm:block`}>
        
        <div className='text-md max-h-full min-w-md overflow-y-auto bg-slate-100 rounded-md py-3'>
           <h1 className='pl-3 cursor-pointer hover:text-purple-700 ' onClick={handleicon} >All Categories</h1>

           <ul className='flex flex-col items-start'>
            {cat.map((e)=> (
                <li><button className='my-2 hover:scale-105 mr-8 ml-3 hover:text-purple-700' onClick={()=>handlecat1(e.list_name)}>{e.list_name}</button></li>
            ))}
           </ul>

        </div>


    </div>
  ) 
}

export default HeroSection