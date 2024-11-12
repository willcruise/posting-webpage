"use client"

import Password from "../../components/password.tsx"
import Id from "../../components/id.tsx"
import SubmitButton from "./submitbutton.tsx"
import React, { FormEvent } from 'react';
import { useRouter } from "next/navigation"
import { handleSignUp } from "./signuphandler"


export default function SignUpForm(){
    const router = useRouter();

    type resObj = {validate: boolean, message: string};
  
    var state:resObj = {validate:false, message:""};

    async function signUpAccount(event:FormEvent<HTMLFormElement>){
        event.preventDefault;
        const formData = new FormData(event.currentTarget);
        const Data = Object.fromEntries(formData.entries());
             
        const response = await handleSignUp(Data);

    }
    
    return(
        <form method = "POST" id = "login-form" onSubmit ={signUpAccount} >
            <div id = 'logininputs'>
                <p>Sign up</p>
                <br/>
                <Id/>
                <br/>
                <br/>
                <Password/>
                <br/>
                <label>
                    retype password
                <br/>
                <input type = 'password' name = 'pwconfirm'/>
                </label>
                <br/>
                <br/>
                <SubmitButton/>
            </div> 
        </form>
    )
}