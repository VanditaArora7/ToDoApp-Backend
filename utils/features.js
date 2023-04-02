import jwt from "jsonwebtoken"


export const sendCookie=(user,message,statuscode=200,res)=>{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)

    res.status(statuscode).cookie("token",token,{
        httpOnly:true,
        maxAge:1000*60*15
    }).json({
        success:true,
        message,
    })

}