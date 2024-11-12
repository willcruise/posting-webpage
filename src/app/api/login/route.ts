import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sha256Hash } from "../../../utils/hash.ts";

export const revalidate = 60

export async function POST(req: NextApiRequest, res:NextApiResponse){


  console.log(process.cwd());
  const filePath = path.join(process.cwd(),"public", "account.json");

  if (req.method != "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  
  try {
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        const newData = req.body;

        const checkId = newData.id;
        const checkPw= newData.Password;


        if(typeof checkId !== "string" || typeof checkPw !== "string"){
          res.status(400).json({validate:false,  message: "Invalid input format" });
          return;
        }

        const firstLetter = Array.from(checkId)[0]; 

        const idData = jsonData.id[firstLetter];
        const pwData = jsonData.password;
        for (const accid in idData){
          if(accid == checkId){
              const hashedId:string = sha256Hash(newData.id);
              if (newData.password == pwData[hashedId]){
                res.status(200).json({validate:true, message:"Sign in Successful"});
                return;
              }else{
                res.status(200).json({validate:false, message:"Incorrect password"});
                return;
                }
          }
        }
        res.status(200).json({validate:false, message:"No account, please sign up"});
              return;

      } catch (error) {
        res.status(500).json({ error: "Failed to read file" });
      }
}


