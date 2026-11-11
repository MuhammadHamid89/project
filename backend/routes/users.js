import express from 'express'
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('All users')
})

router.get('/profile',(req,res)=>{
    res.send('profile')
})

// module.exports=router  (ye tb use hoga jb commonJS use ni kry gy yani package.json my type:module na ho)

export default router