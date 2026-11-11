// agr is file ka name main.cjs ho ga to isko run node (main.cjs) sy krygy
// const express=require('express')
// const app= express()

// //start server
// app.listen(3000,()=>{
//     console.log('server running http://localhost:3000')
// })

// agr hum ny main.js my require use kia hain hain to npm run start sy error ay ga
// is sy bachny k liye package.json my type modules ko delete kr k ye chalae


// dosra agar hum require ki jaga (import express from express) kry gy
// to npm start sy error ni ay ga

// const express=require('express')
import express from 'express'
const app= express()

app.get('/',(req,res)=>{
    res.send('welcome to express')   // vs terminal my jo link ay ga os py click to ye output dekhy gi
})

//about route
app.get('/about',(req,res)=>{
    res.send('about page')
})

//contact route
app.get('/contact',(req,res)=>{
    res.send('contact page')
})

//start server
app.listen(3000,()=>{
    console.log('server running http://localhost:3000')
})


//agr import express from expresss kiya hain to  run with command (npm run start) and file name mainExpress.js


//agr (require) use kiya hain to file name mainExpress.cjs rakhy or package.jsoon my bi filename same ho nodemon or dev my 
// kue k type: module hai  or isko run (node mainExpress.cjs) sy kry gy