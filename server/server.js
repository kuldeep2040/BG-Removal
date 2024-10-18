import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb';


const PORT = process.env.PORT ||4000;
const app = express();

app.use(express.json)
app.use(cors())

await connectDB;

app.get('/', (req,res)=>res.send("API Working!"))

app.listen(PORT, ()=>console.log(`Seerver running on port ${PORT}`))

