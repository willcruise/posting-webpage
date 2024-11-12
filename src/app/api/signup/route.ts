
import type { NextApiRequest, NextApiResponse } from 'next';
import { sha256Hash } from "../../../utils/hash.ts";


export default function handler(req:NextApiRequest, res:NextApiResponse) {
  
  //check if request method is post
  if (req.method !== 'POST') {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
      const newData = req.body;
          
      const addId = newData.id;
      const addPw = newData.password;  


      if (typeof addId !== "string" || typeof addPw !== "string"){
        res.status(400).json({success:false, message: "Invalid input format" });
        return;
      }

      const firstLetter = Array.from(addId)[0];

      const idData = jsonData.id[firstLetter];
   

      for (const item in idData){
        if (addId == item){
          res.status(200).json({success:false, message: "Account already exists"})
          return
        }
      }

      jsonData.id[firstLetter].push(addId);

      const pwData = jsonData.password;
      
      //hash collision
      const hashedId = sha256Hash(addId);
      if (!(hashedId in pwData)){
        jsonData.password[hashedId] = [addPw];
      }else{jsonData.password[hashedId].push(addPw);}
     
      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
      res.status(200).json({success:true, message: "Signed up successfully"});
    } catch (error) {
      res.status(500).json({success:false, message: error});
    }
}
