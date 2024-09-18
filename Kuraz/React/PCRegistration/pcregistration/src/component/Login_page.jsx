import React, {useState} from 'react';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const Login_page = () => {
    const [passwordVisible, setPasswordVisible]=useState(false);
    const toogleVisibility=()=>{
        setPasswordVisible(!passwordVisible);
    }
    const navigate= useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-800">
      <div className="w-full max-w-lg mx-4 p-8 bg-blueBlack rounded-md shadow-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-3xl text-white mb-4">
            PC Registration System
          </h1>
          <h2 className="font-semibold text-lg md:text-2xl text-white mb-6">
            Sign in to your account.
          </h2>
        </div>
        <form className="flex flex-col justify-center items-center space-y-4">
          <div className="w-full">
            <label htmlFor="userName" className="block text-white text-left">
              Username
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Enter username"
              className="w-full p-2 rounded-md mt-1 hover:border-none focus:outline-none transition-all"
            />
          </div>
          <div className="w-full relative">
            <label htmlFor="password" className="block text-white text-left">
              Password
            </label>
            <input
              type={passwordVisible? 'text': 'password'}
              id="password"
              placeholder="Enter password"
              className="w-full p-2 rounded-md mt-1 hover:border-none focus:outline-none transition-all"
            />
            <span
            className="absolute right-3 top-10 text-textSecondary cursor-pointer"
            onClick={toogleVisibility}
            >{passwordVisible ? <AiFillEyeInvisible/>: <AiFillEye/>}</span>
          </div>
          <div className='w-full'>
            <button 
            onClick={()=> navigate('/sidebar')}
            className='w-full p-2 rounded-md bg-deepPurple text-white '>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login_page;
