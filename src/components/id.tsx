"use client"
import "../styles/globals.css"
import React from 'react';

export default function Id(){
    return(
        <label>
            Id 
            <br/>
            <input className = "border-slate-100 bg-slate-100" id = 'loginid' type = 'email' name = 'id' defaultValue = "example@gmail.com" />
        </label>
    )
}