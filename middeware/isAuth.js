const jwt =require("jsonwebtoken");
const admin = require("../models/admin");
require("dotenv").config({path: "../config/.env"})

const isAuth = async ( req, res, next)=>{
    try {
        const token = req.headers['x-auth-token']
         //check for token
         if(!token){
             return res.status(400).send({msg:"no token unauthorized"})
         }
         const decode = await jwt.verify(token,process.env.secret)
         //Get admin By ID From Payload
         const admin = await admin.findById(decode.id)
         //check if admin?
         if(!admin){
             return res.status(400).send({msg:"unauthorized"})
         }
         //Get admin
         req.admin = admin
        next()
    } catch (error) {
        return res.status(400).send({msg:'Token is not valid'})
    }
}



module.exports = isAuth