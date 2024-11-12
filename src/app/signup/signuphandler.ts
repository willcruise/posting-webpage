"use server"

export async function handleSignUp(Data){

    if (typeof Data.id !== "string" || typeof Data.password !== "string" || typeof Data.pwconfirm !== "string" || Data.pwconfirm == "" || Data.id == "" || Data.password == ""){
        return {validate:false, message:"Invalid input"} 
    }

    try {
        const firstLetter = Array.from(Data.id)[0];
     
        const preIdData = await fetch("http://localhost:4000/" + firstLetter);
        const idData = preIdData.json();
        
        if(Data.pwconfirm != Data.password){
            return {validate:false, message:"Password inputs doesn't match"}
        }

        for(const id in idData){
            if (id == Data.id){
                return {validate:false, message:"Account already exists"}
            }            
        }

        let success = false;    
        //insert id
        await fetch("/api/signup", {
            method:"POST", 
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({ id:Data.id, password: Data.password }),
        }).then((res)=>{return res.json()}).then(res=>success = res.success)

    
    }catch(error){}

}