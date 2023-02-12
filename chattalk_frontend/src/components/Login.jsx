import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video 
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute flex flex-col justify-center">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>
          <div className="shadow-2xl">
          <GoogleOAuthProvider clientId={`${process.env.REACT_GOOGLE_API_TOKEN}`}>
            <GoogleLogin
              auto_select
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
            {/* <GoogleOAuthProvider 
              clientId={`${process.env.REACT_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}>
                    <FcGoogle className="mr-4" /> Sign in with Google
                </button>
              )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              >
            </GoogleOAuthProvider> */}
          </div>
        </div>
    </div>
  )
}

export default Login