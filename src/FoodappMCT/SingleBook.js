import React from 'react'

function SingleBook({ url, title,id, author,setquickview,setquickcontent,amazon,description }) {
    return (
        <div id={id}
        className='mx-5 my-6 cursor-pointer'
        onClick={() => {
          setquickcontent({
            url,
            id,
            title,
            author,
            amazon,
            description,
          });
          setquickview(true);
        }}
      >
        <div className='text-clip overflow-hidden max-w-xs'>
        <div className='relative group overflow-hidden'>
  <img className='w-96 rounded-md md:h-56 lg:h-60 md:w-44  lg:w-44 bg-cover relative cursor-pointer' src={url} alt={title} onClick={()=> setquickview(true)} />
  <p className='absolute -bottom-14 left-0 text-center py-4 bg-opacity-60 text-white font-bold w-full bg-black z-10 group-hover:bottom-0 cursor-pointer' onClick={()=>setquickcontent({
        url,
        id,
        title,
        author,
        amazon,
        description
        })}>Quick view</p>
</div>
          <h1 className='text-md w-44 overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold'>{title}</h1>
          <p className='text-sm italic w-44 text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis'>{author}</p>

          
        </div>
      </div>
    );
  }
  

export default SingleBook