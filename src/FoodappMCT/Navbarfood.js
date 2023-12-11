import React, { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';
import { LuMoonStar } from 'react-icons/lu';
import { GiBookCover } from 'react-icons/gi';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

function Navbarfood({ nav, setnav, login, setlogin, username, setusername }) {
  const Navigate = useNavigate();
  const [dark, setdark] = useState(true);
  const [menu, setmenu] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  function handleDark() {
    setdark(!dark);
  }

  function handlemenu() {
    setmenu(!menu);
  }

  function handleicon() {
    Navigate('/');
  }

  function handleSignOut() {
    setShowPopup(true);
  }

  function confirmSignOut() {
    // Perform sign-out logic here
    setlogin(false); // Update the login state accordingly
    setShowPopup(false);
    setusername(""); // Close the pop-up after sign-out
  }

  function cancelSignOut() {
    setShowPopup(false);
    
  }

  return (
    <div className='max-w-screen-xl m-auto'>
      <div className='flex justify-between border-2 border-black mx-2 lg:mx-0 py-3 px-3 rounded-br-xl rounded-bl-xl'>
        <div className='flex items-center cursor-pointer' >
          <span onClick={() => handleicon()}>
            <GiBookCover className='text-4xl text-purple-500 pt-1' />
          </span>
          <h1 onClick={() => handleicon()} className='text-2xl font-bold cursor-pointer'> BOOK</h1>
        </div>

        <div className='flex items-center '>
        <div className='mr-7 sm:mr-20 text-2xl hover:scale-110 cursor-pointer text-rose-600' onClick={()=> Navigate('/fav')}><FaHeart /></div>
          {login ? (
            <div className='sm:text-lg flex items-center justify-center  font-semibold mr-6 sm:mr-0 sm:block bg-purple-400 text-white px-5 py-1 rounded-md'>
            <button 
              onClick={() => handleSignOut()}
              
            >
              {username}
            </button>
            <button className=' ml-1  text-xl '><CgProfile /></button>
            </div>
          ) : (
            <button
              onClick={() => !login && Navigate('/login')}
              className='sm:text-lg font-semibold mr-6 sm:mr-0 sm:block bg-purple-400 text-white px-5 py-1 rounded-md '
            >
              Log In
            </button>
          )}
          <button onClick={() => setnav(!nav)}>
            <HiOutlineMenuAlt1 className='text-3xl sm:hidden text-purple-600' />
          </button>
        </div>
      </div>

      {/* Pop-up container */}
      {showPopup && (
        <div className='fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 text-2xl rounded-md'>
            <p>Are you sure you want to sign out?</p>
            <button className='mr-3 bg-purple-400 px-2 text-lg mt-3 text-white rounded-md' onClick={confirmSignOut}>Yes</button>
            <button className='mr-3 bg-purple-400 px-2 text-lg mt-3 text-white rounded-md' onClick={cancelSignOut}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbarfood;
