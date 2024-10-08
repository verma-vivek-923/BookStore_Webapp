import mongoose from "mongoose";

const Schema=mongoose.Schema({
    name:String,
    tittle:String,
    price:Number,
    category:String,
    image:String
})

const book=mongoose.model("book",Schema)

export default book;