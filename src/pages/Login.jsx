import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

 


  return (
    <div className="flex min-h-full flex-1 flex-col mt-48  ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-[#14343B]">
          Log in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form  className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#14343B]">
              Email address
            </label>
            <div className="mt-2">
              <input
                
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-[#14343B] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#11565f] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-[#22808D] hover:text-[#11565f]">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
          
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#22808D] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#22808D] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#22808D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22808D]"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a  className="font-semibold leading-6 text-[#22808D] hover:cursor-pointer hover:underline hover:text-[#22808D]">
            Create a new account
          </a>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
