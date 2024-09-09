

import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Email:', email);
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
        <div className="signup-content">
          <h2 className="signin-heading">Sign Up</h2>
          <div className="google-signin-container">
            <button className="google-signin-button">
              <img src="/google_icon.png" alt="Google" className="google-icon" />
              Sign up with Google
            </button>
          </div>
          <hr className="divider" />
          <div className="signup-card">
            <form className="signup-form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="input-label">Continue with Email</label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <button type="submit" className="submit-button">Sign Up</button>
              <p className="signin-link">
                Already have an account? <a href="/login">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

