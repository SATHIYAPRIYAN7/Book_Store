import React, { useState } from 'react'
import Navbarfood from './Navbarfood'
import HeroSection from './HeroSection'
import Bodyofapp from './Bodyofapp'
import SingleBook from './SingleBook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PagesBook from './PagesBook'
import QuickView from './QuickView'
import FooterBook from './FooterBook'
import LoginPage from './LoginPage'
import Footer from '../textutils/Footer'
import Favourites from './Favourites'

function Foodapp() {
    const [bookcat,setbookcat]=useState("");

    const[nav,setnav]=useState(true);
    const[login,setlogin]=useState(false);
    const[username,setusername]=useState("");
    const[fav,setfav]=useState([])

    console.log(fav)

  return (
   <BrowserRouter> 
   <div className=' m-auto'>
        <Navbarfood nav={nav} setnav={setnav} login={login} setlogin={setlogin} username={username} setusername={setusername}/>
        <div className='md:flex  '>
        <HeroSection setnav={setnav} nav={nav} bookcat={bookcat} setbookcat={setbookcat} />
        
        <Routes>
            <Route path='/' element= {<Bodyofapp fav={fav} setfav={setfav} login={login} setlogin={setlogin} setbookcat={setbookcat}/>} />
            <Route path='/catpage' element={<PagesBook fav={fav} login={login} setlogin={setlogin} setfav={setfav} bookcat={bookcat} setbookcat={setbookcat}/>} />
            <Route path='/login' element={<LoginPage login={login} setlogin={setlogin} username={username} setusername={setusername}/>} />
            <Route path='/fav' element={<Favourites fav={fav} setfav={setfav}/>} />
        </Routes>
       
        
        </div>
        
    </div>
    <FooterBook/>
    </BrowserRouter>
  )
}

export default Foodapp