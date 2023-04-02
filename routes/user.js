import express from "express"
import { getallusers, register,login, getMyProfile,logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
// const express=require("express");
// const {User}=require("../models/user.js")

const router=express.Router();

//Routes
router.get("/all",getallusers)
router.post("/register",register)
router.post("/login",login)


//router.get("/userid/:id",userparam)
router.get("/me",isAuthenticated,getMyProfile)
router.get("/logout",logout)



//router.get("/usersqueryroute/userid",userquery)


// router.route("/users/:id")
// .get(function names written in controllers)
// .post()
// .put()
// .delete()
//IF ROUTE IS SAME ONLY THE REQUESTS ARE DIFFERENT

export default router;
