import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Sbdoor() {

  const navigate = useNavigate();
  let {countr,schu_id,seat_ids,id3,id2,countr1,userid} = useParams();


  useEffect(() => {

    

      console.log(countr,schu_id,seat_ids);
    
   
    

   // console.log("countr,schu_id,c:",countr,schu_id,decodedData);
  }, [countr,schu_id,seat_ids]);











const [selectedFilters,setSelectedFilters]=useState({

subbro:[],
dro:[]


})
const [subdro,setsubdro]=useState({

sub:[],
dro:[],price:""

})

useEffect(() => {
  
  
boor_droop_infor()


 }, [schu_id]);




 useEffect(() => {
  
  
  console.log("subdro:",subdro);
  
  
   }, [subdro]);



   const   choosesubdrop1 = (sub_bro)=>{
  

  
    const updatedsubro = selectedFilters.subbro.includes(sub_bro)
        ? selectedFilters.subbro.filter((f) => f !== sub_bro)
        : [...selectedFilters.subbro, sub_bro];
  console.log("updatedsubro :",updatedsubro );
      // Update the state with the selected facilities
      setSelectedFilters({
        ...selectedFilters,
        subbro:updatedsubro
      });
  
      console.log("subbro:",sub_bro);
  
     // applyFilters();
  
  
  
  
  
  
  }
   



  console.log("SUBDRO.SUB:",selectedFilters.subbro);
 

  const   choosesdrop2 = (drop)=>{
  

  
    const updateddrop1 = selectedFilters.dro.includes(drop)
        ? selectedFilters.dro.filter((f) => f !== drop)
        : [...selectedFilters.dro, drop];
  
      // Update the state with the selected facilities
      setSelectedFilters({
        ...selectedFilters,
        dro:updateddrop1
      });
  
      console.log("drop:",drop);
  
     // applyFilters();
  
  
  
  
  
  
  }
   


 const boor_droop_infor = async () => {


  try {
    const res = await fetch("/pick_boor_dropp", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ schedule_id: schu_id }),
    });

 
    const data = await res.json();

console.log("data:",data);


setsubdro(data);




setsubdro({
  ...subdro,
 sub: data.sub,
 dro:data.dro,
price:data.price
});

  } catch (err) {
    console.log(err);

    // navigate('/login', {replace: true});
  }
};
let boor;
let  drop;

if( selectedFilters.subbro.length ==1 && selectedFilters.dro.length==1){
selectedFilters.subbro.map((item1)=>{
 boor=item1;
 

})



selectedFilters.dro.map((item2)=>{
  drop=item2;
  
 
 })
 console.log("drop_subboor _ navigate=>",drop,boor);
 let   schedule_id=schu_id;
   let seat_count=countr;
   let bor=boor;
   let dro=drop;
let price=subdro.price;

   navigate(`/Booking/${schedule_id}/${seat_count}/${bor}/${dro}/${seat_ids}/${id3}/${id2}/${price}/${countr1}/${userid}`);


}

  return (
    <div  className='sub_dro d-flex  gap-5  '>


    <div className='sub_dro1  scrollable-div1 d-flex flex-column gap-4'  >
<div  className='sub_r  d-flex  flex-row align-items-center'>
<div><p  className='sub_position'>

subboording_point:
</p>



{  selectedFilters.subbro.length>1?(<p className='showbro'>SELECT ANY   SUBBOORDING-POINT OF THEM </p>):null}



</div>
   
<div>
    
<p  className='pri'>
{1200}  Rs
</p>
</div>

</div>
    {subdro && subdro.sub.map((item) => (

   item!==null?(   <div  className="sub_drocol1">
      <input  className="check1" type="checkbox" 
      
      checked={selectedFilters.subbro.includes(item)}
      onChange={() =>choosesubdrop1(item)}
      
      /><div>
      
       <p  className='name-item'>
         {item}
       </p>
      </div>
        
        </div>):null
 

    ))}

   

       


      



    </div>



    <div className='sub_dro2   scrollable-div1   d-flex   flex-column  gap-4'>
    
    <div><p  className='sub_position1'>

    dropping_point:
    </p></div>

    {  selectedFilters.dro.length>1?(<p  className='showdro'>SELECT ANY  ONE DROPPING-POINT OF THEM </p>):null}


    {subdro && subdro.dro.map((item1) => (

      item1!==null?(   <div  className="sub_drocol2">
         <input  className="check1" type="checkbox" 
         
         checked={selectedFilters.dro.includes(item1)}
         onChange={() =>choosesdrop2(item1)}
         
         /><div>
         
          <p  className='name-item'>
            {item1}
          </p>
         </div>
           
           </div>):null
    
   
       ))}





    



  
    
    </div>



    
    
    
    
    
    
    </div>





  )
}

export default Sbdoor