
import { changePasswordApi } from "@/app-modules/repositories/api-repository/api-respository";
import { NextApiRequest, NextApiResponse } from "next";

export default async function changePassword(req: NextApiRequest,res: NextApiResponse) {  
  if(req.method!=="POST"){
        res.status(400).json({error:"Invalid HTTP method"})
    }
      try{
        const body=req.body
        const {authorization}=req.headers
        const token=authorization?.split(' ')[1]
        if(!body){
         res.status(400).send("Bad request")
        }
        const ressult =  await  changePasswordApi({data:req.body,token:token})
        return res.status(200).json(ressult.data)
         } catch (err:any) {
           return res.status(500).send({success:false,message:err.response.data.message,data:[]});
         }
     
  }
