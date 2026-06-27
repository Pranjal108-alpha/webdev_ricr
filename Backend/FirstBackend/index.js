import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from  "./src/routers/public.route.js";
import connectDB from "./src/config/dbConnection.config.js";

const app = express();

app.use(express.json());

app.use("/auth",AuthRouter);
app.use("/public",PublicRouter);

//Default API
app.get("/",(req,res)=>{
     console.log("Default GET API Hit")
     res.json({message: "welcome to my first backend Project"});
});

app.post("/Login",(req,res)=>{
    res.json({message:"Login successfull"})
})

app.get("/Logout",(req,res)=>{
    res.json({message:"Logout successfull"})
})

app.post("/Register",(req,res)=>{
    res.json({message:"Register successfull"})
})

app.put("/Update",(req,res)=>{
    res.json({message:"Update successfull"})
})

app.delete("/Delete",(req,res)=>{
    res.json({message:"Delete successfull"})
})


//Default Error Handler

app.use((err, req, res, next) => {
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStausCode = err.statusCode || 500;

  res.status(ErrStausCode).json({ message: ErrMessage });
});


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server Started on port:",port);
    connectDB();
});