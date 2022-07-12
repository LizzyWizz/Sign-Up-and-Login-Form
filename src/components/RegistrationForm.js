import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';
import classes from './Registration.module.css';

function Registrationform() {
  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', vlaue: 'telephonemoc' }
  ];

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: ''
  };

  const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Required'),
    password: yup.string().required('Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required('required'),
    modeOfContact: yup.string().required('Required'),
    phone: yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: yup.string().required('Required')
    })
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  const clickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form
              className={classes.Registrationform}
              onSubmit={formik.handleSubmit}
            >
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

              <FormikControl
                control="input"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
              />

              <FormikControl
                control="input"
                type="text"
                label="Phone number"
                name="phone"
              />

              <label>Mode of Contact</label>

              <div className="radio">
                <label>
                  <input type="radio" value="Phone" options={options} />
                  Phone
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="Email" options={options} />
                  Email
                </label>
              </div>
              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Registrationform;
