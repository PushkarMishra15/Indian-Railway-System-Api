import express from "express";
import {connectToDatabase} from "./database/db.js"
import router from "./routes/User-route.js"
import trainRouter from "./routes/Train-route.js";


const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/train", trainRouter);

app.listen(3000, ()=>{
    console.log("port is listening at 3000");
  })
       
connectToDatabase();

