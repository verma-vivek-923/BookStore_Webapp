import book from "../model/book.model.js";

export const getBoook=async(req,res)=>{

    try{
        const find=await book.find()
        res.status(200).json(find)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}