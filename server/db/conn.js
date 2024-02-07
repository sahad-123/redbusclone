
const mongoose=require('mongoose');




const Db=process.env.db2;


mongoose.connect(Db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,  }).then((db)=>{
 console.log('connection succesful')

  }).catch((err)=> console.log(err,"no connection "));// db case endingss