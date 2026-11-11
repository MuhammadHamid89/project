import express from 'express'
const app=express()

import UserRoute from './routes/users.js'
import productRoute from './routes/product.js'

app.use('/users',UserRoute)
app.use('/product',productRoute)

app.get('/',(req,res)=>{
    res.send('welcome home')
})

app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
})