

// const schema= new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
// })

// const User=mongoose.model("User",schema)
// app.get("/",(req,res)=>{
//     res.send("Welcome Back")
// })

// // app.get("/users/all",async(req,res)=>{

// //     const users=await User.find({})


// //     res.json({
// //         success:true,
// //         users,
// //     })
// // })


// app.post("/users/new",async(req,res)=>{
//     const{name,email,password}=req.body;
//     await User.create({
//         name,
//         email,
//         password,
//     })
//     res.status(201).cookie("temp","lol").json({
//         success:true,
//         message:"User created succcessfully"
//     })
// })


// ////////API creation
// app.get("/users/special",async(req,res)=>{
//     //const{id}=req.params
//     //console.log(req.params)
//    //const user=await User.findById(id)
//     res.json({
//         success:true,
//         // user,

//     })
// })
// ///Dynamic routes//Using params
// ////WE WILL TRY TO KEEP DYNAMIC ROUTES IN THE END SO THAT ANY OTHER SPECIFIC ROUTES COULD BE HIT FIRST

// app.get("/users/:id",async(req,res)=>{
//     const{id}=req.params
//     //console.log(req.params)
//    const user=await User.findById(id)
//     res.json({
//         success:true,
//         user,

//     })
// })

// //fetching data using queries
// // app.get("/userid",async(req,res)=>{
// //     const { id }=req.query;
// //     const user=await User.findById(id)

// //     res.json({
// //         success:true,
// //         user,


// //     })
// // })
// app.get("/users/all",async(req,res)=>{
//     const users=await User.find({})
    
//     //query is an object
//     res.json({
//         success:true,
//         users
//     })
// })
// //Query daal rahe hain toh

// app.get("/usersqueryroute/userid",async(req,res)=>{
//     const{id}=req.query;
//     const users=await User.findById(id);



//     res.json({
//         success:true,
//         users,

//     })
// })

// const express=require("express")
// const mongoose=require("mongoose")
// const router=require("./routes/user.js")
import express from "express"
import mongoose from "mongoose"
import router from "./routes/user.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import taskrouter from "./routes/task.js"
import { errorMiddleware } from "./middlewares/error.js";

export const app=express();
config({
    path:"./data/config.env"
})

app.use(express.json())//using middlewares to send json data from postman form to req.body
//app.use("/users",router)
//pehle use krna hai
app.use(cookieParser())
app.use(errorMiddleware)
app.use("/api/v1/users",router)
app.use("/api/v1/tasks",taskrouter)

