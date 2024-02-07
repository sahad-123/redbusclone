import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Bookingseat_sucess() {
    const navigate = useNavigate();
    let {schedule_id,seat_count,bor,dro,seat_ids,id3,id2,price,countr1,userid} = useParams();
    console.log("seat_count:",seat_count);

 




   useEffect(()=>{
  
    if(seat_count!==0){
  
  
        navigate(`/Booking/${schedule_id}/${seat_count}/${bor}/${dro}/${seat_ids}/${id3}/${id2}/${price}/${countr1}/${userid}`);
    
    
    }

    else{

     
        //  navigate(`/Booking_sucess/${schedule_id}/${seat_count}/${bor}/${dro}/${seat_ids}/${id3}/${id2}/${price}`);
  
  
 console.log("booking sucess 32232323");
    }
  
   },[seat_count]);

  return (

  
    <div>Bookingseat_sucess</div>
  )
}

export default Bookingseat_sucess