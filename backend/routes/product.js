//yaha py get,post,put , delete, middleware wegira sab yha a skty hain

import express from 'express'
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('All product')
})

router.get('/featured',(req,res)=>{
    res.send('featured product')
})

// module.exports=router  (ye tb use hoga jb commonJS use ni kry gy yani package.json my type:module na ho)
export default router

