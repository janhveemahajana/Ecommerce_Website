import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"; 
import route from "./routes/userroutes.js";
import router from "./routes/authroutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 6000;
const URL = process.env.MONGOURL;
const JWT_SECRET = process.env.JWT_SECRET;

app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

mongoose.connect(URL).then(()=>{

    console.log("DB connected successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
        
    })
    
}).catch(error => console.log(error));

app.use("/api", route);
app.use("/auth", router);