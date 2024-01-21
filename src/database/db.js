import mongoose from "mongoose";
import express from "express";

const app = express();

export const connectToDatabase = () =>{
   
   mongoose.connect("mongodb://localhost:27017/Railway").then(()=>{

   console.log("connection successfull");
   
   }).catch((err)=>{
   console.log("MongoDb Catch Error is ", err);
   })

}

