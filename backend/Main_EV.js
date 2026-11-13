//dotenv install (npm install express dotenv) or make file(.env) is my capital likhy gy q k bad my change ni hogy
//jb .env my port wegira change kry gy to npm start dobara krna pary ga
import 'dotenv/config'
import express from 'express'
const app=express()
app.use(express.json())

const PORT=process.env.PORT || 3000

console.log('App Name: ', process.env.APP_NAME)
console.log('Database host: ', process.env.DB_HOST)

app.get('/',(req,res)=>{
    res.send(`server run on port ${PORT}`)
})

app.listen(PORT,()=>{
    console.log(`server run on http://localhost:${PORT}`)
})