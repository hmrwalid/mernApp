const mongoose=require('mongoose')

const {Schema,model}=mongoose

const adminSchema= new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const admin =model('admin',adminSchema)

module.exports=admin