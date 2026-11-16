// middle ware  install : (npm install helmet cors express-rate-limit)

import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

const app=express()
app.use(express.json())

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
app.listen(3000,()=>{
    console.log('server run on port http://localhost:3000')
})