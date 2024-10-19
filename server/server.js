import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';


const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

app.use(express.json())
app.use(cors())
app.use('/api/user', userRouter)


app.get('/', (req,res)=>res.send("API Working!"))

app.listen(PORT, ()=>console.log(`Seerver running on port ${PORT}`))

