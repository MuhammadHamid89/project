// import express from 'express'

// const app= express()

// //middleware
// app.use((req,res,next)=>{
//     console.log(req.method)
//     console.log(req.url)
//     next()
// })

// //another middleware
// app.use((req,res,next)=>{
//     req.course='Mern stack';  //modify request and add course 'mern stack'
//     next()
// })

// //route
// app.get('/',(req,res)=>{
//     // res.send('welcome home')
//     res.send('welcome to ' + req.course)
// })
// app.get('/about',(req,res)=>{
//     res.send('welcome to about')
// })
// app.listen(3000,()=>{
//     console.log('server run on http://localhost:3000')
// })



//built-in middle wares
import express from 'express'
const app=express()
app.use(express.json()) // built in midddle-ware use for send data frontend to backend in object form this help read it
app.use(express.urlencoded({extended:true}))  //use for form like inputs
app.use(express.static('public')) // use for image,logo accessible
app.get('/',(req,res)=>{
    res.send('Home page')
})

app.get('/users',(req,res)=>{
    res.json({
        message:"data received successfully",
        body:req.body,
    })
})

app.listen(3000,()=>{
    console.log('server run http://localhost:3000')
})