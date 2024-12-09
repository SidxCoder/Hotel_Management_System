 import express from "express"
 import dbConnection from "./src/api/config/db.js"
 import env from "./src/infrastructure/env.js"
import cors from "cors"
 import createRouter from "./src/infrastructure/route.js"

 const app = express()
  
 app.use(express.json())
 app.use(cors(
   {
      origin:"*",
      methods:["GET","PUT","PATCH","POST","DELETE"],
      credentials:true,
      allowedHeaders:"Content-Type,Authorization"
   
   }
 ));
 dbConnection()

 app.use("/v1",createRouter())
 app.listen(env.PORT,()=>{
    console.log("PORT Connected",env.PORT);
    
 })