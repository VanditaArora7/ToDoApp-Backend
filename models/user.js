// const mongoose=require("mongoose");
import mongoose from "mongoose"



const schema= new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true

    },
    password:{
        type:String,
        selected:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
export const User=mongoose.model("User",schema)

// module.exports= mongoose.model("User",schema)

