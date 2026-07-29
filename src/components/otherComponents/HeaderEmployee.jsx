import React, { useState } from 'react'

const HeaderEmployee = ({data}) => {
const logOutUser = () => {
  // localStorage.clear()
  localStorage.setItem('loggedInUserData','');
  window.location.reload()
}

  const employee = data;
const userName= data?.firstName ||"Admin";
return (
    <div>
    <div className=' bg-gradient-to-l from-cyan-50 to-blue-100 flex justify-between  p-5 ' >
      <h1 className='text-3xl font-bold bg-gradient-to-l from-cyan-400 via-blue-500 to-purple-600 bg-clip-text  indent-1-px text-transparent '>Hey! <br /><span>{userName}</span>👋</h1>
    <button onClick={logOutUser} className='rounded-full relative top-8 pl-15 pr-15 h-10  bg-gradient-to-r from-blue-800 to-cyan-500 hover:scale-105 transition duration-300 text-white font-bold'>LogOut</button>
      </div>
   <div className='h-[0.5px]  rounded-4xl bg-gradient-to-l from-cyan-300 via-blue-400 to-purple-300'></div>
    </div>  
)
}

export default HeaderEmployee 
