import React, { useState } from 'react'

const Login = ({handleLogin}) => {
//  console.log(handleLogin)

  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

 const submitHandler = (e) =>{
e.preventDefault()

handleLogin(email,password)
 console.log("Typed Email:", email);
  console.log("Typed Password:", password);
  console.log("Employees:", authData.employees);

setEmail("")
setPassword("")
}

  return (
    <div className='flex text-white m-20 h-120 w-{90%} '>
      
    <div className=' gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 h-[100%] w-[40%] flex flex-col items-center justify-center    rounded-tl-2xl rounded-bl-2xl p-10 '>
      <p className="text-4xl text-blue-50 font-bold relative right-10">
  Welcome Back! 👋
</p>     
 <p className=" text-blue-200 relative top-5 text-shadow-2xl font-bold">To Stay Connected Stay LoggedIn With Personal Credential</p>
 <p className=" text-blue-100 relative top-35">Don't Have An Account?</p>
    <button className='rounded-full mt-35 pl-15 pr-15 h-10 bg-gradient-to-r from-blue-500 shadow-2xl to-cyan-500 hover:scale-105 transition duration-300'>Sign Up</button>
    </div>
    <div className="bg-gradient-to-l from-cyan-50 to-blue-100 h-full w-[60%] rounded-tr-2xl rounded-br-2xl p-10 flex flex-col justify-center">

  <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text relative bottom-20 indent-1-px text-transparent text-center mb-10" >
    Log In
  </p>

  <form
  onSubmit={submitHandler} 
  className="flex flex-col gap-5">

    <div className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
      <input
       value={email}
      onChange={(e)=>{
        setEmail (e.target.value)
      }}
      
        required
        type="email"
        placeholder="Enter Your E-mail"
        className="w-full rounded-xl bg-white px-4 py-3 outline-none text-gray-700"
      />
    </div>

    <div className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
      <input

      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
required
type="password"
        placeholder="Enter Your Password"
        className="w-full rounded-xl bg-white px-4 py-3 outline-none text-gray-700"
      />
    </div>

    <button
      type="submit"
      className="mt-6 rounded-full py-3 pl-15 pr-15 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-xl hover:scale-105  transition duration-300"
    >
      Log In
    </button>

  </form>

</div>
    </div>
  )
}

export default Login
