"use server"


export async function handleSignUp(Data){

    if (typeof Data.id !== "string" || typeof Data.password !== "string" || Data.id == "" || Data.password == ""){
   
        return {validate:false, message:"Invalid input"} 
    }

    try {
        const firstLetter = Array.from(Data.id)[0];
     
        const preIdData = await fetch("http://localhost:4000/" + firstLetter, {

        });
        const prePwData = await fetch("http://localhost:4000/password", {
            
        });

    }

}