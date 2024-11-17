"use client";

import React from 'react';
import "../../styles/signupbutton.css"
import { useRouter } from "next/navigation";

export default function SignUpButton(){
    const router = useRouter();
    return(
        <button className = "border border-slate-100 bg-slate-100" id = "signupbutton" onClick = {() => router.push("/signup")}>Sign Up</button>
    )
}