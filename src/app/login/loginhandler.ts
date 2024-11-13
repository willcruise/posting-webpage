"use server"

import { sha256Hash } from "../../utils/hash.ts";
import { setId } from "../../utils/currentacc.ts";
import { setPassword } from "../../utils/currentacc.ts";
import { setIsLoggedIn } from "../../utils/currentacc.ts";

export async function loginHandler(Data){
    
    if (typeof Data.id !== "string" || typeof Data.password !== "string" || Data.id == "" || Data.password == ""){
        
        return {validate:false, message:"Invalid input"} 
    }

    try {
        const firstLetter = Array.from(Data.id)[0];
        

        const preIdData = await fetch(`https://super-duper-telegram-wq56gw4rrp4cgqp-3000.app.github.dev/accounts/accounts.json/${firstLetter}`);
        const prePwData = await fetch("https://super-duper-telegram-wq56gw4rrp4cgqp-3000.app.github.dev/account/accounts.json/password");


        const pwData = await prePwData.json();
        const idData = await preIdData.json();

        //validation process
        for (const identity in idData){
            if(identity == Data.id){
                //hash of input id if id exists in database
                const hashedId:string = sha256Hash(Data.id);
                //check if password matches
                if (Data.password == pwData[hashedId]){
                    await setIsLoggedIn(true);
                    await setId(Data.id);
                    await setPassword(Data.password);
                    return {validate: true, message:"Sign in successful"}
                }else{return {validate: false, message:"Incorrect password"}}
            }
        }

        return {validate: false, message:"No account, please sign up"}

    }catch(error){return {validate: false, message:`Error: {${error}}`}}
}