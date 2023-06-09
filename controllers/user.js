import {User} from "../models/user.js"
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js"




export const getallusers=async(req,res)=>{}

export const register=async(req,res)=>{
    const{name,email,password}=req.body
    let user=await User.findOne({email})

    if(user) return res.status(404).json({
        success:false,
        message:"User already exists"
    })
    const hashedpasword=  await bcrypt.hash(password,10)
  
    user= await User.create({name,email,password:hashedpasword})
    sendCookie(user,"Registered successfully ",201,res)


}
export const login=async(req,res)=>{
    const{email,password}=req.body;
    const user=await User.findOne({email}).select("+password");
    if(!user) return res.status(404).json({
        success:false,
        message:"Invalid email or password"
    })
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch) return res.status(404).json({
        success:false,
        message:"Invalid email or password"
    })
    sendCookie(user,`Welcome Back,${user.name}`,200,res)


}
export const getMyProfile=async(req,res)=>{
    //pre requisite ye hai ki login hona chahiye
    
    res.status(200).json({
        success:true,
        user:req.user,
    })

}
export const logout=async(req,res)=>{
    res.status(200).cookie("token","",{expires:new Date (Date.now())}).json({
        success:true,
       
    })
}


