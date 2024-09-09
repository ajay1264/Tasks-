import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignUp/SignUpPage';
import ForgotPassword from './components/ForgetPassword/ForgotPassword';
import GoogleAuth from '../src/authentication/google.auth';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
