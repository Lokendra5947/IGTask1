const express = require("express")
const { Registration, login } = require("../Controller/userController")
let userRoutes =express.Router()

// userRoutes.get("/",(req,res)=>{
//     res.send("hey userRouter!!!")
// }) 


userRoutes.post('/register', Registration)
userRoutes.post('/login',login)


module.exports = {userRoutes}