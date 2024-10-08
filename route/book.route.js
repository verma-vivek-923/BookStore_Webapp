import  Express  from "express";
import { getBoook } from "../controller/book.controller.js";

const router=Express.Router()

router.get("/",getBoook)

export default router;
