// // for validator install :  (npm install express express-validator)
// built in validation

// import express from 'express'
// import { body,validationResult } from 'express-validator'
// const app=express()
// app.use(express.json())

// const validatorUser=[
//     body('name').notEmpty().withMessage('Name is required'),
//     body('email').isEmail().withMessage('valid email is required'),
//     body('age').isInt({min:18}).withMessage('Age must be atleast 18')
// ]

// app.post('/register',validatorUser,(req,res)=>{  //validattorUser use as middle-ware
//     const errors=validationResult(req)

//     if(!errors.isEmpty()){
//         return res.status(400).json({
//             success:false,
//             errors: errors.array(),
//         })
//     }
//     res.json({
//         success:true,
//         mesage:'user register successfully',
//         data:req.body
//     })
// })

// app.listen(3000,()=>{
//     console.log('server run on http://localhost:3000')
// })

// // postman link : (http://localhost:3000/register) and postman body raw and json add value
// //{
// //   "name": "ali",
// //   "email": "ali@gmail.com",
// //   "age": 22
// // }

 //<---------------------------------------------------------------------------------------------->
 //Customize validate

 import express from 'express'
 import { body,validationResult } from 'express-validator'
 const app=express()
 app.use(express.json())

 const users=['john@example.com']

 const validationEmailExist=[
    body('name').trim().isLength({min:3}).escape(),
    body('email').normalizeEmail().isEmail().custom((value)=>{
        if(users.includes(value)){
            throw new Error('email already exist')
        }
        return true
    })
 ]
 app.post('/register',validationEmailExist,(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    users.push(req.body.email);
    res.json({message:'Register successful',data:req.body})
 })


 app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
 })