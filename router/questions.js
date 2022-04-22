const express=require("express")
const router=express.Router()
const  questionsModule=require("../module/questions")

router.get("/", questionsModule.list);
router.post("/ask", questionsModule.ask);

module.exports=router;