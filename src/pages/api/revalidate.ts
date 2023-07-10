// import { error } from "console";/
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if(req.method!=="POST"){
        res.status(400).json({error:"Invalid HTTP method"})
    }
    if (req.query.secret !== "Fahad") {
        return res.status(401).json({ message: 'Invalid token' });
      }
      try{
   const body=req.body
   if(!body){
    res.status(400).send("Bad request")
   }
   const slug=body.slug
    if(slug){
        await res.revalidate(`/pages/${slug}`)
        return res.json({revalidated:true})
    }
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      console.log(err)
      return res.status(500).send('Error revalidating');
    }
  }