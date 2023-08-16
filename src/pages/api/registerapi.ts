// import { error } from "console";/
import { RegisterApi } from "@/app-modules/repositories/api-repository/api-respository";
import { NextApiRequest, NextApiResponse } from "next";

export default async function RegisterFunction(req: NextApiRequest,res: NextApiResponse) {
    if(req.method!=="POST"){
        res.status(400).json({error:"Invalid HTTP method"})
    }
      try{
        const body=req.body
        if(!body){
         res.status(400).send("Bad request")
        }
        const ressult =  await RegisterApi({data:req.body})
        return res.status(200).json(ressult.data)
         } catch (err:any) {
          console.log(err.message)
           return res.status(500).send(err);
         }
     
  }
