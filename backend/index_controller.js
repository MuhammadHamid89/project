import express from 'express'
const app=express()

import UserRoute from './controller_routes/userRoutes.js'

app.use('/users',UserRoute)


app.get('/',(req,res)=>{
    res.send('welcome home')
})

app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
})