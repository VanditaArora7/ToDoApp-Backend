import mongoose from "mongoose";

export const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{console.log("Database connected successfully")}).catch((err)=>{console.log("err")})
}