import { user } from "../model/user.model.js";
import bycrypt from "bcryptjs";

export const signup=async(req,res)=>{
    try{
        const {name,email,password,cpassword}=req.body;

        let finduser=await user.findOne({email});
        console.log(finduser)

        if(finduser){
            console.log("inside find")
            return res.status(400).json({message:"User Already Exists"});
        }
        if(password===cpassword){
            console.log("insideif")
            const hashpassword= await bycrypt.hash(password, 10)
            const createdUser= new user({
                name:name,
                email:email,
               password:hashpassword
            })
            await createdUser.save()
            res.status(200).json({message:"User Created Successfully",createdUser})
        }else{
            res.status(400).json({message:"Password Does Not Match"})
        }
    }catch(error){
        console.log("Error :-",error)
        res.status(500).json({message:"Internal Server Error"})

    }
}

export const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        
        let findUser=await user.findOne({email});
        let isMatch;
        if(findUser){
            isMatch= await bycrypt.compare(password,findUser.password)
        }
    

        if(!findUser || !isMatch ){
           return res.status(400).json({message:"Invalid Email or Password"})
        }else{
            res.status(200).json({message:"You Loged In Successfully",findUser})
        }
    }catch(error){
        console.log("Error:-",error.message)
        res.status(400).json({message:"Internal Server Error"})
    }

}