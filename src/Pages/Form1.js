import React from 'react';
import { Formik, Field, Form } from 'formik';

const Form1 = (props) => {


  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='col-span-2  bg-sky-300 h-screen'></div>
        <div className='col-span-10'>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              address: '',
              occupation: '',
            }}
            onSubmit={async (values) => {
              // await new Promise((r) => setTimeout(r, 500));
              // alert(JSON.stringify(values, null, 2));
              props.formData(values)
            }}
          >

            <div className='m-10'>
              <Form>
                <div className='flex flex-wrap'>

                  <div className='mx-5'>
                    <p className='font-semibold text-lg' htmlFor="name">Name</p>
                    <Field className="outline-2 outline-sky-300 border-black px-2 py-1 my-2 w-72 border shadow-lg rounded-sm" id="name" name="name" />
                  </div>
                  <div className='mx-5'>
                    <p className='font-semibold text-lg' htmlFor="occupation">Occupation</p>
                    <Field className="outline-2 outline-sky-300 border-black px-2 py-1 my-2 w-72 border shadow-lg rounded-sm" id="occupation" name="occupation" />
                  </div>
                  <div className='mx-5'>
                    <p className='font-semibold text-lg' htmlFor="email">Email</p>
                    <Field className="outline-2 outline-sky-300 border-black px-2 py-1 my-2 w-72 border shadow-lg rounded-sm" id="email" name="email" type="email" />
                  </div>
                  <div className='mx-5'>
                    <p className='font-semibold text-lg' htmlFor="phone">Phone</p>
                    <Field className="outline-2 outline-sky-300 border-black px-2 py-1 my-2 w-72 border shadow-lg rounded-sm" id="phone" name="phone" />
                  </div>
                  <div className='mx-5'>
                    <p className='font-semibold text-lg' htmlFor="address">Address</p>
                    <Field className="outline-2 outline-sky-300 border-black px-2 py-1 my-2 w-72 border shadow-lg rounded-sm" id="address" name="address" />
                  </div>
                </div>
                <div className='mx-5'>
                  <p htmlFor="occupation" className='font-semibold text-lg'>About You</p>
                  <Field component="textarea" className="w-foutline-2 outline-sky-300 border-black px-2 py-1 my-2 w-full border shadow-lg rounded-sm" id="about" name="about" />
                </div>
                <div className='flex justify-center'>
                  <button type="submit" className='bg-blue-500 px-5 py-1 rounded-sm shadow-lg text-white text-xl'>Next</button>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  )
}


export default Form1;
