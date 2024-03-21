import  express from "express";
const app= express();
import { db } from "./connect.js";
import cors from "cors";
import "dotenv/config"


import router from "./router/dbRouter.js";

// const axios = require('axios');

app.use(express.json());
app.use(cors())
app.use("/ide",router);


// console.log(process.env.RAPID_API);

app.listen(5500,()=>{
  console.log("Listening..!");
})

