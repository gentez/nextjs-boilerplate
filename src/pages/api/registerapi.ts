import { RegisterApi, strapiRegisterApi } from "@/app-modules/repositories/api-repository/api-respository";
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
        if(ressult.data.token){
          const strapiData:Object={
            email:body.email,
            password:body.password,
            firstName:body.firstName,
            lastName:body.lastName,
          }
         
          await strapiRegisterApi({data:strapiData})
          
        }
        return res.status(200).json(ressult.data)
         } catch (err:any) {
          console.log(err)
           return res.status(500).send(err);
         }
     
  }
