    import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios'; 
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const postFormData = async (values) => {
    try {
      const response = await axios.post(
        'https://blog-hqx2.onrender.com/user/register', 
        values
      );
      toast.success('User registered successfully');
    } catch (error) {
      console.error(error); 
      toast.error('User registration failed');
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string().min(3, 'Minimum 3 characters').required('Name is required.'),
          email: Yup.string().email('Invalid email address').required('Email is required.'),
          password: Yup.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 30 characters').required('Password is required.'),
        })}
        onSubmit={(value)=>{
          postFormData(value)
        }}
      >
        <Form className='flex flex-col justify-center items-center w-full max-w-md mx-auto p-4'>
          <label htmlFor='name' className='mt-4'>Username</label>
          <Field name='name' type='text' className='mt-2 w-full p-2 border rounded' />
          <ErrorMessage name='name' component='div' className='text-red-500 mt-1' />

          <label htmlFor='email' className='mt-4'>Email</label>
          <Field name='email' type='email' className='mt-2 w-full p-2 border rounded' />
          <ErrorMessage name='email' component='div' className='text-red-500 mt-1' />

          <label htmlFor='password' className='mt-4'>Password</label>
          <Field name='password' type='password' className='mt-2 w-full p-2 border rounded' />
          <ErrorMessage name='password' component='div' className='text-red-500 mt-1' />

          <button type='submit' className='bg-black text-white p-2 mt-8 rounded w-full'>
            Submit
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default Register;
