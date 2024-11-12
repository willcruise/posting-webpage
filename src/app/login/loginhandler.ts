"use server"


import { sha256Hash } from "../../utils/hash.ts";
import { setId } from "../../utils/currentacc.ts";
import { setPassword } from "../../utils/currentacc.ts";
import { setIsLoggedIn } from "../../utils/currentacc.ts";


export async function loginHandler(Data){
    
    console.log("jo");


    if (typeof Data.id !== "string" || typeof Data.password !== "string" || Data.id == "" || Data.password == ""){
        //get the first letter of input id
        return {validate:false, message:"Invalid input"} 
    }

    try {
        const firstLetter = Array.from(Data.id)[0];
        const idendp:string = "http://localhost:4000/" + firstLetter;


        const preIdData = await fetch(idendp);
        const prePwData = await fetch("http://localhost:4000/password");

        const pwData = prePwData.json();
        const idData = preIdData.json();

        console.log(idData);

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

    }catch(error){return {validate: false, message:`Error: ${error}`}}
}