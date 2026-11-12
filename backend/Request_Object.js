import express from 'express'
const app=express()

import UserRoute from './controller_routes/userRoutes.js'

app.use('/users',UserRoute)

app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req)
    res.send('welcome home')
})



app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
})

// 1: request param
// app.get('/users/:id',(req,res)=>{
//     res.send(`user id : ${req.params.id}`)
// })
// app.get('/:id',(req,res)=>{
//     res.send(`user id : ${req.params.id}`)
// })
//( test post man get: http://localhost:3000/users/2)  and (http://localhost:3000/4)


// 2: request query
// app.get('/search',(req,res)=>{
//     res.send(`namec: ${req.query.name}`)
// })
// (postman url GET:http://localhost:3000/search?name=ali)


// 3: req.body
// app.post('/login',(req,res)=>{
//     console.log('hello',req.body)
//     res.json({
//         username: req.body.username,
//         password: req.body.password
//     })
// })

// ( post man link: post (http://localhost:3000/login) phr body select kry phr raw or
//  phr binary k sat json select kr k send kryy )

// 4: req.header
app.get('/info',(req,res)=>{
    res.send(req.headers['user-agent'])
})
