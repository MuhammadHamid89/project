// error handler part 1

// import express from 'express'
// const app=express()

// app.use(express.json())

// // 1: syntax error 
// // console.log'hello'  //error mising bracket

// // 2: run time error:
// // console.log(User.name)  // here user is not define

// // 3: logical error :
// // console.log('5+5=20')  // here is not equal




// //route call first
// // app.get('/sync-error',(req,res)=>{
// //     throw new Error("something went wrong")
// // })

// ///async function route
// app.get('/async-error',(req,res,next)=>{
//     try{
//         throw new Error('database connect is failed')
//     }
//     catch(err){
//         next(err)
//     }
// })





// // handle error with middle ware name is Error middle-ware:
// app.use((err,req,res,next)=>{
//     console.log(err.message)
//     res.status(500).json({
//         message: err.message,
//     })
// })



// app.listen(3000,()=>{
//     console.log('server run on http://localhost:3000')
// })



//<--------------------------------------------------------------------------------------------->

//Error handler part 2

import express from 'express'
import AppError from './errors/appError.js'
import errorHandler from './middlewares/error_Handler.js'
import httperror from 'http-errors' //isko phly install krna hain (npm installl express http-errors)
const app=express()
app.use(express.json())

//route pass
app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/custom',(req,res,next)=>{
    next(new AppError('custom error',400))
})

// app.get('/user',(req,res,next)=>{
//     next(new createError('not found'))
// })

app.get('/user',(req,res,next)=>{   // after install express http-errors
    next(httperror('not found'))
})

app.get('/helo',(req,res,next)=>{
    next(httperror(404,'user not found')) // after install http-errors
})
app.use(errorHandler)


app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
})

// postman check link :  ( http://localhost:3000/custom) or ( http://localhost:3000/helo)