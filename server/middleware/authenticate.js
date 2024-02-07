
/*
const jwt= require("jsonwebtoken");
const user =require("../model/userSchema");

const  authenticate =async(req,res,next)=>{

try{
//console.log(req.url);
const token=req.cookies.jwtoken;

console.log("from authenticate section token:",token)
const verifytoken= jwt.verify(token,process.env.secret_key);
console.log(verifytoken);
let l=user;
const rootuser=await user.user.findOne({email:verifytoken,token:token});

if(!rootuser)
{
    throw new Error ('user not found');
}

else{

   console.log("rootuser:" ,rootuser);
   req.token=token;

   req.rootuser=rootuser;
   req.uerid=rootuser._id;

    next();


}
}
catch(err){
    res.status(401).json({unatherize:"no token provien"})
    console.log(err);



}

}
module.exports=authenticate;
*/




























const jwt = require("jsonwebtoken");
const { user } = require("../model/userSchema"); // Destructure the user model from the exports

const authenticate = async (req, res, next) => {
  try {
    console.log(req.url);
    const token = req.cookies.jwtoken;

    console.log("from authenticate section token:", token);
    const verifytoken = jwt.verify(token, process.env.secret_key);
    console.log(verifytoken);

    // Use user.findOne directly
    const rootuser = await user.findOne({ email: verifytoken, token: token });

    if (!rootuser) {
      throw new Error('User not found');
    } else {
      console.log("rootuser:", rootuser);
      req.token = token;
      req.rootuser = rootuser;
      req.uerid = rootuser._id;

      next();
    }
  } catch (err) {
    res.status(401).json({ unatherize: "No token provided" });
    console.log(err);
  }
};

module.exports = authenticate;
