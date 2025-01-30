import express from "express"
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.sendFile("E:/m17jspider/Mongodb/public/Home.html");
})

app.listen(3000,"localhost",()=>{
    console.log("Server started at http://localhost:3000");
    
})