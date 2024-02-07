


const express=require('express');
const { rawListeners } = require('../model/userSchema');


//require('../db/conn');



const user=require('../model/userSchema');





const router=express.Router();
router.get('/',(req,res)=>{
    res.send('hello from sergver router js');
    


});
router.post('/register',(req,res)=>{

    const{name,email,phone,work,password,cpassword}= req.body
    
   // console.log(req.body);

//console.log(name,email,phone,work,password);
//res.json({message:req.body});

console.log(name,email,phone,work,password,cpassword);


if(!name || !email || !phone || !work || !password || !cpassword){
res.status(422).json({error :"fill  the  field properly"})
}


user.findOne({email:email}).then((userExist)=>{
    if(userExist){
        res.status(422).json({error :"email already exsist"});
        console.log("userexsists");
    }
 





const user2= new user({name, email,phone,work,password,cpassword});


//console.log(user2,"user2");

var s=user2.save()

s.then(()=>{
    res.json({message:"user register sucessfully"});
    console.log("register sucessfully");

}).catch((err)=>res.status(500).json({error:"failed to register"})
);

}).catch(err=>{console.log(err)});


})
module.exports=router;
