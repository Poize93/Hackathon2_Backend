const express=require("express")
 const cors=require("cors");
// const registerRouter=require("./router/register")
const companyRouter=require("./router/company")
const questionRouter=require("./router/questions")
const profileRouter=require("./router/profile")
const mongo=require('./shared/connect')


const app=express();
app.use(cors());
app.use(express.json());
mongo.connect();

//  app.use("/register",registerRouter)

app.use("/company",companyRouter) 
app.use("/questions",questionRouter)
app.use("/profile",profileRouter)

app.listen(3001);