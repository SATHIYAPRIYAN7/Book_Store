import React from 'react'
import Favcard from './Favcard'

function Favourites({fav,setfav}) {
  return (
    <div className='min-h-screen'>
      <h1 className='text-2xl font-bold ml-10 mt-4' >My favourites Books</h1>
     { fav.length===0 ? <div className='text-center sm:ml-96 mt-8'>No favourite items added</div>: <div className='flex flex-wrap'>
      {
      fav.map((q)=> 
        
             (<Favcard fav={fav} setfav={setfav} description={q.description} amazon={q.amazon_product_url} id={q.id}  url={q.url} title={q.title} author={q.author}/>)
        )
      }</div>}
    </div>
  )
}

export default Favourites