import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const mongodbURL = "mongodb+srv://Charles-Eguale:14032001BIRTH@cluster0.hs0dw.mongodb.net/charles?retryWrites=true&w=majority"


mongoose.connect(mongodbURL)
.then(() => console.log('database connected'))
.catch((err) => console.log('check for error', err))


const schema = {
    name: String,
    email: String,
    feedback: String
  }
  



const monmodel = mongoose.model('serokell', schema as any)


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.send(500)
    } else if (req.method === 'POST') {
     try {
            const data = new monmodel({
                name: req.query.name,
                email: req.query.email,
                feedback: req.query.feedback
            })
            await data.save()
            console.log('feedback saved to database')
            console.log(req.query)
            res.send(200)
  
      } catch (error) { 
            console.log(error)
            res.send(500) 
      }
       
    }
}

