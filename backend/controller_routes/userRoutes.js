// import express from 'express'
// const router=express.Router()
// import {getUsers,createUser} from '../controller/userController.js'

// router.get('/',(req,res)=>{
//     res.send('All users')
// })

// router.get('/profile',(req,res)=>{
//     res.send('profile')
// })

// module.exports=router  (ye tb use hoga jb commonJS use ni kry gy yani package.json my type:module na ho)
// export default router


import express from 'express'
const router=express.Router()
import {getUsers,createUser, login} from '../controller/userController.js'
router.get('/',getUsers)
router.get('/profile',createUser)
router.get('/login',login)
export default router