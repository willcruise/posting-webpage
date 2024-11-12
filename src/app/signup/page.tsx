import "../../styles/signup.css"
import SignUpForm from "./signupform.tsx"
import React from 'react';

export default function SignUp(){
  return(
    <div className = 'signupbox'>
      <p id = 'title' >posting</p>
      <br/>
      <SignUpForm/>
      <br/>
      <br/>
    </div>
    );
  }

