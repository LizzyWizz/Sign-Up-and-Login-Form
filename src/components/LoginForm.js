import React, { Component, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikContainer from './FormikContainer';
import FormikControl from './FormikControl';
import axios from 'axios';
import formUrlEncoded from 'form-urlencoded';
import classes from './Login.module.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const initialValues = {
    email: '',
    password: ''
  };

  const validationschema = Yup.object({
    email: Yup.string().email('invalid email format').required('Requird'),
    password: Yup.string().required('Required')
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    // var bodyFormData = new FormData();
    const data = {
      grant_type: 'password',
      client_id: 'web-dashboard',
      client_secret: 'SuperSecretPassword',
      scope: 'openid profile role email offline_access adminApi mobileApi',
      username: username,
      password: password
    };

    axios({
      method: 'post',
      url: 'https://edeaf-api-staging.azurewebsites.net/connect/token',
      data: formUrlEncoded(data)
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <div>
      <h1> Login</h1>

      <Formik
        initialValues={initialValues}
        validationschema={validationschema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className={classes.LoginForm}>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              <FormikControl
                type="text"
                value={password}
                onChange={handlePasswordChange}
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <button
                type="submit"
                onClick={clickHandler}
                disabled={!formik.isValid}
              >
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginForm;
