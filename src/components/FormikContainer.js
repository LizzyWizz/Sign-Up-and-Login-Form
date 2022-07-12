import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationschema = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: yup.string().required('Password is required')
  });

  const onSubmit = (values) => console.log('Form data', values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationschema={validationschema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
