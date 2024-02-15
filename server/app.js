
// const dotenv=require("dotenv");
//const mongoose=require('mongoose');
const dotenv=require("dotenv");
const express= require('express');
  const app=express();

dotenv.config();
//hi2
//hi3






//const Db=process.env.db;   // db  connection url is obtained from config.env
//console.log(Db," db url");
//console.log(process.env.db);


require('./db/conn');

app.use(express.json());//that is used for getting  json format data  in req body
// middle wear

app.use(require('./router/auth1'));//we link  the router files to make  our route easy 

const user= require('./model/userSchema');




// that provides  connection of  mongodb 

//  db case starting
 // const db='mongodb+srv://aniket023:0234atlas@userinform.mxdgeaq.mongodb.net/?retryWrites=true&w=majority';
 /* mongoose.connect(Db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,  }).then(()=>{
 console.log('connection succesful')

  }).catch((err)=> console.log(err,"no connection "));*/// db case ending
/*
app.get('/',( req ,res)=>{

res.send("from server");

});



const  middleware=(req,res,next)=>{
res.send("hi from middleware");
next();

}



app.get('/home',middleware,( req ,res)=>{

    res.send("from home server");
    
    });
    app.get('/about',( req ,res)=>{

        res.send("from about");
        
        });


        app.get('/contact',( req ,res)=>{

          res.send("from contact");
          
          });

          app.get('/signin',( req ,res)=>{

            res.send("from sigin");
            
            });

            app.get('/signup',( req ,res)=>{

              res.send("from signup");
              
              });
    
  */
 
 
              app.use(express.urlencoded({extended: true}));






app.listen(4000,()=>{

    console.log("server is running at 4000");


})