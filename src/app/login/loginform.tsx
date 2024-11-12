"use client"

import Password from "../../components/password.tsx";
import Id from "../../components/id.tsx";
import React from 'react';
import { useEffect } from "react";
import "../../styles/loginbutton.css"
import { loginHandler } from "./loginhandler.ts"
import { useRouter } from "next/navigation";

export default function LoginForm(){
  const router = useRouter();
  
  type resObj = {validate: boolean, message: string};
  
  var state:resObj = {validate:false, message:""};

  async function loginClicked(e){

    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const Data = {id:formData.get("id"), password:formData.get("password")};

    
    state = await loginHandler(Data);  

    const loginText = document.querySelector("#validateText")!;
    if(state.validate){
      router.push("/main");
    }else{loginText.textContent = state.message;}

  }

  return(
    <form method = "POST" id = "login-form" onSubmit = { loginClicked }>
      <div id = 'logininputs'>
        <p>Sign in</p>
        <br/>
        <Id/>
        <br/>
        <Password/>
        <div className = 'loginbuttons'>
          <br/>
          <button type = 'submit'>Login</button>
          <p id = "validateText"/>
        </div>
      </div> 
    </form>
  )
}
