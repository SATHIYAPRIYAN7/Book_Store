import React from 'react'
import { FaAmazon } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

function QuickView({setquickview,quickcontent,setquickcontent,fav,setfav,login,setlogin}) {


  function handlefav(){
    if(login){setfav([...fav,quickcontent])
    }else{
  alert("Please Login in to add favourites")
  }
    
  }




  return (
    <div id={quickcontent.id}  className='fixed top-0 flex justify-center items-center  z-20 w-screen h-screen bg-black bg-opacity-80'>



      <div className='sm:flex justify-evenly bg-gray-200 min-w-2xl mx-6 mr-10 m-auto px-20 py-16 border-2 border-black rounded-xl items-center relative '>

        <p className='absolute top-1  text-2xl font-medium text-purple-500 right-4 cursor-pointer' onClick={()=> setquickview(false)}>X</p>
        <div className='-mt-10 sm:-mt-0'>
         <img className='w-48 ml-8 sm:ml-0 rounded-md md:h-56 lg:h-72 md:w-44  lg:w-48 bg-cover' src={quickcontent.url}></img>
       </div>

       <div className='ml-4'>
       <h1 className='text-2xl font-bold font-sans '>{quickcontent.title}</h1>
       <p className='italic'>{quickcontent.author}</p>

       <p className='mt-3 sm:w-52'>{quickcontent.description ? quickcontent.description : "Sorry,there is no description available for this selected book !"}</p>


       <div className='mt-5 ml-12 sm:ml-0 flex items-center bg-purple-400 w-28 text-center py-2 text-white rounded-md cursor-pointer hover:scale-105'>
       <button type='button' onClick={() => window.open(quickcontent.amazon,'_blank')} className='text-center font-semibold ml-5'>Buy Link </button>

        <span className='mt-1 ml-1'><FaAmazon /></span>
       </div>

       {fav.some(item => item.id === quickcontent.id)
    ?<div className='mt-5 flex items-center border-2 border-purple-400 w-52  text-center py-2 text-black rounded-md hover:bg-slate-200 ml-3 sm:ml-0'>
       <button className='text-center font-semibold ml-6'>Remove from Favourite
</button>
       
       </div>

       :<div className='mt-5 flex items-center border-2 border-purple-400 w-52  text-center py-2 text-black rounded-md hover:bg-slate-200 ml-3 sm:ml-0' onClick={()=>handlefav()}>
       <button className='text-center font-semibold ml-6'>Add to Favourite
</button>
        <span className='mt-1 ml-1'><AiOutlineHeart /></span>
       </div> 
       }

       </div>

      </div>




    </div>
  )
}

export default QuickView