
import React, { useState } from 'react';
import './ForgotPassword.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   // console.log('Email:', email);

  };

  return (
    <div className="main">
      <div className="left">
        <video
          src="/sidebar-animation.mp4"
          autoPlay
          loop
          muted
          className="video-background"
        />
      </div>
      <div className="right">
        <div className="forgot-password-content">
          <h2 className="forgot-password-heading">Forgot Password</h2>
          <p className="forgot-password-description">
            Enter your email address below and we will send you instructions to reset your password.
          </p>
          <form className="forgot-password-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="input-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
           <p className="security-notice">
              For security reasons, we do NOT store your password. So rest assured that we will never send your passwords via email.
            </p>
            <button type="submit" className="submit-button">Send Reset Instructions</button>
          </form>
          <p className="back-to-login">
            Remember your password? <a href="/login">Back to Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
