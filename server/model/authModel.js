const mongoose=require('mongoose');
// const model=mongoose.model;


const authSchema=new mongoose.Schema({
      firstname:{
        type:String,
        required:true,
      },
      lastname:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
        unique:true
      },
      password:{
        type:String,
        required:true,
        minlength:6
      }
})
module.exports=mongoose.model('authModel',authSchema)