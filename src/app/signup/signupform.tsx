"use client"

import Password from "../../components/password.tsx"
import Id from "../../components/id.tsx"
import SubmitButton from "./submitbutton.tsx"
import React, { FormEvent } from 'react';
import { useRouter } from "next/navigation"

type data = {success:boolean, message: string }

export default function SignUpForm(){

    const router = useRouter();

    async function signUpAccount(event:FormEvent<HTMLFormElement>){
        event.preventDefault;
        const formData = new FormData(event.currentTarget);
        const Data = Object.fromEntries(formData.entries());
        const idstr = Data.id;
        const pwstr = Data.password;
        const addacc = {id:idstr, password:pwstr};
        
        if (typeof idstr !== "string" || typeof pwstr !== "string"){
            alert("Invalid input");
            return    
        }

        const response = await fetch("api/signup/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(addacc),
        })

        if (!response.ok) {
            const errorText = await response.text(); // Get response text for debugging
            console.log('Error response:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const data:data = await response.json()

        if (data.success) {
            alert("Sign up successful");
            router.push("/login")
        }else{alert("Sign up failed")}
    }
    
    return(
        <form method = "POST" id = "login-form" onSubmit ={signUpAccount} >
            <div id = 'logininputs'>
                <p>Sign up</p>
                <br/>
                <Id/>
                <br/>
                <Password/>
                <div className = 'loginbuttons'>
                    <br/>
                    <SubmitButton/>
                </div>
            </div> 
        </form>
    )
}