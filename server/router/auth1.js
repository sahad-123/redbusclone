
const bcrypt = require("bcryptjs");


const jwt= require("jsonwebtoken");

const express=require('express');
//const  user = require('../model/userSchema');
const cookieParser = require("cookie-parser")


//require('../db/conn');



//const user=require('../model/userSchema');


const authenticate=require("../middleware/authenticate");


const router=express.Router();

router.use(cookieParser());

const busbooking=require('../model/busbookingschema');

router.get('/',(req,res)=>{
    res.send('hello from sergver router js');
    


});





const mongoose = require('mongoose');

/* starts of bus booking system*/





router.post('/schedule',(req,res)=>{

    
 const {starting_point,destination_point,schedule_date,boording_point,dropping_point}=req.body;

 console.log(starting_point,destination_point,schedule_date,boording_point,dropping_point);





 const schedule= new busbooking.schedule_bus({starting_point,destination_point,schedule_date,boording_point,dropping_point});
 var schedule_sucess=schedule.save();
 //console.log("sucess1:",sucess1)

schedule_sucess.then(result=>{res.json({success:"data send sucessful"})}).catch(err=>console.log(err));
          




   
});



/*get boor and dropping points of  partcular place */
let sub=[];
let dro=[];
let price=[];
router.post('/pick_boor_dropp',async(req,res)=>{


   const {schedule_id} =req.body;


     console.log("schedule_id:",schedule_id);



     let schedule_infor=  await   busbooking.timing_schedule.findById(schedule_id);
     console.log("schedule_infor:",schedule_infor);




    


   for(x of  schedule_infor.subboording_point ){

   console.log("suboor:",x);
   sub.push(x);

   }

   
   for(y of  schedule_infor.dropping_point ){

    console.log("dropp:",y);
 dro.push(y);
    }
 
     console.log("sub ,dro::",sub,dro);

 price.push(schedule_infor.fare_amount);
      res.json({sub:sub,dro:dro,price:price});


      sub=[];
      dro=[];
      price=[];

})


/*get boor and dropping points of  partcular place */





router.post('/obtain_schedule_information',async(req,res)=>{


  const {schedule_id} =req.body;


    console.log("schedule_id:",schedule_id);



    let schedule_infor=  await   busbooking.timing_schedule.findById(schedule_id);
    console.log("schedule_infor:",schedule_infor);



res.json({schedule_infor});
   



/*
     sub=[];
     dro=[];
     price=[];*/

})





router.post('/Bus_booking_information_sending',async(req,res)=>{

      const {passenger_name,
        Male,
        Female,
        age,
        city_of_residence,
        city_of_state,
        total_price,
        deprature_date,
        Bus_seat_id,
        Bus_name,
        boording_point,
        dropping_point,
        start_time,
        estimated_time}=req.body
console.log(passenger_name,
  Male,
  Female,
  age,
  city_of_residence,
  city_of_state,
  total_price,
  deprature_date,
  Bus_seat_id,
  Bus_name,
  boording_point,
  dropping_point,
  start_time,
  estimated_time);






  try {
    const newBooking =busbooking.Bus_booking({
  
      passenger_name,
      Male,
      Female,
      age,
      city_of_residence,
      city_of_state,
      total_price,
      deprature_date,
      Bus_seat_id,
      Bus_name,
      boording_point,
      dropping_point,
      start_time,
      estimated_time


    });

    // Save the user asynchronously
    await newBooking.save();

    res.status(201).json({ message: 'Bus_booking created successfully',booking:newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }




})

























router.get('/schedule',async(req,res)=>{

       const {starting_point,destination_point,schedule_date}=req.body;




     const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});
   
   //const schedule_search= await busbooking.find({schedule_date:schedule_date,starting_point:starting_point});
 console.log(schedule_search.timing_schedule);
   



 const find_schedule_timing= await busbooking.timing_schedule.findById(schedule_search.timing_schedule);
        
  console.log( find_schedule_timing) ;
   
   
   
      
   })



   

router.post('/schedule_timing',(req,res)=>{

    
  const {destination_name,first_hour_of_starting_time_number,hour_and_miniute_starting_time_string,first_hour_of_deprature_time_number,hour_and_miniute_deprature_time_string,subboording_point,dropping_point,estimated_time,fare_amount}=req.body;
 
// console.log(first_hour_of_starting_time_number,hour_and_miniute_starting_time_string,first_hour_of_deprature_time_number,hour_and_miniute_deprature_time_string,subboording_point,dropping_point,estimated_time,fare_amount);
 
 
  const schedule_timing= new busbooking.timing_schedule({des,first_hour_of_starting_time_number,hour_and_miniute_starting_time_string,first_hour_of_deprature_time_number,hour_and_miniute_deprature_time_string,subboording_point,dropping_point,estimated_time,fare_amount});
  var schedule_sucess=schedule_timing.save();
  //console.log("sucess1:",sucess1)
 
 schedule_sucess.then(result=>{res.json({success:"data send sucessful"})}).catch(err=>console.log(err));
          
 

 
 
    
 });






 router.get('/schedule_timing',async(req,res)=>{

    
  const {first_hour_of_starting_time_number,first_hour_of_deprature_time_number}=req.body;
 console.log(first_hour_of_starting_time_number,first_hour_of_deprature_time_number);
 const min_time=first_hour_of_starting_time_number;
 const max_time=first_hour_of_deprature_time_number;

console.log(min_time,max_time);
 
 
  const find_schedule_timing= await busbooking.timing_schedule.find({first_hour_of_starting_time_number:{
    $gt: min_time,
    $lt:max_time
  }});

  //console.log("sucess1:",sucess1)

  find_schedule_timing.forEach(Element=>{

    console.log(Element.first_hour_of_starting_time_number);

    console.log(Element.subboording_point.point1,Element.dropping_point.point1);
  })

 
 
           
 

 
 
    
 });






router.post('/insert_schedule_timing_in_schedule',async(req,res)=>{

const{destination_name,starting_point,destination_point}=req.body;

console.log(destination_name,starting_point,destination_point);






const find_schedule_timing= await busbooking.timing_schedule.find({destination_name:destination_name});

const find_schedule= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
/*
find_schedule_timing.forEach(ele=>{

  console.log(ele._id);
 let c=ele._id
})
console.log(find_schedule,c);
*/for(const each_elem of find_schedule_timing){

console.log("find schedule timing:",each_elem._id);
//console.log(find_schedule._id,find_schedule_timing._id);




const viewupdate= await  busbooking.schedule_bus.updateOne({_id:find_schedule._id},
  {
$push:{
  timing_schedule:each_elem._id
},

  },
  {upsert:false,new:true}
  
  );
  console.log(viewupdate);

}


});



router.post('/bus',(req,res)=>{

const{bus_number,bus_name,bus_capacity,bus_type,bus_facilities}=req.body;

console.log(bus_number,bus_capacity,bus_type,bus_facilities,bus_name);

const bus_insert=new busbooking.Bus({bus_number:bus_number,bus_name:bus_name,bus_capacity:bus_capacity,bus_type:bus_type,bus_facilities:bus_facilities});


var bus_insertion_sucess=bus_insert.save();
 //console.log("sucess1:",sucess1)

bus_insertion_sucess.then(result=>{res.json({success:"data send sucessful"})}).catch(err=>console.log(err));
       


})










router.post('/insert_bus_in_schedule_timing',async(req,res)=>{

  const{hour_and_miniute_starting_time_string,hour_and_miniute_deprature_time_string,bus_name}=req.body;
  
  console.log(hour_and_miniute_starting_time_string,hour_and_miniute_deprature_time_string,bus_name);
  
  
  
  
  
  
  const find_schedule_timing= await busbooking.timing_schedule.findOne({hour_and_miniute_starting_time_string:hour_and_miniute_starting_time_string,hour_and_miniute_deprature_time_string:hour_and_miniute_deprature_time_string});
  
  const find_bus= await busbooking.Bus.findOne({bus_name:bus_name});

  
  
  console.log(find_bus._id,find_schedule_timing._id);
  
  
  const viewupdateofbusinsertion= await  busbooking.timing_schedule.updateOne({_id:find_schedule_timing._id},
    {
  $push:{
    Bus:find_bus._id
  },
  
    },
    {upsert:false,new:true}
    
    );
    console.log( viewupdateofbusinsertion);
  
  });
  






  router.post('/bus_company',(req,res)=>{

    const{company_name}=req.body;
    
    console.log(company_name);
    
    const buscompany_insert=new busbooking.Bus_company({company_name:company_name});
    
    
    var buscompany_insertion_sucess=buscompany_insert.save();
     //console.log("sucess1:",sucess1)
    
    buscompany_insertion_sucess.then(result=>{res.json({success:"data send sucessful"})}).catch(err=>console.log(err));
           
    
    
    })






    router.post('/company_biglocation',(req,res)=>{

      const{biglocation_name,sublocation}=req.body;
      
      console.log(biglocation_name,sublocation);
      
      const company_biglocation_insert=new busbooking.buscompany_bigloaction({biglocation_name:biglocation_name,sublocation:sublocation});
      
      
      var company_biglocation_insertion_sucess=company_biglocation_insert.save();
       //console.log("sucess1:",sucess1)
      
       company_biglocation_insertion_sucess.then(result=>{res.json({success:"data send sucessful"})}).catch(err=>console.log(err));
             
      
      
      });









      

router.post('/insert_buscompany_in_biglocation',async(req,res)=>{

  const{company_name,biglocation_name}=req.body;
  
  console.log(company_name,biglocation_name);
  
  
  
  
  
  
  const find_company= await busbooking.Bus_company.findOne({company_name:company_name});
  
  const find_biglocation= await busbooking.buscompany_bigloaction.findOne({biglocation_name:biglocation_name});

  
  
  console.log(find_company._id,find_biglocation._id);
  
  
  const  viewupdateofbuscompanyinsertion= await  busbooking.buscompany_bigloaction.updateOne({_id:find_biglocation._id},
    {
  $push:{
    Bus_company:find_company._id
  },
  
    },
    {upsert:false,new:true}
    
    );
    console.log( viewupdateofbuscompanyinsertion);
  
  });
  










  router.post('/insert_buscompany_in_bus',async(req,res)=>{

    const{bus_name,company_name}=req.body;
    
    console.log(bus_name,company_name);
    
    
    
    
    
    
    const find_companyname= await busbooking.Bus_company.findOne({company_name:company_name});
    
    const find_bus= await busbooking.Bus.findOne({bus_name:bus_name});
  

    
    console.log(find_bus._id,find_companyname);
    
    
    const viewupdateofbusinsertion= await  busbooking.Bus.updateOne({_id:find_bus._id},
      {
    $push:{
      Bus_company:find_companyname._id
    },
    
      },
      {upsert:false,new:true}
      
      );
      console.log( viewupdateofbusinsertion);
    
    });
    

/*
    bus_boording_point gotten

*/

router.post('/obtain_boording_point',async(req,res)=>{

const {starting_point,destination_point,schedule_date}=req.body;


const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});

const boording_point=schedule_search.boording_point;
const drooping_point= schedule_search.dropping_point;
console.log("boording:",boording_point);
     
         const k1=[];
         const k2=[];
for(const   item1 of   boording_point){

       k1.push(item1);

}

for(const   item2 of  drooping_point){

  k2.push(item2);

}


 
console.log("k1:",k1);

 res.json({  k1:k1,k2:k2});

})






/*
    bus_boording_point gotten

*/




/*
    bus_drooping_point gotten

*/
/
/*
  
  
  
  
  
  /*
      bus_drooping_point gotten
  
  */
  
  




/*  get schedule information*/



    router.post('/obtain_schedule_info',async(req,res)=>{

const{starting_point,destination_point,schedule_date}=req.body;
console.log(starting_point,destination_point,schedule_date);
       const schedule_infor= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});

       console.log("schedule_infor",schedule_infor
        );
res.json({starting_point:schedule_infor.starting_point,destination_point:schedule_infor.destination_point,id:schedule_infor._id});


    })

/*  get schedule information*/




/* searching buses*/

router.get('/bus_search',async(req,res)=>{

const{starting_point,destination_point,schedule_date}=req.body;

console.log(starting_point,destination_point,schedule_date);
    

const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});
   
//const schedule_search= await busbooking.find({schedule_date:schedule_date,starting_point:starting_point});
console.log(schedule_search.timing_schedule);

console.log("starting_point:",schedule_search.starting_point,"destination_point:",schedule_search.destination_point,"schedule_date:",schedule_search.schedule_date);





const find_schedule_timing= await busbooking.timing_schedule.findById(schedule_search.timing_schedule);
     
console.log( "starting_time:",find_schedule_timing.hour_and_miniute_starting_time_string,"deprature_time:",find_schedule_timing.hour_and_miniute_deprature_time_string,"estimated_time:",find_schedule_timing.estimated_time,"ticket_price:",find_schedule_timing.fare_amount) ;

//console.log(find_schedule_timing.Bus);



const find_bus= await busbooking.Bus.findById(find_schedule_timing.Bus);


console.log("bus_name:",find_bus.bus_name,"bus_capacity:",find_bus.bus_capacity,"bus_type:",find_bus.bus_type,"bus_facilities:",find_bus.bus_facilities);



const find_companyname= await busbooking.Bus_company.findById(find_bus.Bus_company);

console.log("bus_companyname:",find_companyname.company_name);



})


  
/* bus searches* by filter  bus starting from source*/
let globalData = {
  items: []
};
let sorted_scheduletiming={

  items:[]
};

let b1=[];
let b2=[];
let b3=[];
let sorted_scheduletiming_and_bus_and_buscompany=[];

router.post('/bus_search_by_startingtime',async(req,res)=>{

const{starting_point,destination_point,schedule_date,deprature_time1}=req.body;
let start_time;
let deprature_time;


for(const ele of deprature_time1){

  console.log("ele",ele);

  if(ele==6){

 start_time=6;
 deprature_time=12;

  }

  else if(ele ==12){

 start_time=12;

 deprature_time=18;

  }

else if(ele ==18){


   start_time=18;
     deprature_time=24;


}
 else{

 start_time=0;
  deprature_time=6;

 }





console.log("start_time:",start_time,"deprature_time:",deprature_time);

 const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});



 console.log(schedule_search.timing_schedule);
 
 var search_time=schedule_search.timing_schedule;
 
 for (const item of search_time) {
   const result = await processResult(item);
 
  
 globalData.items.push(result);
 }
 
 
 globalData.items.forEach(ele1=>{
 
 //console.log("ele1:",ele1);

 if(ele1!==null){
 if(ele1.first_hour_of_starting_time_number >= start_time &&  ele1.first_hour_of_starting_time_number<=deprature_time)
 {
 
 //console.log("first_time:",ele.first_hour_of_starting_time_number);
 //console.log("starting_time:",ele.hour_and_miniute_starting_time_string,"deprature_time:",ele.hour_and_miniute_deprature_time_string,"estimated_time:",ele.estimated_time,"ticket_price:",ele.fare_amount)
 
 sorted_scheduletiming.items.push(ele1);
 
 }
}
 })



 globalData.items=[];
 //console.log(sorteddata.items);
 

 //console.log(sorted_scheduletiming.items);
 for (const item of sorted_scheduletiming.items) {
 console.log("sorted schedule_timing:",item);
 if(item.Bus.length>0){
 
 for(const item1 of item.Bus){
   const bus_result = await processResult1(item1);
 
 // console.log("bus_result:",bus_result.Bus_company);
 
  const bus_company = await processResult2(bus_result.Bus_company);








 k1.push(item);
 c1.push(bus_result);
 
 d1.push(bus_company);



 // sorted_scheduletiming_and_bus_and_buscompany.push({bus_result:bus_result,schedule_timing:item,bus_company:bus_company})
 
 }
 }
 
 
 
   else{
 
 
 
     const bus_result = await processResult1(item.Bus);
 
     // console.log("bus_result:",bus_result.Bus_company);
     
      const bus_company = await processResult2(bus_result.Bus_company);
     //console.log(bus_company)
  //   console.log("inserting_item before b1:",item);




    k1.push(item);
     c1.push(bus_result);
     
     d1.push(bus_company);
     // sorted_scheduletiming_and_bus_and_buscompany.push({bus_result:bus_result,schedule_timing:item,bus_company:bus_company})
     
     
 
 
 
 
 
 
 
 
 
 
 
 
   }
 
 
 }
 

 sorted_scheduletiming.items=[];






















}




console.log("full array:.....................................................................")

for(let i=0; k1.length>i;i++){

   console.log(i,":",k1[i],i,":",c1[i]);


}


res.json({k1,c1,d1});

//res.send({k1,c1});
k1=[];
c1=[];


  }






//console.log(starting_point,destination_point,schedule_date,deprature_time);



//end
//console.log(sorted_scheduletiming_and_bus);

  /*
  if(find_schedule_timing.first_hour_of_starting_time_number>start_time & deprature_time>find_schedule_timing.first_hour_of_starting_time_number){

    globalData.items.push(find_schedule_timing._id);

  



console.log("my final sorted result acrodding  filtered time:",sorted_scheduletiming_and_bus_and_buscompany)
*/
);


const processResult = async (data) => {

  const schedule_search= await busbooking.timing_schedule.findById(data);



  return schedule_search;
}



const processResult1 = async (data) => {


const bus_search= await busbooking.Bus.findById(data);

return bus_search

}


const processResult2 = async (data) => {


  const buscompany_search= await busbooking.Bus_company.findById(data);
  
  return buscompany_search;
  
  }
  


/* bus searches* by filter  bus starting from source*/












 let bus_acroo_to_bustype={

  items:[]
};

let bus_search={

  items:[]
};

let schedule_timing_search={

  items:[]
};

let schedule_timing_search1={

  bus_inf:[]
};

let schedule_timing_search2={

  timing_inf1:[],
  bus_inf1:[],
  bus_com1:[]
};





let schedule_timing_search5={

  timing_inf1:[],
   bus_inf1:[],

};

let schedule_timing_search7={

combine:[]
};

let k1=[];
let c1=[];
let d1=[];



/* bus searches by filteration of bus type*/

router.post('/bus_search_by_bustype',async(req,res)=>{


const{starting_point,destination_point,schedule_date,bus_type}=req.body;

//console.log(starting_point,destination_point,schedule_date,bus_type);
/*let k1=[];
let c1=[];
let d1=[];*/
//schedule_timing_search7.combine=[];


const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});

console.log("schedule_search:",schedule_search);

//console.log(schedule_search.timing_schedule);

var search_time=schedule_search.timing_schedule;
console.log("search_time:",search_time);
for (const item of search_time) {
  const result = await processResult4(item);

 
globalData.items.push(result);
}

//console.log("from bus search by bus type:",globalData.items);

for (const item of globalData.items) {
if(item!==null){
  for (const Bus of item.Bus){
//console.log("Bus1:",Bus);


  const bus_search= await busbooking.Bus.findById(Bus);
 //console.log(bus_search.bus_name);
 
 
 bus_result = await processResult5(bus_search.bus_name,bus_type);
 console.log("bus_result:",bus_result);
 
 if(bus_result == undefined){
 
 }
 
 else{
  let k1=0
 for(let i=0;i< bus_acroo_to_bustype.items.length;i++)
 { 
 if(bus_result === bus_acroo_to_bustype.items[i]){
 
k1=1
 
  
 }
}
if(k1 ==0){

  bus_acroo_to_bustype.items.push(bus_result);

}
 
 
 }
 
  }
}


}


console.log("bus_acroo_to_bustype.items:",bus_acroo_to_bustype.items);

for (const item of bus_acroo_to_bustype.items) {
  //console.log("item23:",item);
   
     const bus_infor= await busbooking.Bus.findOne({bus_name:item});
   
   
   
   
   
    // console.log(bus_infor,bus_company);
     schedule_timing_search1.bus_inf.push(bus_infor);
   

   
   }
//res.send(schedule_timing_search1);
//console.log(globalData.items);

//console.log(schedule_timing_search1);
bus_acroo_to_bustype.items=[];



for (const item of globalData.items) {
  
  //res.send(item);
  //console.log(item)   //  from here tommrorow
  var count=0;

  if(item!==null){
  if(item.Bus.length>1){
  for (const item5 of item.Bus) {
//console.log("item5:",item5,item,item.Bus.length);
count++;
  //  console.log("item5:",item5);
const bus_search1= await busbooking.Bus.findById(item5);
  
 // console.log(bus_search1);
  
  
  for (const item1 of  schedule_timing_search1.bus_inf) {
  
   //console.log(item1);
  
  
   if(item1.bus_name === bus_search1.bus_name){
  
  //  schedule_timing_search4.timing_inf1.push(item);

 // schedule_timing_search7.timing_inf1.push(item);
  
 // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
console.log("item from bus search:",item,"with",bus_search1);
k1.push(item);
c1.push(bus_search1);
bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
d1.push(bus_com2);

//console.log(item1.bus_name,"=",bus_search1.bus_name,item);


   }
  
  
  else{
   // console.log("false");
  }
  
  }
}
  
  
  
  }


else{


  const bus_search1= await busbooking.Bus.findById(item.Bus);
  
  // console.log(bus_search1);
   
   
   for (const item1 of  schedule_timing_search1.bus_inf) {
   
    //console.log(item1);
   
   
    if(item1.bus_name === bus_search1.bus_name){
   
   //  schedule_timing_search4.timing_inf1.push(item);
 
  // schedule_timing_search7.timing_inf1.push(item);
   
  // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);

 // console.log(item1.bus_name,"=",bus_search1.bus_name,item);

 console.log("item from bus search:",item,"with",bus_search1);
 k1.push(item);
 c1.push(bus_search1);
 bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 d1.push(bus_com2);
    }
   
   
   else{
     //console.log("false");
   }
   
   }



}


}
  console.log(count);
 // globalData.items=[];
 /* for (let i = 0; i < k1.length; i++) {
 

    console.log(i,":",k1[i],c1[i],d1[i]);
  }*/



//res.json({k1,c1,d1});
//schedule_timing_search7.combine=[];

}
globalData.items=[];

schedule_timing_search1.bus_inf=[];
/*
schedule_timing_search7.combine.push(k1);
schedule_timing_search7.combine.push(c1);
schedule_timing_search7.combine.push(d1);*/
//res.json({schedule_timing_search7});
//res.send(schedule_timing_search7);
res.json({k1:k1,c1:c1,d1:d1});

//res.send({k1,c1});

//console.log("k:",schedule_timing_search7.combine[0][0]);
//method of access of  array and its subarray
//schedule_timing_search6.combine[0] is k array

  //schedule_timing_search6.combine[1] is c array

    //schedule_timing_search6.combine[2] is d array


    //if you want to access to 0 th element of k array 
//then  schedule_timing_search6.combine[0][0]

    //if you want to access to 0 th element of c array 
//then  schedule_timing_search6.combine[1][0]



    //if you want to access to 0 th element of d array 
//then  schedule_timing_search6.combine[2][0]


/*
k1=[0];
c1=[0];
d1=[0];*/
//res.json({k1,c1,d1});

  //res.send(schedule_timing_search4);
  
  

 // schedule_timing_search7.combine=[];
  
  
  //console.log("final search result of filteration of bus types:",schedule_timing_search7.combine);
  

//res.send(schedule_timing_search7);
//res.send(k1,c1,d1);
//res.json({k1,c1,d1});
//res.send(schedule_timing_search7.combine);


k1=[];
c1=[];
d1=[];
})



  




const processResult4 = async (data) => {

  const schedule_search= await busbooking.timing_schedule.findById(data);



  return schedule_search;
}



const processResult5 = async (data_bus_name,bus_type) => {





  const bus_search= await busbooking.Bus.find({ bus_type: { $in: bus_type } })

  for (const item of bus_search) {

  // console.log("item:",item.bus_name,data_bus_name);
 
  if (item.bus_name === data_bus_name) {


   return data_bus_name;
//console.log("data_bus_name:",data_bus_name);
//bus_acroo_to_bustype.items.push(data_bus_name);

   }

   else{

    console.log("not working");
   }


  }





  }


  const processResult6 = async (data) => {


    //console.log(data);


const bus_company=await busbooking.Bus_company.findById(data)

  return  bus_company.company_name;


  }




















/* bus searches by filteration of bus type*/






let globalData1 = {
  items: []
};
let bus_acroo_to_bustype1={

  items:[]
};
let schedule_timing_search3={

  bus_inf:[]
};
let schedule_timing_search4={

  timing_inf1:[],
  timing_inf1:[],
  bus_com1:[]
};


/*let schedule_timing_search5={

  timing_inf1:[],
   bus_inf1:[],

};*/

let schedule_timing_search6={

combine:[]
};

let k=[];
let c=[];
let d=[];

/* bus searches by filteration of facilities*/

router.post('/bus_search_by_facilities',async(req,res)=>{

const{starting_point,destination_point,schedule_date,bus_facilities}=req.body;

console.log(starting_point,destination_point,schedule_date,bus_facilities);



const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});



//console.log(schedule_search.timing_schedule);

var search_time=schedule_search.timing_schedule;

for (const item of search_time) {
  const result = await processResult8(item);

console.log(result);
globalData1.items.push(result);
}



for (const item of globalData1.items) {
 if(item!==null){
  for (const Bus of item.Bus){
console.log("Bus1:",Bus);


  const bus_search= await busbooking.Bus.findById(Bus);
 //console.log(bus_search.bus_name);
 
 
 bus_result = await processResult9(bus_search.bus_name,bus_facilities);
// console.log("bus_result:",bus_result);
 
 if(bus_result == undefined){
 
 }
 
 else{
  let k1=0
 for(let i=0;i< bus_acroo_to_bustype1.items.length;i++)
 { 
 if(bus_result === bus_acroo_to_bustype1.items[i]){
 
k1=1
 
  
 }
}
if(k1 ==0){

  bus_acroo_to_bustype1.items.push(bus_result);

}
 
 
 }
 
  }
}
}

 //finish
//console.log(bus_acroo_to_bustype1.items);

for (const item of bus_acroo_to_bustype1.items) {
 //console.log("item23:",item);
  
    const bus_infor= await busbooking.Bus.findOne({bus_name:item});
  
  
  
    //const bus_company = await processResult6(bus_infor.Bus_company);
  
   // console.log(bus_infor,bus_company);
    schedule_timing_search3.bus_inf.push(bus_infor);
  
   // schedule_timing_search1.bus_com.push(bus_company);
  
  }
  
  //res.send(schedule_timing_search1);
  //console.log( schedule_timing_search3.bus_inf);
  bus_acroo_to_bustype1.items=[];
  
  for (const item of globalData1.items) {
  
  //res.send(item);
  //console.log(item)   //  from here tommrorow
  var count=0;
if(item!==null){

  if(item.Bus.length>1){
  for (const item5 of item.Bus) {
//console.log("item5:",item5,item,item.Bus.length);
count++;
  //  console.log("item5:",item5);
const bus_search1= await busbooking.Bus.findById(item5);
  
 // console.log(bus_search1);
  
  
  for (const item1 of  schedule_timing_search3.bus_inf) {
  
   //console.log(item1);
  
  
   if(item1.bus_name === bus_search1.bus_name){
  
  //  schedule_timing_search4.timing_inf1.push(item);

 // schedule_timing_search5.timing_inf1.push(item);
  
 // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);

k1.push(item);
c1.push(bus_search1);
bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
d1.push(bus_com2);

//console.log(item1.bus_name,"=",bus_search1.bus_name,"avialablein ",schedule_timing_search3.bus_inf);


   }
  
  
  else{
   // console.log("false");
  }
  
  }
}
  
  
  
  }


else{


  const bus_search1= await busbooking.Bus.findById(item.Bus);
  
  // console.log(bus_search1);
   
   
   for (const item1 of  schedule_timing_search3.bus_inf) {
   
    //console.log(item1);
   
   
    if(item1.bus_name === bus_search1.bus_name){
   
   //  schedule_timing_search4.timing_inf1.push(item);
 
  // schedule_timing_search5.timing_inf1.push(item);
   
  // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);

 // console.log(item1.bus_name,"=",bus_search1.bus_name);

  
 k1.push(item);
 c1.push(bus_search1);
 bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 d1.push(bus_com2);
    }
   
   
   else{
     //console.log("false");
   }
   
   }



}


  }
//  console.log(count);
}
globalData1.items=[]
schedule_timing_search3.bus_inf=[];
/*
schedule_timing_search6.combine.push(k);
schedule_timing_search6.combine.push(c);
schedule_timing_search6.combine.push(d);*/

for (let i = 0; i < k.length; i++) {
 

//  console.log(i,":",k[i],c[i],d[i]);
}




//console.log("k:",schedule_timing_search6.combine[0][0]);
//method of access of  array and its subarray
//schedule_timing_search6.combine[0] is k array

  //schedule_timing_search6.combine[1] is c array

    //schedule_timing_search6.combine[2] is d array


    //if you want to access to 0 th element of k array 
//then  schedule_timing_search6.combine[0][0]

    //if you want to access to 0 th element of c array 
//then  schedule_timing_search6.combine[1][0]



    //if you want to access to 0 th element of d array 
//then  schedule_timing_search6.combine[2][0]




  //res.send(schedule_timing_search4);
  
  res.json({

  k1:k1,c1:c1,d1:d1

  })
  
  k1=[];
  c1=[];
  d1=[];
  
  
  console.log("final search result of filteration of bus types:",schedule_timing_search6.combine);
  

  
});



const processResult9 = async (data_bus_name,bus_facilities) => {


  const bus_search= await busbooking.Bus.find({ bus_facilities: { $in: bus_facilities } })

  for (const item of bus_search) {

  // console.log("item:",item.bus_name,data_bus_name);
 
  if (item.bus_name === data_bus_name) {


  return data_bus_name;

  
//console.log("data_bus_name:",data_bus_name);
//bus_acroo_to_bustype.items.push(data_bus_name);

   }

   else{

    console.log("not working");
   }


  }





  }



  const processResult8 = async (data) => {

    const schedule_search= await busbooking.timing_schedule.findById(data);
  
  
  
    return schedule_search;
  }
  








  /* bus searches by filteration of facilities*/



  /* bus searches by filteration of  bus operator*/

let  globalData2={

items:[]

}

let  combo={

  items1:[],
  items2:[],
  
  }

  let k2=[];
  let c2=[];

  router.post('/bus_search_by_bus_operator',async(req,res)=>{


    const{starting_point,destination_point,schedule_date,bus_operator}=req.body;

    //console.log(starting_point,destination_point,schedule_date,bus_operator);
    
    
    
    const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});
    
    
    
    //console.log(schedule_search.timing_schedule);
    
    var search_time=schedule_search.timing_schedule;
    
    for (const item of search_time) {
      const result = await processResult12(item);
    
   // console.log(result);
    globalData2.items.push(result);
    }

let count=0;

    for (const item of globalData2.items) {
          // console.log(item.Bus);

if(item!==null){
           if(item.Bus.length>1){
            for (const item5 of item.Bus) {
          //console.log("item5:",item5,item,item.Bus.length);
          count++;
            //  console.log("item5:",item5);
          const bus_search1= await busbooking.Bus.findById(item5);

   //.log(bus_search1);

   for (const bus_company of bus_operator)
         {

 //console.log(bus_company);
// console.log(bus_search1);
/*let m;
 bus_search1.Bus_company.map(ele=>{ m=ele});
 console.log(m);*/
 



bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);


 
 
if(bus_company === bus_search1_bus_company.company_name)
{
console.log(bus_company, "===", bus_search1_bus_company.company_name)
//"item"
    /* combo.items1.push(item);
     combo.items2.push(bus_search1);*/


     k1.push(item);
c1.push(bus_search1);
d1.push(bus_search1_bus_company);


}

       



            }
    }
  }

else{
  const bus_search1= await busbooking.Bus.findById(item.Bus);

  //.log(bus_search1);

  for (const bus_company of bus_operator)
        {

//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);




if(bus_company === bus_search1_bus_company.company_name)
{
console.log(bus_company, "===", bus_search1_bus_company.company_name)
//"item"
k1.push(item);
c1.push(bus_search1);
d1.push(bus_search1_bus_company);

}

      



           }

}


    }

}

globalData2.items=[];
/*
for (let i = 0; i < k2.length; i++) {
 
//final result acrodding to operator
 //  console.log(i,":",k2[i],c2[i]);
  }
  combo.items1.push(k2);
  combo.items2.push(c2);

  console.log("combo:",combo.items1[0],combo.items2[0]);
*/




  res.json({k1:k1,c1:c1,d1:d1});
  k1=[];
  c1=[];
  d1=[];

  })
/*

router.post('/all_buses_company_as_per_location',async(req,res)=>{

  

 const{starting_point,destination_point,schedule_date}=req.body


const all_buses_company= await busbooking.schedule_bus.find({

  starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date})


    console.log("company_id:", all_buses_company.company_name);

//console.log(all_buses_company.company_id);

for
  








})

*/



  const processResult12 = async (data) => {

    const schedule_search= await busbooking.timing_schedule.findById(data);
  
  
  
    return schedule_search;
  }
  
  /* bus searches by filteration of  bus operator*/







  /*bus searching  by boording point and dropping points of filtersection*/



/*i)-filter by    only boording point of filter section in that case there is required destination point so either schedule _id or destination point name is required  */


let boordi_droppi={


x:[]

}


let h1=[];
let j1=[];
globalData4={

items:[]


}

router.post('/search_by_only_boording_points_of_filtersection_and_scheduled_id_of_full_sssion',async(req,res)=>{

const{starting_point,destination_point,boording_point,}=req.body;

console.log(starting_point,boording_point,destination_point);



const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});


console.log(schedule_info.boording_point,schedule_info.dropping_point);

boordi_droppi.x.push(schedule_info.boording_point);
boordi_droppi.x.push(schedule_info.dropping_point)

console.log(boordi_droppi);


 if(boording_point.length>1){

 for(const x1 of boording_point){


  //console.log("x1:",x1);
  for(const y1 of  schedule_info.dropping_point){
const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x1,destination_point:y1});


if(schedule_info2 !== null){



//console.log(schedule_search.timing_schedule);

var search_time=schedule_info2.timing_schedule;
if(search_time !== undefined){
for (const item of search_time) {
  const result = await processResult8(item);

//console.log(result);
globalData4.items.push(result);
}

}

    for(const item of globalData4.items){

//console.log("item:",item);

if(item.Bus.length>1){

   for( const bus of item.Bus){

const bus_info= await busbooking.Bus
findById(bus);
  const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

k1.push(item);
c1.push(bus_info);
d1.push(company_info);

   }


}


else{

  const bus_info= await busbooking.Bus.findById(item.Bus);
  const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);

}



    }
    
  globalData4.items=[];
  }

}

 }



  }

  else{


    for(const y1 of  schedule_info.dropping_point){
      const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:y1});
      console.log("dropping_points:",y1,"boording_point",boording_point,schedule_info2);
      
      if(schedule_info2 !== null){
      
      
      
      //console.log(schedule_search.timing_schedule);
      
      var search_time=schedule_info2.timing_schedule;
      if(search_time !== undefined){
      for (const item of search_time) {
        const result = await processResult8(item);
      
      //console.log(result);
      globalData4.items.push(result);
      }
      
      }
      
          for(const item of globalData4.items){
      
      //console.log("item:",item);
      
      if(item.Bus.length>1){
      
         for( const bus of item.Bus){
      
      const bus_info= await busbooking.Bus
      findById(bus);
      const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
      
         }
      
      
      }
      
      
      else{
      
        const bus_info= await busbooking.Bus.findById(item.Bus);
      
        const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

        k1.push(item);
        c1.push(bus_info);
        d1.push(company_info);
      
      }
      
      
      
          }
          globalData4.items=[];
        }
      
        
      }
      
      }
    
    res.json({k1:k1,c1:c1,d1:d1});

    k1=[];
    c1=[];
    d1=[];
    







    //  console.log(h1,j1,boordi_droppi.x);


  }

 






)



let boordi_droppi2={


  x:[]
  
  }
let h4=[];
let j4=[];
router.post('/search_by_only_boording_point_and_dropping_point_of_filtersection_and_scheduled_id_of_full_sssion',async(req,res)=>{

  const{starting_point,destination_point,boording_point1,dropping_point1}=req.body;
  
  console.log(starting_point,destination_point,boording_point1,dropping_point1);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
 // console.log(schedule_info);
  
 // console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi2.x.push(schedule_info.boording_point);
  boordi_droppi2.x.push(schedule_info.dropping_point)
  
 // console.log(boordi_droppi2);
 // console.log(boording_point1,dropping_point1);

if( boording_point1.length>1 &&   dropping_point1.length === 1){

for(const x2 of boording_point1){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x2,destination_point:dropping_point1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
}
  
  
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  if(item!==null){
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus
  findById(bus);
  
  const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
    const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

    k1.push(item);
    c1.push(bus_info);
    d1.push(company_info);
  
  }
  
  
}
      }
      globalData4.items=[];
    }

   
  }


  console.log("boording_point>1 and dropping_pont==1:",h1,j1,boordi_droppi2.x);
  }



else if (boording_point1.length ===1 && dropping_point1.length >1)

{


  for(const x3 of dropping_point1){
    const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point1,destination_point:x3});
    
    
    
    if(schedule_info2 !== null){
    
    
    //console.log(schedule_search.timing_schedule);
    
    var search_time=schedule_info2.timing_schedule;
    if(search_time !== undefined){
    for (const item of search_time) {
      const result = await processResult8(item);
    
    //console.log(result);
    globalData4.items.push(result);
    }
  }
    
    
        for(const item of globalData4.items){
    
    //console.log("item:",item);
    if(item!==null){
    if(item.Bus.length>1){
    
       for( const bus of item.Bus){
    
    const bus_info= await busbooking.Bus
    findById(bus);
    
    
  const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
    
       }
    
    
    }
    
    
    else{
    
      const bus_info= await busbooking.Bus.findById(item.Bus);
    
  
      const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

      k1.push(item);
      c1.push(bus_info);
      d1.push(company_info);
        
    }
    
  }
    
        }
        globalData4.items=[];
      }


    }


    console.log("boording_point==1 and dropping_pont>1:",h1,j1,boordi_droppi2.x);
}




  else if( boording_point1.length>1 && dropping_point1.length>1  ){


for(const x4 of  boording_point1){

  for(const x5 of  dropping_point1)

{


  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x4,destination_point:x5});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
}
  
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  if(item!==null){
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus.
  findById(bus);
  
  
  const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
    
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
   
  const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
    
  
  }
  
}
  
      }





      globalData4.items=[];















}

}
}


console.log("from boording_point>1 and dropping_point>1:",h4,j4,boordi_droppi2.x);


  }



  else{

console.log("from else bro");


    const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point1,destination_point:dropping_point1});
  
  
  if(schedule_info2 !== null){
  
  
  
    //console.log(schedule_search.timing_schedule);
    
    var search_time=schedule_info2.timing_schedule;
    if(search_time !== undefined){
    for (const item of search_time) {
      const result = await processResult8(item);
    
    //console.log(result);
    globalData4.items.push(result);
    }
    
    
  }
        for(const item of globalData4.items){
    
    //console.log("item:",item);
    if(item!==null){
    if(item.Bus.length>1){
    
       for( const bus of item.Bus){
    
    const bus_info= await busbooking.Bus.
    findById(bus);
    
    
  const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
    
       }
    
    
    }
    
    
    else{
    
      const bus_info= await busbooking.Bus.findById(item.Bus);
    
     
  const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
    
    }
    
  }
    
        }



        globalData4.items=[];

  }
  //console.log("from else part :",h1,j1,boordi_droppi2.x);

}
//console.log(h1,j1,boordi_droppi2.x);
  
  
  res.json({k1:k1,c1:c1,d1:d1});

  k1=[];
  c1=[];
  d1=[];
  
  
  
  });
  
  
  




   /*bus searching  by boording point and dropping points of filtersection*/ /*bus searching  by boording point and dropping points of filtersection*/




/*bus searching  by only dropping points of filtersection*/ 
// in this  case it is required that dropping points and schedule_id of session has to be sended from front end to backend through this 
//  through this api  actually through schedule_id it finds schedule and then it finds all boording points under this schedule 
// and then it perform operation like it find roots between boording points and sended dropping point if exsists any roots between this 

// then it make results



let boordi_droppi1={

x:[]

}

router.post('/search_by_only_dropping_point_of_filtersection_and_scheduled_id_of_full_sssion',async(req,res)=>{



const{starting_point,destination_point,dropping_point}=req.body;


console.log(dropping_point,starting_point,destination_point);


const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});

  //console.log(schedule_search.boording_point);

  console.log(schedule_search.boording_point,schedule_search.dropping_point);

  boordi_droppi1.x.push(schedule_search.boording_point);
  boordi_droppi1.x.push(schedule_search.dropping_point)
if(dropping_point.length>1){
for( const x1 of dropping_point){
  for(const i1 of schedule_search.boording_point ){




  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:i1,destination_point:x1});
  
  
  if(schedule_info2 !== null){
  
  
  
    //console.log(schedule_search.timing_schedule);
    
    var search_time=schedule_info2.timing_schedule;
 
 //console.log(i1,":",search_time);
 
    if(search_time !== undefined){
    for (const item of search_time) {
      const result = await processResult8(item);
    
    //console.log(result);
    globalData4.items.push(result);
    }
  }
    
console.log(i1,":",globalData4.items)
    
        for(const item of globalData4.items){

          if(item!==null){
    
    //console.log("item:",item);
    
    if(item.Bus.length>1){
    
       for( const bus of item.Bus){
    
    const bus_info= await busbooking.Bus.
    findById(bus);
    const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
    
       }
    
    
    }
    
    
    else{
    
      const bus_info= await busbooking.Bus.findById(item.Bus);
    
      const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
    
    }
    
        }
    
        }


        globalData4.items=[];



  }
  console.log("from else part :",h1,j1,boordi_droppi1.x);



}
}

}

else{


  for(const i1 of schedule_search.boording_point ){




    const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:i1,destination_point:dropping_point});
    
    
    if(schedule_info2 !== null){
    
    
    
      //console.log(schedule_search.timing_schedule);
      
      var search_time=schedule_info2.timing_schedule;
   
   //console.log(i1,":",search_time);
   
      if(search_time !== undefined){
      for (const item of search_time) {
        const result = await processResult8(item);
      
      //console.log(result);
      globalData4.items.push(result);
      }
    }
      
  console.log(i1,":",globalData4.items)
      
          for(const item of globalData4.items){
      if(item!==null){
      //console.log("item:",item);
      
      if(item.Bus.length>1){
      
         for( const bus of item.Bus){
      
      const bus_info= await busbooking.Bus.
      findById(bus);
      
      const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

      k1.push(item);
      c1.push(bus_info);
      d1.push(company_info);
      
         }
      
      
      }
      
      
      else{
      
        const bus_info= await busbooking.Bus.findById(item.Bus);
        const company_info=await busbooking.Bus_company.findById(bus_info.Bus_company)

  k1.push(item);
  c1.push(bus_info);
  d1.push(company_info);
      
      }
      
    }
      
          }
  
          globalData4.items=[];
  
  
  
    }
    console.log("from else part :",h1,j1,boordi_droppi1.x);
  
  

  
  }

















}




      res.json({k1:k1,c1:c1,d1:d1});


        k1=[];
        c1=[];
        d1=[];





})








/*   search by bus deprature time and bus type*/ 




let globalData5={

  items:[]
  }
  
  let bus_acroo_to_bustype2a={
  
  
  items:[]
  
  }
  let kp=[];
  
  let result1=[];

  let d2=[];
  let globalData6={
    items:[]
  }

let bus_acroo_to_bustype2b={

  items:[]
}
let  schedule_timing_search1b={

  bus_inf:[]
}

  router.post('/search_by_bus_deprature_and_bus_type',async(req,res)=>{
  
    const{starting_point,destination_point,schedule_date,bus_type,deprature_time1}=req.body;

console.log(starting_point,destination_point,schedule_date);


    const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point,schedule_date:schedule_date});

    console.log("schedule_search:",schedule_search);
    
    //console.log(schedule_search.timing_schedule);
    
    var search_time=schedule_search.timing_schedule;
    console.log("search_time:",search_time);
    for (const item of search_time) {
      const result = await processResult4(item);
    
     
    globalData6.items.push(result);
    }
    
    //console.log("from bus search by bus type:",globalData.items);
    
    for (const item of globalData6.items) {
    if(item!==null){
      for (const Bus of item.Bus){
    //console.log("Bus1:",Bus);
    
    
      const bus_search= await busbooking.Bus.findById(Bus);
     //console.log(bus_search.bus_name);
     
     
     bus_result = await processResult5(bus_search.bus_name,bus_type);
     console.log("bus_result:",bus_result);
     
     if(bus_result == undefined){
     
     }
     
     else{
      let k1=0
     for(let i=0;i< bus_acroo_to_bustype2b.items.length;i++)
     { 
     if(bus_result === bus_acroo_to_bustype2b.items[i]){
     
    k1=1
     
      
     }
    }
    if(k1 ==0){
    
      bus_acroo_to_bustype2b.items.push(bus_result);
    
    }
     
     
     }
     
      }
    }
    
    
    }
    
    
   // console.log("bus_acroo_to_bustype.items:",bus_acroo_to_bustype.items);
    
    for (const item of bus_acroo_to_bustype2b.items) {
      //console.log("item23:",item);
       
         const bus_infor= await busbooking.Bus.findOne({bus_name:item});
       
       
       
       
       
        // console.log(bus_infor,bus_company);
         schedule_timing_search1b.bus_inf.push(bus_infor);
       
    
       
       }
    //res.send(schedule_timing_search1);
    //console.log(globalData.items);
    
    //console.log(schedule_timing_search1);
    bus_acroo_to_bustype2b.items=[];
    
    
    
    for (const item of globalData6.items) {
      
      //res.send(item);
      //console.log(item)   //  from here tommrorow
      var count=0;
    
      if(item!==null){
      if(item.Bus.length>1){
      for (const item5 of item.Bus) {
    //console.log("item5:",item5,item,item.Bus.length);
    count++;
      //  console.log("item5:",item5);
    const bus_search1= await busbooking.Bus.findById(item5);
      
     // console.log(bus_search1);
      
      
      for (const item1 of  schedule_timing_search1b.bus_inf) {
      
       //console.log(item1);
      
      
       if(item1.bus_name === bus_search1.bus_name){
      
      //  schedule_timing_search4.timing_inf1.push(item);
    
     // schedule_timing_search7.timing_inf1.push(item);
      
     // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    console.log("item from bus search:",item,"with",bus_search1);
    b1.push(item);
    b2.push(bus_search1);
    bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
    b3.push(bus_com2);
    
    //console.log(item1.bus_name,"=",bus_search1.bus_name,item);
    
    
       }
      
      
      else{
       // console.log("false");
      }
      
      }
    }
      
      
      
      }
    
    
    else{
    
    
      const bus_search1= await busbooking.Bus.findById(item.Bus);
      
      // console.log(bus_search1);
       
       
       for (const item1 of  schedule_timing_search1b.bus_inf) {
       
        //console.log(item1);
       
       
        if(item1.bus_name === bus_search1.bus_name){
       
       //  schedule_timing_search4.timing_inf1.push(item);
     
      // schedule_timing_search7.timing_inf1.push(item);
       
      // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    
     // console.log(item1.bus_name,"=",bus_search1.bus_name,item);
    
     console.log("item from bus search:",item,"with",bus_search1);
     b1.push(item);
     b2.push(bus_search1);
     bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
     b3.push(bus_com2);
        }
       
       
       else{
         //console.log("false");
       }
       
       }
    
    
    
    }
    
    
    }
      console.log(count);
     // globalData.items=[];
  
    
    
    //res.json({k1,c1,d1});
    //schedule_timing_search7.combine=[];
    
    }
    globalData6.items=[];
    
    schedule_timing_search1b.bus_inf=[];



for(const ele of deprature_time1){

      console.log("ele",ele);
      
      if(ele==6){
      
      start_time=6;
      deprature_time=12;
      
      }
      
      else if(ele ==12){
      
      start_time=12;
      
      deprature_time=18;
      
      }
      
      else if(ele ==18){
      
      
      start_time=18;
       deprature_time=24;
      
      
      }
      else{
      
      start_time=0;
      deprature_time=6;
      
      }
      
      for(i=0;b1.length>i;i++){
      
      
       if(b1[i].first_hour_of_starting_time_number > start_time  && b1[i].first_hour_of_starting_time_number<deprature_time){
      let x1=b1[i];
      let x2=b2[i];
      let x3=b3[i];
      k2.push(x1);
      c2.push(x2);
      d2.push(x3);
      //d1.push(d2[i]);
      
    //  console.log("k2,c2",x1,x2);
      
       }
      
      
      
      }
      


    }










res.json({k2,c2,d2});
b1=[];
b2=[];
b3=[];
k2=[];
c2=[];
d2=[];
  })
  
  const processResulta = async (data) => {
    const schedule_search= await busbooking.timing_schedule.findById(data);
   return schedule_search;
    } 
  const processResultb = async (data_bus_name,bus_type) => {
  
      const bus_search= await busbooking.Bus.find({ bus_type: { $in: bus_type } })
    
      for (const item of bus_search) {
    
      // console.log("item:",item.bus_name,data_bus_name);
     
      if (item.bus_name === data_bus_name) {
    
    
     return data_bus_name;
    //console.log("data_bus_name:",data_bus_name);
    //bus_acroo_to_bustype.items.push(data_bus_name);
    
       }
    
       else{
    
        console.log("not working");
       }
    
    
      }
    
    
    
    
    
      }
    


/*   search by bus deprature time and bus type*/ 


let result2=[];

router.post('/search_by_deprature_time_and_Boordingpoint',async(req,res)=>{


  

const{starting_point,destination_point,boording_point,deprature_time1}=req.body;


 // console.log(starting_point,boording_point,destination_point,starting_time,deprature_time);



const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});


console.log(schedule_info.boording_point,schedule_info.dropping_point);

boordi_droppi.x.push(schedule_info.boording_point);
boordi_droppi.x.push(schedule_info.dropping_point)

console.log(boordi_droppi);


 if(boording_point.length>1){

 for(const x1 of boording_point){


  //console.log("x1:",x1);
  for(const y1 of  schedule_info.dropping_point){
const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x1,destination_point:y1});


if(schedule_info2 !== null){



//console.log(schedule_search.timing_schedule);

var search_time=schedule_info2.timing_schedule;
if(search_time !== undefined){
for (const item of search_time) {
  const result = await processResult8(item);

//console.log(result);
globalData4.items.push(result);
}

}

    for(const item of globalData4.items){

console.log("item:",item);



  




h1.push(item);


   









    }
  }

  globalData4.items=[];
}

 }



  }

  else{


    for(const y1 of  schedule_info.dropping_point){
      const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:y1});
      
      
      if(schedule_info2 !== null){
      
      
      
      //console.log(schedule_search.timing_schedule);
      
      var search_time=schedule_info2.timing_schedule;
      if(search_time !== undefined){
      for (const item of search_time) {
        const result = await processResult8(item);
      
      //console.log(result);
      globalData4.items.push(result);
      }
      
      }
      
          for(const item of globalData4.items){
      
      //console.log("item:",item);
      
    
    
    
      h1.push(item);
    
      
         }
      
      

      
      
      
      
      
          }
          globalData4.items=[];
        }
      
     
      }

    //  console.log("h1",h1);


  for(ele of deprature_time1){

    if(ele==6){

      start_time=6;
      deprature_time=12;
     
       }
     
       else if(ele ==12){
     
      start_time=12;
     
      deprature_time=18;
     
       }
     
     else if(ele ==18){
     
     
        start_time=18;
          deprature_time=24;
     
     
     }
      else{
     
      start_time=0;
       deprature_time=6;
     
      }
     

    for( const item3 of h1){


     // console.log("item3",item3);

if(item3.first_hour_of_starting_time_number>start_time  && item3.first_hour_of_starting_time_number<deprature_time){

result2.push(item3);

console.log("item3",item3);
      }

      else{


        console.log("fail in insertion");
      }
      
      }
    
    }

    h1=[];
//res.send(result2)


let p1=[];
let p2=[];
let p3=[];
for (const item of result2) {
  // console.log(item.Bus);

if(item!==null){
   if(item.Bus.length>1){
    for (const item5 of item.Bus) {
  //console.log("item5:",item5,item,item.Bus.length);
  count++;
    //  console.log("item5:",item5);
  const bus_search1= await busbooking.Bus.findById(item5);

//.log(bus_search1);



//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);





p1.push(item);
p2.push(bus_search1);
p3.push(bus_search1_bus_company);








    
}
}

else{
const bus_search1= await busbooking.Bus.findById(item.Bus);

//.log(bus_search1);



//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);







p1.push(item);
p2.push(bus_search1);
p3.push(bus_search1_bus_company);






   

}


}

}



 


res.json({p1,p2,p3});
p1=[];
p2=[];
p3=[];
result2=[];






//*** */

 console.log("result2  final result of search of bus_deprarture_time and boording point:",result2);



    }


)
;

let result3=[];

let g1=[];
/*search  by bus deprature time  andd  droppping point*/


router.post('/search_by_deprature_time_and_droppinging__point',async(req,res)=>{


  

  const{starting_point,destination_point,dropping_point,deprature_time1}=req.body;
  
  
   // console.log(starting_point,dropping_point,destination_point,starting_time,deprature_time);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  

   if(dropping_point.length>1){
  
   for(const x1 of dropping_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.boording_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:x1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
      for(const item of globalData4.items){
  
  console.log("item:",item);
  
  
  
    
  
  
  
  
  g1.push(item);
  
  
     
  
  
  
  
  
  
  
  
  
      }
    }
  
    globalData4.items=[];
  }
  
   }
  
  
  
    }

    else{
  
  
      for(const y1 of  schedule_info.boording_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:dropping_point});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
            for(const item of globalData4.items){
        
        //console.log("item:",item);
        
      
      
      
        g1.push(item);
      
        
           }
        
        
  
        
        
        
        
        
            }
            globalData4.items=[];
          }
        
       
        }
  
      //  console.log("h1",h1);
  


      for(ele of deprature_time1){

        if(ele==6){
    
          start_time=6;
          deprature_time=12;
         
           }
         
           else if(ele ==12){
         
          start_time=12;
         
          deprature_time=18;
         
           }
         
         else if(ele ==18){
         
         
            start_time=18;
              deprature_time=24;
         
         
         }
          else{
         
          start_time=0;
           deprature_time=6;
         
          }
         
      for( const item3 of g1){
  
  
       // console.log("item3",item3);
  
  if(item3.first_hour_of_starting_time_number>start_time  && item3.first_hour_of_starting_time_number<deprature_time){
  
  result3.push(item3);
  
  console.log("item3",item3);
        }
  
        else{
  
  
          console.log("fail in insertion");
        }
        
        }
      
      
      
  
  
      }
  
  
  
  g1=[]
   
  
  
  
  
let l1=[];
let l2=[];
let l3=[];
for (const item of result3) {
  // console.log(item.Bus);

if(item!==null){
   if(item.Bus.length>1){
    for (const item5 of item.Bus) {
  //console.log("item5:",item5,item,item.Bus.length);
  count++;
    //  console.log("item5:",item5);
  const bus_search1= await busbooking.Bus.findById(item5);

//.log(bus_search1);



//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);





l1.push(item);
l2.push(bus_search1);
l3.push(bus_search1_bus_company);








    
}
}

else{
const bus_search1= await busbooking.Bus.findById(item.Bus);

//.log(bus_search1);



//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);







l1.push(item);
l2.push(bus_search1);
l3.push(bus_search1_bus_company);






   

}


}

}



 
//console.log("dropping>>>>>>>>>>>>>>>>>>>>>>>>>>>>from",l1,l2,l3);

res.json({l1,l2,l3});
l1=[];
l2=[];
l3=[];
result3=[];

  
  
  
  
  
  
  

  
   console.log("result2  final result of search of bus_deprarture_time and dropping point:",result2);
  
 })

/*search  by bus deprature time  andd  droppping point*/















































/*bus searching  by only dropping points of filtersection*/ 










/*bus searching  by only dropping points of filtersection*/ 







/*bus searching  by only bus  dreapture time and  bus operator  of filtersection*/ 

let k3=[];
router.post('/search_by_bus_deprature_time_and_bus_operator', async(req,res)=>{

const{ starting_point,destination_point,bus_operator,deprature_time1}=req.body;

//console.log( starting_point,destination_point,bus_operator,starting_time,deprature_time);





const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
    
    
    
//console.log(schedule_search.timing_schedule);

var search_time=schedule_search.timing_schedule;

for (const item of search_time) {
  const result = await processResult12(item);

// console.log(result);
globalData2.items.push(result);
}

let count=0;

for (const item of globalData2.items) {

if(item !== null){

    //   console.log(item.Bus);


if(item.Bus.length>1){
        for (const item5 of item.Bus) {
      //console.log("item5:",item5,item,item.Bus.length);
      count++;
        //  console.log("item5:",item5);
      const bus_search1= await busbooking.Bus.findById(item5);

//.log(bus_search1);

for (const bus_company of bus_operator)
     {

//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);




if(bus_company === bus_search1_bus_company.company_name)
{
console.log(bus_company, "===", bus_search1_bus_company.company_name)
//"item"
/* combo.items1.push(item);
 combo.items2.push(bus_search1);*/


 k2.push(item);
 k1.push(bus_search1);
 k3.push(bus_search1_bus_company);



}

   



        }
}






}




else{
const bus_search1= await busbooking.Bus.findById(item.Bus);

//.log(bus_search1);

for (const bus_company of bus_operator)
    {

//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);




if(bus_company === bus_search1_bus_company.company_name)
{
console.log(bus_company, "===", bus_search1_bus_company.company_name)
//"item"

k2.push(item);
k1.push(bus_search1);
k3.push(bus_search1_bus_company);



}

  



       }

}




}





console.log("k2:",k2);



}
globalData2.items=[]

/*
  for( const x1 of k2){

        if(x1.first_hour_of_starting_time_number>starting_time && x1.first_hour_of_starting_time_number<deprature_time){

       result2.push(x1);


        }


  }*/
let t1=[];
let t2=[];
let t3=[];


for(ele of deprature_time1){

  if(ele==6){

    start_time=6;
    deprature_time=12;
   
     }
   
     else if(ele ==12){
   
    start_time=12;
   
    deprature_time=18;
   
     }
   
   else if(ele ==18){
   
   
      start_time=18;
        deprature_time=24;
   
   
   }
    else{
   
    start_time=0;
     deprature_time=6;
   
    }
for(let i=0; k2.length>i;i++){

  if(k2[i].first_hour_of_starting_time_number>start_time && k2[i].first_hour_of_starting_time_number<deprature_time){

    t1.push(k2[i]);
t2.push(k1[i]);
t3.push(k3[i]);


     }


}
}
k1=[];
k2=[];
k3=[];

  res.json({t1,t2,t3});
t1=[];
t2=[];
t3=[]
console.log("result2 of search of deprature time and  company name:", result2 );

//through this result2  it is possible to get  bus information and company

})




/*bus searching  by only bus  dreapture time and  bus operator  of filtersection*/ 

let  bus_acroo_to_bustype2k={

  items:[]
}

/* bus  searching by only bus deaprature time and  bus facilities*/
let cp=[];
let dp=[];

let f1=[];
let f2=[];
let f3=[];
router.post('/search_by_deprature_time_and_Bus_facilities',async(req,res)=>{

const{starting_point,destination_point,bus_facilities,deprature_time1}=req.body;

//console.log(starting_point,destination_point,starting_time,deprature_time,bus_facilities);





const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});

var search_time=schedule_search.timing_schedule;
  
for (const item of search_time) {
  const result = await processResulta(item);
// console.log("result:",result);
 if(result !== null){
globalData5.items.push(result);
//console.log("result:",result);

 }
}
for (const item of globalData5.items) {
// console.log("item:",item);
if(item !== null){
 if(item.Bus.length>1){
    for (const Bus of item.Bus){
  //console.log("Bus1:",Bus);
  
  
    const bus_search= await busbooking.Bus.findById(Bus);
   //console.log(bus_search.bus_name);
   
   
   bus_result = await processResultb1(bus_search.bus_name,bus_facilities);
   console.log("bus_result:",bus_result);
   
   if(bus_result == undefined){
   
   }
   
   else{
    let k1=0
   for(let i=0;i< bus_acroo_to_bustype2k.items.length;i++)
   { 
   if(bus_result === bus_acroo_to_bustype2k.items[i]){
   
  k1=1
   
    
   }
  }
  if(k1 ==0){
  
    bus_acroo_to_bustype2k.items.push(bus_result);
  
  }
   
   
   }
   
    }

 }




 else{


  
  const bus_search= await busbooking.Bus.findById(item.Bus);
 //console.log(bus_search.bus_name);
 
 
 bus_result = await processResultb1(bus_search.bus_name,bus_facilities);
 console.log("bus_result:",bus_result);
 
 if(bus_result == undefined){
 
 }
 
 else{
  let k1=0
 for(let i=0;i< bus_acroo_to_bustype2k.items.length;i++)
 { 
 if(bus_result === bus_acroo_to_bustype2k.items[i]){
 
k1=1
 
  
 }
}
if(k1 ==0){

  bus_acroo_to_bustype2k.items.push(bus_result);

}
 
 
 }


}
}




  }


 // console.log(bus_acroo_to_bustype2a.items);




















  for (const item of globalData5.items) {
  
    //res.send(item);
    //console.log(item)   //  from here tommrorow
    var count=0;
  
  
    if(item.Bus.length>1){
    for (const item5 of item.Bus) {
  //console.log("item5:",item5,item,item.Bus.length);
  count++;
    //  console.log("item5:",item5);
  const bus_search1= await busbooking.Bus.findById(item5);
  const bus_company=await busbooking.Bus_company.findById(bus_search1.Bus_company)
   // console.log(bus_search1);
    
    
    for (const item1 of  bus_acroo_to_bustype2k.items) {
    
     //console.log(item1);
    
    
     if(item1 === bus_search1.bus_name){
    
    //  schedule_timing_search4.timing_inf1.push(item);
  
   // schedule_timing_search7.timing_inf1.push(item);
    
   // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  console.log("item:",item);
  kp.push(item);
 cp.push(bus_search1);
 dp.push(bus_company)
  
  //console.log(item1,"=",bus_search1.bus_name,item);
  
  
     }
    
    
    else{
     // console.log("false");
    }
    
    }
  }
    
    
    
    }
  
  
  else{
  
  
    const bus_search1= await busbooking.Bus.findById(item.Bus);
const bus_company=await busbooking.Bus_company.findById(bus_search1.Bus_company)
    // console.log(bus_search1);
     
     
     for (const item1 of  bus_acroo_to_bustype2k.items) {
     
      //console.log(item1);
     
     
      if(item1 === bus_search1.bus_name){
     
     //  schedule_timing_search4.timing_inf1.push(item);
   
    // schedule_timing_search7.timing_inf1.push(item);
     
    // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  
   // console.log(item1,"=",bus_search1.bus_name,item);
  
   console.log("item:",item);
   kp.push(item);
   cp.push(bus_search1);
dp.push( bus_company)
      }
     
     
     else{
       //console.log("false");
     }
     
     }
  
  
  
  }
  
  
  
   // console.log(count);
  }
  globalData5.items=[];

 bus_acroo_to_bustype2k.items=[];

 /*
let new_timing=[];
let new_timing1=[];
let new_bus_acrodding_to_new_timing=[];
console.log(kp,cp);*/
let j=0;

//res.send({kp,cp,dp});



for( const ele of deprature_time1){

  if(ele==6){

    start_time=6;
    deprature_time=12;
   
     }
   
     else if(ele ==12){
   
    start_time=12;
   
    deprature_time=18;
   
     }
   
   else if(ele ==18){
   
   
      start_time=18;
        deprature_time=24;
   
   
   }
    else{
   
    start_time=0;
     deprature_time=6;
   
    }

 
for(let i=0;kp.length>i;i++){

//console.log(i,kp[i]);
if(kp[i].first_hour_of_starting_time_number>start_time  &&  kp[i].first_hour_of_starting_time_number<deprature_time){


f1.push(kp[i]);
f2.push(cp[i]);
f3.push(dp[i]);

    
}

}






}
kp=[];
cp=[];
dp=[];
res.json({f1,f2,f3});
console.log("f1,f2,f3..................",f1,f2,f3);

f1=[];
f2=[];
f3=[];

//console.log("new:main result of that",new_timing,new_bus_acrodding_to_new_timing);
})
const processResultb1 = async (data_bus_name,bus_facilities) => {
  
  const bus_search= await busbooking.Bus.find({ bus_facilities: { $in: bus_facilities } })

  for (const item of bus_search) {

  // console.log("item:",item.bus_name,data_bus_name);
 
  if (item.bus_name === data_bus_name) {


 return data_bus_name;
//console.log("data_bus_name:",data_bus_name);
//bus_acroo_to_bustype.items.push(data_bus_name);

   }

   else{

    console.log("not working");
   }


  }





  }

/*bus searching by bus deaprature time and bus facilities*/ 

/* bus  searching by bus  type and   boording point  */

let  bus_acroo_to_bustype2p={
  items:[]
}
let kp1=[];
let cp1=[];
let dp1=[];


router.post('/search_by_only_boording_points_and_bus_types',async(req,res)=>{

  const{starting_point,destination_point,boording_point,bus_type}=req.body;
  
  console.log("starting_point,destination_point,boording_point,bus>>>>>>>>>>",starting_point,destination_point,boording_point,bus_type);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  
  
   if(boording_point.length>1){
  
   for(const x1 of boording_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.dropping_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x1,destination_point:y1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
  for (const item of globalData4.items) {
    // console.log("item:",item);
    
    if(item.Bus.length>1){
      for (const Bus of item.Bus){
    //console.log("Bus1:",Bus);
    
    
      const bus_search= await busbooking.Bus.findById(Bus);
     //console.log(bus_search.bus_name);
     
     
     bus_result = await processResultb(bus_search.bus_name,bus_type);
     console.log("bus_result:",bus_result);
     
     if(bus_result == undefined){
     
     }
     
     else{
      let k1=0
     for(let i=0;i< bus_acroo_to_bustype2p.items.length;i++)
     { 
     if(bus_result === bus_acroo_to_bustype2p.items[i]){
     
    k1=1
     
      
     }
    }
    if(k1 ==0){
    
      bus_acroo_to_bustype2p.items.push(bus_result);
    
    }
     
     
     }
     
      }
    
    }
    
    else{
    
    
    
    const bus_search= await busbooking.Bus.findById(item.Bus);
    //console.log(bus_search.bus_name);
    
    
    bus_result = await processResultb(bus_search.bus_name,bus_type);
    console.log("bus_result:",bus_result);
    
    if(bus_result == undefined){
    
    }
    
    else{
    let k1=0
    for(let i=0;i< bus_acroo_to_bustype2p.items.length;i++)
    { 
    if(bus_result === bus_acroo_to_bustype2p.items[i]){
    
    k1=1
    
    
    }
    }
    if(k1 ==0){
    
    bus_acroo_to_bustype2p.items.push(bus_result);
    
    }
    
    
    }
    
    
    }
    
    
    
    
    }
    
    for (const item of globalData4.items) {

      //res.send(item);
      //console.log(item)   //  from here tommrorow
      var count=0;
    
    
      if(item.Bus.length>1){
      for (const item5 of item.Bus) {
    //console.log("item5:",item5,item,item.Bus.length);
    count++;
      //  console.log("item5:",item5);
    const bus_search1= await busbooking.Bus.findById(item5);
      const bus_company=await busbooking.Bus_company.findById(bus_search1.Bus_company)
     // console.log(bus_search1);
      
      
      for (const item1 of  bus_acroo_to_bustype2p.items) {
      
       //console.log(item1);
      
      
       if(item1 === bus_search1.bus_name){
      
      //  schedule_timing_search4.timing_inf1.push(item);
    
     // schedule_timing_search7.timing_inf1.push(item);
      
     // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    console.log("kp1 first item1:",item);
        kp1.push(item);
    cp1.push(bus_search1);
dp1.push(bus_company)
    
    
    //console.log(item1,"=",bus_search1.bus_name,item);
    
    
       }
      
      
      else{
       // console.log("false");
      }
      
      }
    }
      
      
      
      }
    
    
    else{
    
    
      const bus_search1= await busbooking.Bus.findById(item.Bus);
      const bus_company=await busbooking.Bus_company.findById(bus_search1.Bus_company)
      // console.log(bus_search1);
       
       
       for (const item1 of  bus_acroo_to_bustype2p.items) {
       
        //console.log(item1);
       
       
        if(item1 === bus_search1.bus_name){
       
       //  schedule_timing_search4.timing_inf1.push(item);
     
      // schedule_timing_search7.timing_inf1.push(item);
       
      // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    
     // console.log(item1,"=",bus_search1.bus_name,item);
     console.log("kp1 second item1:",item);
      
     kp1.push(item);
     cp1.push(bus_search1);
     dp1.push(bus_company)
    
        }
       
       
       else{
         //console.log("false");
       }
       
       }
    
    
    
    }
    
    
    
     // console.log(count);
    }
    















    }
  
    globalData4.items=[];
    bus_acroo_to_bustype2p.items=[]
  }
  
   }
  
  
  
    }
  
    else{
  
  
      for(const y1 of  schedule_info.dropping_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:y1});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
          
  for (const item of globalData4.items) {
    // console.log("item:",item);
    
    if(item.Bus.length>1){
      for (const Bus of item.Bus){
    //console.log("Bus1:",Bus);
    
    
      const bus_search= await busbooking.Bus.findById(Bus);
     //console.log(bus_search.bus_name);
     
     
     bus_result = await processResultb(bus_search.bus_name,bus_type);
     console.log("bus_result:",bus_result);
     
     if(bus_result == undefined){
     
     }
     
     else{
      let k1=0
     for(let i=0;i< bus_acroo_to_bustype2p.items.length;i++)
     { 
     if(bus_result === bus_acroo_to_bustype2p.items[i]){
     
    k1=1
     
      
     }
    }
    if(k1 ==0){
    
      bus_acroo_to_bustype2p.items.push(bus_result);
    
    }
     
     
     }
     
      }
    
    }
    
    else{
    
    
    
    const bus_search= await busbooking.Bus.findById(item.Bus);
    //console.log(bus_search.bus_name);
    
    
    bus_result = await processResultb(bus_search.bus_name,bus_type);
    console.log("bus_result:",bus_result);
    
    if(bus_result == undefined){
    
    }
    
    else{
    let k1=0
    for(let i=0;i< bus_acroo_to_bustype2p.items.length;i++)
    { 
    if(bus_result === bus_acroo_to_bustype2p.items[i]){
    
    k1=1
    
    
    }
    }
    if(k1 ==0){
    
    bus_acroo_to_bustype2p.items.push(bus_result);
    
    }
    
    
    }
    
    
    }
    
    
    
    
    }
    
    for (const item of globalData4.items) {

      //res.send(item);
      //console.log(item)   //  from here tommrorow
      var count=0;
    
    
      if(item.Bus.length>1){
      for (const item5 of item.Bus) {
    //console.log("item5:",item5,item,item.Bus.length);
    count++;
      //  console.log("item5:",item5);
    const bus_search1= await busbooking.Bus.findById(item5);
    const bus_company=await busbooking.Bus_company.findById(bus_search1.Bus_company)
     // console.log(bus_search1);
      
      
      for (const item1 of  bus_acroo_to_bustype2p.items) {
      
       //console.log(item1);
      
      
       if(item1 === bus_search1.bus_name){
      
      //  schedule_timing_search4.timing_inf1.push(item);
    
     // schedule_timing_search7.timing_inf1.push(item);
      
     // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
     console.log("kp1 third item1:",item);
    kp1.push(item);
    cp1.push(bus_search1);
    dp1.push(bus_company)
    
    //console.log(item1,"=",bus_search1.bus_name,item);
    
    
       }
      
      
      else{
       // console.log("false");
      }
      
      }
    }
      
      
      
      }
    
    
    else{
    
    
      const bus_search1= await busbooking.Bus.findById(item.Bus);
      const bus_company=await busbooking.Bus_company.findById(bus_search1.Bus_company)
      // console.log(bus_search1);
       
       
       for (const item1 of  bus_acroo_to_bustype2p.items) {
       
        //console.log(item1);
       
       
        if(item1 === bus_search1.bus_name){
       
       //  schedule_timing_search4.timing_inf1.push(item);
     
      // schedule_timing_search7.timing_inf1.push(item);
       
      // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    
     // console.log(item1,"=",bus_search1.bus_name,item);
     console.log("kp1 fourth item1:",item);
     kp1.push(item);
     cp1.push(bus_search1);
    dp1.push(bus_company);
        }
       
       
       else{
         //console.log("false");
       }
       
       }
    
    
    
    }
    
    
    
     // console.log(count);
    }










          }
        
          globalData4.items=[];
          bus_acroo_to_bustype2p.items=[]
        }
        
        }
      
      
      
  console.log("kp1,cp1,dp1>>>>>>>>>>>>>>>>>>>>>",kp1,cp1,dp1);
  
  res.json({kp1,cp1,dp1});
  kp1=[];
  cp1=[];
  dp1=[];
  
  
  
  
        console.log("the result of bus type and dropping point",kp,cp,boordi_droppi.x);
  
  
    }
  
   
  
  
  
  
  
  
  )
  
























/* bus  searching by bus  type and   boording point  */
















/* bus  searching by bus  type and   drooping point  */







let bus_acroo_to_bustype2j={
  items:[]
}
let ks=[];
let cs=[];
let ds=[];

router.post('/search_by_only_dropping_points_and_bus_types',async(req,res)=>{

  const{starting_point,destination_point,dropping_point,bus_type}=req.body;
  
  console.log(starting_point,destination_point,dropping_point,bus_type);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  
  
   if(dropping_point.length>1){
  
   for(const x1 of dropping_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.boording_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:x1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
  for (const item of globalData4.items) {
    // console.log("item:",item);
    
    if(item.Bus.length>1){
      for (const Bus of item.Bus){
    //console.log("Bus1:",Bus);
    
    
      const bus_search= await busbooking.Bus.findById(Bus);
     //console.log(bus_search.bus_name);
     
     
     bus_result = await processResultb(bus_search.bus_name,bus_type);
     console.log("bus_result:",bus_result);
     
     if(bus_result == undefined){
     
     }
     
     else{
      let k1=0
     for(let i=0;i< bus_acroo_to_bustype2j.items.length;i++)
     { 
     if(bus_result === bus_acroo_to_bustype2j.items[i]){
     
    k1=1
     
      
     }
    }
    if(k1 ==0){
    
      bus_acroo_to_bustype2j.items.push(bus_result);
    
    }
     
     
     }
     
      }
    
    }
    
    else{
    
    
    
    const bus_search= await busbooking.Bus.findById(item.Bus);
    //console.log(bus_search.bus_name);
    
    
    bus_result = await processResultb(bus_search.bus_name,bus_type);
    console.log("bus_result:",bus_result);
    
    if(bus_result == undefined){
    
    }
    
    else{
    let k1=0
    for(let i=0;i< bus_acroo_to_bustype2j.items.length;i++)
    { 
    if(bus_result === bus_acroo_to_bustype2j.items[i]){
    
    k1=1
    
    
    }
    }
    if(k1 ==0){
    
    bus_acroo_to_bustype2j.items.push(bus_result);
    
    }
    
    
    }
    
    
    }
    
    
    
    
    }
    
    for (const item of globalData4.items) {

      //res.send(item);
      //console.log(item)   //  from here tommrorow
      var count=0;
    
    
      if(item.Bus.length>1){
      for (const item5 of item.Bus) {
    //console.log("item5:",item5,item,item.Bus.length);
    count++;
      //  console.log("item5:",item5);
    const bus_search1= await busbooking.Bus.findById(item5);
      const bus_com=await busbooking.Bus_company.findById(bus_search1.Bus_company);
     // console.log(bus_search1);
      
      
      for (const item1 of  bus_acroo_to_bustype2j.items) {
      
       //console.log(item1);
      
      
       if(item1 === bus_search1.bus_name){
      
      //  schedule_timing_search4.timing_inf1.push(item);
    
     // schedule_timing_search7.timing_inf1.push(item);
      
     // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    
    ks.push(item);
    cs.push(bus_search1);
    ds.push(bus_com)
    
    
    //console.log(item1,"=",bus_search1.bus_name,item);
    
    
       }
      
      
      else{
       // console.log("false");
      }
      
      }
    }
      
      
      
      }
    
    
    else{
    
    
      const bus_search1= await busbooking.Bus.findById(item.Bus);
      const bus_com=await busbooking.Bus_company.findById(bus_search1.Bus_company);
      // console.log(bus_search1);
       
       
       for (const item1 of  bus_acroo_to_bustype2j.items) {
       
        //console.log(item1);
       
       
        if(item1 === bus_search1.bus_name){
       
       //  schedule_timing_search4.timing_inf1.push(item);
     
      // schedule_timing_search7.timing_inf1.push(item);
       
      // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    
     // console.log(item1,"=",bus_search1.bus_name,item);
    
    
     ks.push(item);
     cs.push(bus_search1);
     ds.push(bus_com)
    
        }
       
       
       else{
         //console.log("false");
       }
       
       }
    
    
    
    }
    
    
    
     // console.log(count);
    }
    















    }
  
    globalData4.items=[];
    bus_acroo_to_bustype2j.items=[];

  }
  
   }
  
  
  
    }
  
    else{
  
  
      for(const y1 of  schedule_info.boording_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:dropping_point});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
          
  for (const item of globalData4.items) {
    // console.log("item:",item);
    
    if(item.Bus.length>1){
      for (const Bus of item.Bus){
    //console.log("Bus1:",Bus);
    
    
      const bus_search= await busbooking.Bus.findById(Bus);
     //console.log(bus_search.bus_name);
     
     
     bus_result = await processResultb(bus_search.bus_name,bus_type);
     console.log("bus_result:",bus_result);
     
     if(bus_result == undefined){
     
     }
     
     else{
      let k1=0
     for(let i=0;i< bus_acroo_to_bustype2j.items.length;i++)
     { 
     if(bus_result === bus_acroo_to_bustype2j.items[i]){
     
    k1=1
     
      
     }
    }
    if(k1 ==0){
    
      bus_acroo_to_bustype2j.items.push(bus_result);
    
    }
     
     
     }
     
      }
    
    }
    
    else{
    
    
    
    const bus_search= await busbooking.Bus.findById(item.Bus);
    //console.log(bus_search.bus_name);
    
    
    bus_result = await processResultb(bus_search.bus_name,bus_type);
    console.log("bus_result:",bus_result);
    
    if(bus_result == undefined){
    
    }
    
    else{
    let k1=0
    for(let i=0;i< bus_acroo_to_bustype2j.items.length;i++)
    { 
    if(bus_result === bus_acroo_to_bustype2j.items[i]){
    
    k1=1
    
    
    }
    }
    if(k1 ==0){
    
    bus_acroo_to_bustype2j.items.push(bus_result);
    
    }
    
    
    }
    
    
    }
    
    
    
    
    }
    
    for (const item of globalData4.items) {

      //res.send(item);
      //console.log(item)   //  from here tommrorow
      var count=0;
    
    
      if(item.Bus.length>1){
      for (const item5 of item.Bus) {
    //console.log("item5:",item5,item,item.Bus.length);
    count++;
      //  console.log("item5:",item5);
    const bus_search1= await busbooking.Bus.findById(item5);
    const bus_com=await busbooking.Bus_company.findById(bus_search1.Bus_company);
     // console.log(bus_search1);
      
      
      for (const item1 of  bus_acroo_to_bustype2j.items) {
      
       //console.log(item1);
      
      
       if(item1 === bus_search1.bus_name){
      
      //  schedule_timing_search4.timing_inf1.push(item);
    
     // schedule_timing_search7.timing_inf1.push(item);
      
     // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    
    
     ks.push(item);
     cs.push(bus_search1);
     ds.push(bus_com)
    
    
    //console.log(item1,"=",bus_search1.bus_name,item);
    
    
       }
      
      
      else{
       // console.log("false");
      }
      
      }
    }
      
      
      
      }
    
    
    else{
    
    
      const bus_search1= await busbooking.Bus.findById(item.Bus);
      const bus_com=await busbooking.Bus_company.findById(bus_search1.Bus_company);
      // console.log(bus_search1);
       
       
       for (const item1 of  bus_acroo_to_bustype2j.items) {
       
        //console.log(item1);
       
       
        if(item1 === bus_search1.bus_name){
       
       //  schedule_timing_search4.timing_inf1.push(item);
     
      // schedule_timing_search7.timing_inf1.push(item);
       
      // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
    
     // console.log(item1,"=",bus_search1.bus_name,item);
    
     ks.push(item);
     cs.push(bus_search1);
     ds.push(bus_com)
    
        }
       
       
       else{
         //console.log("false");
       }
       
       }
    
    
    
    }
    
    
    
     // console.log(count);
    }










          }
        
          globalData4.items=[];

          bus_acroo_to_bustype2j.items=[]
        }
        
        }
      
      
      
  
  res.send({ks,cs,ds});
  ks=[];
  cs=[];
  ds=[];
  
  
  
  
  
        console.log("the result of bus type and boording point",kp,cp,boordi_droppi.x);
  
  
    }
  
   
  
  
  
  
  
  
  )























/* bus  searching by bus  type and   drooping point  */








/* bus searching  by bus types and  bus operator*/


let bus_acroo_to_bustype4a={
  items:[]
}
let kb=[];
let cb=[];
let db=[];

router.post('/bus_search_by_bustype_and_buscompany',async(req,res)=>{


  const{starting_point,destination_point,bus_operator,bus_type}=req.body;
  
  //console.log(starting_point,destination_point,schedule_date,bus_type);
  
  
  
  
  const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_search.timing_schedule;
  
  for (const item of search_time) {
    const result = await processResult4(item);
  
   
  globalData.items.push(result);
  }
  
  //console.log("from bus search by bus type:",globalData.items);
  
  for (const item of globalData.items) {
   if(item!==null){
    for (const Bus of item.Bus){
  //console.log("Bus1:",Bus);
  
  
    const bus_search= await busbooking.Bus.findById(Bus);
   //console.log(bus_search.bus_name);
   
   
   bus_result = await processResult5(bus_search.bus_name,bus_type);
   //console.log("bus_result:",bus_result);
   
   if(bus_result == undefined){
   
   }
   
   else{
    let k1=0
   for(let i=0;i< bus_acroo_to_bustype4a.items.length;i++)
   { 
   if(bus_result === bus_acroo_to_bustype4a.items[i]){
   
  k1=1
   
  
   }
  }
  if(k1 ==0){
  
    bus_acroo_to_bustype4a.items.push(bus_result);
  
  }
   
   
   }
   
    }
  }
}
  
  
  
  
  //console.log(bus_acroo_to_bustype.items);
  
 
  //res.send(schedule_timing_search1);
  //console.log(globalData.items);
  
  //console.log(schedule_timing_search1);
  
  
  
  
  for (const item of globalData.items) {
    
    //res.send(item);
    //console.log(item)   //  from here tommrorow
    var count=0;
  if(item!==null){
  
    if(item.Bus.length>1){
    for (const item5 of item.Bus) {
  //console.log("item5:",item5,item,item.Bus.length);
  count++;
    //  console.log("item5:",item5);
  const bus_search1= await busbooking.Bus.findById(item5);
    
   // console.log(bus_search1);
    
    
    for (const item1 of   bus_acroo_to_bustype4a.items) {
    
     //console.log(item1);
    
    
     if(item1 === bus_search1.bus_name){
    
    //  schedule_timing_search4.timing_inf1.push(item);
  
   // schedule_timing_search7.timing_inf1.push(item);
    
   // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);

  bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 // d1.push(bus_com2);
  //searching of exsistence of company accroding to    bus
  //console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
  for (const bus_company of bus_operator){



    if(bus_company === bus_com2.company_name)
    {
    console.log(bus_company, "===", bus_com2.company_name)
   
    kb.push(item);
    cb.push(bus_search1);
    db.push(bus_com2);
    }
    



  }
   



  
     }
    
    
    else{
     // console.log("false");
    }
    
    }
  }
    
    
    
    }
  
  
  else{
  
  
    const bus_search1= await busbooking.Bus.findById(item.Bus);
    
    // console.log(bus_search1);
     
     
     for (const item1 of  bus_acroo_to_bustype4a.items) {
     
      //console.log(item1);
     
     
      if(item1=== bus_search1.bus_name){
     
     //  schedule_timing_search4.timing_inf1.push(item);
   
    // schedule_timing_search7.timing_inf1.push(item);
     
    // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  
   // console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
    
  
   bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);

    
  


    
  for (const bus_company of bus_operator){



    if(bus_company === bus_com2.company_name)
    {
    console.log(bus_company, "===",bus_com2.company_name)
    //"item"
    kb.push(item);
    cb.push(bus_search1);
    db.push(bus_com2);
    }
    



  }
  
  
  
  
  
  
  
  
  }
     
     
     else{
       //console.log("false");
     }
     
     }
  
  
  
  }
  
}
  
    console.log(count);
  }
  globalData.items=[]
  bus_acroo_to_bustype4a.items=[];
/*
  
  schedule_timing_search7.combine.push(k1);
  schedule_timing_search7.combine.push(c1);
  schedule_timing_search7.combine.push(d1);
  
  for (let i = 0; i < k1.length; i++) {
   
  
    console.log(i,":",k1[i],c1[i],d1[i]);
  }
  
  
  
  
  //console.log("k:",schedule_timing_search7.combine[0][0]);
  //method of access of  array and its subarray
  //schedule_timing_search6.combine[0] is k array
  
    //schedule_timing_search6.combine[1] is c array
  
      //schedule_timing_search6.combine[2] is d array
  
  
      //if you want to access to 0 th element of k array 
  //then  schedule_timing_search6.combine[0][0]
  
      //if you want to access to 0 th element of c array 
  //then  schedule_timing_search6.combine[1][0]
  
  
  
      //if you want to access to 0 th element of d array 
  //then  schedule_timing_search6.combine[2][0]
  
  
  
  
    //res.send(schedule_timing_search4);
    
    
    
    
    
    */
    console.log("final search result of filteration of bus types and  bus operator:",k2,c2);
    
  
  
res.json({kb,cb,db});
  kb=[];
  cb=[];
  db=[];
  
  })


/* bus searching  by bus types and  bus operator*/







let combine_result_of_facilities_and_bus_type={

x:[]


}
let km=[];
let cm=[];
let dm=[];

let bus_acroo_to_bustype9j={

  items:[]
}
let bus_acroo_to_bustype10j={

  items:[]
}

/* bus searching  by bus types and  bus facilities*/

router.post('/bus_search_by_bustype_and_facilities',async(req,res)=>{


  const{starting_point,destination_point,bus_facilities,bus_type}=req.body;
  
  //console.log(starting_point,destination_point,schedule_date,bus_type);
  
  
  
  
  const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_search.timing_schedule;
  
  for (const item of search_time) {
    const result = await processResult4(item);
  
   
  globalData.items.push(result);
  }
  
  //console.log("from bus search by bus type:",globalData.items);
  
  for (const item of globalData.items) {
   if(item !== null){
    for (const Bus of item.Bus){
  //console.log("Bus1:",Bus);
  
  
    const bus_search= await busbooking.Bus.findById(Bus);
   //console.log(bus_search.bus_name);
   
   
   bus_result = await processResult5(bus_search.bus_name,bus_type);
   //console.log("bus_result:",bus_result);
   
   if(bus_result == undefined){
   
   }
   
   else{
    let k1=0
   for(let i=0;i< bus_acroo_to_bustype9j.items.length;i++)
   { 
   if(bus_result === bus_acroo_to_bustype9j.items[i]){
   
  k1=1
   
    
   }
  }
  if(k1 ==0){
  
    bus_acroo_to_bustype9j.items.push(bus_result);
  
  }
   
   
   }
   
    }
  }
  }
  
  
  
  
  
  //console.log(bus_acroo_to_bustype.items);
  
  //res.send(schedule_timing_search1);
  //console.log(globalData.items);
  
  //console.log(schedule_timing_search1);
  
  
  
  
  for (const item of globalData.items) {
    
    //res.send(item);
    //console.log(item)   //  from here tommrorow
    var count=0;
  
 if(item!==null){ 
    if(item.Bus.length>1){
    for (const item5 of item.Bus) {
  //console.log("item5:",item5,item,item.Bus.length);
  count++;
    //  console.log("item5:",item5);
  const bus_search1= await busbooking.Bus.findById(item5);
    
   // console.log(bus_search1);
    
    
    for (const item1 of   bus_acroo_to_bustype9j.items) {
    
     //console.log(item1);
    
    
     if(item1 === bus_search1.bus_name){
    
    //  schedule_timing_search4.timing_inf1.push(item);
  
   // schedule_timing_search7.timing_inf1.push(item);
    
   // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  
  k1.push(item);
  c1.push(bus_search1);
  bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
  d1.push(bus_com2);
  
  //console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
  
     }
    
    
    else{
     // console.log("false");
    }
    
    }
  }
    
    
    
    }
  
  
  else{
  
  
    const bus_search1= await busbooking.Bus.findById(item.Bus);
    
    // console.log(bus_search1);
     
     
     for (const item1 of  bus_acroo_to_bustype9j.items) {
     
      //console.log(item1);
     
     
      if(item1 === bus_search1.bus_name){
     
     //  schedule_timing_search4.timing_inf1.push(item);
   
    // schedule_timing_search7.timing_inf1.push(item);
     
    // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  
   // console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
    
   k1.push(item);
   c1.push(bus_search1);
   bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
   d1.push(bus_com2);
      }
     
     
     else{
       //console.log("false");
     }
     
     }
  
  
  
  }
  
}
  
   
  }
  

    globalData.items=[]
    
  bus_acroo_to_bustype9j.items=[];

    
for (const item of k1) {
 if(item!==null){
  if(item.Bus.legth>0){
  for (const Bus of item.Bus){
console.log("Bus1:",Bus);


  const bus_search= await busbooking.Bus.findById(Bus);
 //console.log(bus_search.bus_name);
 
 
 bus_result = await processResult9(bus_search.bus_name,bus_facilities);
// console.log("bus_result:",bus_result);
 
 if(bus_result == undefined){
 
 }
 
 else{
  let k3=0
 for(let i=0;i< bus_acroo_to_bustype10j.items.length;i++)
 { 
 if(bus_result === bus_acroo_to_bustype10j.items[i]){
 
k3=1
 
  
 }
}
if(k3 ==0){

  bus_acroo_to_bustype10j.items.push(bus_result);

}
 
 
 }
 
  }
}
}
}
  
  





for (const item of k1) {
  
  //res.send(item);
  //console.log(item)   //  from here tommrorow
  var count=0;


  if(item.Bus.length>1){
  for (const item5 of item.Bus) {
//console.log("item5:",item5,item,item.Bus.length);
count++;
  //  console.log("item5:",item5);
const bus_search1= await busbooking.Bus.findById(item5);
  
 // console.log(bus_search1);
  
  
  for (const item1 of  bus_acroo_to_bustype10j.items) {
  
   //console.log(item1);
  
  
   if(item1 === bus_search1.bus_name){
  
  //  schedule_timing_search4.timing_inf1.push(item);

 // schedule_timing_search5.timing_inf1.push(item);
  
 // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);

km.push(item);
cm.push(bus_search1);
bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
dm.push(bus_com2);

//console.log(item1.bus_name,"=",bus_search1.bus_name,"avialablein ",schedule_timing_search3.bus_inf);


   }
  
  
  else{
   // console.log("false");
  }
  
  }
}
  
  
  
  }


else{


  const bus_search1= await busbooking.Bus.findById(item.Bus);
  
  // console.log(bus_search1);
   
   
   for (const item1 of  bus_acroo_to_bustype10j.items) {
   
    //console.log(item1);
   
   
    if(item1 === bus_search1.bus_name){
   
   //  schedule_timing_search4.timing_inf1.push(item);
 
  // schedule_timing_search5.timing_inf1.push(item);
   
  // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);

 // console.log(item1.bus_name,"=",bus_search1.bus_name);

  
 km.push(item);
 cm.push(bus_search1);
 bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 dm.push(bus_com2);
    }
   
   
   else{
     //console.log("false");
   }
   
   }



}

bus_acroo_to_bustype10j.items=[]
k1=[];
c1=[];
d1=[];
//  console.log(count);
}

//console.log(k,c,d);
/*
for(i=0;k.length>i;i++){

console.log(i,":",k[i],i,":",c[i],d[i]);


}*/
/*
combine_result_of_facilities_and_bus_type.x.push(k);

combine_result_of_facilities_and_bus_type.x.push(c);

combine_result_of_facilities_and_bus_type.x.push(d);

//  main result of  facilities  and bus types*/
  res.json({km,cm,dm});
  km=[];
  cm=[];
  dm=[];
  
  })



/* bus searching  by bus types and  bus facilities*/




/* bus searching  by  boording_point  and  bus operator*/



let result_of_bus_operator_and_boording_point={


  x:[]

}
let kh=[];
let ch=[];
let dh=[];
router.post('/search_by_only_boording_points_and_busoperator',async(req,res)=>{

 const{starting_point,destination_point,boording_point,bus_operator}=req.body;
 
 console.log(starting_point,boording_point,destination_point);
 
 
 
 const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
 
 
 console.log(schedule_info.boording_point,schedule_info.dropping_point);
 
 boordi_droppi.x.push(schedule_info.boording_point);
 boordi_droppi.x.push(schedule_info.dropping_point)
 
 console.log(boordi_droppi);
 
 
  if(boording_point.length>1){
 
  for(const x1 of boording_point){
 
 
   //console.log("x1:",x1);
   for(const y1 of  schedule_info.dropping_point){
 const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x1,destination_point:y1});
 
 
 if(schedule_info2 !== null){
 
 
 
 //console.log(schedule_search.timing_schedule);
 
 var search_time=schedule_info2.timing_schedule;
 if(search_time !== undefined){
 for (const item of search_time) {
   const result = await processResult8(item);
 
 //console.log(result);
 globalData4.items.push(result);
 }
 
 }
 
     for(const item of globalData4.items){
 
 //console.log("item:",item);
 
 if(item.Bus.length>1){
 
    for( const bus of item.Bus){
 
 const bus_info= await busbooking.Bus
 findById(bus);
 
 
 h1.push(item);
 j1.push(bus_info);
 
    }
 
 
 }
 
 
 else{
 
   const bus_info= await busbooking.Bus.findById(item.Bus);
 
   h1.push(item);
   j1.push(bus_info);
 
 }
 
 
 
     }
   }
 
   globalData4.items=[];
 }
 
  }
 
 
 
   }
 
   else{
 
 
     for(const y1 of  schedule_info.dropping_point){
       const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:y1});
       
       
       if(schedule_info2 !== null){
       
       
       
       //console.log(schedule_search.timing_schedule);
       
       var search_time=schedule_info2.timing_schedule;
       if(search_time !== undefined){
       for (const item of search_time) {
         const result = await processResult8(item);
       
       //console.log(result);
       globalData4.items.push(result);
       }
       
       }
       
           for(const item of globalData4.items){
       
       //console.log("item:",item);
       
       if(item.Bus.length>1){
       
          for( const bus of item.Bus){
       
       const bus_info= await busbooking.Bus
       findById(bus);
       
       
       h1.push(item);
     //  j1.push(bus_info);
       
          }
       
       
       }
       
       
       else{
       
         const bus_info= await busbooking.Bus.findById(item.Bus);
       
         h1.push(item);
      //   j1.push(bus_info);
       
       }
       
       
       
           }
         }
       
         globalData4.items=[];
       }
       
       }
     
     
     
       for (const item of h1) {
         // console.log(item.Bus);


          if(item.Bus.length>1){
           for (const item5 of item.Bus) {
         //console.log("item5:",item5,item,item.Bus.length);
         count++;
           //  console.log("item5:",item5);
         const bus_search1= await busbooking.Bus.findById(item5);

  //.log(bus_search1);

  for (const bus_company of bus_operator)
        {

//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);




if(bus_company === bus_search1_bus_company.company_name)
{
console.log(bus_company, "===", bus_search1_bus_company.company_name)
//"item"
   /* combo.items1.push(item);
    combo.items2.push(bus_search1);*/


    kh.push(item);
ch.push(bus_search1);
dh.push(bus_search1_bus_company)


}

      



           }
   }
 }

else{
 const bus_search1= await busbooking.Bus.findById(item.Bus);

 //.log(bus_search1);

 for (const bus_company of bus_operator)
       {

//console.log(bus_company);
// console.log(bus_search1);
/*let m;
bus_search1.Bus_company.map(ele=>{ m=ele});
console.log(m);*/




bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);




if(bus_company === bus_search1_bus_company.company_name)
{
console.log(bus_company, "===", bus_search1_bus_company.company_name)
//"item"
kh.push(item);
ch.push(bus_search1);
dh.push(bus_search1_bus_company)
}

     



          }

}




}



h1=[];


/*
 
 
result_of_bus_operator_and_boording_point.x.push(k2);
result_of_bus_operator_and_boording_point.x.push(c2);
 
 // final result of that 
       console.log(k2,c2,boordi_droppi.x);
 
 for(i=0;k2.length>i;i++){

      console.log(i,":",k2[i],i,":",c2[i]);


 }
   */
 res.json({kh,ch,dh});
  kh=[];
  ch=[];
  dh=[];
 //then start  searches basis on   h1 which contain item 


   
}



 
 
 
 
 
 )



/* bus searching  by  boording_point  and  bus operator*/





/* bus searching  by  boording_point  and  bus facilities*/



let   result_of_combo={

  x:[]
 }
 bus_acroo_to_bustype1n={
  items:[]
 }
let kd=[];
let cd=[];
let dd=[];
router.post('/search_by_only_boording_points_and_busfacilities',async(req,res)=>{

const{starting_point,destination_point,boording_point,bus_facilities}=req.body;

console.log(starting_point,boording_point,destination_point);



const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});


console.log(schedule_info.boording_point,schedule_info.dropping_point);

boordi_droppi.x.push(schedule_info.boording_point);
boordi_droppi.x.push(schedule_info.dropping_point)

console.log(boordi_droppi);


 if(boording_point.length>1){

 for(const x1 of boording_point){


  //console.log("x1:",x1);
  for(const y1 of  schedule_info.dropping_point){
const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x1,destination_point:y1});


if(schedule_info2 !== null){



//console.log(schedule_search.timing_schedule);

var search_time=schedule_info2.timing_schedule;
if(search_time !== undefined){
for (const item of search_time) {
  const result = await processResult8(item);

//console.log(result);
globalData4.items.push(result);
}

}

    for(const item of globalData4.items){

//console.log("item:",item);

if(item.Bus.length>1){

   for( const bus of item.Bus){

const bus_info= await busbooking.Bus
findById(bus);


h1.push(item);
j1.push(bus_info);

   }


}


else{

  const bus_info= await busbooking.Bus.findById(item.Bus);

  h1.push(item);
  j1.push(bus_info);

}



    }
  }

  globalData4.items=[];
}

 }



  }

  else{


    for(const y1 of  schedule_info.dropping_point){
      const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:y1});
      
      
      if(schedule_info2 !== null){
      
      
      
      //console.log(schedule_search.timing_schedule);
      
      var search_time=schedule_info2.timing_schedule;
      if(search_time !== undefined){
      for (const item of search_time) {
        const result = await processResult8(item);
      
      //console.log(result);
      globalData4.items.push(result);
      }
      
      }
      
          for(const item of globalData4.items){
      
      //console.log("item:",item);
      
      if(item.Bus.length>1){
      
         for( const bus of item.Bus){
      
      const bus_info= await busbooking.Bus
      findById(bus);
      
      
      h1.push(item);
      j1.push(bus_info);
      
         }
      
      
      }
      
      
      else{
      
        const bus_info= await busbooking.Bus.findById(item.Bus);
      
        h1.push(item);
        j1.push(bus_info);
      
      }
      
      
      
          }
        }
      
        globalData4.items=[];
      }
      
      }
    
    
    
    


      for (const item of h1) {
   
        for (const Bus of item.Bus){
      console.log("Bus1:",Bus);
      
      
        const bus_search= await busbooking.Bus.findById(Bus);
       //console.log(bus_search.bus_name);
       
       
       bus_result = await processResult9(bus_search.bus_name,bus_facilities);
      // console.log("bus_result:",bus_result);
       
       if(bus_result == undefined){
       
       }
       
       else{
        let k1=0
       for(let i=0;i< bus_acroo_to_bustype1n.items.length;i++)
       { 
       if(bus_result === bus_acroo_to_bustype1n.items[i]){
       
      k1=1
       
        
       }
      }
      if(k1 ==0){
      
        bus_acroo_to_bustype1n.items.push(bus_result);
      
      }
       
       
       }
       
        }
      }




       
    
    for (const item of h1) {
    
      //res.send(item);
      //console.log(item)   //  from here tommrorow
      var count=0;
    
    
      if(item.Bus.length>1){
      for (const item5 of item.Bus) {
    //console.log("item5:",item5,item,item.Bus.length);
    count++;
      //  console.log("item5:",item5);
    const bus_search1= await busbooking.Bus.findById(item5);
      
     // console.log(bus_search1);
      
      
      for (const item1 of  bus_acroo_to_bustype1n.items) {
      
       //console.log(item1);
      
      
       if(item1 === bus_search1.bus_name){
      
      //  schedule_timing_search4.timing_inf1.push(item);
    
     // schedule_timing_search5.timing_inf1.push(item);
      
     // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);
    
    kd.push(item);
    cd.push(bus_search1);
    bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
    dd.push(bus_com2);
    
    //console.log(item1.bus_name,"=",bus_search1.bus_name,"avialablein ",schedule_timing_search3.bus_inf);
    
    
       }
      
      
      else{
       // console.log("false");
      }
      
      }
    }
      
      
      
      }
    
    
    else{
    
    
      const bus_search1= await busbooking.Bus.findById(item.Bus);
      
      // console.log(bus_search1);
       
       
       for (const item1 of   bus_acroo_to_bustype1n.items) {
       
        //console.log(item1);
       
       
        if(item1 === bus_search1.bus_name){
       
       //  schedule_timing_search4.timing_inf1.push(item);
     
      // schedule_timing_search5.timing_inf1.push(item);
       
      // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);
    
     // console.log(item1.bus_name,"=",bus_search1.bus_name);
    
      
     kd.push(item);
     cd.push(bus_search1);
     bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
     dd.push(bus_com2);
        }
       
       
       else{
         //console.log("false");
       }
       
       }
    
    
    
    }
    
    
    
    //  console.log(count);
    }



    bus_acroo_to_bustype1n.items=[];
    h1=[];
res.json({kd,cd,dd});
kd=[];
cd=[];
dd=[];
/*
for(i=0; k.length>i;i++){

  console.log(i,":",k[i],":",c[i]);

}




result_of_combo.x.push(k);

result_of_combo.x.push(c);

 

res.send(result_of_combo.x);



*/


      //console.log(h1,j1,boordi_droppi.x);


  }

 






);




/* bus searching  by  boording_point  and  bus facilities*/



/* bus searching  by  boording_point  and  bus facilities*/
let k2b=[];
let c2b=[];
let d2b=[];

router.post('/search_by_only_dropping_points_and_busoperator',async(req,res)=>{

  const{starting_point,destination_point,dropping_point,bus_operator}=req.body;
  
  console.log(starting_point,dropping_point,destination_point);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  
  
   if(dropping_point.length>1){
  
   for(const x1 of dropping_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.boording_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:x1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus
  findById(bus);
  
  
  h1.push(item);
  j1.push(bus_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
    h1.push(item);
    j1.push(bus_info);
  
  }
  
  
  
      }
    }
  
    globalData4.items=[];
  }
  
   }
  
  
  
    }
  
    else{
  
  
      for(const y1 of  schedule_info.boording_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:dropping_point});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
            for(const item of globalData4.items){
        
        //console.log("item:",item);
        
        if(item.Bus.length>1){
        
           for( const bus of item.Bus){
        
        const bus_info= await busbooking.Bus
        findById(bus);
        
        
        h1.push(item);
      //  j1.push(bus_info);
        
           }
        
        
        }
        
        
        else{
        
          const bus_info= await busbooking.Bus.findById(item.Bus);
        
          h1.push(item);
       //   j1.push(bus_info);
        
        }
        
        
        
            }
          }
        
          globalData4.items=[];
        }
        
        }
      
      
      
        for (const item of h1) {
          // console.log(item.Bus);
 
 
           if(item.Bus.length>1){
            for (const item5 of item.Bus) {
          //console.log("item5:",item5,item,item.Bus.length);
          count++;
            //  console.log("item5:",item5);
          const bus_search1= await busbooking.Bus.findById(item5);
 
   //.log(bus_search1);
 
   for (const bus_company of bus_operator)
         {
 
 //console.log(bus_company);
 // console.log(bus_search1);
 /*let m;
 bus_search1.Bus_company.map(ele=>{ m=ele});
 console.log(m);*/
 
 
 
 
 bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 
 
 
 
 if(bus_company === bus_search1_bus_company.company_name)
 {
 console.log(bus_company, "===", bus_search1_bus_company.company_name)
 //"item"
    /* combo.items1.push(item);
     combo.items2.push(bus_search1);*/
 
 
     k2b.push(item);
 c2b.push(bus_search1);
 d2b.push( bus_search1_bus_company)
 
 
 }
 
       
 
 
 
            }
    }
  }
 
 else{
  const bus_search1= await busbooking.Bus.findById(item.Bus);
 
  //.log(bus_search1);
 
  for (const bus_company of bus_operator)
        {
 
 //console.log(bus_company);
 // console.log(bus_search1);
 /*let m;
 bus_search1.Bus_company.map(ele=>{ m=ele});
 console.log(m);*/
 
 
 
 
 bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 
 
 
 
 if(bus_company === bus_search1_bus_company.company_name)
 {
 console.log(bus_company, "===", bus_search1_bus_company.company_name)
 //"item"
 
 k2b.push(item);
 c2b.push(bus_search1);
 d2b.push( bus_search1_bus_company)
 
 }
 
      
 
 
 
           }
 
 }
 
 
 
 
 }
 
 
 
 
 
 h1=[];
 
  /*
  
 result_of_bus_operator_and_boording_point.x.push(k2);
 result_of_bus_operator_and_boording_point.x.push(c2);*/
  
  // final result of that 
        console.log(k2,c2,boordi_droppi.x);
  
  for(i=0;k2.length>i;i++){
 
       console.log(i,":",k2[i],i,":",c2[i]);
 
 
  }
    
  //res.send(result_of_bus_operator_and_boording_point.x)
   
  //then start  searches basis on   h1 which contain item 
 
 res.json({k2b,c2b,d2b});
 
 k2b=[];
 c2b=[];
 d2b=[];
 }
 
 
 
  
  
  
  
  
  )




/* bus searching  by  boording_point  and  bus facilities*/


/*search by dropping_points_and_busfacilities */


router.post('/search_by_only_dropping_points_and_busfacilities',async(req,res)=>{

  const{starting_point,dropping_point,destination_point,bus_facilities}=req.body;
  
  console.log(starting_point,dropping_point,destination_point,bus_facilities);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  
  
   if(dropping_point.length>1){
  
   for(const x1 of dropping_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.boording_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:x1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus
  findById(bus);
  
  
  h1.push(item);
  j1.push(bus_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
    h1.push(item);
    j1.push(bus_info);
  
  }
  
  
  
      }
    }
  
    globalData4.items=[];
  }
  
   }
  
  
  
    }
  
    else{
  
  
      for(const y1 of  schedule_info.boording_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:dropping_point});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
            for(const item of globalData4.items){
        
        //console.log("item:",item);
        
        if(item.Bus.length>1){
        
           for( const bus of item.Bus){
        
        const bus_info= await busbooking.Bus
        findById(bus);
        
        
        h1.push(item);
        j1.push(bus_info);
        
           }
        
        
        }
        
        
        else{
        
          const bus_info= await busbooking.Bus.findById(item.Bus);
        
          h1.push(item);
          j1.push(bus_info);
        
        }
        
        
        
            }
          }
        
          globalData4.items=[];
        }
        
        }
      
      
      
      
  
  
        for (const item of h1) {
     
          for (const Bus of item.Bus){
        console.log("Bus1:",Bus);
        
        
          const bus_search= await busbooking.Bus.findById(Bus);
         //console.log(bus_search.bus_name);
         
         
         bus_result = await processResult9(bus_search.bus_name,bus_facilities);
        // console.log("bus_result:",bus_result);
         
         if(bus_result == undefined){
         
         }
         
         else{
          let k1=0
         for(let i=0;i< bus_acroo_to_bustype1.items.length;i++)
         { 
         if(bus_result === bus_acroo_to_bustype1.items[i]){
         
        k1=1
         
          
         }
        }
        if(k1 ==0){
        
          bus_acroo_to_bustype1.items.push(bus_result);
        
        }
         
         
         }
         
          }
        }
  
  
  
  
         
      
      for (const item of h1) {
      
        //res.send(item);
        //console.log(item)   //  from here tommrorow
        var count=0;
      
      
        if(item.Bus.length>1){
        for (const item5 of item.Bus) {
      //console.log("item5:",item5,item,item.Bus.length);
      count++;
        //  console.log("item5:",item5);
      const bus_search1= await busbooking.Bus.findById(item5);
        
       // console.log(bus_search1);
        
        
        for (const item1 of  bus_acroo_to_bustype1.items) {
        
         //console.log(item1);
        
        
         if(item1 === bus_search1.bus_name){
        
        //  schedule_timing_search4.timing_inf1.push(item);
      
       // schedule_timing_search5.timing_inf1.push(item);
        
       // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);
      
      k.push(item);
      c.push(bus_search1);
      bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
      d.push(bus_com2);
      
      //console.log(item1.bus_name,"=",bus_search1.bus_name,"avialablein ",schedule_timing_search3.bus_inf);
      
      
         }
        
        
        else{
         // console.log("false");
        }
        
        }
      }
        
        
        
        }
      
      
      else{
      
      
        const bus_search1= await busbooking.Bus.findById(item.Bus);
        
        // console.log(bus_search1);
         
         
         for (const item1 of   bus_acroo_to_bustype1.items) {
         
          //console.log(item1);
         
         
          if(item1 === bus_search1.bus_name){
         
         //  schedule_timing_search4.timing_inf1.push(item);
       
        // schedule_timing_search5.timing_inf1.push(item);
         
        // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);
      
       // console.log(item1.bus_name,"=",bus_search1.bus_name);
      
        
       k.push(item);
       c.push(bus_search1);
       bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
       d.push(bus_com2);
          }
         
         
         else{
           //console.log("false");
         }
         
         }
      
      
      
      }
      
      
      
      //  console.log(count);
      }
  
  
  
  
  
  for(i=0; k.length>i;i++){
  
    console.log(i,":",k[i],":",c[i]);
  
  }
  
  
  
  
  result_of_combo.x.push(k);
  
  result_of_combo.x.push(c);
  
   
  
  res.send(result_of_combo.x);
  
  
  
  
  
  
        //console.log(h1,j1,boordi_droppi.x);
  
  
    }
  
   
  
  
  
  
  
  
  );
  




/*search by dropping_points_and_busfacilities */




/*bus search by busfaciolities and bus operator*/






router.post('/bus_search_by_busfacilities_and_buscompany',async(req,res)=>{


  const{starting_point,destination_point,bus_operator,bus_facilities}=req.body;
  
  console.log(starting_point,destination_point,bus_operator,bus_facilities);
  
  
  
  
  const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_search.timing_schedule;
  
  for (const item of search_time) {
    const result = await processResult4(item);
  
   
  globalData.items.push(result);
  }
  
  //console.log("from bus search by bus type:",globalData.items);
  
  for (const item of globalData.items) {
   if(item!==null){
    for (const Bus of item.Bus){
  //console.log("Bus1:",Bus);
  
  
    const bus_search= await busbooking.Bus.findById(Bus);
   //console.log(bus_search.bus_name);
   
   
   bus_result = await processResult9(bus_search.bus_name,bus_facilities);
   //console.log("bus_result:",bus_result);
   
   if(bus_result == undefined){
   
   }
   
   else{
    let k1=0
   for(let i=0;i< bus_acroo_to_bustype.items.length;i++)
   { 
   if(bus_result === bus_acroo_to_bustype.items[i]){
   
  k1=1
   
    
   }
  }
  if(k1 ==0){
  
    bus_acroo_to_bustype.items.push(bus_result);
  
  }
   
   
   }
   
    }
  }
}
  
  
  
  
  //console.log(bus_acroo_to_bustype.items);
  
 
  //res.send(schedule_timing_search1);
  //console.log(globalData.items);
  
  //console.log(schedule_timing_search1);
  
  
  
  
  for (const item of globalData.items) {
    
    //res.send(item);
    //console.log(item)   //  from here tommrorow
    var count=0;
  if(item!==null){
  
    if(item.Bus.length>1){
    for (const item5 of item.Bus) {
  //console.log("item5:",item5,item,item.Bus.length);
  count++;
    //  console.log("item5:",item5);
  const bus_search1= await busbooking.Bus.findById(item5);
    
   // console.log(bus_search1);
    
    
    for (const item1 of   bus_acroo_to_bustype.items) {
    
     //console.log(item1);
    
    
     if(item1 === bus_search1.bus_name){
    
    //  schedule_timing_search4.timing_inf1.push(item);
  
   // schedule_timing_search7.timing_inf1.push(item);
    
   // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);

  bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 // d1.push(bus_com2);
  //searching of exsistence of company accroding to    bus
  //console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
  for (const bus_company of bus_operator){



    if(bus_company === bus_com2.company_name)
    {
    console.log(bus_company, "===", bus_com2.company_name)
   
    k2.push(item);
    c2.push(bus_search1);
    }
    



  }
   



  
     }
    
    
    else{
     // console.log("false");
    }
    
    }
  }
    
    
    
    }
  
  
  else{
  
  
    const bus_search1= await busbooking.Bus.findById(item.Bus);
    
    // console.log(bus_search1);
     
     
     for (const item1 of bus_acroo_to_bustype.items) {
     
      //console.log(item1);
     
     
      if(item1 === bus_search1.bus_name){
     
     //  schedule_timing_search4.timing_inf1.push(item);
   
    // schedule_timing_search7.timing_inf1.push(item);
     
    // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  
   // console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
    
  
   bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);

    
  


    
  for (const bus_company of bus_operator){



    if(bus_company === bus_com2.company_name)
    {
    console.log(bus_company, "===", bus_com2.company_name)
    //"item"
    k2.push(item);
    c2.push(bus_search1);
    }
    



  }
  
  
  
  
  
  
  
  
  }
     
     
     else{
       //console.log("false");
     }
     
     }
  
  
  
  }
  
}
  
    console.log(count);
  }
  
  
/*
  
  schedule_timing_search7.combine.push(k1);
  schedule_timing_search7.combine.push(c1);
  schedule_timing_search7.combine.push(d1);
  
  for (let i = 0; i < k1.length; i++) {
   
  
    console.log(i,":",k1[i],c1[i],d1[i]);
  }
  
  
  
  
  //console.log("k:",schedule_timing_search7.combine[0][0]);
  //method of access of  array and its subarray
  //schedule_timing_search6.combine[0] is k array
  
    //schedule_timing_search6.combine[1] is c array
  
      //schedule_timing_search6.combine[2] is d array
  
  
      //if you want to access to 0 th element of k array 
  //then  schedule_timing_search6.combine[0][0]
  
      //if you want to access to 0 th element of c array 
  //then  schedule_timing_search6.combine[1][0]
  
  
  
      //if you want to access to 0 th element of d array 
  //then  schedule_timing_search6.combine[2][0]
  
  
  
  
    //res.send(schedule_timing_search4);
    
    
    
    
    
    */
    console.log("final search result of filteration of bus types and  bus operator:",k2,c2);
    
  
  

  
  
  })


/*bus search by busfaciolities and bus operator*/










/*bus search by bus_deprature  time and bus type and  boording point*/








/*bus search by bus_deprature  time and bus type and  boording point*/






/*bus_search_by_bustype_and_boording_point_and_bus_deprature_time*/
let combo_result={


  x:[]
}


router.post('/bus_search_by_bustype_and_boording_point_and_bus_deprature_time',async(req,res)=>{

  const{starting_time,deprature_time,starting_point,boording_point,destination_point,bus_type}=req.body;
  
  console.log(starting_point,boording_point,destination_point,bus_type);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  
  
   if(boording_point.length>1){
  
   for(const x1 of boording_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.dropping_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x1,destination_point:y1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus
  findById(bus);
  
  
  h1.push(item);
  j1.push(bus_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
    h1.push(item);
    j1.push(bus_info);
  
  }
  
  
  
      }
    }
  
    globalData4.items=[];
  }
  
   }
  
  
  
    }
  
    else{
  
  
      for(const y1 of  schedule_info.dropping_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:y1});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
            for(const item of globalData4.items){
        
        //console.log("item:",item);
        
        if(item.Bus.length>1){
        
           for( const bus of item.Bus){
        
        const bus_info= await busbooking.Bus
        findById(bus);
        
        
        h1.push(item);
      //  j1.push(bus_info);
        
           }
        
        
        }
        
        
        else{
        
          const bus_info= await busbooking.Bus.findById(item.Bus);
        
          h1.push(item);
        //  j1.push(bus_info);
        
        }
        
        
        
            }
          }
        
          globalData4.items=[];
        }
        
        }
      
        for (const item of h1) {
     
          for (const Bus of item.Bus){
        //console.log("Bus1:",Bus);
        
        
          const bus_search= await busbooking.Bus.findById(Bus);
         //console.log(bus_search.bus_name);
         
         
         bus_result = await processResult5(bus_search.bus_name,bus_type);
         //console.log("bus_result:",bus_result);
         
         if(bus_result == undefined){
         
         }
         
         else{
          let k1=0
         for(let i=0;i< bus_acroo_to_bustype.items.length;i++)
         { 
         if(bus_result === bus_acroo_to_bustype.items[i]){
         
        k1=1
         
          
         }
        }
        if(k1 ==0){
        
          bus_acroo_to_bustype.items.push(bus_result);
        
        }
         
         
         }
         
          }
        }
    
        
        

        for (const item of h1) {
      
          //res.send(item);
          //console.log(item)   //  from here tommrorow
          var count=0;
        
        
          if(item.Bus.length>1){
          for (const item5 of item.Bus) {
        //console.log("item5:",item5,item,item.Bus.length);
        count++;
          //  console.log("item5:",item5);
        const bus_search1= await busbooking.Bus.findById(item5);
          
         // console.log(bus_search1);
          
          
          for (const item1 of    bus_acroo_to_bustype.items) {
          
           //console.log(item1);
          
          
           if(item1 === bus_search1.bus_name){
          
          //  schedule_timing_search4.timing_inf1.push(item);
        
         // schedule_timing_search7.timing_inf1.push(item);
          
         // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
        
        k1.push(item);
        c1.push(bus_search1);
        bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
        d1.push(bus_com2);
        
        //console.log(item1.bus_name,"=",bus_search1.bus_name,item);
        
        
           }
          
          
          else{
           // console.log("false");
          }
          
          }
        }
          
          
          
          }
        
        
        else{
        
        
          const bus_search1= await busbooking.Bus.findById(item.Bus);
          
          // console.log(bus_search1);
           
           
           for (const item1 of   bus_acroo_to_bustype.items) {
           
            //console.log(item1);
           
           
            if(item1 === bus_search1.bus_name){
           
           //  schedule_timing_search4.timing_inf1.push(item);
         
          // schedule_timing_search7.timing_inf1.push(item);
           
          // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
        
         // console.log(item1.bus_name,"=",bus_search1.bus_name,item);
        
          
         k1.push(item);
         c1.push(bus_search1);
         bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
         d1.push(bus_com2);
            }
           
           
           else{
             //console.log("false");
           }
           
           }
        
        
        
        }
        
        
        
          console.log(count);
        }
        
      

let p1=[];
let p2=[];
 
        for(let i=0;k1.length>i;i++){

x=k1[i].first_hour_of_starting_time_number;
console.log(x);

          

if(x>=starting_time &&  deprature_time>=x)
   

{
p1.push(k1[i]);
p2.push(c1[i]);

     }


//  console.log(i,":",,k1[i].first_hour_of_starting_time_number,":",i,c1[i]);
          
             }


for(let i=0 ;p1.length>i ;i++){
     console.log("p1:",i,p1[i],p2[i]);


}


          
  
  combo_result.x.push(p1);
  
  combo_result.x.push(p2);
  //main result   of bus deprature tiem and boording time and  bustype 
  res.send(combo_result);
  
    //   console.log(h1,j1,boordi_droppi.x);
  
  
    }
  
   
  
  
  
  
  
  
  )

/*bus_search_by_bustype_and_boording_point_and_bus_deprature_time*/ 




/*bus_search_by_bustype_and_dropping_point_and_bus_deprature_time*/ 

router.post('/bus_search_by_bustype_and_dropping_point_and_bus_deprature_time',async(req,res)=>{

  const{starting_time,deprature_time,starting_point,dropping_point,destination_point,bus_type}=req.body;
  
  console.log(starting_point,dropping_point,destination_point,bus_type);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  
  
   if(dropping_point.length>1){
  
   for(const x1 of dropping_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.boording_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:x1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus
  findById(bus);
  
  
  h1.push(item);
  j1.push(bus_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
    h1.push(item);
    j1.push(bus_info);
  
  }
  
  
  
      }
    }
  
    globalData4.items=[];
  }
  
   }
  
  
  
    }
  
    else{
  
  
      for(const y1 of  schedule_info.boording_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:y1,destination_point:dropping_point});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
            for(const item of globalData4.items){
        
        //console.log("item:",item);
        
        if(item.Bus.length>1){
        
           for( const bus of item.Bus){
        
        const bus_info= await busbooking.Bus
        findById(bus);
        
        
        h1.push(item);
      //  j1.push(bus_info);
        
           }
        
        
        }
        
        
        else{
        
          const bus_info= await busbooking.Bus.findById(item.Bus);
        
          h1.push(item);
        //  j1.push(bus_info);
        
        }
        
        
        
            }
          }
        
          globalData4.items=[];
        }
        
        }
      
        for (const item of h1) {
     
          for (const Bus of item.Bus){
        //console.log("Bus1:",Bus);
        
        
          const bus_search= await busbooking.Bus.findById(Bus);
         //console.log(bus_search.bus_name);
         
         
         bus_result = await processResult5(bus_search.bus_name,bus_type);
         //console.log("bus_result:",bus_result);
         
         if(bus_result == undefined){
         
         }
         
         else{
          let k1=0
         for(let i=0;i< bus_acroo_to_bustype.items.length;i++)
         { 
         if(bus_result === bus_acroo_to_bustype.items[i]){
         
        k1=1
         
          
         }
        }
        if(k1 ==0){
        
          bus_acroo_to_bustype.items.push(bus_result);
        
        }
         
         
         }
         
          }
        }
    
        
        

        for (const item of h1) {
      
          //res.send(item);
          //console.log(item)   //  from here tommrorow
          var count=0;
        
        
          if(item.Bus.length>1){
          for (const item5 of item.Bus) {
        //console.log("item5:",item5,item,item.Bus.length);
        count++;
          //  console.log("item5:",item5);
        const bus_search1= await busbooking.Bus.findById(item5);
          
         // console.log(bus_search1);
          
          
          for (const item1 of    bus_acroo_to_bustype.items) {
          
           //console.log(item1);
          
          
           if(item1 === bus_search1.bus_name){
          
          //  schedule_timing_search4.timing_inf1.push(item);
        
         // schedule_timing_search7.timing_inf1.push(item);
          
         // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
        
        k1.push(item);
        c1.push(bus_search1);
        bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
        d1.push(bus_com2);
        
        //console.log(item1.bus_name,"=",bus_search1.bus_name,item);
        
        
           }
          
          
          else{
           // console.log("false");
          }
          
          }
        }
          
          
          
          }
        
        
        else{
        
        
          const bus_search1= await busbooking.Bus.findById(item.Bus);
          
          // console.log(bus_search1);
           
           
           for (const item1 of   bus_acroo_to_bustype.items) {
           
            //console.log(item1);
           
           
            if(item1 === bus_search1.bus_name){
           
           //  schedule_timing_search4.timing_inf1.push(item);
         
          // schedule_timing_search7.timing_inf1.push(item);
           
          // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
        
         // console.log(item1.bus_name,"=",bus_search1.bus_name,item);
        
          
         k1.push(item);
         c1.push(bus_search1);
         bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
         d1.push(bus_com2);
            }
           
           
           else{
             //console.log("false");
           }
           
           }
        
        
        
        }
        
        
        
          console.log(count);
        }
        
      

let p1=[];
let p2=[];
 
        for(let i=0;k1.length>i;i++){

x=k1[i].first_hour_of_starting_time_number;
console.log(x);

          

if(x>=starting_time &&  deprature_time>=x)
   

{
p1.push(k1[i]);
p2.push(c1[i]);

     }


 // console.log(i,":",k1[i].first_hour_of_starting_time_number,":",i,c1[i]);
          
             }


for(let i=0 ;p1.length>i ;i++){
     console.log("p1:",i,p1[i],p2[i]);


}


          
  
  combo_result.x.push(p1);
  
  combo_result.x.push(p2);
  //main result   of bus deprature tiem and dropping time and  bustype 
  res.send(combo_result);
  
    //   console.log(h1,j1,boordi_droppi.x);
  
  
    }
  
   
  
  
  
  
  
  
  )

/*bus_search_by_bustype_and_dropping_point_and_bus_deprature_time*/ 



/*bus_search_by_bustype_and_buscompany_and_bus_deprature_time*/ 


router.post('/bus_search_by_bustype_and_buscompany_and_bus_deprature_time',async(req,res)=>{


  const{starting_time,deprature_time,starting_point,destination_point,bus_operator,bus_type}=req.body;
  
  console.log(starting_time,deprature_time,starting_point,destination_point,bus_operator,bus_type);
  
  
  
  
  const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_search.timing_schedule;
  
  for (const item of search_time) {
    const result = await processResult4(item);
  
   
  globalData.items.push(result);
  }
  
  //console.log("from bus search by bus type:",globalData.items);
  
  for (const item of globalData.items) {
   if(item!==null){
    for (const Bus of item.Bus){
  //console.log("Bus1:",Bus);
  
  
    const bus_search= await busbooking.Bus.findById(Bus);
   //console.log(bus_search.bus_name);
   
   
   bus_result = await processResult5(bus_search.bus_name,bus_type);
   //console.log("bus_result:",bus_result);
   
   if(bus_result == undefined){
   
   }
   
   else{
    let k1=0
   for(let i=0;i< bus_acroo_to_bustype.items.length;i++)
   { 
   if(bus_result === bus_acroo_to_bustype.items[i]){
   
  k1=1
   
    
   }
  }
  if(k1 ==0){
  
    bus_acroo_to_bustype.items.push(bus_result);
  
  }
   
   
   }
   
    }
  }
}
  
  
  
  
  //console.log(bus_acroo_to_bustype.items);
  
 
  //res.send(schedule_timing_search1);
  //console.log(globalData.items);
  
  //console.log(schedule_timing_search1);
  
  
  
  
  for (const item of globalData.items) {
    
    //res.send(item);
    //console.log(item)   //  from here tommrorow
    var count=0;
  if(item!==null){
  
    if(item.Bus.length>1){
    for (const item5 of item.Bus) {
  //console.log("item5:",item5,item,item.Bus.length);
  count++;
    //  console.log("item5:",item5);
  const bus_search1= await busbooking.Bus.findById(item5);
    
   // console.log(bus_search1);
    
    
    for (const item1 of   bus_acroo_to_bustype.items) {
    
     //console.log(item1);
    
    
     if(item1 === bus_search1.bus_name){
    
    //  schedule_timing_search4.timing_inf1.push(item);
  
   // schedule_timing_search7.timing_inf1.push(item);
    
   // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);

  bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 // d1.push(bus_com2);
  //searching of exsistence of company accroding to    bus
  //console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
  for (const bus_company of bus_operator){



    if(bus_company === bus_com2.company_name)
    {
    console.log(bus_company, "===", bus_com2.company_name)
   
    k2.push(item);
    c2.push(bus_search1);
    }
    



  }
   



  
     }
    
    
    else{
     // console.log("false");
    }
    
    }
  }
    
    
    
    }
  
  
  else{
  
  
    const bus_search1= await busbooking.Bus.findById(item.Bus);
    
    // console.log(bus_search1);
     
     
     for (const item1 of  bus_acroo_to_bustype.items) {
     
      //console.log(item1);
     
     
      if(item1=== bus_search1.bus_name){
     
     //  schedule_timing_search4.timing_inf1.push(item);
   
    // schedule_timing_search7.timing_inf1.push(item);
     
    // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  
   // console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
    
  
   bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);

    
  


    
  for (const bus_company of bus_operator){



    if(bus_company === bus_com2.company_name)
    {
    console.log(bus_company, "===", bus_com2.company_name)
    //"item"
    k2.push(item);
    c2.push(bus_search1);
    }
    



  }
  
  
  
  
  
  
  
  
  }
     
     
     else{
       //console.log("false");
     }
     
     }
  
  
  
  }
  
}
  
    console.log(count);
  }
  
  
let p1=[];
let p2=[];
 
        for(let i=0;k2.length>i;i++){

x=k2[i].first_hour_of_starting_time_number;
console.log(x);

          

if(x>=starting_time &&  deprature_time>=x)
   

{
p1.push(k2[i]);
p2.push(c2[i]);

     }


 // console.log(i,":",k1[i].first_hour_of_starting_time_number,":",i,c1[i]);
          
             }


for(let i=0 ;p1.length>i ;i++){
     console.log("p1:",i,p1[i],p2[i]);


}

combo_result.x.push(p1);
  
combo_result.x.push(p2);
//main result   of bus deprature tiem and bus operator and  bustype 
res.send(combo_result);

  

  
  
  })



/*bus_search_by_bustype_and_buscompany_and_bus_deprature_time*/





/*bus_search_by_bustype_and_facilities_and_bus_deprature_time*/


router.post('/bus_search_by_bustype_and_facilities_and_bus_deprature_time',async(req,res)=>{


  const{starting_time,deprature_time,starting_point,destination_point,bus_facilities,bus_type}=req.body;
  
  console.log(starting_time,deprature_time,starting_point,destination_point,bus_facilities,bus_type);
  
  
  
  
  const schedule_search= await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_search.timing_schedule;
  
  for (const item of search_time) {
    const result = await processResult4(item);
  
   
  globalData.items.push(result);
  }
  
  //console.log("from bus search by bus type:",globalData.items);
  
  for (const item of globalData.items) {
   if(item !== null){
    for (const Bus of item.Bus){
  //console.log("Bus1:",Bus);
  
  
    const bus_search= await busbooking.Bus.findById(Bus);
   //console.log(bus_search.bus_name);
   
   
   bus_result = await processResult5(bus_search.bus_name,bus_type);
   //console.log("bus_result:",bus_result);
   
   if(bus_result == undefined){
   
   }
   
   else{
    let k1=0
   for(let i=0;i< bus_acroo_to_bustype.items.length;i++)
   { 
   if(bus_result === bus_acroo_to_bustype.items[i]){
   
  k1=1
   
    
   }
  }
  if(k1 ==0){
  
    bus_acroo_to_bustype.items.push(bus_result);
  
  }
   
   
   }
   
    }
  }
  }
  
  
  
  
  
  //console.log(bus_acroo_to_bustype.items);
  
  //res.send(schedule_timing_search1);
  //console.log(globalData.items);
  
  //console.log(schedule_timing_search1);
  
  
  
  
  for (const item of globalData.items) {
    
    //res.send(item);
    //console.log(item)   //  from here tommrorow
    var count=0;
  
 if(item!==null){ 
    if(item.Bus.length>1){
    for (const item5 of item.Bus) {
  //console.log("item5:",item5,item,item.Bus.length);
  count++;
    //  console.log("item5:",item5);
  const bus_search1= await busbooking.Bus.findById(item5);
    
   // console.log(bus_search1);
    
    
    for (const item1 of   bus_acroo_to_bustype.items) {
    
     //console.log(item1);
    
    
     if(item1 === bus_search1.bus_name){
    
    //  schedule_timing_search4.timing_inf1.push(item);
  
   // schedule_timing_search7.timing_inf1.push(item);
    
   // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  
  k1.push(item);
  c1.push(bus_search1);
  bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
  d1.push(bus_com2);
  
  //console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
  
     }
    
    
    else{
     // console.log("false");
    }
    
    }
  }
    
    
    
    }
  
  
  else{
  
  
    const bus_search1= await busbooking.Bus.findById(item.Bus);
    
    // console.log(bus_search1);
     
     
     for (const item1 of  bus_acroo_to_bustype.items) {
     
      //console.log(item1);
     
     
      if(item1 === bus_search1.bus_name){
     
     //  schedule_timing_search4.timing_inf1.push(item);
   
    // schedule_timing_search7.timing_inf1.push(item);
     
    // schedule_timing_search7.bus_inf1.push(bus_search1.bus_name);
  
   // console.log(item1.bus_name,"=",bus_search1.bus_name,item);
  
    
   k1.push(item);
   c1.push(bus_search1);
   bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
   d1.push(bus_com2);
      }
     
     
     else{
       //console.log("false");
     }
     
     }
  
  
  
  }
  
}
  
   
  }
  

    
    
    

    
for (const item of k1) {
 
  for (const Bus of item.Bus){
console.log("Bus1:",Bus);


  const bus_search= await busbooking.Bus.findById(Bus);
 //console.log(bus_search.bus_name);
 
 
 bus_result = await processResult9(bus_search.bus_name,bus_facilities);
// console.log("bus_result:",bus_result);
 
 if(bus_result == undefined){
 
 }
 
 else{
  let k3=0
 for(let i=0;i< bus_acroo_to_bustype1.items.length;i++)
 { 
 if(bus_result === bus_acroo_to_bustype1.items[i]){
 
k3=1
 
  
 }
}
if(k3 ==0){

  bus_acroo_to_bustype1.items.push(bus_result);

}
 
 
 }
 
  }
}
  
  





for (const item of k1) {
  
  //res.send(item);
  //console.log(item)   //  from here tommrorow
  var count=0;


  if(item.Bus.length>1){
  for (const item5 of item.Bus) {
//console.log("item5:",item5,item,item.Bus.length);
count++;
  //  console.log("item5:",item5);
const bus_search1= await busbooking.Bus.findById(item5);
  
 // console.log(bus_search1);
  
  
  for (const item1 of  bus_acroo_to_bustype1.items) {
  
   //console.log(item1);
  
  
   if(item1 === bus_search1.bus_name){
  
  //  schedule_timing_search4.timing_inf1.push(item);

 // schedule_timing_search5.timing_inf1.push(item);
  
 // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);

k.push(item);
c.push(bus_search1);
bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
d.push(bus_com2);

//console.log(item1.bus_name,"=",bus_search1.bus_name,"avialablein ",schedule_timing_search3.bus_inf);


   }
  
  
  else{
   // console.log("false");
  }
  
  }
}
  
  
  
  }


else{


  const bus_search1= await busbooking.Bus.findById(item.Bus);
  
  // console.log(bus_search1);
   
   
   for (const item1 of  bus_acroo_to_bustype1.items) {
   
    //console.log(item1);
   
   
    if(item1 === bus_search1.bus_name){
   
   //  schedule_timing_search4.timing_inf1.push(item);
 
  // schedule_timing_search5.timing_inf1.push(item);
   
  // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);

 // console.log(item1.bus_name,"=",bus_search1.bus_name);

  
 k.push(item);
 c.push(bus_search1);
 bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 d.push(bus_com2);
    }
   
   
   else{
     //console.log("false");
   }
   
   }



}



//  console.log(count);
}

//console.log(k,c,d);

for(i=0;k.length>i;i++){

console.log(i,":",k[i],i,":",c[i],d[i]);


}


















let p1=[];
let p2=[];
 
        for(let i=0;k.length>i;i++){

x=k[i].first_hour_of_starting_time_number;
console.log(x);

          

if(x>=starting_time &&  deprature_time>=x)
   

{
p1.push(k[i]);
p2.push(c[i]);

     }


 // console.log(i,":",k1[i].first_hour_of_starting_time_number,":",i,c1[i]);
          
             }


for(let i=0 ;p1.length>i ;i++){
     console.log("p1:",i,p1[i],p2[i]);


}

combo_result.x.push(p1);
  
combo_result.x.push(p2);
//main result   of bus deprature tiem and bus operator and  bustype 
res.send(combo_result);
  
  })


/*bus_search_by_bustype_and_facilities_and_bus_deprature_time */




/*/search_by_only_boording_point_and_dropping_point_and_deprature_time*/   



router.post('/search_by_only_boording_point_and_dropping_point_and_deprature_time',async(req,res)=>{

  const{starting_time,deprature_time,starting_point,destination_point,boording_point,dropping_point}=req.body;
  
  console.log(starting_time,deprature_time,starting_point,destination_point,boording_point,dropping_point);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
 // console.log(schedule_info);
  
 // console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi2.x.push(schedule_info.boording_point);
  boordi_droppi2.x.push(schedule_info.dropping_point)
  
 // console.log(boordi_droppi2);
 // console.log(boording_point1,dropping_point1);

if( boording_point.length>1 &&   dropping_point.length === 1){

for(const x2 of boording_point1){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x2,destination_point:dropping_point});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
}
  
  
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus
  findById(bus);
  
  
  h1.push(item);
  j1.push(bus_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
    h1.push(item);
    j1.push(bus_info);
  
  }
  
  
  
      }
  
    }

    globalData4.items=[];
  }


  console.log("boording_point>1 and dropping_point==1:",h1,j1,boordi_droppi2.x);
  }



else if (boording_point.length ===1 && dropping_point.length >1)

{


  for(const x3 of dropping_point){
    const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:x3});
    
    
    
    if(schedule_info2 !== null){
    
    
    //console.log(schedule_search.timing_schedule);
    
    var search_time=schedule_info2.timing_schedule;
    if(search_time !== undefined){
    for (const item of search_time) {
      const result = await processResult8(item);
    
    //console.log(result);
    globalData4.items.push(result);
    }
  }
    
    
        for(const item of globalData4.items){
    
    //console.log("item:",item);
    
    if(item.Bus.length>1){
    
       for( const bus of item.Bus){
    
    const bus_info= await busbooking.Bus
    findById(bus);
    
    
    h1.push(item);
    j1.push(bus_info);
    
       }
    
    
    }
    
    
    else{
    
      const bus_info= await busbooking.Bus.findById(item.Bus);
    
      h1.push(item);
      j1.push(bus_info);
    
    }
    
    
    
        }

      }
globalData4.items=[];

    }


    console.log("boording_point==1 and dropping_point>1:",h1,j1,boordi_droppi2.x);
}




  else if( boording_point.length>1 && dropping_point.length>1  ){


for(const x4 of  boording_point){

  for(const x5 of  dropping_point)

{


  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x4,destination_point:x5});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
}
  
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus.
  findById(bus);
  
  
  h1.push(item);
  j1.push(bus_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
    h1.push(item);
    j1.push(bus_info);
  
  }
  
  
  
      }





















}
globalData4.items=[];
}
}


console.log("from boording_point>1 and dropping_point>1:",h4,j4,boordi_droppi2.x);


  }



  else{




    const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:dropping_point});
  
  
  if(schedule_info2 !== null){
  
  
  
    //console.log(schedule_search.timing_schedule);
    
    var search_time=schedule_info2.timing_schedule;
    if(search_time !== undefined){
    for (const item of search_time) {
      const result = await processResult8(item);
    
    //console.log(result);
    globalData4.items.push(result);
    }
    
    
  }
        for(const item of globalData4.items){
    
    //console.log("item:",item);
    
    if(item.Bus.length>1){
    
       for( const bus of item.Bus){
    
    const bus_info= await busbooking.Bus.
    findById(bus);
    
    
    h1.push(item);
    j1.push(bus_info);
    
       }
    
    
    }
    
    
    else{
    
      const bus_info= await busbooking.Bus.findById(item.Bus);
    
      h1.push(item);
      j1.push(bus_info);
    
    }
    
    
    
        }





  }
  console.log("from else part :",h1,j1,boordi_droppi2.x);

}
//console.log(h1,j1,boordi_droppi2.x);
  
  
  





let p1=[];
let p2=[];
 
        for(let i=0;h1.length>i;i++){

x=h1[i].first_hour_of_starting_time_number;
console.log(x);

          

if(x>=starting_time &&  deprature_time>=x)
   

{
p1.push(h1[i]);
p2.push(j1[i]);

     }


 // console.log(i,":",k1[i].first_hour_of_starting_time_number,":",i,c1[i]);
          
             }


for(let i=0 ;p1.length>i ;i++){
     console.log("p1:",i,p1[i],p2[i]);


}

combo_result.x.push(p1);
  
combo_result.x.push(p2);
//main result   of bus deprature tiem and bus operator and  bustype 
res.send(combo_result);
  
  
  
  });







/* /search_by_only_boording_point_and_dropping_point_and_deprature_time*/



/* search_by_only_boording_points_and_busoperator_and_bus_deprature_time*/




router.post('/search_by_only_boording_points_and_busoperator_and_bus_deprature_time',async(req,res)=>{

  const{starting_time,deprature_time,starting_point,boording_point,destination_point,bus_operator}=req.body;
  
  console.log(starting_time,deprature_time,starting_point,boording_point,destination_point,bus_operator);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  
  
   if(boording_point.length>1){
  
   for(const x1 of boording_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.dropping_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x1,destination_point:y1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus
  findById(bus);
  
  
  h1.push(item);
  j1.push(bus_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
    h1.push(item);
    j1.push(bus_info);
  
  }
  
  
  
      }
    }
  
    globalData4.items=[];
  }
  
   }
  
  
  
    }
  
    else{
  
  
      for(const y1 of  schedule_info.dropping_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:y1});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
            for(const item of globalData4.items){
        
        //console.log("item:",item);
        
        if(item.Bus.length>1){
        
           for( const bus of item.Bus){
        
        const bus_info= await busbooking.Bus
        findById(bus);
        
        
        h1.push(item);
      //  j1.push(bus_info);
        
           }
        
        
        }
        
        
        else{
        
          const bus_info= await busbooking.Bus.findById(item.Bus);
        
          h1.push(item);
       //   j1.push(bus_info);
        
        }
        
        
        
            }
          }
        
          globalData4.items=[];
        }
        
        }
      
      
      
        for (const item of h1) {
          // console.log(item.Bus);
 
 
           if(item.Bus.length>1){
            for (const item5 of item.Bus) {
          //console.log("item5:",item5,item,item.Bus.length);
          count++;
            //  console.log("item5:",item5);
          const bus_search1= await busbooking.Bus.findById(item5);
 
   //.log(bus_search1);
 
   for (const bus_company of bus_operator)
         {
 
 //console.log(bus_company);
 // console.log(bus_search1);
 /*let m;
 bus_search1.Bus_company.map(ele=>{ m=ele});
 console.log(m);*/
 
 
 
 
 bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 
 
 
 
 if(bus_company === bus_search1_bus_company.company_name)
 {
 console.log(bus_company, "===", bus_search1_bus_company.company_name)
 //"item"
    /* combo.items1.push(item);
     combo.items2.push(bus_search1);*/
 
 
     k2.push(item);
 c2.push(bus_search1);
 
 
 }
 
       
 
 
 
            }
    }
  }
 
 else{
  const bus_search1= await busbooking.Bus.findById(item.Bus);
 
  //.log(bus_search1);
 
  for (const bus_company of bus_operator)
        {
 
 //console.log(bus_company);
 // console.log(bus_search1);
 /*let m;
 bus_search1.Bus_company.map(ele=>{ m=ele});
 console.log(m);*/
 
 
 
 
 bus_search1_bus_company= await busbooking.Bus_company.findById(bus_search1.Bus_company);
 
 
 
 
 if(bus_company === bus_search1_bus_company.company_name)
 {
 console.log(bus_company, "===", bus_search1_bus_company.company_name)
 //"item"
 k2.push(item);
 c2.push(bus_search1);
 }
 
      
 
 
 
           }
 
 }
 
 
 
 
 }
 
 
 
 

 
let p1=[];
let p2=[];
 
        for(let i=0;k2.length>i;i++){

x=k2[i].first_hour_of_starting_time_number;
console.log(x);

          

if(x>=starting_time &&  deprature_time>=x)
   

{
p1.push(k2[i]);
p2.push(c2[i]);

     }


 // console.log(i,":",k1[i].first_hour_of_starting_time_number,":",i,c1[i]);
          
             }


for(let i=0 ;p1.length>i ;i++){
     console.log("p1:",i,p1[i],p2[i]);


}

combo_result.x.push(p1);
  
combo_result.x.push(p2);
//main result   of bus deprature tiem and bus operator and  bustype 
res.send(combo_result);
  
  
 
 
 
  
 
 
 
    
 }
 
 
 
  
  
  
  
  
  )





/* search_by_only_boording_points_and_busoperator_and_bus_deprature_time*/




/*search_by_only_boording_points_and_busfacilities_bus_deprature_time*/ 


router.post('/search_by_only_boording_points_and_busfacilities_bus_deprature_time',async(req,res)=>{

  const{starting_time,deprature_time,starting_point,boording_point,destination_point,bus_facilities}=req.body;
  
  console.log(starting_point,boording_point,destination_point);
  
  
  
  const schedule_info =await busbooking.schedule_bus.findOne({starting_point:starting_point,destination_point:destination_point});
  
  
  console.log(schedule_info.boording_point,schedule_info.dropping_point);
  
  boordi_droppi.x.push(schedule_info.boording_point);
  boordi_droppi.x.push(schedule_info.dropping_point)
  
  console.log(boordi_droppi);
  
  
   if(boording_point.length>1){
  
   for(const x1 of boording_point){
  
  
    //console.log("x1:",x1);
    for(const y1 of  schedule_info.dropping_point){
  const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:x1,destination_point:y1});
  
  
  if(schedule_info2 !== null){
  
  
  
  //console.log(schedule_search.timing_schedule);
  
  var search_time=schedule_info2.timing_schedule;
  if(search_time !== undefined){
  for (const item of search_time) {
    const result = await processResult8(item);
  
  //console.log(result);
  globalData4.items.push(result);
  }
  
  }
  
      for(const item of globalData4.items){
  
  //console.log("item:",item);
  
  if(item.Bus.length>1){
  
     for( const bus of item.Bus){
  
  const bus_info= await busbooking.Bus
  findById(bus);
  
  
  h1.push(item);
  j1.push(bus_info);
  
     }
  
  
  }
  
  
  else{
  
    const bus_info= await busbooking.Bus.findById(item.Bus);
  
    h1.push(item);
    j1.push(bus_info);
  
  }
  
  
  
      }
    }
  
    globalData4.items=[];
  }
  
   }
  
  
  
    }
  
    else{
  
  
      for(const y1 of  schedule_info.dropping_point){
        const schedule_info2 =await busbooking.schedule_bus.findOne({starting_point:boording_point,destination_point:y1});
        
        
        if(schedule_info2 !== null){
        
        
        
        //console.log(schedule_search.timing_schedule);
        
        var search_time=schedule_info2.timing_schedule;
        if(search_time !== undefined){
        for (const item of search_time) {
          const result = await processResult8(item);
        
        //console.log(result);
        globalData4.items.push(result);
        }
        
        }
        
            for(const item of globalData4.items){
        
        //console.log("item:",item);
        
        if(item.Bus.length>1){
        
           for( const bus of item.Bus){
        
        const bus_info= await busbooking.Bus
        findById(bus);
        
        
        h1.push(item);
        j1.push(bus_info);
        
           }
        
        
        }
        
        
        else{
        
          const bus_info= await busbooking.Bus.findById(item.Bus);
        
          h1.push(item);
          j1.push(bus_info);
        
        }
        
        
        
            }
          }
        
          globalData4.items=[];
        }
        
        }
      
      
      
      
  
  
        for (const item of h1) {
     
          for (const Bus of item.Bus){
        console.log("Bus1:",Bus);
        
        
          const bus_search= await busbooking.Bus.findById(Bus);
         //console.log(bus_search.bus_name);
         
         
         bus_result = await processResult9(bus_search.bus_name,bus_facilities);
        // console.log("bus_result:",bus_result);
         
         if(bus_result == undefined){
         
         }
         
         else{
          let k1=0
         for(let i=0;i< bus_acroo_to_bustype1.items.length;i++)
         { 
         if(bus_result === bus_acroo_to_bustype1.items[i]){
         
        k1=1
         
          
         }
        }
        if(k1 ==0){
        
          bus_acroo_to_bustype1.items.push(bus_result);
        
        }
         
         
         }
         
          }
        }
  
  
  
  
         
      
      for (const item of h1) {
      
        //res.send(item);
        //console.log(item)   //  from here tommrorow
        var count=0;
      
      
        if(item.Bus.length>1){
        for (const item5 of item.Bus) {
      //console.log("item5:",item5,item,item.Bus.length);
      count++;
        //  console.log("item5:",item5);
      const bus_search1= await busbooking.Bus.findById(item5);
        
       // console.log(bus_search1);
        
        
        for (const item1 of  bus_acroo_to_bustype1.items) {
        
         //console.log(item1);
        
        
         if(item1 === bus_search1.bus_name){
        
        //  schedule_timing_search4.timing_inf1.push(item);
      
       // schedule_timing_search5.timing_inf1.push(item);
        
       // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);
      
      k.push(item);
      c.push(bus_search1);
      bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
      d.push(bus_com2);
      
      //console.log(item1.bus_name,"=",bus_search1.bus_name,"avialablein ",schedule_timing_search3.bus_inf);
      
      
         }
        
        
        else{
         // console.log("false");
        }
        
        }
      }
        
        
        
        }
      
      
      else{
      
      
        const bus_search1= await busbooking.Bus.findById(item.Bus);
        
        // console.log(bus_search1);
         
         
         for (const item1 of   bus_acroo_to_bustype1.items) {
         
          //console.log(item1);
         
         
          if(item1 === bus_search1.bus_name){
         
         //  schedule_timing_search4.timing_inf1.push(item);
       
        // schedule_timing_search5.timing_inf1.push(item);
         
        // schedule_timing_search5.bus_inf1.push(bus_search1.bus_name);
      
       // console.log(item1.bus_name,"=",bus_search1.bus_name);
      
        
       k.push(item);
       c.push(bus_search1);
       bus_com2= await busbooking.Bus_company.findById(bus_search1.Bus_company);
       d.push(bus_com2);
          }
         
         
         else{
           //console.log("false");
         }
         
         }
      
      
      
      }
      
      
      
      //  console.log(count);
      }
  
  
  
 
let p1=[];
let p2=[];
 
        for(let i=0;k.length>i;i++){

x=k[i].first_hour_of_starting_time_number;
console.log(x);

          

if(x>=starting_time &&  deprature_time>=x)
   

{
p1.push(k[i]);
p2.push(c[i]);

     }


 // console.log(i,":",k1[i].first_hour_of_starting_time_number,":",i,c1[i]);
          
             }


for(let i=0 ;p1.length>i ;i++){
     console.log("p1:",i,p1[i],p2[i]);


}

combo_result.x.push(p1);
  
combo_result.x.push(p2);
//main result   of bus deprature tiem and bus operator and  bustype 
res.send(combo_result);
  
  
  
  
  
        //console.log(h1,j1,boordi_droppi.x);
  
  
    }
  
   
  
  
  
  
  
  
  );







/*search_by_only_boording_points_and_busfacilities_bus_deprature_time*/ 



router.post('/busseat_avilibility_update',async(req,res)=>{


const{data1,bus_name}=req.body
//console.log(bus_name,seatAvaliable);
//console.log(req.body);
//res.json(req.body);
//console.log(data1);

viewupdate=await busbooking.Bus.updateOne(
  { bus_name: bus_name},
  {
    $set: {
      seatAvaliable: data1,
    },
  }
);
  
res.json({viewupdate});


})

router.post('/bus_seat_information',async(req,res)=>{

const{bus_name}=req.body;
console.log(bus_name);

  const bus_information= await busbooking.Bus.findOne({bus_name:bus_name})


  res.json({bus_information});
})




/*bus booking system*////////////














router.post('/bus_user_register',(req,res)=>{
    

    var{name,email,phone,password,cpassword}= req.body
    
 //console.log(req.body);

//console.log(name,email,phone,work,password);
//res.json({message:req.body});

//console.log(name,email,phone,work,password,cpassword);


if(!name || !email || !phone ||  !password || !cpassword){
res.status(422).json({error :"fill  the  field properly"})
}


busbooking.user1.findOne({email:email}).then((userExist)=>{
    if(userExist){
        res.status(422).json({error :"email already exsist"});
        console.log("userexsists");
    }
 
    const saltRounds = 10

    bcrypt.hash(password,saltRounds).then(hash=>{
       // console.log("hash:",hash);
        bcrypt.hash(cpassword,saltRounds).then(hash2=>{

        

        bcrypt.compare(password,hash).then(res1=>{                               
         // console.log("hashconfirmed:",res1,password);
  password=hash;
  cpassword=hash2;

/*
  let token= jwt.sign({password},process.env.secret_key);
console.log("token:",token);
*/
          const user2= new busbooking.user1({name, email,phone,password,cpassword});


      //    //console.log(user2);
          
          var s=user2.save();
          
          //console.log(s);
          
          s.then(result=>{res.json({success:"data send sucessful"})}).catch(err=>console.log(err));
          


      }).catch(err=>console.log(err));
    })


    

      
      }) .catch(err => console.log(err));





//console.log(user2,"user2");


}).catch(err=>{console.log(err)});


});

/*
router.post('/register',(req,res)=>{

    const{name,email,phone,password,cpassword}= req.body;
    const user2= new busbooking.user1({name, email,phone,password,cpassword});
   

   // console.log(s);
    
    user2.save().then(result=>{res.send(result)}).catch(err=>{res.send(err)});
  // await user2.save();
   //res.send(user2);

    
    });
    /*
    router.post("/register",async(req,res)=>{
        const{name,email,phone,work,password,cpassword}= req.body;
const data={

name:name,email:email,phone:phone,work:work,password:password,
cpassword:cpassword

}
console.log(data);
await user.insertMany([data]);
res.json({passed :"successful"});
    })




*/


//signing 
/*

router.post('/signin',(req,res)=>{
    

console.log(req.body);

d=req.body;



res.json({d});




})
*/

router.post('/signin',async(req,res)=>{
  const { email,password}= req.body;
 try {
 

  if(!email || !password){
res.json({erorr:"plz fill data properly"})  }


const userLogin= await busbooking.user1.findOne({email:email});

//console.log(userLogin._id,"userlogin");




if(!userLogin){
    
    
   // res.json({erorr:"no data found"});
   console.log("no data found");
}

else{
  //res.json({success:"data found"})
const isMatch= await bcrypt.compare(password,userLogin.password);
//token

//let usertoken=userLogin.token

//console.log("from signin page   as a usertoken:",usertoken);
/*
res.cookie("jwtoken",usertoken,{
    expires:new Date(Date.now()+25892000000),
    httpOnly:true
});*/


//const verifytoken=jwt.verify(usertoken,process.env.secret_key);

//console.log("tokenverify:",verifytoken);


if(!isMatch){
   
  //  res.json({error:"invalid credential"});
  console.log("invalid credential");

}
else{
   
 //   res.json({messsage:"user sigin sucessfully",messsage2:"data found"});

let user_id=userLogin._id;
//console.log("login user_id:",user_id);
res.json({user_id:user_id});

}
}

 }



 










 catch(err){
console.log(err);



 }

})


router.get('/about',authenticate,(req,res)=>{

//console.log("req.rootuser:",req.rootuser);
res.json({information:req.rootuser,token:req.token})

})



router.post('/obtain_user_information',async(req,res)=>{


const {userid}=req.body;


   const userinformation=await busbooking.user1.findById(userid)
  console.log("user:",userinformation);
let username=userinformation.name

res.json({
username:username
 

})


})




router.post('/booking_reservation',async(req,res)=>{

const{

  userid,
  username,
   total_price,
card_number,
seat_count,
boording_point,
dropping_point,
seat_ids,
schedule_id,


}=req.body;


const userbooking1= new busbooking.userbooking({userid,
  username,
   total_price,
card_number,
seat_count,
boording_point,
dropping_point,
seat_ids,
schedule_id});


      //    //console.log(user2);
          
          var s=userbooking1.save();
          
          //console.log(s);
          
          s.then(result=>{res.json({success:"data send sucessful"})}).catch(err=>console.log(err));
  

})




router.get('/contact',authenticate,(req,res)=>{

 //   console.log("req.rootuser:",req.rootuser);
    res.json({information:req.rootuser,token:req.token})
    
    });


router.post('/contact',(req,res)=>{

    console.log("from contact server:",req.body);
const {name,email ,phone,message}=req.body;

    const mess= new user.message({name,email,phone,message});
    mess.save().then(result=>{console.log("result:",result)}).catch(err=>console.log(err));


  if(!result){

    res.status(400).json({erorr:" data not sended"})

  }
else{
    res.json({message:"data sended sucessfully"})
}

})







router.get('/home',authenticate,(req,res)=>{

    //   console.log("req.rootuser:",req.rootuser);
       res.json({information:req.rootuser,token:req.token})
       
       });
   

   
module.exports=router;











