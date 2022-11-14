import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillGoogleSquare } from 'react-icons/ai'
import Seo from '../components/shared/Seo'
import {
  signInWithGooglePopup,
  createUserDocument,
  logInWithEmailAndPassword,
} from '../firebase'

const defaultFormFields = {
  email: '',
  password: '',
}

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const navigate = useNavigate()

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocument(user)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { user } = await logInWithEmailAndPassword(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Seo title='Log in' />
      <div className='flex flex-col gap-5 items-center h-screen bg-base-200'>
        <div className='border flex flex-col pt-16 pb-6 px-10 mt-20 shadow-sm bg-white gap-5 rounded'>
          <div className='w-full flex justify-center h-8 mb-10'>
            <img src={logo} alt='logo' />
          </div>

          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChange}
              className='w-64 h-9 pl-2 m-auto bg-base-200 border-transparent text-sm'
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
              className='w-64 h-9 pl-2 m-auto bg-base-200 border-transparent text-sm'
            />
            <button
              disabled={!email || !password}
              type='submit'
              className='text-white font-bold rounded py-1  mt-2 bg-primary border-transparent hover:bg-primary hover:border-transparent disabled:bg-primary disabled:opacity-50 disabled:text-white'
            >
              Log in
            </button>
          </form>
          <div className='divider text-gray-400 text-sm font-bold'>OR</div>
          <button
            type='button'
            className='flex items-center gap-2 m-auto'
            onClick={logGoogleUser}
          >
            <AiFillGoogleSquare color='#DB4437' size={22} />{' '}
            <Link
              to='/'
              className='text-[#DB4437] font-bold text-sm tracking-wide'
            >
              Log in with Google
            </Link>
          </button>
          <Link to='/' className='text-sm text-center text-[#4267b2]'>
            Forgot Password?
          </Link>
        </div>

        <div className='border py-6 px-14 shadow-sm bg-white gap-5 rounded'>
          Don't have an account?{' '}
          <Link to='/accounts/emailsignup' className='text-primary font-bold'>
            Sign up
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
