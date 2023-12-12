import React, { useEffect, useState } from 'react'
import SingleBook from './SingleBook';
import { useNavigate } from 'react-router-dom';
import QuickView from './QuickView';
import FooterBook from './FooterBook';
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function Bodyofapp2({setbookcat,fav,setfav,login,setlogin}) {

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
    
        fetch("https://books-backend.p.goit.global/books/top-books")
        .then(res=> res.json()).then(data=>settopbook(data))
    }
    
    useEffect(()=>{
         handletop();
    },[])

    function handleCat(e){
        setbookcat(e)
        history('/catpage');
    }

  return (
    <>
    <div className='max-w-7xl min-h-screen m-auto mt-6' >
   
   <div>
   {topbook.map((e) => {
      
  return (
    <div key={e.list_name}>
      <h1 className='font-bold text-xl ml-2'>{e.list_name}</h1>
     <div className='flex sm:justify-between justify-center  flex-wrap'> {e.books.map((q) => {
        
        return(
            <SingleBook description={q.description} amazon={q.amazon_product_url} setquickview={setquickview} setquickcontent={setquickcontent} url={q.book_image} title={q.title} id={q._id} author={q.author} />
        );
      })}</div>
      <div className='sm:text-right text-center'><button className='border-2 border-purple-400 px-7 py-2 font-semibold rounded-full hover:bg-purple-200 ' onClick={()=> handleCat(e.list_name)}>See more</button></div>
        
    </div>
  );
})}


   </div>
  
    </div>
    {quickview && <QuickView login={login} setlogin={setlogin} fav={fav} setfav={setfav} setquickview={setquickview} setquickcontent={setquickcontent} quickcontent={quickcontent} />}

   

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

export default Bodyofapp2