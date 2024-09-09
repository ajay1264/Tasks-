import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
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
        <div className="login-content">
          <h2 className="signin-heading">Sign into Dribble</h2>
          <div className="google-signin-container">
            <button className="google-signin-button">
              <img src="/google_icon.png" alt="Google" className="google-icon" />
              Sign in with Google
            </button>
          </div>
          <div className="login-card">
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="username" className="input-label">Username or Email</label>
              <input
                type="text"
                id="username"
                className="input-field"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="current-username"
              />
              <label htmlFor="password" className="input-label">Password</label>
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button type="submit" className="submit-button">Sign In</button>
              <a href="/forgot-password" className="forget-password">Forget Password?</a>
              <p className="signup-link">
                Don’t have an account? <a href="/signup">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
