import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"
import path  from "path"
const app = express()

dotenv.config();

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT || 4000;
const mongouri=process.env.MongoUri;

//connect mongoDb
try{
    mongoose.connect(mongouri)
    console.log("connected")
}catch(error){
    console.log("Error",error)
}

//defining route
app.use("/book",bookRoute)
app.use("/users",userRoute)

//deployment
if(process.env.NODE_ENV === "production"){
  console.log("inside")
  const dirPath=path.resolve();
  app.use(express.static("frontend/dist"))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"frontend","dist","index.html"))
  })
}


// app.get('/', (req, res) => {
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})