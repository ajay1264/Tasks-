import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const GoogleAuth = () => {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log('Google login successful', response);
    // Handle successful login, e.g., redirect to another page
    navigate('/dashboard'); // Redirect to a specific page after successful login
  };

  const handleError = (error) => {
    console.error('Google login failed', error);
    // Handle login errors
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="google-signin-container">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          buttonText="Sign in with Google"
          render={(renderProps) => (
            <button
              className="google-signin-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle className="google-icon" />
              Sign in with Google
            </button>
          )}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
