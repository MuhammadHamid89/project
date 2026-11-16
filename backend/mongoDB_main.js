// middle ware  install : (npm install helmet cors express-rate-limit)
// my mongo db username and password: username (ah3001674_db_user) password : (VyThtLKmxrop4ZUt)
// mongodb+srv://ah3001674_db_user:<db_password>@cluster0.afzf4zn.mongodb.net/
// .env my user my username or colon sy agy ppasword paste kr dena hain jo oper likha hain
// website is mongoDB atlas

import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import mongoose from 'mongoose';

const app=express()
app.use(express.json())

async function connectionDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongoDB connect successfully')
    } catch(error){
        console.log('mongo db connect fialed', error.message)
        process.exit(1)
    }
}
connectionDB()
const PORT = process.env.PORT  || 3000
app.use(helmet())
app.use(
    cors({
        origin : 'http://localhost:5173'
    })
);

const limiter=rateLimit({
    windowMs: 15* 60 *1000,
    max:100,
    message:'to many request try again',
})

app.use(limiter)
app.get('/',(req,res)=>{
    res.send('secure express App')
})
app.listen(PORT,()=>{
    console.log(`server run on port http://localhost:${PORT}`)
})