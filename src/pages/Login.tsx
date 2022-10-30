import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai'

const Login = () => {
  return (
    <div className='flex flex-col gap-5 items-center h-screen bg-base-200'>
      <div className='border flex flex-col pt-16 pb-6 px-10 mt-20 shadow-sm bg-white gap-5'>
        <div className='w-full flex justify-center h-8 mb-10'>
          <img src={logo} alt='logo' />
        </div>

        <form className='flex flex-col gap-2'>
          <input
            type='email'
            placeholder='Phone number, username, or email'
            className='w-64 h-9 m-auto bg-base-200 border-transparent text-sm'
          />
          <input
            type='password'
            placeholder='Password'
            className='w-64 h-9 m-auto bg-base-200 border-transparent text-sm'
          />
          <button
            disabled
            type='submit'
            className='btn mt-2 bg-[#0095f6] border-transparent hover:bg-[#0095f6] hover:border-transparent disabled:bg-[#0095f6] disabled:opacity-50 disabled:text-white'
          >
            Log in
          </button>
        </form>
        <span className='text-gray-400 text-sm font-bold'>
          ──────────── OR ───────────
        </span>
        <button type='button' className='flex items-center gap-2 m-auto'>
          <AiFillFacebook color='#4267B2' size={22} />{' '}
          <Link
            to='/'
            className='text-[#4267b2] font-bold text-sm tracking-wide'
          >
            Log in with Facebook
          </Link>
        </button>
        <Link to='/' className='text-sm text-center text-[#4267b2]'>
          Forgot Password?
        </Link>
      </div>

      <div className='border py-6 px-14 shadow-sm bg-white gap-5'>
        Don't have an account?{' '}
        <Link to='/accounts/emailsignup' className='text-[#0095f6] font-bold'>
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Login
