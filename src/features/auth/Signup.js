import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorMessage } from '@hookform/error-message';


const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();

  const onSubmit = data=>{
    let email_regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(data.email === '' || data.password == '' || data.confirm_password == '')
      toast("ONE OR MORE FIELDS ARE EMPTY")
    else if(email_regex.test(data.email) == false)
    toast("INVALID EMAIL")
   else if(data.password !== data.confirm_password)
      toast("PASSWORDS FONT MATCH")
    else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(data.password) == false){
      toast("PASSWORD IS  NOT STRONG ENOUGH")
    
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center bg-[white] absolute top-[50%] w-[100%] translate-y-[-50%] px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <ToastContainer />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create your Account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="invalid space-y-6"  method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="text"
              
              {...register("email")}
             
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              
              {...register("password")}

            
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
           
          </div>
          <div className="mt-2">
            <input
              id="confirm_password"
              name="confirm_password"
              type="confirm_password"
              {...register("confirm_password")}
             

              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          
            >
            Sign in
          </button>
         
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Have an account?{' '}
        <Link to ='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Log in
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Signup