import React from 'react';
import { Formik, Field, Form } from 'formik';

const Form1 = (props) => {


  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone:'',
          address:'',
          occupation:'',
        }}
        onSubmit={async (values) => {
          // await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
          props.formData(values)
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field className="border border-black px-2 rounded-sm" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="occupation">Occupation</label>
            <Field className="border border-black px-2 rounded-sm" id="occupation" name="namoccupatione" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field className="border border-black px-2 rounded-sm" id="email" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field className="border border-black px-2 rounded-sm" id="phone" name="phone" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field className="border border-black px-2 rounded-sm" id="address" name="address" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}


export default Form1;
