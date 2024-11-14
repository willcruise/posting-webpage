"use server"

import fs from 'fs'
import { sha256Hash } from "../../utils/hash.ts";


export async function handleSignUp(Data){
    
    try {
        
        const firstLetter = Data.id[0]

        const response = fs.readFileSync("/workspaces/posting-webpage-token/public/accounts/accounts.json", 'utf-8');
        const preData = JSON.parse(response);
  

       
        const idData = preData[firstLetter];
        const pwData = preData.password;  
            

       
        if (idData.includes(Data.id)){
              return {validate:false, message:"Account already exists"}
        }            
                  
        //insert password process
        const hashedId = sha256Hash(Data.id);
        if (hashedId in pwData){
            pwData[hashedId].push(Data.password);
        }else{
            pwData[hashedId] = [Data.password];
        }
       
        //modifying read data to write 
        preData[firstLetter].push(Data.id);
        preData.password[hashedId] = Data.password;
    
        await fs.writeFileSync(`./public/accounts/accounts.json`, JSON.stringify(preData, null, 2))
        
        return {validate:true, message:"Sign up successful"};
  
    }catch(error){
        
        return {validate:false, message: error}
    }

}