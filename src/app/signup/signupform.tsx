"use client"

import Password from "../../components/password.tsx"
import Id from "../../components/id.tsx"
import SubmitButton from "./submitbutton.tsx"
import React, { FormEvent } from 'react';
import { useRouter } from "next/navigation"
import { handleSignUp } from "./signuphandler"


export default function SignUpForm(){
    const router = useRouter();

    async function signUpAccount(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const Data = Object.fromEntries(formData.entries());
        
        if (typeof Data.id !== "string" || typeof Data.password !== "string" || typeof Data.pwconfirm !== "string" || Data.pwconfirm == "" || Data.id == "" || Data.password == ""){
            alert("Invalid input");
            return 
        }

        if(Data.pwconfirm != Data.password){
            alert("Password inputs doesn't match");
            return
        }
        
        const response = await handleSignUp(Data);
        console.log(response)
        if(response.validate){
            alert(response.message);
            router.push("/login")
        }else{alert(response.message)}

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