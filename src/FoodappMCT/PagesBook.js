import React, { useEffect, useState } from 'react'
import SingleBook from './SingleBook';
import { useNavigate } from 'react-router-dom';
import QuickView from './QuickView';
import FooterBook from './FooterBook';
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function PagesBook({bookcat,setbookcat,fav,setfav}) {
    const history=useNavigate();

    const [isVisible, setIsVisible] = useState(false);
      
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 350);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const[topbook,settopbook]=useState([])
    const[quickview,setquickview]=useState(false)
    const [quickcontent,setquickcontent]=useState([]);

    function handletop(){
    
        fetch(`https://books-backend.p.goit.global/books/category?category=${bookcat}`)
        .then(res=> res.json()).then(data=>settopbook(data))
    }
    
    useEffect(()=>{
         handletop();
    },[bookcat])

  return (
    <>
    <div className="mt-6">
        
    <div className='max-w-6xl m-auto'>
        <h1 className='ml-10 sm:ml-16 font-bold text-3xl'>{bookcat}</h1>
      <div className='flex flex-wrap justify-center'>
        {topbook.map((q) => {
          return (
            <div key={q.id} >
              <SingleBook description={q.description} amazon={q.amazon_product_url} id={q._id}  setquickview={setquickview} setquickcontent={setquickcontent} url={q.book_image} title={q.title} author={q.author} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
     
    {quickview && <QuickView fav={fav} set={setfav} setquickview={setquickview} setquickcontent={setquickcontent} quickcontent={quickcontent} />}
   
    <button
      className={`fixed text-4xl text-purple-600 bottom-8 right-10 ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={()=>window.scroll(0,0)}
    >
      <FaRegArrowAltCircleUp />
    </button>
   
  </>
  )
}

export default PagesBook