"use client"
import "../styles/globals.css"
import React from 'react';

export default function Password(){
    return(
        <label>
            Password
            <br/>
            <input className = "border-slate-100 bg-slate-100" type = 'password' name = 'password'/>
        </label>
    )
}