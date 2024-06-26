// pages/index.js
"use client";
import React, { useState } from 'react';
import SpinKit from '../components/SpinKit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <>  
    
    <div className="authentication-wrapper">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-2">Login</h4>
              <p className="mb-4">Please sign-in to your account and start the adventure</p>

              <form id="formAuthentication" className="mb-3" action="/" method='POST'>  
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email or Username</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="email" 
                    name="email-username" 
                    placeholder="Enter your email or username" 
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">Password</label>
                    <a href="auth-forgot-password-cover.html">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      className="form-control" 
                      name="password" 
                      placeholder="············" 
                      aria-describedby="password"
                    />
                    <span 
                      className="input-group-text cursor-pointer" 
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember-me"/>
                    <label className="form-check-label" htmlFor="remember-me">
                      Remember Me
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
