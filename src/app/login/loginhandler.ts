"use server"

import fs from 'fs'
import { sha256Hash } from "../../utils/hash.ts";

export async function loginHandler(Data){
    
    if (typeof Data.id !== "string" || typeof Data.password !== "string" || Data.id == "" || Data.password == ""){
        
        return {validate:false, message:"Invalid input"} 
    }

    try {
        const firstLetter = Data.id[0];
        
        const response = fs.readFileSync("/workspaces/posting-webpage-token/public/accounts/accounts.json", 'utf-8');
        const preData = JSON.parse(response);
             

        const idData = preData[firstLetter];
        const pwData = preData.password;  

        //validation process
        for (var i = 0; i<idData.length; i++){
            if(idData[i] == Data.id){
                //hash of input id if id exists in database
                const hashedId:string = sha256Hash(Data.id);
                //check if password matches
                if (Data.password == pwData[hashedId]){
                    return {validate: true, message:"Sign in successful"}
                }else{return {validate: false, message:"Incorrect password"}}
            }
        }

        return {validate: false, message:"No account, please sign up"}

    }catch(error){return {validate: false, message:`Error: {${error}}`}}
}