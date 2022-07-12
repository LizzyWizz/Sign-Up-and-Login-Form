import React from 'react';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import Registrationform from './components/RegistrationForm';

function App() {
  return (
    <div>
      <LoginForm />
      <Registrationform />
    </div>
  );
}

export default App;
