const express = require("express");
const Router = express.Router();
const homeschema = require('../models/homeschema');


Router.get("/", (err, res) => {
  res.render("register", { title: "FILL FORM", password: "", email: "" });
});

Router.post("/register", async (req, res) => {
  try {
    const { 
      name, 
      number, 
      email, 
      password, 
      cpassword 
    } = req.body;
  
    if(password===cpassword){
      const userdata = new homeschema({
        name, 
        number, 
        email, 
        password
      })
      userdata.save(error=>{
        if(error){
          console.log('erroe')
        }
        else{
          res.render("register", { title: "DONE", password: "", email: "" });

        }
      })

      const useremail = await homeschema.findOne({email:email});
     if(email=== useremail.email){
      res.render("register", { title: "", password: "", email: "EMAIL ALREADY EXIST" });

     }
    }
    else{
      res.render("register", { title: "", password: "PASSWORD NOT MATCH", email: "" });

    }
  } catch (error) {

    res.render("register", { title: "Error In Code", password: "", email: "" });

  }
});


//login

Router.post('/login', (req, res)=>{
  const {
    email,
    password
  }= req.body;

  homeschema.findOne({email:email},(err,result)=>{
    
   if(email===result.email&&password===result.password){
   res.render('dashboard', {name: result.name})
   }
   else{
    res.render("register", { title: "", password: "PASSWORD IS WRONG", email: "" });

   }
  })
})



module.exports = Router;
