import type { NextApiRequest, NextApiResponse } from 'next'
import { monmodel } from '../../models'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.send(500)
    } else if (req.method === 'POST') {
     try {
            const data = new monmodel({
                name: req.body.input.name,
                email: req.body.input.email,
                feedback: req.body.input.feedback
            })
            await data.save()
            console.log(req.body.input)
            console.log('feedback saved to database')
            res.send(200)
  
      } catch (error) { 
            console.log(error)
            res.send(500)
      }
       
    }
}

