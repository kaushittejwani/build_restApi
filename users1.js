const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    ProfileName:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isAlpha(value)){
                 throw new error("Invalid name");
            }
        }
        
    },
    DOB:{
        type:String,
        required:true
    },
    status:{
          type:String,
          default:"ACTIVE"
    }
})
  const employee=new mongoose.model("users",userSchema);
 module.exports= employee;