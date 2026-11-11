import express from 'express'
const app= express()

//routing
app.get('/',(req,res)=>{
    res.send('welcome home page')
})
app.get('/about',(req,res)=>{
    res.send('welcome about page')
})
app.get('/contact',(req,res)=>{
    res.send('welcome contact page')
})

app.post('/users',(req,res)=>{
    res.json({
        message:"user created",
        data:req.body
    })
})

//routing parameter
app.get('/users/:id',(req,res)=>{
    res.send(`user id: ${req.params.id}`)
})
 //postmen my ye likhna hain (http://localhost:3000/users/100)


app.get('/search',(req,res)=>{
    // res.send(`search : ${req.query.name}`)
    res.send(`search : ${req.query.id}`)
})
/// post man esy likhna hain name k liye  (http://localhost:3000/search?name=ali)
/// post man esy likhna hain id k liye (http://localhost:3000/search?id=ali)
app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
})


//sequence matter
app.get('/user/profile') // static route first  write static route
app.get('users/:id')  // dynamic route second write dynamic route

// (npm start) for run