import { Task } from "../models/task.js";


export const newTask=async(req,res,next)=>{
    const {title,description}=req.body;
   
    
    await Task.create({
        title,description,user:req.user
    })

    res.status(201).json({
        success:true,
        message:"Task created successfully"
    })

}

//To view all tasks of a user

export const alltasks=async(req,res,next)=>{
    //pre-requisite is that the user should be logged in

   
    const alltasks= await Task.find({user:req.user._id});
    res.status(200).json({
        success:true,
        tasks:alltasks
    })

}
export const updateTask=async(req,res,next)=>{

    const {id}=req.params;
    const task=await Task.findById(id)
    if(!task) return next(new Error("Invalid Id"))
    task.isCompleted=!task.isCompleted;
     await task.save()
    
    res.status(200).json({
        success:true,
        message:"Task Updated successfully"
       
    })

}
export const deleteTask=async(req,res,next)=>{
    const {id}=req.params;
    const task=await Task.findById(id)
    if(!task) return next(new Error("Invalid Id"))
  
     await task.deleteOne()
   

    res.status(200).json({
        success:true,
        message:"Task Deleted!!!!"
      
    })

}