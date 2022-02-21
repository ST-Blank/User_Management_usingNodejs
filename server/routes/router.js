const express=require('express')
const router=express.Router()
const{homepage,addnewuser,updateuser}=require('../services/render_services')
let {create,find,update,deletee}=require('../controller/controller')

router.get('/',homepage)

router.get('/new_user',addnewuser)

router.get('/update_user',updateuser)

//api
router.post('/api/users',create)
router.get('/api/users',find)
router.put('/api/users/:id',update)
router.delete('/api/users/:id',deletee)



module.exports=router