"use server"



import fs from 'fs'
import { sha256Hash } from "../../utils/hash.ts";

export async function handleSignUp(Data){

    if (typeof Data.id !== "string" || typeof Data.password !== "string" || typeof Data.pwconfirm !== "string" || Data.pwconfirm == "" || Data.id == "" || Data.password == ""){
        return {validate:false, message:"Invalid input"} 
    }

    try {
        const firstLetter = Array.from(Data.id)[0];
     
        
        const preIdData = await fetch(`https://super-duper-telegram-wq56gw4rrp4cgqp-3000.app.github.dev/accounts/accounts.json/${firstLetter}`);
        const prePwData = await fetch("https://super-duper-telegram-wq56gw4rrp4cgqp-3000.app.github.dev/account/accounts.json/password");


        const pwData = await prePwData.json();
        const idData = await preIdData.json();
           
        if(Data.pwconfirm != Data.password){
            return {validate:false, message:"Password inputs doesn't match"}
        }

        for(const id in idData){
            if (id == Data.id){
                return {validate:false, message:"Account already exists"}
            }            
        }

        let success = false;    
        
        //insert id process
        idData.push(Data.id);

        //insert password process
        const hashedId = sha256Hash(Data.id);
        if (hashedId in pwData){
            pwData[hashedId].push(Data.password);
        }else{
            pwData[hashedId] = [Data.password];
        }

        fs.appendFile('')







    
    }catch(error){}

}