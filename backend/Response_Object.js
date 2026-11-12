import express from 'express'
const app=express()

import UserRoute from './controller_routes/userRoutes.js'

app.use('/users',UserRoute)

app.use(express.json())


//there are many response status res.indirect, res.status, res.json, res.send and many more search on google

// 1 : response.send for html ,text, number,object,buffer
app.get('/',(req,res)=>{
    res.send('welcome home')
})
//click link ( http://localhost:3000) and see result on browser\


// 2: res.json
app.get('/json',(req,res)=>{
    res.json({
        success:true,
        message:'json reson',
        student:50
    })
})
// past link on postman : get http://localhost:3000/json 

// hum json ka use is liye kr rhy hain k front-end py koi bi framework use kr rhy hain(vue,angular etc)
// har framework compitable hain or server sy jb data front-end py back-end sy data ay to pta lgy k kis format my hain


// 3 : res.status
app.get('/user',(req,res)=>{
    res.status(200).json({
        success:true,
        data:{
            id:1,
            name:"ali",
            course:'mern',
        }
    })
})

app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
})
