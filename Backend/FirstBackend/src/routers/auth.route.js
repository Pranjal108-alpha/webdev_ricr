import express from 'express';

import{
    LoginUser,
    LogoutUser,
    RegisterUser,
}from "../controllers/auth.controller.js"



const routers = express.Router();

routers.post("/login",LoginUser)
routers.post("/register",RegisterUser)
routers.get("/logout",LogoutUser)




export default routers;