"use client"

import Password from "../../components/password.tsx";
import Id from "../../components/id.tsx";
import React from 'react';
import { useActionState } from "react";
import { useEffect } from "react";
import "../../styles/loginbutton.css"
import { loginHandler } from "./loginhandler.ts"
import { useRouter } from "next/navigation";

export default function LoginForm(){
  const router = useRouter();
  
  type resObj = {validate: boolean, message: string};
  
  let state:resObj = {validate:false, message:""};

  async function loginClicked(e){

    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const Data = {id:formData.get("id"), password:formData.get("password")};

    
    const res = await loginHandler(Data);

   

    if(res.validate){
      router.push("/main");
    }else{state = res}

  }


  useEffect(() => {
    const loginText = document.getElementById("validateText")!;
    if (!state.validate){
      loginText.textContent = state.message;
    }
  })


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
