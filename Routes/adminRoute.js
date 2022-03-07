const express=require('express')
const router=express.Router()
const admin =require("../models/admin")
const {register, login} = require("../middeware/validation")
const isAuth = require('../middeware/isAuth')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require("dotenv").config({path:"../config/.env"})
router.post('/register',register,async(req,res)=>{

    const {name,email,password}=req.body
    const searchUser=await admin.findOne({email}).exec()
    if(searchUser){
        return(res.status(403).json({msg:'admin already exists'}))
    }
    const hashedPassword=await bcrypt.hash(password,10)
    await admin.create({name,email,password:hashedPassword},(err)=>{
        return (err?(res.status(501).json({msg:'failed to add admin'}))
        :
        (res.status(200).json({msg:'admin added to database'})))

    })

})

router.post('/login',login,async(req,res)=>{
    const {email,password}=req.body
    const searchAdmin= await admin.findOne({email}).exec()
    if (!searchAdmin){
        return(res.status(405).json({msg:'Admin does not exist'}))
    }
    const verifyPassword=await bcrypt.compare(password,searchAdmin.password)
    if (!verifyPassword){
        return(res.status(406).json({msg:'Please verify your password'}))
    }
    else{
        var token = jwt.sign({email},process.env.secret,{expiresIn:"80h"});
        return(res.status(200).json({msg:'login Succeeded',token}))
    }
}
)


//private routes 
router.get('/admin',isAuth,(req,res)=>{
    res.status(200).send({admin:req.admin})
})

module.exports = router
module.exports=router
