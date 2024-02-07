const mongoose= require('mongoose');

const  userschema= new mongoose.Schema({

name:{
 type:String,
 required:true

},
email:{
 type:String,
 required:true

},
phone:{

    type:Number,
    required:true
},
work:{

    type:String,
    required:true
},
password:{

type:String,
required:true

},cpassword:{
 
    type:String,
    required:true

},






 token:{
 type:String,required:true

 }



});





const userschema2=  new mongoose.Schema({

    name:{
type:String,
required:true

    },

email:{

type:String,required:true

},phone:{

    type:Number,required:true
},

message:{
    type:String,required:true
}

})



const user=mongoose.model('user',userschema);
const message=mongoose.model('message',userschema2);
module.exports={user,message};




