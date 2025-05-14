  import { ErrorMessage, Field, Formik, Form } from 'formik';
import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const loginUser = async (values) => {
      try {
        const response = await axios.post("https://blog-hqx2.onrender.com/user/login",values)

        const token = response.data.token
        const user = response.data.user
        console.log(token)
        login(user,token)
        navigate('/')

      }catch(error) {
        console.log(error)
      }
    }
  return (
    
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={Yup.object({
            //   name: Yup.string().min(3, 'Minimum 3 characters').required('Name is required.'),
              email: Yup.string().email('Invalid email address').required('Email is required.'),
              password: Yup.string().min(6, 'Minimum 6 characters').max(30, 'Maximum 30 characters').required('Password is required.'),
            })}
            onSubmit={(values) => {
              loginUser(values)
            }}
          >
            <Form className='flex flex-col justify-center items-center w-full max-w-md mx-auto p-4'>
{/*               
              <label htmlFor='name' className='mt-4'>Username</label>
              <Field name='name' type='text' className='mt-2 w-full p-2 border rounded' />
              <ErrorMessage name='name' component='div' className='text-red-500 mt-1' />
       */}
              <label htmlFor='email' className='mt-4'>Email</label>
              <Field name='email' type='email' className='mt-2 w-full p-2 border rounded' />
              <ErrorMessage name='email' component='div' className='text-red-500 mt-1' />
      
              <label htmlFor='password' className='mt-4'>Password</label>
              <Field name='password' type='password' className='mt-2 w-full p-2 border rounded' />
              <ErrorMessage name='password' component='div' className='text-red-500 mt-1' />
               <ToastContainer/>
              <button type='submit' className='bg-black text-white p-2 mt-8 rounded w-full'>
                Login
              </button>
              
            </Form>
          </Formik>
    
  );
}

export default Login
