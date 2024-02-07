
import React, { useState,useEffect } from 'react';
import { CiCloudSun } from "react-icons/ci";
import { FaBottleWater } from "react-icons/fa6";
import { GiDoubleStreetLights } from "react-icons/gi";
import { FaCodeMerge } from "react-icons/fa6";
import { GrTicket } from "react-icons/gr";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { MdSpatialTracking } from "react-icons/md";
import volvo  from "../images/volvo-bus.jpg";
import { FaChargingStation } from "react-icons/fa";
import { FaToiletPaper } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { LiaBedSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Filtersection = () => {


  const { info,info1,info2 ,info3,userid} = useParams();


  console.log("schedule_info:",info,info1,info2,info3);
  const [selectedFilters, setSelectedFilters] = useState({
    bus_facilities: [],
    deprature_time:[],
    busType:[],
    bus_operator:[],

    boording_point:[],
    dropping_point:[]
  });

//let volvo1="../images/volvo-bus.jpg";

  const [responseData, setResponseData] = useState({
});

const [subArrays, setSubArrays] = useState({
k1:[],
c1:[],d1:[]}
);
const [subArrays1, setSubArrays1] = useState({

  k2:[],
  c2:[],d2:[]}
 
);
const [subArrays2, setSubArrays2] = useState({


k1:[],
c1:[],
d1:[]




});
const [subArrays3, setSubArrays3] = useState({



  p1:[],
  p2:[],
  p3:[]
  


});
const [subArrays4, setSubArrays4] = useState({


  k1:[],
  c1:[],
  d1:[]


});
const [subArrays5, setSubArrays5] = useState({


  k1:[],
  c1:[],
  d1:[]


});

const [subArrays6, setSubArrays6] = useState({


  u1:[],
  u2:[],
  u3:[]


});
const [subArrays7, setSubArrays7] = useState({


  k1:[],
  c1:[],
  d1:[]


});

const [subArrays8, setSubArrays8] = useState({


  k1:[],
  c1:[],
  d1:[]


});

const [subArrays9, setSubArrays9] = useState({


  k1:[],
  c1:[],
  d1:[]


});

const [subArrays10, setSubArrays10] = useState({


  k1:[],
  c1:[],
  d1:[]


});



const [subArrays11, setSubArrays11] = useState({


  k1:[],
  c1:[],
  d1:[]


});





const [subArrays12, setSubArrays12] = useState({


  k1:[],
  c1:[],
  d1:[]


});
const [subArrays13, setSubArrays13] = useState({


  k1:[],
  c1:[],
  d1:[]


});



const [subArrays14, setSubArrays14] = useState({


  k1:[],
  c1:[],
  d1:[]


});
const [subArrays15, setSubArrays15] = useState({


  k1:[],
  c1:[],
  d1:[]


});
const [subArrays16, setSubArrays16] = useState({


  k1:[],
  c1:[],
  d1:[]


});

const [result,setresult]=useState(

{r1:[],r2:[],r3:[]}

  
)

const [result2,setresult2]=useState(

  {r1:[],r2:[],r3:[]}
  
    
  )


  const [result4,setresult4]=useState(

    {r1:[],r2:[],r3:[]}
    
      
    )
  

const [company,setcompany]=useState();
const [company1,setcompany1]=useState();
console.log(selectedFilters.deprature_time,"deprature_time")
  const handleFacilityChange1 = (starting_time) => {
    // Toggle the selected state of the facility
   const updatedFacilities = selectedFilters.deprature_time.includes(starting_time)
      ? selectedFilters.deprature_time.filter((f) => f !== starting_time)
      : [...selectedFilters.deprature_time, starting_time];

    // Update the state with the selected facilities
    setSelectedFilters({
      ...selectedFilters,
      deprature_time: updatedFacilities,
    });

    console.log("deprature:",starting_time);

  //  applyFilters();
  };
  useEffect(() => {
    

  



filter_bus_deprature_time_or_bustype_or_boording_point_or_dropping_point_or_bus_opearator_or_bus_facilities(selectedFilters.deprature_time,selectedFilters.busType,selectedFilters.boording_point,selectedFilters.dropping_point,selectedFilters.bus_operator,selectedFilters.bus_facilities);





 filter_bus_deprature_time_and_bus_type(selectedFilters.deprature_time,selectedFilters.busType);
 filter_bus_deprature_time_and_boording_point(selectedFilters.deprature_time,selectedFilters.boording_point);
 filter_bus_deprature_time_and_dropping_point(selectedFilters.deprature_time,selectedFilters.dropping_point);
 filter_bus_deprature_time_and_bus_operator(selectedFilters.deprature_time,selectedFilters.bus_operator);
 filter_bus_deprature_time_and_bus_facilities(selectedFilters.deprature_time,selectedFilters.bus_facilities);






 filter_bus_bus_type_and_boording_point(selectedFilters.busType,selectedFilters.boording_point);

 filter_bus_bus_type_and_dropping_point(selectedFilters.busType,selectedFilters.dropping_point);

 filter_bus_bus_type_and_bus_operator(selectedFilters.busType,selectedFilters.bus_operator);

 filter_bus_bus_type_and_bus_facilities(selectedFilters.busType,selectedFilters.bus_facilities);






 filter_bus_boording_point_and_dropping_point(selectedFilters.boording_point,selectedFilters.dropping_point);
 filter_bus_boording_point_and_bus_operator(selectedFilters.boording_point,selectedFilters.bus_operator);
 filter_bus_boording_point_and_bus_facilities(selectedFilters.boording_point,selectedFilters.bus_facilities);










 filter_bus_dropping_point_and_bus_operator(selectedFilters.dropping_point,selectedFilters.bus_operator);
 filter_bus_dropping_point_and_bus_facilities(selectedFilters.dropping_point,selectedFilters.bus_facilities);



 filter_bus_bus_operator_and_bus_facilities(selectedFilters.bus_operator,selectedFilters.bus_facilities);



/*

 setresult2({
  ...result2,
 r1: [],
});
setresult2({
  ...result2,
 r2: [],
});

setresult2({
  ...result2,
 r3: [],
});*/








  }, [selectedFilters.busType,selectedFilters.deprature_time,selectedFilters.bus_facilities,selectedFilters.bus_operator,selectedFilters.boording_point,selectedFilters.dropping_point]);
  useEffect(()=>{
    console.log("subarrays:",subArrays);
    console.log("subarrays1:",subArrays1);
    console.log("subarrays2:",subArrays2);
    console.log("subarrays3:",subArrays3);
    console.log("subARRAYS4",subArrays4);
    console.log("subARRAYS5",subArrays5);
    console.log("subARRAYS6",subArrays6);
    console.log("subARRAYS7",subArrays7);

    console.log("subARRAYS8",subArrays8);
    console.log("subARRAYS9",subArrays9);
    console.log("subARRAYS10",subArrays10);

    console.log("subARRAYS11",subArrays11);
    console.log("subARRAYS12",subArrays12);
    console.log("subARRAYS13",subArrays13);
    console.log("subARRAYS14",subArrays14);   console.log("subARRAYS15",subArrays15);   console.log("subARRAYS16",subArrays16);


    console.log("boor:",company);
    console.log("doorping:",company1);
  }, [subArrays,company,company1,subArrays1,subArrays2,subArrays3,subArrays4])


  useEffect(()=>{

    boording_dropping_point();


  },[])


/*
  const busOperator=async()=>{


    let s7={

starting_point:"kolkata",
destination_point:"digha",
schedule_date:"29/12/2023",


    }
  
    try{
    
    const res = await fetch('/all_buses_company_as_per_location',{
       method:"POST",
       headers:{
       
          "content-Type":"application/json"
       },
       body: JSON.stringify(s7),
    
    
    
    

    })
    
    
    
    const  data= await res.json();
    


setcompany(data);
console.log(company);   
    }
    
    catch(err)
    {
    
    
    console.log(err);
    
   // navigate('/login', {replace: true});
    
    }
    
    
  }
*/










 const  handleFacilityChange2 = (bustype)=>{

  const updatedbustype = selectedFilters.busType.includes(bustype)
      ? selectedFilters.busType.filter((f) => f !== bustype)
      : [...selectedFilters.busType, bustype];

    // Update the state with the selected facilities
    setSelectedFilters({
      ...selectedFilters,
      busType:updatedbustype,
    });

    console.log("bustype:",bustype);

   // applyFilters();



 }


 



 const  handleFacilityChange3 = (facilities)=>{
  

  
  const updatedbustype = selectedFilters.bus_facilities.includes(facilities)
      ? selectedFilters.bus_facilities.filter((f) => f !== facilities)
      : [...selectedFilters.bus_facilities, facilities];

    // Update the state with the selected facilities
    setSelectedFilters({
      ...selectedFilters,
      bus_facilities:updatedbustype,
    });

    console.log("bus_facilities:",facilities);

   // applyFilters();






}
 



 const handleFacilityChange4=(operator) =>{


  const updatedbustype = selectedFilters.bus_operator.includes(operator)
      ? selectedFilters.bus_operator.filter((f) => f !== operator)
      : [...selectedFilters.bus_operator, operator];

    // Update the state with the selected facilities
    setSelectedFilters({
      ...selectedFilters,
      bus_operator:updatedbustype,
    });

    console.log("bus_opearator:",operator);

   // applyFilters();






 }



const boording_dropping_point=async()=>{


     


       let s7={

        starting_point:info1,
        destination_point:info2,
        schedule_date:info3,
        
        
            }
          
            try{
            
            const res = await fetch('/obtain_boording_point',{
               method:"POST",
               headers:{
               
                  "content-Type":"application/json"
               },
               body: JSON.stringify(s7),
            
            
            
            
        
            })
            
            
            
            const  data= await res.json();
            
        
        
        setcompany(data);
        console.log("boording_point:",company);   
            }
            
            catch(err)
            {
            
            
            console.log(err);
            
           // navigate('/login', {replace: true});
            
            }
            











}

const  handleFacilityChange8=(boording_point)=>{


  const updatedbustype = selectedFilters.boording_point.includes(boording_point)
  ? selectedFilters.boording_point.filter((f) => f !== boording_point)
  : [...selectedFilters.boording_point, boording_point];

// Update the state with the selected facilities
setSelectedFilters({
  ...selectedFilters,
  boording_point:updatedbustype,
});

console.log("boording_point:",boording_point);

// applyFilters();





}



const  handleFacilityChange9=(dropping_point)=>{


  const updatedbustype = selectedFilters.dropping_point.includes(dropping_point)
  ? selectedFilters.dropping_point.filter((f) => f !== dropping_point)
  : [...selectedFilters.dropping_point, dropping_point];

// Update the state with the selected facilities
setSelectedFilters({
  ...selectedFilters,
  dropping_point:updatedbustype,
});

console.log(" dropping_point:", dropping_point);






}








/*  bus_search from front end side*/


let result1=[];
let result3=[];
const filter_bus_deprature_time_or_bustype_or_boording_point_or_dropping_point_or_bus_opearator_or_bus_facilities=async(deprature_time,busType,boording_point,dropping_point,bus_operator,bus_facilities)=>{

if(!(busType.length>0) && !(boording_point.length>0) && !(dropping_point.length>0) && !(bus_operator.length>0) && !(bus_facilities.length>0) && deprature_time.length>0){

      console.log("selected depreture time");


      let s1a={

        starting_point:info1,
        
        destination_point:info2,
        schedule_date:info3,
        deprature_time1:deprature_time
          }
              try{
              
                const res = await fetch('/bus_search_by_startingtime',{
                   method:"POST",
                   headers:{
                   
                      "content-Type":"application/json"
                   },
                   body: JSON.stringify(s1a),
                
                
                
                
            
                })
                
                
                
                const  data= await res.json();
                console.log("data:",data);
                setSubArrays(data);
                console.log("subarray:",subArrays);}
        
        
                catch(err)
                {
                
                console.log(err);
                
                }
        


}

else if(!(deprature_time.length>0) && !(boording_point.length>0) && !(dropping_point.length>0) && !(bus_operator.length>0) && !(bus_facilities.length>0) && busType.length>0){

  console.log("selected bus type");



  
  let s1 = {
    starting_point:info1,
        
    destination_point:info2,
    schedule_date:info3,
    bus_type: busType,
  };
  try {
    const res = await fetch('/bus_search_by_bustype', {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(s1),
    });

    const data = await res.json();
    console.log("data:", data);
    setSubArrays(data);
   // result3.push(data);
//console.log("subarray:", subArrays);

setSubArrays({
  ...subArrays,
 k1: data.k1,
 c1:data.c1,
 d1:data.d1
});

/*
setSubArrays({
  k1: data.k1 ,
  c1: data.c1 ,
  d1: data.d1 
});*/
  } catch (err) {
    console.log(err);
  }




}

else if(!(busType.length>0) && !(deprature_time.length>0) && !(dropping_point.length>0) && !(bus_operator.length>0) && !(bus_facilities.length>0) && boording_point.length>0){

  console.log("selected boording_point");
  let s8={
              
    starting_point:info1,
        
    destination_point:info2,
   
  boording_point:boording_point
  
      }
          try{
          
            const res = await fetch('/search_by_only_boording_points_of_filtersection_and_scheduled_id_of_full_sssion',{
               method:"POST",
               headers:{
               
                  "content-Type":"application/json"
               },
               body: JSON.stringify(s8),
            
            
            
            
        
            })
            
            
            
            const  data= await res.json();
         //   console.log("data:",data);
         setSubArrays(data);
            console.log("subarrays:",subArrays);
          } 
  
            catch(err)
            {
            
            console.log(err);
            
            }
  






}

 else if(!(busType.length>0) && !(boording_point.length>0) && !(deprature_time.length>0) && !(bus_operator.length>0) && !(bus_facilities.length>0) && dropping_point.length>0){

  console.log("selected dropping _point");



  let s9={
      
    starting_point:info1,
        
    destination_point:info2,

  dropping_point:dropping_point
  
      }
         try{
          
            const res = await fetch('/search_by_only_dropping_point_of_filtersection_and_scheduled_id_of_full_sssion',{
               method:"POST",
               headers:{
               
                  "content-Type":"application/json"
               },
               body: JSON.stringify(s9),
            
            
            
            
        
            })
            
            
            
            const  data= await res.json();
          // console.log("data:",data);
           setSubArrays(data);
            console.log("subarray:",subArrays);
        } 
  
            catch(err)
            {
            
            console.log(err);
            
            }


}

else if(!(busType.length>0) && !(boording_point.length>0) && !(dropping_point.length>0) && !(deprature_time.length>0) && !(bus_facilities.length>0) && bus_operator.length>0){

  console.log("selected  bus_operator");



 
  let s5={

    starting_point:info1,
        
    destination_point:info2,
    schedule_date:info3,
    bus_operator:bus_operator
      }
          try{
          
            const res = await fetch('/bus_search_by_bus_operator',{
               method:"POST",
               headers:{
               
                  "content-Type":"application/json"
               },
               body: JSON.stringify(s5),
            
            
            
            
        
            })
            
            
            
            const  data= await res.json();
            console.log("data:",data);
            setSubArrays(data);
            console.log("subarrays:",subArrays);} 
    
            catch(err)
            {
            
            console.log(err);
            
            }


}

else if(!(busType.length>0) && !(boording_point.length>0) && !(dropping_point.length>0) && !(bus_operator.length>0) && !(deprature_time.length>0) && bus_facilities.length>0){

  console.log("selected bus facilities");


  

  let s4={

    starting_point:info1,
        
    destination_point:info2,
    schedule_date:info3,
    bus_facilities:bus_facilities
      }
          try{
          
            const res = await fetch('/bus_search_by_facilities',{
               method:"POST",
               headers:{
               
                  "content-Type":"application/json"
               },
               body: JSON.stringify(s4),
            
            
            
            
        
            })
            
            
            
            const  data= await res.json();
            console.log("data:",data);
            setSubArrays(data);
            console.log("subarray:",subArrays);} 
    
            catch(err)
            {
            
            console.log(err);
            
            }





}

else{

        console.log("nothing choose");

}

}


 





 const filter_bus_deprature_time_and_bus_type=async(deprature_time,busType)=>{console.log("deprature_time,busType:",deprature_time,busType)


 let s21={

  starting_point:info1,
        
  destination_point:info2,
  schedule_date:info3,
bus_type:busType,
deprature_time1:deprature_time

    }
        try{
        
          const res = await fetch('/search_by_bus_deprature_and_bus_type',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s21),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays1({
        ...subArrays1,
       k2: data.k2,
       c2:data.c2,
       d2:data.d2
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }





}
 const filter_bus_deprature_time_and_boording_point=async(deprature_time,boording_point)=>{console.log("deprature_time,boording_point:",deprature_time,boording_point);


//" /search_by_deprature_time_and_Boordingpoint"




let s22={
  starting_point:info1,
        
  destination_point:info2,
 
boording_point:boording_point,

deprature_time1:deprature_time

    }
        try{
        
          const res = await fetch('/search_by_deprature_time_and_Boordingpoint',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s22),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays2({
        ...subArrays2,
       k1: data.p1,
       c1:data.p2,
       d1:data.p3
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }




}


const filter_bus_deprature_time_and_dropping_point=async(deprature_time,dropping_point)=>{console.log("deprature_time,dropping_point_point:",deprature_time,dropping_point)

//"/search_by_deprature_time_and_droppingingpoint"

let s23={

  starting_point:info1,
        
  destination_point:info2,

dropping_point:dropping_point,

deprature_time1:deprature_time

    }

    
        try{
        
          const res = await fetch('/search_by_deprature_time_and_droppinging__point',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s23),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays3({
        ...subArrays3,
       p1: data.l1,
       p2:data.l2,
       p3:data.l3
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }





}





 const filter_bus_deprature_time_and_bus_operator=async(deprature_time,bus_operator)=>{console.log("deprature_time,bus_operator:",deprature_time,bus_operator)


 let s24={

  starting_point:info1,
        
  destination_point:info2,

bus_operator:bus_operator,

deprature_time1:deprature_time

    }

    
        try{
        
          const res = await fetch('/search_by_bus_deprature_time_and_bus_operator',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s24),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays4({
        ...subArrays4,
       k1: data.t1,
       c1:data.t2,
       d1:data.t3
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }




}
 


const  filter_bus_deprature_time_and_bus_facilities=async(deprature_time,bus_facilities)=>{console.log("deprature_time,bus_facilities:",deprature_time,bus_facilities)



//"/search_by_deprature_time_and_Bus_facilities"




let s25={

  starting_point:info1,
        
  destination_point:info2,

bus_facilities:bus_facilities,

deprature_time1:deprature_time

    }

    
        try{
        
          const res = await fetch('/search_by_deprature_time_and_Bus_facilities',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s25),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays5({
        ...subArrays5,
       k1: data.f1,
       c1:data.f2,
       d1:data.f3
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }







}



//complete





 const filter_bus_bus_type_and_boording_point=async(busType,boording_point)=>{console.log("busType,boording_point:",busType,boording_point)


//"";




let s26={

  starting_point:info1,
        
  destination_point:info2,

  boording_point:boording_point,
bus_type:busType

    }

    
        try{
        
          const res = await fetch('/search_by_only_boording_points_and_bus_types',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s26),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays6({
        ...subArrays6,
       u1: data.kp1,
       u2:data.cp1,
       u3:data.dp1
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }




}

const  filter_bus_bus_type_and_dropping_point=async(busType,dropping_point)=>{console.log("busType,dropping_point:",busType,dropping_point)








let s27={

  starting_point:info1,
        
  destination_point:info2,
 
  dropping_point: dropping_point,
bus_type:busType

    }

    
        try{
        
          const res = await fetch('/search_by_only_dropping_points_and_bus_types',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s27),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays7({
        ...subArrays7,
       k1: data.ks,
       c1:data.cs,
       d1:data.ds
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }







}

const  filter_bus_bus_type_and_bus_operator=async(busType,bus_operator)=>{console.log("busType,bus_operator:",busType,bus_operator)




let s28={

  starting_point:info1,
        
  destination_point:info2,

  bus_operator:bus_operator,
bus_type:busType

    }

    
        try{
        
          const res = await fetch('/bus_search_by_bustype_and_buscompany',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s28),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays8({
        ...subArrays8,
       k1: data.kb,
       c1:data.cb,
       d1:data.db
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }

}

 const filter_bus_bus_type_and_bus_facilities=async(busType,bus_facilities)=>{console.log("busType,bus_facilities:",busType,bus_facilities)






let s29={

  starting_point:info1,
        
  destination_point:info2,
  
 bus_facilities:bus_facilities,
bus_type:busType

    }

    
        try{
        
          const res = await fetch('/bus_search_by_bustype_and_facilities',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s29),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays9({
        ...subArrays9,
       k1: data.km,
       c1:data.cm,
       d1:data.dm
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }













}
//complete





 const filter_bus_boording_point_and_dropping_point=async(boording_point,dropping_point)=>{console.log("boording_point,dropping_point:",boording_point,dropping_point)





let s30={

  starting_point:info1,
        
  destination_point:info2,

boording_point1:boording_point,
dropping_point1:dropping_point

    }

    
        try{
        
          const res = await fetch('/search_by_only_boording_point_and_dropping_point_of_filtersection_and_scheduled_id_of_full_sssion',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s30),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays10({
        ...subArrays10,
       k1: data.k1,
       c1:data.c1,
       d1:data.d1
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }

}









//not completete




const  filter_bus_boording_point_and_bus_operator=async(boording_point,bus_operator)=>{console.log("boording_point,bus_operator:",boording_point,bus_operator)



let s31={

  starting_point:info1,
        
  destination_point:info2,

boording_point:boording_point,
bus_operator:bus_operator

    }

    
        try{
        
          const res = await fetch('/search_by_only_boording_points_and_busoperator',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s31),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays11({
        ...subArrays11,
       k1: data.kh,
       c1:data.ch,
       d1:data.dh
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }





};




 const filter_bus_boording_point_and_bus_facilities=async(boording_point,bus_facilities)=>{console.log("boording_point,bus_facilities:",boording_point,bus_facilities)





let s32={

  starting_point:info1,
        
  destination_point:info2,

boording_point:boording_point,
bus_facilities:bus_facilities

    }

    
        try{
        
          const res = await fetch('/search_by_only_boording_points_and_busfacilities',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s32),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays12({
        ...subArrays12,
       k1: data.kd,
       c1:data.cd,
       d1:data.dd
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }


}










 const filter_bus_dropping_point_and_bus_operator=async(dropping_point,bus_operator)=>{console.log("dropping_point,bus_operator:",dropping_point,bus_operator)






let s33={

  starting_point:info1,
        
  destination_point:info2,

dropping_point:dropping_point,
bus_operator:bus_operator

    }

    
        try{
        
          const res = await fetch('/search_by_only_dropping_points_and_busoperator',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s33),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        //  console.log("data:",data);
      //  setSubArrays1(data);
      setSubArrays13({
        ...subArrays13,
       k1: data.k2b,
       c1:data.c2b,
       d1:data.d2b
      });

  


        //  console.log("subarray1:",subArrays1);
      
      } 
  
          catch(err)
          {
          
          console.log(err);
          
          }



}
const  filter_bus_dropping_point_and_bus_facilities=(dropping_point,bus_facilities)=>{console.log("dropping_point,bus_facilities:",dropping_point,bus_facilities)}




 const filter_bus_bus_operator_and_bus_facilities=(bus_operator,bus_facilities)=>{

console.log("bus_operator,bus_facilities:",bus_operator,bus_facilities)

 }

























































































let x_item1;

















 let key = 0;
 
    while (key < 8) {
    
       // console.log(key);
    

   switch(key){


        case 1:

  if(subArrays.k1.length==0){
if(subArrays1.k2.length!==0){
/*let {k2,c2,d2}=subArrays1
  setresult({
    ...result,
   r1:k2,
   r2:c2,
   r3:d2
  });*/

/*
result.r1=subArrays1.k2;
result.r2=subArrays1.c2;
result.r3=subArrays1.d2;*/


for(let i=0;subArrays1.k2.length>i;i++){
result.r1.push(subArrays1.k2[i]);
result.r2.push(subArrays1.c2[i]);
result.r3.push(subArrays1.d2[i]);



}


}

  }
else if(subArrays1.k2.length==0){

if(subArrays.k1.length !==0){
 /*let {k1,c1,d1}=subArrays
  setresult({
    ...result,
   r1:k1,
   r2:c1,
   r3:d1
  });
*/

/*
  result.r1=subArrays1.k1;
  result.r2=subArrays1.c1;
  result.r3=subArrays1.d1;*/
 // setresult(subArrays);
 if(result.r1.length>0){
  
      
  result.r1=[]
  result.r2=[]
  result.r3=[]
  /*result2.r1=[]
  result2.r2=[]
  result2.r3=[]*/

  /*setresult2({
    ...result2,
   r1: [],
  });
  setresult2({
    ...result2,
   r2: [],
  });

  setresult2({
    ...result2,
   r3: [],
  });
*/

}

/*
if(result2.r1.length>0){
  
      
  result2.r1=[]
  result2.r2=[]
  result2.r3=[]


}
*/

console.log("from elseif part of  subArrays.k1.length !==0 ");
console.log("length of subarray.k1.length",subArrays.k1.length);


if(result.r1.length==0){
for(let i=0;subArrays.k1.length>i;i++){
  result.r1.push(subArrays.k1[i]);
  result.r2.push(subArrays.c1[i]);
  result.r3.push(subArrays.d1[i]);
  
  console.log("hi");
  
  }
}



}
}

  else{







  if(subArrays.k1.length!==0  && subArrays1.k2.length!==0){

    if(result.r1.length>0){
  
      
        result.r1=[]
        result.r2=[]
        result.r3=[]
   /*  setresult2({
          ...result2,
         r1: [],
        });
        setresult2({
          ...result2,
         r2: [],
        });
   
        setresult2({
          ...result2,
         r3: [],
        });*/
   
      }


     /* if(result2.r1.length>0){
  
      
        result2.r1=[]
        result2.r2=[]
        result2.r3=[]
      
   
      }
*/







console.log("from else of  subArrays.k1.length!==0&& subArrays1.k2.length!==0 ");

   for(let i=0; subArrays.k1.length>i;i++){
      
       let x_time= subArrays.k1[i];
       let x1_bus=subArrays.c1[i];
       let c1_comp=subArrays.d1[i];
let count1=0;
   for(let j=0; subArrays1.k2.length>j;j++){

      let x2_time=subArrays1.k2[j];
      let x3_bus=subArrays1.c2[j];
      let x4_bus_company=subArrays1.d2[j];

      if(x_time._id == x2_time._id){

      if(x1_bus._id == x3_bus._id){


   if(c1_comp._id==x4_bus_company._id){
     count1=count1+1;

   }


      }

      }
   }


   let count2a=0
   if(count1>0){
 
    for(let h=0 ;result.r1.length>h;h++){
 
     let  x_r_item=result.r1[h];
     let   x_r_bus=result.r2[h];
     let  x_r_com=result.r3[h];
 
 if(x_time._id ==x_r_item._id){
 
 if(x1_bus._id == x_r_bus._id){
 
     if(c1_comp._id == x_r_com._id){
 
       count2a=count2a+1;
     }
 
 }
 
 }
 
 
    }
   if(count2a==0){
 
     
   result.r1.push(x_time);
   result.r2.push(x1_bus);
   result.r3.push(c1_comp);
 
   }
 
   }





   }



  }



  }

console.log("result>>>>>>>>>",result);


        break;

      
        case 2:


if(subArrays2.k1.length==0){

 if(subArrays3.p1.length!==0){

      for(let i=0; subArrays3.p1.length>i;i++){

    let   x_item1=subArrays3.p1[i];
    let   x_bus1=subArrays3.p2[i];
    let   x_bus_com=subArrays3.p3[i];
let count1=0;
      for(let j=0; result.r1.length>j ;j++){

        let   x_item2=result.r1[j];
        let   x_bus2=result.r2[j];
        let    x_bus_com2=result.r3[j];


  if(x_item1._id == x_item2._id){

    if(x_bus1._id == x_bus2._id){

 if(x_bus_com._id == x_bus_com2._id){

count1=count1+1;
 

 }

    }


  }

    

      }

if(count1==0){


result.r1.push(x_item1);
result.r2.push(x_bus1);
result.r3.push(x_bus_com)

}


      }
  

 }

}





else if(subArrays3.p1.length==0){

  if(subArrays2.k1.length!==0){
 
       for(let i=0; subArrays2.k1.length>i;i++){
 
        let   x_item1=subArrays2.k1[i];
        let    x_bus1=subArrays2.c1[i];
    let   x_bus_com=subArrays2.d1[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let    x_item2=result.r1[j];
        let  x_bus2=result.r2[j];
        let  x_bus_com2=result.r3[j];
 
 
   if(x_item1._id == x_item2._id){
 
     if(x_bus1._id == x_bus2._id){
 
  if(x_bus_com == x_bus_com2._id){
 
 count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 
 result.r1.push(x_item1);
 result.r2.push(x_bus1);
 result.r3.push(x_bus_com)
 
 }
 
 
       }
   
 
  }
 
 }
 
else{

if(subArrays3.p1.length!==0  &&  subArrays2.k1.length !==0){

   for(let i=0;subArrays2.k1.length>i;i++){
    let  x_item_1a=subArrays2.k1[i];
    let      x_bus_1a=subArrays2.c1[i];
    let   x_bus_com_1a=subArrays2.d1[i];
    let count2=0;

for(let j=0;subArrays3.p1.length>j;j++){

  let  x_item_2a=subArrays3.p1[j];
  let    x_bus_2a =subArrays3.p2[j];
  let  x_bus_com_2a=subArrays3.p3[j];


if(x_item_1a._id ==x_item_2a._id){

if(x_bus_1a._id == x_bus_2a._id){

    if(x_bus_com_1a._id ==x_bus_com_2a._id){

      count2=count2+1;


    }


}
   
}



}
let count2a=0
  if(count2>0){

   for(let h=0 ;result.r1.length>h;h++){

    let  x_r_item=result.r1[h];
    let   x_r_bus=result.r2[h];
    let  x_r_com=result.r3[h];

if(x_item_1a._id ==x_r_item._id){

if(x_bus_1a._id == x_r_bus._id){

    if(x_bus_com_1a._id == x_r_com._id){

      count2a=count2a+1;
    }

}

}


   }
  if(count2a==0){

     result.r1.push(x_item_1a);
     result.r2.push(x_bus_1a);
     result.r3.push(x_bus_com_1a);

  }

  }
   


   }


}

}








        break;
        case 3:

//subarray4 and subarrays5
if(subArrays4.k1.length==0){

  if(subArrays5.k1.length!==0){
 
       for(let i=0; subArrays5.k1.length>i;i++){
 
        let    x_item1b=subArrays5.k1[i];
        let     x_bus1b=subArrays5.c1[i];
        let     x_bus_com1b=subArrays5.d1[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let   x_item2b=result.r1[j];
        let   x_bus2b=result.r2[j];
        let  x_bus_com2b=result.r3[j];
 
 
   if(x_item1b._id == x_item2b._id){
 
     if(x_bus1b._id == x_bus2b._id){
 
  if(x_bus_com1b._id == x_bus_com2b._id){
 
     count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 console.log("inserting from subarrays 5  :","x_item1b:",x_item1b,"x_bus1b:",x_bus1b,"x_bus_com1b:",x_bus_com1b)
 result.r1.push(x_item1b);
 result.r2.push(x_bus1b);
 result.r3.push(x_bus_com1b)
 
 }
 
 
       }
   
 
  }
 
 }



 else if(subArrays5.k1.length==0){

  if(subArrays4.k1.length!==0){
 
       for(let i=0; subArrays4.k1.length>i;i++){
 
        let      x_item1b=subArrays4.k1[i];
        let    x_bus1b=subArrays4.c1[i];
        let     x_bus_com1b=subArrays4.d1[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let   x_item2b=result.r1[j];
        let   x_bus2b=result.r2[j];
        let   x_bus_com2b=result.r3[j];
 
 
   if(x_item1b._id == x_item2b._id){
 
     if(x_bus1b._id == x_bus2b._id){
 
  if(x_bus_com1b._id == x_bus_com2b._id){
 
 count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 
 result.r1.push(x_item1b);
 result.r2.push(x_bus1b);
 result.r3.push(x_bus_com1b)
 
 }
 
 
       }
   
 
  }
 
 }


 
 else{

  if(subArrays4.k1.length!==0  &&  subArrays5.k1.length !==0){
  
     for(let i=0;subArrays4.k1.length>i;i++){
      let     x_item_1c=subArrays4.k1[i];
      let      x_bus_1c=subArrays4.c1[i];
      let    x_bus_com_1c=subArrays4.d1[i];
    let   count2=0;
  
  for(let j=0;subArrays5.k1.length>j;j++){
  
    let x_item_2c=subArrays5.k1[j];
    let  x_bus_2c =subArrays5.c1[j];
    let  x_bus_com_2c=subArrays5.d1[j];
  
  
  if(x_item_1c._id ==x_item_2c._id){
  
  if(x_bus_1c._id == x_bus_2c._id){
  
      if(x_bus_com_1c._id ==x_bus_com_2c._id){
  
         count2=count2+1;
  
  
      }
  
  
  }
     
  }
  
  
  
  }
  let count2a=0
    if(count2>0){
  
     for(let h=0 ;result.r1.length>h;h++){
  
      let   x_r_item=result.r1[h];
      let     x_r_bus=result.r2[h];
      let     x_r_com=result.r3[h];
  
  if(x_item_1c._id ==x_r_item._id){
  
  if(x_bus_1c._id == x_r_bus._id){
  
      if(x_bus_com_1c._id == x_r_com._id){
  
          count2a=count2a+1;
      }
  
  }
  
  }
  
  
     }
    if(count2a==0){
  
       result.r1.push(x_item_1c);
       result.r2.push(x_bus_1c);
       result.r3.push(x_bus_com_1c);
  
    }
  
    }
     
  
  
     }
  
  
  }
  
  }
  






        break;
        case 4:

//6,7

if(subArrays6.u1.length==0){

  if(subArrays7.k1.length!==0){
 
       for(let i=0; subArrays7.k1.length>i;i++){
 
        let  x_item1d=subArrays7.k1[i];
        let    x_bus1d=subArrays7.c1[i];
        let   x_bus_com1d=subArrays7.d1[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let  x_item2d=result.r1[j];
        let   x_bus2d=result.r2[j];
        let   x_bus_com2d=result.r3[j];
 
 
   if(x_item1d._id == x_item2d._id){
 
     if(x_bus1d._id == x_bus2d._id){
 
  if(x_bus_com1d._id == x_bus_com2d._id){
 
     count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 
 result.r1.push(x_item1d);
 result.r2.push(x_bus1d);
 result.r3.push(x_bus_com1d)
 
 }
 
 
       }
   
 
  }
 
 }



 else if(subArrays7.k1.length==0){

  if(subArrays6.u1.length!==0){
 
       for(let i=0; subArrays6.u1.length>i;i++){
 
        let    x_item1d=subArrays6.u1[i];
        let     x_bus1d=subArrays6.u2[i];
        let     x_bus_com1d=subArrays6.u3[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let  x_item2d=result.r1[j];
        let  x_bus2d=result.r2[j];
        let   x_bus_com2d=result.r3[j];
 
 
   if(x_item1d._id == x_item2d._id){
 
     if(x_bus1d._id == x_bus2d._id){
 
  if(x_bus_com1d._id == x_bus_com2d._id){
 
    count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 
 result.r1.push(x_item1d);
 result.r2.push(x_bus1d);
 result.r3.push(x_bus_com1d)
 
 }
 
 
       }
   
 
  }
 
 }


 
 else{

  if(subArrays6.u1.length!==0  &&  subArrays7.k1.length !==0){
  
     for(let i=0;subArrays6.u1.length>i;i++){
      let      x_item_1e=subArrays6.u1[i];
      let      x_bus_1e=subArrays6.u2[i];
      let     x_bus_com_1e=subArrays6.u3[i];
      let    count2=0;
  
  for(let j=0;subArrays7.k1.length>j;j++){
  
    let  x_item_2e=subArrays7.k1[j];
    let  x_bus_2e =subArrays7.c1[j];
    let x_bus_com_2e=subArrays7.d1[j];
  
  
  if(x_item_1e._id ==x_item_2e._id){
  
  if(x_bus_1e._id == x_bus_2e._id){
  
      if(x_bus_com_1e._id ==x_bus_com_2e._id){
  
         count2=count2+1;
  
  
      }
  
  
  }
     
  }
  
  
  
  }
  let count2a=0
    if(count2>0){
  
     for(let h=0 ;result.r1.length>h;h++){
  
      let    x_r_item=result.r1[h];
      let     x_r_bus=result.r2[h];
      let    x_r_com=result.r3[h];
  
  if(x_item_1e._id ==x_r_item._id){
  
  if(x_bus_1e._id == x_r_bus._id){
  
      if(x_bus_com_1e._id == x_r_com._id){
  
    count2a=count2a+1;
      }
  
  }
  
  }
  
  
     }
    if(count2a==0){
  
       result.r1.push(x_item_1e);
       result.r2.push(x_bus_1e);
       result.r3.push(x_bus_com_1e);
  
    }
  
    }
     
  
  
     }
  
  
  }
  
  }
  





        break;
        case 5:



        if(subArrays8.k1.length==0){

          if(subArrays9.k1.length!==0){
         
               for(let i=0; subArrays9.k1.length>i;i++){
         
                let         x_item1f=subArrays9.k1[i];
                let          x_bus1f=subArrays9.c1[i];
                let          x_bus_com1f=subArrays9.d1[i];
         let count1=0;
               for(let j=0; result.r1.length>j ;j++){
         
                let       x_item2f=result.r1[j];
                let       x_bus2f=result.r2[j];
                let      x_bus_com2f=result.r3[j];
         
         
           if(x_item1f._id == x_item2f._id){
         
             if(x_bus1f._id == x_bus2f._id){
         
          if(x_bus_com1f._id == x_bus_com2f._id){
         
              count1=count1+1;
          
         
          }
         
             }
         
         
           }
         
             
         
               }
         
         if(count1==0){
          console.log("inserting from subarrays 9  :","x_item1f:",x_item1f,"x_bus1f:",x_bus1f,"x_bus_com1f:",x_bus_com1f)
         
         result.r1.push(x_item1f);
         result.r2.push(x_bus1f);
         result.r3.push(x_bus_com1f)
         
         }
         
         
               }
           
         
          }
         
         }
        
        
        
         else if(subArrays9.k1.length==0){
        
          if(subArrays8.k1.length!==0){
         
               for(let i=0; subArrays8.k1.length>i;i++){
         
                let     x_item1f=subArrays8.k1[i];
                let    x_bus1f=subArrays8.c1[i];
                let     x_bus_com1f=subArrays8.d1[i];
         let count1=0;
               for(let j=0; result.r1.length>j ;j++){
         
                let     x_item2f=result.r1[j];
                let      x_bus2f=result.r2[j];
                let     x_bus_com2f=result.r3[j];
         
         
           if(x_item1f._id == x_item2f._id){
         
             if(x_bus1f._id == x_bus2f._id){
         
          if(x_bus_com1f._id == x_bus_com2f._id){
         
             count1=count1+1;
          
         
          }
         
             }
         
         
           }
         
             
         
               }
         
         if(count1==0){
         
         
         result.r1.push(x_item1f);
         result.r2.push(x_bus1f);
         result.r3.push(x_bus_com1f)
         
         }
         
         
               }
           
         
          }
         
         }
        
        
         
         else{
        
          if(subArrays8.k1.length!==0  &&  subArrays9.k1.length !==0){
          
             for(let i=0;subArrays8.k1.length>i;i++){
              let          x_item_1g=subArrays8.k1[i];
              let          x_bus_1g=subArrays8.c1[i];
              let       x_bus_com_1g=subArrays8.d1[i];
              let      count2=0;
          
          for(let j=0;subArrays9.k1.length>j;j++){
          
            let  x_item_2g=subArrays9.k1[j];
            let  x_bus_2g =subArrays9.c1[j];
            let   x_bus_com_2g=subArrays9.d1[j];
          
          
          if(x_item_1g._id ==x_item_2g._id){
          
          if(x_bus_1g._id== x_bus_2g._id){
          
              if(x_bus_com_1g._id ==x_bus_com_2g._id){
          
               count2=count2+1;
          
          
              }
          
          
          }
             
          }
          
          
          
          }
          let count2a=0
            if(count2>0){
          
             for(let h=0 ;result.r1.length>h;h++){
          
              let    x_r_item=result.r1[h];
              let   x_r_bus=result.r2[h];
              let    x_r_com=result.r3[h];
          
          if(x_item_1g._id ==x_r_item._id){
          
          if(x_bus_1g._id == x_r_bus){
          
              if(x_bus_com_1g == x_r_com){
          
                  count2a=count2a+1;
              }
          
          }
          
          }
          
          
             }
            if(count2a==0){
          
               result.r1.push(x_item_1g);
               result.r2.push(x_bus_1g);
               result.r3.push(x_bus_com_1g);
          
            }
          
            }
             
          
          
             }
          
          
          }
          
          }
          
        
        
      













        break;
        case 6:
//10,11
        if(subArrays10.k1.length==0){

          if(subArrays11.k1.length!==0){
         
               for(let i=0; subArrays11.k1.length>i;i++){
         
                let      x_item1h=subArrays11.k1[i];
                let      x_bus1h=subArrays11.c1[i];
                let     x_bus_com1h=subArrays11.d1[i];
         let count1=0;
               for(let j=0; result.r1.length>j ;j++){
         
                let    x_item2h=result.r1[j];
                let    x_bus2h=result.r2[j];
                let   x_bus_com2h=result.r3[j];
         
         
           if(x_item1h._id === x_item2h._id){
         
             if(x_bus1h._id === x_bus2h._id){
         
          if(x_bus_com1h._id === x_bus_com2h._id){
         
            count1=count1+1;
            console.log("from 10 11 subarrays inside core if loop:",x_item1h._id, "==" ,x_item2h._id)
         
          }
         
             }
         
         
           }
         
             
         
               }
         
         if(count1==0){
         
         
         result.r1.push(x_item1h);
         result.r2.push(x_bus1h);
         result.r3.push(x_bus_com1h)
         
         }
         
         
               }
           
         
          }
         
         }
        
        
        
         else if(subArrays11.k1.length==0){
        
          if(subArrays10.k1.length!==0){
         
               for(let i=0; subArrays10.k1.length>i;i++){
         
                let       x_item1h=subArrays10.k1[i];
                let       x_bus1h=subArrays10.c1[i];
                let       x_bus_com1h=subArrays10.d1[i];
         let count1=0;
               for(let j=0; result.r1.length>j ;j++){
         
                let   x_item2h=result.r1[j]
                let    x_bus2h=result.r2[j];
                let     x_bus_com2h=result.r3[j];
       //  console.log("from 10 11 subarrays",x_bus_com1h._id, "==" ,x_bus_com2h._id)
         
           if(x_item1h._id === x_item2h._id){
         
             if(x_bus1h._id === x_bus2h._id){
         
          if(x_bus_com1h._id === x_bus_com2h._id){
            console.log("from 10 11 subarrays inside core if loop:",x_item1h._id, "==" ,x_item2h._id)
              count1=count1+1;
          
         
          }
         
             }
         
         
           }
         
             
         
               }
         
         if(count1==0){
         
         
         result.r1.push(x_item1h);
         result.r2.push(x_bus1h);
         result.r3.push(x_bus_com1h);
         
         }
         
         
               }
           
         
          }
         
         }
        
        
         
         else{
        
          if(subArrays10.k1.length!==0  &&  subArrays11.k1.length !==0){
          
             for(let i=0;subArrays10.k1.length>i;i++){
              let         x_item_1i=subArrays10.k1[i];
              let         x_bus_1i=subArrays10.c1[i];
              let       x_bus_com_1i=subArrays10.d1[i];
              let       count2=0;
          
          for(let j=0;subArrays11.k1.length>j;j++){
          
            let   x_item_2i=subArrays11.k1[j];
            let    x_bus_2i =subArrays11.c1[j];
            let    x_bus_com_2i=subArrays11.d1[j];
          
          
          if(x_item_1i._id === x_item_2i._id){
          
          if(x_bus_1i._id === x_bus_2i._id){
          
              if(x_bus_com_1i._id === x_bus_com_2i._id){
          
                console.log("from 10 11 subarrays inside core if loop:",x_item_1i._id, "==" ,x_item_2i._id)
                 count2=count2+1;
          
          
              }
          
          
          }
             
          }
          
          
          
          }
          let count2a=0
            if(count2>0){
          
             for(let h=0 ;result.r1.length>h;h++){
          
              let       x_r_item=result.r1[h];
              let      x_r_bus=result.r2[h];
              let      x_r_com=result.r3[h];
          
          if(x_item_1i._id ===x_r_item._id){
          
          if(x_bus_1i._id === x_r_bus._id){
          
              if(x_bus_com_1i._id === x_r_com._id){
          
                  count2a=count2a+1;
              }
          
          }
          
          }
          
          
             }
            if(count2a==0){
          
               result.r1.push(x_item_1i);
               result.r2.push(x_bus_1i);
               result.r3.push(x_bus_com_1i);
          
            }
          
            }
             
          
          
             }
          
          
          }
          
          }
          
        




        break;
        case 7:
//12,13 j,k




if(subArrays12.k1.length==0){

  if(subArrays13.k1.length!==0){
 
       for(let i=0; subArrays13.k1.length>i;i++){
 
        let      x_item1j=subArrays13.k1[i];
        let      x_bus1j=subArrays13.c1[i];
        let      x_bus_com1j=subArrays13.d1[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let    x_item2j=result.r1[j];
        let  x_bus2j=result.r2[j];
        let   x_bus_com2j=result.r3[j];
 
 
   if(x_item1j._id == x_item2j._id){
 
     if(x_bus1j._id == x_bus2j._id){
 
  if(x_bus_com1j._id == x_bus_com2j._id){
 
    count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 
 result.r1.push(x_item1j);
 result.r2.push(x_bus1j);
 result.r3.push(x_bus_com1j)
 
 }
 
 
       }
   
 
  }
 
 }



 else if(subArrays13.k1.length==0){

  if(subArrays12.k1.length!==0){
 
       for(let i=0; subArrays12.k1.length>i;i++){
 
        let    x_item1j=subArrays12.k1[i];
        let    x_bus1j=subArrays12.c1[i];
        let    x_bus_com1j=subArrays12.d1[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let   x_item2j=result.r1[j]
        let   x_bus2j=result.r2[j];
        let   x_bus_com2j=result.r3[j];
 
 
   if(x_item1j._id == x_item2j._id){
 
     if(x_bus1j._id == x_bus2j._id){
 
  if(x_bus_com1j._id == x_bus_com2j._id){
 
 count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 
 result.r1.push(x_item1j);
 result.r2.push(x_bus1j);
 result.r3.push(x_bus_com1j);
 
 }
 
 
       }
   
 
  }
 
 }


 
 else{

  if(subArrays12.k1.length!==0  &&  subArrays13.k1.length !==0){
  
     for(let i=0;subArrays12.k1.length>i;i++){
      let       x_item_1k=subArrays12.k1[i];
      let       x_bus_1k=subArrays12.c1[i];
      let    x_bus_com_1k=subArrays12.d1[i];
      let    count2=0;
  
  for(let j=0;subArrays13.k1.length>j;j++){
  
    let x_item_2k=subArrays13.k1[j];
    let x_bus_2k =subArrays13.c1[j];
    let  x_bus_com_2k=subArrays13.d1[j];
  
  
  if(x_item_1k._id ==x_item_2k._id){
  
  if(x_bus_1k._id == x_bus_2k._id){
  
      if(x_bus_com_1k._id ==x_bus_com_2k._id){
  
         count2=count2+1;
  
  
      }
  
  
  }
     
  }
  
  
  
  }
  let count2a=0
    if(count2>0){
  
     for(let h=0 ;result.r1.length>h;h++){
  
      let  x_r_item=result.r1[h];
      let  x_r_bus=result.r2[h];
      let  x_r_com=result.r3[h];
  
  if(x_item_1k._id ==x_r_item._id){
  
  if(x_bus_1k._id == x_r_bus._id){
  
      if(x_bus_com_1k._id == x_r_com._id){
  
         count2a=count2a+1;
      }
  
  }
  
  }
  
  
     }
    if(count2a==0){
  
       result.r1.push(x_item_1k);
       result.r2.push(x_bus_1k);
       result.r3.push(x_bus_com_1k);
  
    }
  
    }
     
  
  
     }
  
  
  }
  
  }
  





















        break;
        case 8:



//14 ,15 l,m





if(subArrays14.k1.length==0){

  if(subArrays15.k1.length!==0){
 
       for(let i=0; subArrays15.k1.length>i;i++){
 
        let      x_item1l=subArrays15.k1[i];
        let     x_bus1l=subArrays15.c1[i];
        let     x_bus_com1l=subArrays15.d1[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let  x_item2l=result.r1[j];
        let  x_bus2l=result.r2[j];
        let   x_bus_com2l=result.r3[j];
 
 
   if(x_item1l._id == x_item2l._id){
 
     if(x_bus1l._id == x_bus2l._id){
 
  if(x_bus_com1l._id == x_bus_com2l._id){
 
      count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 
 result.r1.push(x_item1l);
 result.r2.push(x_bus1l);
 result.r3.push(x_bus_com1l)
 
 }
 
 
       }
   
 
  }
 
 }



 else if(subArrays15.k1.length==0){

  if(subArrays14.k1.length!==0){
 
       for(let i=0; subArrays14.k1.length>i;i++){
 
        let    x_item1l=subArrays14.k1[i];
        let    x_bus1l=subArrays14.c1[i];
        let   x_bus_com1l=subArrays14.d1[i];
 let count1=0;
       for(let j=0; result.r1.length>j ;j++){
 
        let  x_item2l=result.r1[j]
        let  x_bus2l=result.r2[j];
        let   x_bus_com2l=result.r3[j];
 
 
   if(x_item1l._id == x_item2l._id){
 
     if(x_bus1l._id == x_bus2l._id){
 
  if(x_bus_com1l._id == x_bus_com2l._id){
 
   count1=count1+1;
  
 
  }
 
     }
 
 
   }
 
     
 
       }
 
 if(count1==0){
 
 
 result.r1.push(x_item1l);
 result.r2.push(x_bus1l);
 result.r3.push(x_bus_com1l);
 
 }
 
 
       }
   
 
  }
 
 }


 
 else{

  if(subArrays14.k1.length!==0  &&  subArrays15.k1.length !==0){
  
     for(let i=0;subArrays14.k1.length>i;i++){
      let      x_item_1m=subArrays14.k1[i];
      let    x_bus_1m=subArrays14.c1[i];
      let  x_bus_com_1m=subArrays14.d1[i];
       count2=0;
  
  for(let j=0;subArrays15.k1.length>j;j++){
  
    let  x_item_2m=subArrays13.k1[j];
    let  x_bus_2m =subArrays13.c1[j];
    let  x_bus_com_2m=subArrays13.d1[j];
  
  
  if(x_item_1m._id ==x_item_2m._id){
  
  if(x_bus_1m._id == x_bus_2m._id){
  
      if(x_bus_com_1m._id ==x_bus_com_2m._id){
  
          count2=count2+1;
  
  
      }
  
  
  }
     
  }
  
  
  
  }
  let count2a=0
    if(count2>0){
  
     for(let h=0 ;result.r1.length>h;h++){
  
      let   x_r_item=result.r1[h];
      let      x_r_bus=result.r2[h];
      let    x_r_com=result.r3[h];
  
  if(x_item_1m._id ==x_r_item._id){
  
  if(x_bus_1m._id == x_r_bus._id){
  
      if(x_bus_com_1m._id == x_r_com._id){
  
            count2a=count2a+1;
      }
  
  }
  
  }
  
  
     }
    if(count2a==0){
  
       result.r1.push(x_item_1m);
       result.r2.push(x_bus_1m);
       result.r3.push(x_bus_com_1m);
  
    }
  
    }
     
  
  
     }
  
  
  }
  
  }
  





        break;



   

   }
   

      
        key++;
    }

  
let key1=0;

let count1;
let count2;

 while(key1<16){


switch(key1){

case 1:
       
    if(subArrays.k1.length!==0){

let count1=0;
  for(let i=0; subArrays.k1.length>i;i++){

    let x_search_item=subArrays.k1[i];
    let  x_search_bus=subArrays.c1[i];
    let  x_search_com=subArrays.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];

  if(x_search_item._id === x_search_item1._id){

  if(x_search_bus._id === x_search_bus1._id){

   if(x_search_com._id === x_search_com1._id){


    console.log("inside count1:",count1,x_search_item._id ,"===", x_search_item1._id)
        count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      

  console.log("for subarrays inside of subsarrays1 result",result);

    }

break;

    case 2:
       
    if(subArrays1.k2.length!==0){

let count1=0;
  for(let i=0; subArrays1.k2.length>i;i++){

    let x_search_item=subArrays1.k2[i];
    let  x_search_bus=subArrays1.c2[i];
    let x_search_com=subArrays1.d2[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];




  if(x_search_item._id === x_search_item1._id){

  if(x_search_bus._id === x_search_bus1._id){

   if(x_search_com._id === x_search_com1._id){


      count1=count1+1;


      console.log("inside count1:",count1,x_search_item._id ,"===", x_search_item1._id)

   }


  }

  }

   


    }
    console.log("i",i,"count1  from subsarrays1:",count1,"x_search_item:",x_search_item," x_search_bus:", x_search_bus,"x_search_com:",x_search_com);

if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);
console.log("from subarrays1,  count==0" ,  x_search_item ,x_search_bus,x_search_com);

console.log("after inserting thhe result will insubarrays1:",result);


}

  }
      
console.log("for subarrays1 inside of subsarrays1 result",result);


    }

break;

    case 3:
       
    if(subArrays2.k1.length!==0){

  let count1=0;
  for(let i=0; subArrays2.k1.length>i;i++){

    let x_search_item=subArrays2.k1[i];
    let x_search_bus=subArrays2.c1[i];
    let  x_search_com=subArrays2.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];

  if(x_search_item._id === x_search_item1._id){

  if(x_search_bus._id === x_search_bus1._id){

   if(x_search_com._id === x_search_com1._id){


      count1=count1+1;

      console.log("count1 inside of subsarray2",count1,x_search_item ,"===", x_search_item1)
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }



    case 4:
       
    if(subArrays3.p1.length!==0){

      let   count1=0;
  for(let i=0; subArrays3.p1.length>i;i++){

    let  x_search_item=subArrays3.p1[i];
    let  x_search_bus=subArrays3.p2[i];
    let x_search_com=subArrays3.p3[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


     count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
break;



    case 5:
       
    if(subArrays4.k1.length!==0){

  let count1=0;
  for(let i=0; subArrays4.k1.length>i;i++){

    let x_search_item=subArrays4.k1[i];
    let  x_search_bus=subArrays4.c1[i];
    let x_search_com=subArrays4.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


      count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
break;


    case 6:
       
    if(subArrays5.k1.length!==0){

  let  count1=0;
  for(let i=0; subArrays5.k1.length>i;i++){

    let  x_search_item=subArrays5.k1[i];
    let x_search_bus=subArrays5.c1[i];
    let x_search_com=subArrays5.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


       count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
  console.log("inserting from subarrays 5 switch 2 :","x_search_item:",x_search_item,"x_search_bus:",x_search_bus,"x_search_com:",x_search_com)
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
break;

    case 7:
       
    if(subArrays6.u1.length!==0){

  let  count1=0;
  for(let i=0; subArrays6.u1.length>i;i++){

    let    x_search_item=subArrays6.u1[i];
    let x_search_bus=subArrays6.u2[i];
    let  x_search_com=subArrays6.u3[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


       count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
    
    break;
    case 8:
       
    if(subArrays7.k1.length!==0){

  let  count1=0;
  for(let i=0; subArrays7.k1.length>i;i++){

    let x_search_item=subArrays7.k1[i];
    let x_search_bus=subArrays7.c1[i];
    let  x_search_com=subArrays7.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];

  if(x_search_item._id === x_search_item1._id){

  if(x_search_bus._id === x_search_bus1._id){

   if(x_search_com._id === x_search_com1._id){


     count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
break;

    case 9:
       
    if(subArrays8.k1.length!==0){

      let  count1=0;
  for(let i=0; subArrays8.k1.length>i;i++){

    let   x_search_item=subArrays8.k1[i];
    let  x_search_bus=subArrays8.c1[i];
    let  x_search_com=subArrays8.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let   x_search_item1=result.r1[j];
      let   x_search_bus1=result.r2[j];
      let    x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


       count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
break;

    case 10:
       
    if(subArrays9.k1.length!==0){

      let  count1=0;
  for(let i=0; subArrays9.k1.length>i;i++){

    let   x_search_item=subArrays9.k1[i];
    let   x_search_bus=subArrays9.c1[i];
    let   x_search_com=subArrays9.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let  x_search_bus1=result.r2[j];
      let   x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


    count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){

  console.log("inserting from subarrays 9 switch 2 :","x_search_item:",x_search_item,"x_search_bus:",x_search_bus,"x_search_com:",x_search_com)
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
break;

    case 11:
       
    if(subArrays10.k1.length!==0){

      let  count1=0;
  for(let i=0; subArrays10.k1.length>i;i++){

    let  x_search_item=subArrays10.k1[i];
    let   x_search_bus=subArrays10.c1[i];
  let x_search_com=subArrays10.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let  x_search_item1=result.r1[j];
      let   x_search_bus1=result.r2[j];
      let   x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


      count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }

break;

    case 12:
       
    if(subArrays11.k1.length!==0){

      let   count1=0;
  for(let i=0; subArrays11.k1.length>i;i++){

    let  x_search_item=subArrays11.k1[i];
    let    x_search_bus=subArrays11.c1[i];
    let  x_search_com=subArrays11.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let   x_search_item1=result.r1[j];
      let    x_search_bus1=result.r2[j];
      let    x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


     count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }

    break;

    case 13:
       
    if(subArrays12.k1.length!==0){

      let  count1=0;
  for(let i=0; subArrays12.k1.length>i;i++){

    let   x_search_item=subArrays12.k1[i];
    let  x_search_bus=subArrays12.c1[i];
    let  x_search_com=subArrays12.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let    x_search_item1=result.r1[j];
      let    x_search_bus1=result.r2[j];
      let   x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


       count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
break;
    case 14:
       
    if(subArrays13.k1.length!==0){

      let   count1=0;
  for(let i=0; subArrays13.k1.length>i;i++){

    let   x_search_item=subArrays13.k1[i];
    let  x_search_bus=subArrays13.c1[i];
    let  x_search_com=subArrays13.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let   x_search_item1=result.r1[j];
      let   x_search_bus1=result.r2[j];
      let  x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


       count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
    break;
    case 15:
       
    if(subArrays14.k1.length!==0){

      let  count1=0;
  for(let i=0; subArrays14.k1.length>i;i++){

    let   x_search_item=subArrays14.k1[i];
    let  x_search_bus=subArrays14.c1[i];
    let  x_search_com=subArrays14.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let   x_search_item1=result.r1[j];
      let    x_search_bus1=result.r2[j];
      let    x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


      count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }
break;
    case 16:
       
    if(subArrays15.k1.length!==0){

      let  count1=0;
  for(let i=0; subArrays15.k1.length>i;i++){

    let  x_search_item=subArrays15.k1[i];
    let  x_search_bus=subArrays15.c1[i];
    let  x_search_com=subArrays15.d1[i];

    for(let j=0 ; result.r1.length>j ;j++){

      let   x_search_item1=result.r1[j];
      let   x_search_bus1=result.r2[j];
      let   x_search_com1=result.r3[j];

  if(x_search_item._id == x_search_item1._id){

  if(x_search_bus._id == x_search_bus1._id){

   if(x_search_com._id == x_search_com1._id){


        count1=count1+1;
   }


  }

  }

   


    }
if(count1==0){
result.r1.push(x_search_item);
result.r2.push(x_search_bus);
result.r3.push(x_search_com);



}

  }
      



    }


break;
    

default:
    console.log(result);



}


key1=key1+1;

 }


//console.log("result r1,r2,r3:",result);



for(let i=0; result.r1.length>i;i++){

let x1=result.r1[i];
let x2=result.r2[i];
let x3=result.r3[i];
let count5=0;
for(let j=0;result.r1.length>j;j++){

let x1i=result.r1[j];
let x2i=result.r2[j];
let x3i=result.r3[j];
   if(x1._id === x1i._id){



    if(x2._id === x2i._id){


  if(x3._id === x3i._id){


    count5=count5+1;

  }

    }
   }

 

}
let count6=0;
  if(count5>0){
if(result2.r1.length==0){
  result2.r1.push(x1);
  result2.r2.push(x2);
  result2.r3.push(x3);


}

else{

   for(let j=0; result2.r1.length>j;j++){

      let x1i=result2.r1[j];
      let x2i=result2.r2[j];
      let x3i=result2.r3[j];

   if(x1._id === x1i._id){

if(x2._id=== x2i._id){


   if(x3._id === x3i._id){

    count6=count6+1


   }

}

   }



   }
if(count6==0){
  result2.r1.push(x1);
  result2.r2.push(x2);
  result2.r3.push(x3);


}



}

  }




}

console.log("last1 result r1,r2,r3:",result);

console.log("last2 result r1,r2,r3:",result2);



console.log("subarrays:",subArrays);
console.log("subarrays1:",subArrays1);
console.log("subarrays2:",subArrays2);
console.log("subarrays3:",subArrays3);
console.log("subARRAYS4",subArrays4);
console.log("subARRAYS5",subArrays5);
console.log("subARRAYS6",subArrays6);
console.log("subARRAYS7",subArrays7);

console.log("subARRAYS8",subArrays8);
console.log("subARRAYS9",subArrays9);
console.log("subARRAYS10",subArrays10);

console.log("subARRAYS11",subArrays11);
console.log("subARRAYS12",subArrays12);
console.log("subARRAYS13",subArrays13);
console.log("subARRAYS14",subArrays14);   console.log("subARRAYS15",subArrays15);   console.log("subARRAYS16",subArrays16);


































































































































































































































































/*  bus_search from front end side*/










































































































































































































































































































































let p=[];
/*
const applyFilters = async () => {
  const { bus_facilities,deprature_time,  busType, bus_operator ,boording_point,dropping_point} = selectedFilters;
console.log(busType, "from applyfilter");

console.log("applyfilters","bus_facilities:", bus_facilities,"deprature_time:",deprature_time
,  " busType:", busType," bus_operator :", bus_operator ,"boording_point:",boording_point,"dropping_point:",dropping_point);
  

  switch (true) {
   case caseA1(busType):



    console.log("from caseA1:",busType);
      let s1 = {
        starting_point: "kolkata",
        destination_point: "digha",
        schedule_date: "29/12/2023",
        bus_type: busType,
      };
      try {
        const res = await fetch('/bus_search_by_bustype', {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(s1),
        });

        const data = await res.json();
        console.log("data:", data);
        setSubArrays4(data);
        console.log("subarray:", subArrays);
      } catch (err) {
        console.log(err);
      }





case cased1(bus_facilities):


 
let s4={

starting_point:"kolkata",

destination_point:"digha",
schedule_date:"29/12/2023",
bus_facilities:bus_facilities
  }
      try{
      
        const res = await fetch('/bus_search_by_facilities',{
           method:"POST",
           headers:{
           
              "content-Type":"application/json"
           },
           body: JSON.stringify(s4),
        
        
        
        
    
        })
        
        
        
        const  data= await res.json();
        console.log("data:",data);
        setSubArrays(data);
        console.log("subarray:",subArrays);} 

        catch(err)
        {
        
        console.log(err);
        
        }

break;


case cased2(bus_operator):

 
let s5={

starting_point:"kolkata",

destination_point:"digha",
schedule_date:"29/12/2023",
bus_operator:bus_operator
  }
      try{
      
        const res = await fetch('/bus_search_by_bus_operator',{
           method:"POST",
           headers:{
           
              "content-Type":"application/json"
           },
           body: JSON.stringify(s5),
        
        
        
        
    
        })
        
        
        
        const  data= await res.json();
        console.log("data:",data);
        setSubArrays(data);
        console.log("subarray:",subArrays);} 

        catch(err)
        {
        
        console.log(err);
        
        }





break;




case caseC(deprature_time):


let s1a={

starting_point:"kolkata",

destination_point:"digha",
schedule_date:"29/12/2023",
deprature_time1:deprature_time
  }
      try{
      
        const res = await fetch('/bus_search_by_startingtime',{
           method:"POST",
           headers:{
           
              "content-Type":"application/json"
           },
           body: JSON.stringify(s1a),
        
        
        
        
    
        })
        
        
        
        const  data= await res.json();
        console.log("data:",data);
        setSubArrays(data);
        console.log("subarray:",subArrays);}


        catch(err)
        {
        
        console.log(err);
        
        }




break;









           case casef4(boording_point,dropping_point):

           

             if(boording_point.length>0 && dropping_point.length>0){
      
      console.log("from casef4 boor","dropp",boording_point,dropping_point);
      let s10={
      
      starting_point:"kolkata",
      
      destination_point:"digha",
      boording_point1:boording_point,
      dropping_point1:dropping_point
      
        }
            try{
            
              const res = await fetch('/search_by_only_boording_point_and_dropping_point_of_filtersection_and_scheduled_id_of_full_sssion',{
                 method:"POST",
                 headers:{
                 
                    "content-Type":"application/json"
                 },
                 body: JSON.stringify(s10),
              
              
              
              
          
              })
              
              
              
              const  data= await res.json();
           //   console.log("data:",data);
              setSubArrays3(data);
         //   console.log("subarray3:",subArrays3);
        } 
      
              catch(err)
              {
              
            //  console.log(err);
              
              }
      
            }


            else if(dropping_point.length>0){

 console.log("dropping_point from dropping case f4 ");

 let s9={
      
  starting_point:"kolkata",
  
  destination_point:"digha",
dropping_point:dropping_point

    }
       try{
        
          const res = await fetch('/search_by_only_dropping_point_of_filtersection_and_scheduled_id_of_full_sssion',{
             method:"POST",
             headers:{
             
                "content-Type":"application/json"
             },
             body: JSON.stringify(s9),
          
          
          
          
      
          })
          
          
          
          const  data= await res.json();
        // console.log("data:",data);
         setSubArrays2(data);
        //  console.log("subarray:",subArrays);
      } 

          catch(err)
          {
          
          console.log(err);
          
          }






            }


            else{



              console.log("from casef4:",boording_point);


              let s8={
              
                starting_point:"kolkata",
                
                destination_point:"digha",
              boording_point:boording_point
              
                  }
                      try{
                      
                        const res = await fetch('/search_by_only_boording_points_of_filtersection_and_scheduled_id_of_full_sssion',{
                           method:"POST",
                           headers:{
                           
                              "content-Type":"application/json"
                           },
                           body: JSON.stringify(s8),
                        
                        
                        
                        
                    
                        })
                        
                        
                        
                        const  data= await res.json();
                     //   console.log("data:",data);
                     setSubArrays11(data);
                       // console.log("subarray:",subArrays);
                      } 
              
                        catch(err)
                        {
                        
                        console.log(err);
                        
                        }
              

              
            }
      
      
      
      
      
      break;
      

case casef6(busType,deprature_time):



console.log("bustype,deprtaturetime:",busType,deprature_time);




break;







    default:
      
      console.log("Default Case");
      break;
  }
};*/

// Helper functions for cases

/*
const caseb = (busType, deaprature_time,boording_point,dropping_point) => {
//  return busType.length > 0 && facilities.length > 0;

if( busType.length > 0 && deaprature_time.length > 0){

  return true;
}


  else if(busType.length > 0 ){
    return true;

  }
else if(boording_point.length>0){


  return true
}
else if(dropping_point.length>0){
  return true
}

else if(boording_point.length>0 && dropping_point.length>0){

  return true
}




  else{

    return true;
  }

};*/
/*
const caseA1 = (busType) => {
  return busType.length > 0;
};





const caseC=(deprature_time)=>{

  if(deprature_time.length>0){

    return true;
  }

}


const cased1=(bus_facilities)=>{

if(bus_facilities.length>0){

return true;
}


}


const cased2=(bus_operator)=>{

if(bus_operator.length>0){

return true;
}


}






const casef2=(boording_point)=>{
  if(boording_point.length>0){

    return true;
  }


 }

 const casef3=(dropping_point)=>{
  if(dropping_point.length>0){

    return true;
  }


 }




 const   casef4=(boording_point,dropping_point)=>{

  if(boording_point.length>0  && dropping_point.length>0){

    return true;


 // console.log("yes from boording ppoint and dropping point");
  }



  
else if(boording_point.length>0 ){

    return true;


 // console.log("yes from boording ppoint and dropping point");
  }


  else{
return true;


  }

 }




 const casef5 =(bus_facilities,deprature_time,  busType, bus_operator ,boording_point,dropping_point)=>{

return true;

 }
const casef6=(busType,deprature_time)=>{

  return true;

}
// Call applyFilters

*/








  return (



<div className=' first-section1   p-3 mb-2 d-flex fle-row  text-white  '>

<div className="scroll-container w-25 h-100 d-flex flex-column gap-4">

<div  className='d-flex flex-column '>
  <label className='text-dark  fw-bolder  fs-5'>Deprature Time</label>
  <div>
    <div   className=' d-flex flex-row gap-2  align-content-center '>
 
    <div>   <input className='feature'
    type="checkbox"
    value="wifi"
    checked={selectedFilters.deprature_time.includes(6)}
    onChange={() => handleFacilityChange1(6)}
  /></div>

  <div>
  <CiCloudSun  className='fs-1  text-dark m21'/>
  </div>
    <div><p className=' fs-7  text-dark feature40 text-center'>06:00-12:00 morning  </p> </div>
   
 


    </div>
  </div>
 




  <div  className=' d-flex flex-row gap-0  align-content-center '    >
 
   <div className='feature'>   <input  className=''
        type="checkbox"
        value="ac"
        checked={selectedFilters.deprature_time.includes(12)}
        onChange={() => handleFacilityChange1(12)}
      />
      </div>
  <div>
  <CiCloudSun  className='fs-1  text-dark m21'/>
  </div>

      <div className='feature4 text-dark'><p className=''>  12:00-18:00 Afternoon </p> </div>


  </div>






  <div   className=' d-flex flex-row gap-2  align-content-center '>
 
   <div className='feature'>   <input  
        type="checkbox"
        value="tv"
        checked={selectedFilters.deprature_time.includes(18)}
        onChange={() => handleFacilityChange1(18)}
      />
      </div>
      <div>
      <CiCloudSun  className='fs-1 text-dark m26'/>
      </div>
    
          <div className='feat-5 text-dark'><p className=''>  18:00-24:00 Evening</p> </div>
  
  </div>
  {/* Add more checkboxes as needed */}



  <div   className=' d-flex flex-row gap-2  align-content-center '>
 
  <div className='feature'>   <input  
       type="checkbox"
       value="tv"
       checked={selectedFilters.deprature_time.includes(0)}
       onChange={() => handleFacilityChange1(0)}
     />
     </div>
     <div>
     <CiCloudSun  className='fs-1 text-dark m26'/>
     </div>
   
         <div className='feat-5 text-dark'><p className=''>    00:00-06:00 Night </p> </div>
 
 </div>






</div>











<div  className='d-flex flex-column text-dark'>
  <label className='fw-bolder  fs-5'>Bus Types</label>
  <div>
    <div   className=' d-flex flex-row gap-2  align-content-center '>
 
    <div>   <input className='feature'
    type="checkbox"
    value="wifi"
    checked={selectedFilters.busType.includes('seater')}
    onChange={() => handleFacilityChange2('seater')}
 
  /></div>

  <div>
  <CiCloudSun  className='fs-1 m21'/>
  </div>
    <div><p className='fs-7 feature40 text-center'>SEATER  </p> </div>
   
 


    </div>
  </div>
 




  <div  className=' d-flex flex-row gap-0  align-content-center '    >
 
   <div className='feature'>   <input  className=''
        type="checkbox"
        value="ac"
        checked={selectedFilters.busType.includes('sleeper')}
        onChange={() => handleFacilityChange2('sleeper')}
   
      />
      </div>
  <div>
  <CiCloudSun  className='fs-1 m21'/>
  </div>

      <div className='feature4'><p className=''>   SLEEPER </p> </div>


  </div>






  <div   className=' d-flex flex-row gap-2  align-content-center '>
 
   <div className='feature'>   <input  
        type="checkbox"
        value="tv"
        checked={selectedFilters.busType.includes('ac')}
       onChange={() => handleFacilityChange2('ac')}
        
      />
      </div>
      <div>
      <CiCloudSun  className='fs-1 m26'/>
      </div>
    
          <div className='feat-5'><p className=''> AC</p> </div>
  
  </div>
  {/* Add more checkboxes as needed */}



  <div   className=' d-flex flex-row gap-2  align-content-center '>
 
  <div className='feature'>   <input  
       type="checkbox"
       value="tv"
       checked={selectedFilters.busType.includes('Non ac')}
       onChange={() => handleFacilityChange2('Non ac')}
   
     />
     </div>
     <div>
     <CiCloudSun  className='fs-1 m26'/>
     </div>
   
         <div className='feat-5'><p className=''>   NON AC  </p> </div>
 
 </div>





  
</div>








<div  className='d-flex flex-column text-dark '>
  <label className='fw-bolder  fs-5'>Facilities</label>
  <div>
    <div   className=' d-flex flex-row gap-2  align-content-center '>
 
    <div>   <input className='feature'
    type="checkbox"
    value="wifi"
    checked={selectedFilters.bus_facilities.includes('wifi')}
    onChange={() => handleFacilityChange3('wifi')}
   
  /></div>


    <div><p className='fs-7 feature40 text-center'>WIFI  </p> </div>
   
 


    </div>
  </div>
 




  <div  className=' d-flex flex-row gap-0  align-content-center '    >
 
   <div className='feature'>   <input  className=''
        type="checkbox"
        value="ac"
        checked={selectedFilters.bus_facilities.includes('bottel')}
        onChange={() => handleFacilityChange3('bottel')}
  
      />
      </div>
  <div>
  <CiCloudSun  className='fs-1 m21'/>
  </div>

      <div className='feature4'><p className=''>  Water bottel </p> </div>


  </div>






  <div   className=' d-flex flex-row gap-2  align-content-center '>
 
   <div className='feature'>   <input  
        type="checkbox"
        value="tv"
        checked={selectedFilters.bus_facilities.includes('"charging point"')}
        onChange={() => handleFacilityChange3('"charging point"')}
       
      />
      </div>
      <div>
      <CiCloudSun  className='fs-1 m26'/>
      </div>
    
          <div className='feat-5'><p className=''>  Charging point</p> </div>
  
  </div>
  {/* Add more checkboxes as needed */}



  <div   className=' d-flex flex-row gap-2  align-content-center '>
 
  <div className='feature'>   <input  
       type="checkbox"
       value="tv"
       checked={selectedFilters.bus_facilities.includes('movie')}
       onChange={() => handleFacilityChange3('movie')}
      
    
     />
     </div>
     <div>
     <CiCloudSun  className='fs-1 m26'/>
     </div>
   
         <div className='feat-5'><p className=''>    Movie  </p> </div>
 
 </div>






 <div   className=' d-flex flex-row gap-2  align-content-center '>
 
 <div className='feature'>   <input  
      type="checkbox"
      value="tv"
      checked={selectedFilters.bus_facilities.includes('toilet')}
       onChange={() => handleFacilityChange3('toilet')}
     
    />
    </div>
    <div>
    <CiCloudSun  className='fs-1 m26'/>
    </div>
  
        <div className='feat-5'><p className=''>  Toilet </p> </div>

</div>







<div   className=' d-flex flex-row gap-2  align-content-center '>
 
<div className='feature'>   <input  
     type="checkbox"
     value="tv"
     ecked={selectedFilters.bus_facilities.includes('live tracking')}
     onChange={() => handleFacilityChange3('live tracking')}
   
 
   />
   </div>
   <div>
   <CiCloudSun  className='fs-1 m26'/>
   </div>
 
       <div className='feat-5'><p className=''>    Track My bus </p> </div>

</div>











<div   className=' d-flex flex-row gap-2  align-content-center '>
 
<div className='feature'>   <input  
     type="checkbox"
     value="tv"
     ecked={selectedFilters.bus_facilities.includes('bedsheet')}
     onChange={() => handleFacilityChange3('bedsheet')}
   
 
   />
   </div>
   <div>
   <CiCloudSun  className='fs-1 m26'/>
   </div>
 
       <div className='feat-5'><p className=''>    
       Bedsheet </p> </div>

</div>













<div   className=' d-flex flex-row gap-2  align-content-center '>
 
<div className='feature'>   <input  
     type="checkbox"
     value="tv"
     checked={selectedFilters.bus_facilities.includes('Flexi ticket')}
     onChange={() => handleFacilityChange3('Flexi ticket')}
   
 
   />
   </div>
   <div>
   <CiCloudSun  className='fs-1 m26'/>
   </div>
 
       <div className='feat-5'><p className=''>    
       Flexi ticket
 </p> </div>

</div>















  
</div>










<div className='text-dark'>
<label className='fw-bolder  fs-5'>Boording point</label>



<div class=" border  scroller">
 


{company && company.k1.map((item, index) => (

  <div  className=' d-flex flex-row gap-0  align-content-center '    >
 
  <div className='feature'>   <input  className=''
       type="checkbox"
       value="ac"
     
       checked={selectedFilters.boording_point.includes(item)}
       onChange={() => handleFacilityChange8(item)}
     
     />
     </div>
  <div>
  <CiCloudSun  className='fs-1 m21'/>
  </div>
  
     <div className='feature4'><p className=''>  {item} </p> </div>
  
  
  </div>
))}






















</div>






</div>













<div className='text-dark'>
<label className='fw-bolder fs-5'>Dropping point</label>



<div class="scroller border ">




{company && company.k2.map((item, index) => (

  <div  className=' d-flex flex-row gap-0  align-content-center '    >
 
  <div className='feature'>   <input  className=''
       type="checkbox"
       value="ac"
     
       checked={selectedFilters.dropping_point.includes(item)}
       onChange={() => handleFacilityChange9(item)}
     
     />
     </div>
  <div>
  <CiCloudSun  className='fs-1 m21'/>
  </div>
  
     <div className='feature4'><p className=''>  {item} </p> </div>
  
  
  </div>
))}




</div>



</div>









<div className='text-dark '>
<label className='fw-bolder  fs-5'> Bus operator</label>



<div class="scroller border ">
 



<div  className=' d-flex flex-row gap-0  align-content-center '    >
 
<div className='feature'>   <input  className=''
     type="checkbox"
     value="ac"
     checked={selectedFilters.bus_operator.includes('CITY EXPRESS')}
     onChange={() => handleFacilityChange4('CITY EXPRESS')}
   
   
   
   />
   </div>
<div>
<CiCloudSun  className='fs-1 m21'/>
</div>

   <div className='feature4'><p className=''>  CITY EXPRESS </p> </div>


</div>







<div  className=' d-flex flex-row gap-0  align-content-center '    >
 
<div className='feature'>   <input  className=''
     type="checkbox"
     value="ac"
     checked={selectedFilters.bus_operator.includes('EXPRESS LINE')}
     onChange={() => handleFacilityChange4('EXPRESS LINE')}
   
   
   />
   </div>
<div>
<CiCloudSun  className='fs-1 m21'/>
</div>

   <div className='feature4'><p className=''>  EXPRESS LINE</p> </div>


</div>





<div  className=' d-flex flex-row gap-0  align-content-center '    >
 
<div className='feature'>   <input  className=''
     type="checkbox"
     value="ac"
     checked={selectedFilters.bus_operator.includes('green line')}
     onChange={() => handleFacilityChange4('green line')}
    
   />
   </div>
<div>
<CiCloudSun  className='fs-1 m21'/>
</div>

   <div className='feature4'><p className=''>  green line </p> </div>


</div>



<div  className=' d-flex flex-row gap-0  align-content-center '    >
 
<div className='feature'>   <input  className=''
     type="checkbox"
     value="ac"
   
     checked={selectedFilters.bus_operator.includes('Basu travels')}
     onChange={() => handleFacilityChange4('Basu travels')}
   />
 
   </div>
<div>
<CiCloudSun  className='fs-1 m21'/>
</div>

   <div className='feature4'><p className=''>    Basu travels</p> </div>


</div>








</div>






</div>















</div>


















<div className='content-1 s text-dark  w-100 d-flex gap-0  flex-column    gap-5  postion-relative scrollable-div'>














{result2 && result2.r1.map((item, index) => (
  <div key={item._id}>
  
      
      {result2.r2.map((item1, index1) => (
        
          <div key={index1}>

{result2.r3.map((item3,index3)=>(
  

  index3==index && index3==index1 ?(






    <div className=' important1  content-2 gt-1 s1 heigh s2 d-flex flex-column'>
<div className='col1   d-flex flex-row  '> 

<div  className='BUS_name fw-bolder t-2 y1  align-items-center d-flex t2i flex-row'><div><p>{item1.bus_name}</p></div>

<div>{"index index1 index3 :"}{index }{index1}{index3}</div>
</div>
</div>

<div className='col2 d-flex flex-row  gap-larg'>

<div className='company-name f-1 t13 fw-bolder t-2'><p>{item3.company_name} </p></div>

<div className='f-2 d-flex flex-row gap-larg1'>
<div  className='starting-time fw-bolder'><p>{item.hour_and_miniute_starting_time_string}</p></div>
<div  className='totaltime_of_journey'><p>{item.estimated_time
}</p></div>
<div  className='deprature_time'><p>{item.hour_and_miniute_deprature_time_string}</p></div>
<div  className='Rating'><p>{item1.bus_rating} </p></div>
<div className='ruppes  fw-bolder'>INR {item.fare_amount}</div>
</div>
</div>


<div className='col3 d-flex  flex-row  '>

<div className='bus_name_and_bus_type d-flex p-v  t-2 flex-row gap-1'>
{item1.bus_type.map((bus_type)=>(

  <div  className='bus_type'><p>{bus_type}</p></div>
))}





</div>

<div className='big-gap  d-flex flex-row s-gap justify-content-between '>
<div className='schedule_time_and_numeber_of_people d-flex flex-row gap-5'>
<div  className='schedule_time t12'><p>5 jan</p></div>
<div  className='number _of_people'><p>{item1.bus_capacity} number</p></div>
</div>


<div className='remained_number_of_bus_seat'>

<p className='t12'>32 seats avialable</p>


</div>

</div>
</div>

<div className='col4  t23e   d-flex  flex-row'>

<div className='part12'><img     className='img-part12' src={require(`../images/${item1.bus_image}`)}   width="160px"  hright="160px" alt="volvo" />   </div>

<div  className='part22  d-flex flex-row   t-col-4'>
<div  className='part-1 d-flex flex-row gap-part-1 '>
<div className='starting_point'><p>Esplande</p></div>
<div className='destination_point'><p>digha</p></div>

</div>

<div className='part-2  number_of_window_seat'>
     <p>  15 window </p>

</div>
</div>

</div>




<div className='col5  bus_features  d-flex align-items-center flex-row  gap-011'>

<div className='part-1 t12 icons d-flex flex-row  gap-3'>
{item1.bus_facilities.map((bus_faci,index)=>(
<div   key={index}>
{bus_faci === "bottel"?(<div className='icon1'>
<FaBottleWater   className='fs-4'/>
</div>): bus_faci === "wifi" ?(<div className='icon5'>

<FaWifi  className='fs-4'/>

</div>): bus_faci === "chrging point" ? (
  <div className='icon3'>

  <FaChargingStation  className='fs-4'/>
  
  
  </div>
):bus_faci === "toilet" ?(
  <div className='icon3'>

  <FaToiletPaper   className='fs-4' />
  
  
  </div>

):bus_faci=== "bedsheet"?(
  <div className='icon3'>

  <LiaBedSolid    className='fs-4'/>

  
  
  </div>

):bus_faci=== "movie"?(
  <div className='icon3'>

  <PiTelevisionSimpleLight   className='fs-4'   />

  
  
  </div>

):null
}
</div>

))}






</div>


{item1.bus_facilities.map((bus_faci,index)=>(
  <div   key={index}>

{bus_faci === "Flexi ticket" ?(

<div className='part-2'>
<div  width="50px" height="50px" className='d-flex flex-row gap-2 part-2-mr' style={{'backgroundColor':'#f8f4f4'}}>
<div className='icon-4'><GrTicket className='fs-51' /></div><div className='fs-w'><p>Flexi ticket</p></div>
</div>


</div>): bus_faci === "live tracking" ?(<div className='part-3'>

<div  width="50px" height="50px" className='d-flex flex-row gap-2 part-2-mr' style={{'backgroundColor':'#f8f4f4'}}>
<div className='icon-4'><MdSpatialTracking  className='fs-51' /></div><div className='fs-w'><p>live tracking</p></div>
</div>

</div>



):null
}
</div>

))}

<div className='part-4  t11 d-flex flex-row    gap-0'>

<div className='t1 fw-bolder  '> 

<p>Return Trip redDeal :</p>
</div>

<div className='t2 ' >
<p>

Unlock min. 10% OFF on return ticket
</p>


</div>
</div>


</div>


<Link    to={`/login/${item1._id}/${item1.bus_name}/${info3}/${info}/${item._id}/${userid}`}>
<div className='col6'>
<button className='fb1'>VIEW SEATES</button>
</div>
</Link>



</div>


    





































































































  ):null

))}
 </div>

      ))}
  </div>
))}







<div className=' important1  content-2 gt-1 s1 heigh s2 d-flex flex-column'>
<div className='col1   d-flex flex-row  '> 

<div  className='BUS_name fw-bolder t-2 y1  align-items-center d-flex t2i flex-row'><div><p> VOLVO203</p></div>

<div></div>
</div>
</div>

<div className='col2 d-flex flex-row  gap-larg'>

<div className='company-name f-1 t13 fw-bolder t-2'><p>Primo
Shyamoli Paribahan Pvt Ltd  </p></div>

<div className='f-2 d-flex flex-row gap-larg1'>
<div  className='starting-time fw-bolder'><p>23:30</p></div>
<div  className='totaltime_of_journey'><p>05h:00h</p></div>
<div  className='deprature_time'><p>04:30</p></div>
<div  className='Rating'><p>4.3k </p></div>
<div className='ruppes  fw-bolder'>INR 280</div>
</div>
</div>


<div className='col3 d-flex  flex-row  '>

<div className='bus_name_and_bus_type d-flex p-v  t-2 flex-row gap-1'>
<div  className='bus_name'><p>AC</p></div>
<div  className='bus_type'><p>sleeper</p></div>


</div>

<div className='big-gap  d-flex flex-row s-gap justify-content-between '>
<div className='schedule_time_and_numeber_of_people d-flex flex-row gap-5'>
<div  className='schedule_time t12'><p>5 jan</p></div>
<div  className='number _of_people'><p>449 number</p></div>
</div>


<div className='remained_number_of_bus_seat'>

<p className='t12'>32 seats avialable</p>


</div>

</div>
</div>


<div className='col4  t23e   d-flex  flex-row'>

<div className='part12'><img     className='img-part12' src={volvo}   width="190px"  hright="190px" alt="volvo" />   </div>

<div  className='part22  d-flex flex-row   t-col-4'>
<div  className='part-1 d-flex flex-row gap-part-1 '>
<div className='starting_point'><p>Esplande</p></div>
<div className='destination_point'><p>digha</p></div>

</div>

<div className='part-2  number_of_window_seat'>
     <p>  15 window </p>

</div>
</div>

</div>




<div className='col5  bus_features  d-flex align-items-center flex-row  gap-011'>

<div className='part-1 t12 icons d-flex flex-row  gap-3'>
<div className='icon1'>
<FaBottleWater   className='fs-4'/>
</div>
<div className='icon2'>
<GiDoubleStreetLights  className='fs-5' />

</div>
<div className='icon3'>

<FaCodeMerge  className='fs-4'/>


</div>
<div className='icon4'>
<GrTicket className='fs-4' />

</div>
<div className='icon5'>

<FaWifi  className='fs-4'/>

</div>
<div className='icon6'>
<PiTelevisionSimpleLight   className='fs-4'   />


</div>
<div className='icon7'></div>
<div className='icon8'></div><div className='icon5'></div>

</div>
<div className='part-2'>
<div  width="50px" height="50px" className='d-flex flex-row gap-2 part-2-mr' style={{'backgroundColor':'#f8f4f4'}}>
<div className='icon-4'><GrTicket className='fs-51' /></div><div className='fs-w'><p>Flexi ticket</p></div>
</div>


</div>


<div className='part-3'>

<div  width="50px" height="50px" className='d-flex flex-row gap-2 part-2-mr' style={{'backgroundColor':'#f8f4f4'}}>
<div className='icon-4'><MdSpatialTracking  className='fs-51' /></div><div className='fs-w'><p>live tracking</p></div>
</div>

</div>



<div className='part-4  t11 d-flex flex-row    gap-0'>

<div className='t1 fw-bolder  '> 

<p>Return Trip redDeal :</p>
</div>

<div className='t2 ' >
<p>

Unlock min. 10% OFF on return ticket
</p>


</div>
</div>


</div>



<div className='col6'>
<button className='fb1'>VIEW SEATES</button>
</div>




</div>












</div>





</div>
   
  );
};






export default Filtersection;
