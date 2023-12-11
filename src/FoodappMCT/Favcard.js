import { Delete } from '@mui/icons-material'
import React from 'react'
import { MdDeleteForever } from "react-icons/md";

function Favcard({ url, title,id,fav,setfav, author,setquickview,setquickcontent,amazon,description }) {

    function removefav(e){
      
        const removedfav= fav.filter((items)=> items.id !== e )
       setfav(removedfav);
    }




  return (
    <div id={id}
        className='mx-5 my-6 cursor-pointer'
        
      >
        <div className='text-clip overflow-hidden max-w-xs'>
        <div className='relative group overflow-hidden'>
  <img className='w-96 rounded-md md:h-56 lg:h-60 md:w-44  lg:w-44 bg-cover relative cursor-pointer' src={url} alt={title}  />
  
</div>
          <h1 className='text-md w-44 overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold'>{title}</h1>
          <p className='text-sm italic w-44 text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis'>{author}</p>

          
        </div>
   <div className='text-center text-2xl text-red-500 border-2 border-red-500 mt-2'>
        <button onClick={()=> removefav(id)}> <MdDeleteForever /></button></div>
      </div>
  )
}

export default Favcard