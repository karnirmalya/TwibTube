// require('dotenv').config( {path : './env'});
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv";
import connectDB from "./db/database.js";
import { app } from "./app.js";


dotenv.config({ 
    path: "./.env" 
});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000 , ()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
   console.log("MONGO DB connection SUCCESSFUL !!! "); 
})
.catch((error) => {
   console.log("MONGO DB connection FAILED !!! ",error);
});






/*

import express from "express";
const app = express();
// function connectDB(){}
// connectDB();

//iife
;( async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
           console.log("Express is not talking to database : ", error);
            throw error;
       });

       app.listen(process.env.PORT, () => {
           console.log(`App is listening on port ${process.env.PORT}`);
       });
    }
    catch(error){
        console.log("Error connecting to MongoDB: ", error);
        throw error;
    }
} )()
    
*/