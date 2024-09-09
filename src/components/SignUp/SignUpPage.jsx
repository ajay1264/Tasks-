import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
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
          <h2 className="signin-heading">Sign Up to Dribbble</h2>
          <div className="google-signin-container">
            <button className="google-signin-button">
              <img src="/google_icon.png" alt="Google" className="google-icon" />
              Sign up with Google
            </button>
          </div>
          <div className="divider">
            <span className="divider-text">or</span>
          </div>
          <div className="signup-card">
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="email-section">
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
              </div>
              <p className="terms-text">
                By creating an account you agree with our <a href="/terms-of-service" className="link">Terms of Service</a>,<br />
                <a href="/privacy-policy" className="link">Privacy Policy</a>, and our default <a href="/notification-settings" className="link">Notification settings</a>.
              </p>
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

