import "../../styles/loginpage.css"
import LoginForm from "./loginform.tsx"
import SignUpButton from "./signupbutton.tsx"
import React from 'react';

export default function LoginPage(){

  return( 
      <div className = 'loginbox'>
        <p id = 'title' >posting</p>
        <br/>
        <LoginForm/>
        <p id = "validateText"/>
        <br/>
        <br/>
        <SignUpButton/>
      </div>
  );
}