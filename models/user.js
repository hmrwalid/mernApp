const mongoose = require('mongoose');

const {Schema, model}=mongoose;

const userSchema= new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:String,required:true},
    height : {type:String,required:true},
    weight : {type:String,required:true},
    stronger_Foot : {type:String,required:true},
    image: {type: String},
})

module.exports = User = model('user', userSchema)