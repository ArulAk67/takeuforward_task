import  express from "express";
const app= express();
import { db } from "./connect.js";
import cors from "cors";

import router from "./router/dbRouter.js";

// const axios = require('axios');

app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}))
app.use("/ide",router);


app.listen(5500,()=>{
  console.log("Listening..!");
})

