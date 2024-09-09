// src/components/GoogleAuth.jsx
import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import './google.auth.css'; 

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual Client ID

const GoogleAuth = () => {
  const handleSuccess = (response) => {
    console.log("Login Successful:", response);
  };

  const handleError = (error) => {
    console.error("Login Error:", error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="google-signin-container">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          render={(renderProps) => (
            <button
              className="google-signin-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img src="/google_icon.png" alt="Google" className="google-icon" />
              <span>Sign in with Google</span>
            </button>
          )}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
