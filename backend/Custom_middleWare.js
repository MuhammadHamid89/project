import express from 'express'
const app=express()

import UserRoute from './controller_routes/userRoutes.js'
import { createUser } from './controller/userController.js'
app.use(express.json()) //built in middle-ware

// 1 : function define as middle ware
function logger(req,res,next){
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`)
    next()
}
app.use(logger) //custom middle-ware create as function
// check link on postman get: (http://localhost:3000/)

//Authentication middle-ware
function auth(req,res,next){
    const token=req.headers['token']
    if(token === '12345'){
        next()
    }else{
        res.status(401).send('unauthorized')
    }
}

app.get('/profile',auth,(req,res)=>{
    res.send('welcome to our profile')
})

//post link on postman get: (http://localhost:3000/profile) phr postman my headers key=token,value=12345 likh dena hain 
app.get('/',(req,res)=>{
    res.send('welcome to home page')
})
app.use('/',UserRoute) 
app.use('/profile',createUser)


app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
})
