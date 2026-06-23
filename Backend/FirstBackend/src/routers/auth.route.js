import express from 'express';

import{
    LoginUser,
    LogoutUser,
    RegisterUser,
}from "../controllers/auth.controller.js"



const routers = express.Router();

routers.post("/login",LoginUser)
routers.post("/register",LogoutUser)
routers.get("/logout",RegisterUser)




export default routers;