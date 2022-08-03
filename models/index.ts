import mongoose from 'mongoose'
import dotenv from 'dotenv'

const mongodbURL : any = process.env.dbURI


mongoose.connect(mongodbURL) 
.then(() => console.log('database connected'))
.catch((err) => console.log('check for error', err))


const schema = {
    name: String,
    email: String,
    feedback: String
  }
  

export const monmodel = mongoose.models.serokell || mongoose.model('serokell', schema as any)