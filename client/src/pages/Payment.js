import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

    let {schedule_id,seat_count,bor,dro,seat_ids,id3,id2,price,countr1,total_price,userid} = useParams();

console.log(schedule_id,seat_count,bor,dro,seat_ids,id3,id2,price,countr1,total_price,userid);


    const [username1,setusername1]=useState(

  {

username:""

  }

)

const [banking,setbanking]=useState(

  {

username:"",
card:"",
expiration_date:"",
ccv:""

  }

)





    useEffect(() => {
      userinformation()
     }, [userid]);
let  value1;
let nam1;
     const handlein=(e)=>{

      nam1=e.target.name;
      value1=e.target.value;
      
      
      console.log("nam:",nam1,"value:",value1);
      
      setbanking({...banking,[nam1]:value1});
      
      }
      
     const  callreservation =async()=>{


      let s8={

        userid:userid,
        username:username1.username,
         total_price: total_price,
card_number:banking.card,
seat_count:countr1,
boording_point:bor,
dropping_point:dro,
seat_ids:seat_ids,
schedule_id:schedule_id



          
              }
            
              try{
              
              const res = await fetch('/booking_reservation',{
                 method:"POST",
                 headers:{
                 
                    "content-Type":"application/json"
                 },
                 body: JSON.stringify(s8),
              
              
              
              
          
              })
              
              
              
              const  data= await res.json();
              
          console.log("userresrvation:",data.success
          );
     if(data.success === "data send sucessful"){

      navigate('/login123');

     }
      
              }
              
              catch(err)
              {
              
              
              console.log(err);
              
             // navigate('/login', {replace: true});
              
              }




     }



const userinformation =async()=>{

  let s7={

  userid:userid
    
    
        }
      
        try{
        
        const res = await fetch('/obtain_user_information',{
           method:"POST",
           headers:{
           
              "content-Type":"application/json"
           },
           body: JSON.stringify(s7),
        
        
        
        
    
        })
        
        
        
        const  data= await res.json();
        
    console.log("userinformation:",data);
    
  let username=data.username;
console.log("username:",username);
let nam="username";

  setusername1({...username1,[nam]:username});

console.log("username11:",username1);

   callreservation();

//setusername1(data);

//console.log("username1:",username1);



/*
  setusername({
    ...username,
    username: username,
  });*/

        }
        
        catch(err)
        {
        
        
        console.log(err);
        
       // navigate('/login', {replace: true});
        
        }



}





    
    console.log("total_price:",total_price);
    console.log("payment");



             




  return (


<div  className='paymentbody  d-flex  flex-row align-items-center'>




<main>
  <div class="payment-form">
    <div class="main-header">
      <span>Payment Details</span>
    </div>

    <section class="row">
      <div class="product-info">
        <div>BOOK YOUR SEAT</div>
        <div>{total_price}</div>
      </div>
    </section>

    <div class="divider"></div>

    <div class="row">
      <input  className='input123'   onChange={handlein}   name="username" value={username1.username}  type="text" placeholder="Name on Card" />
    </div>

    <div class="row">
      <input  className='input123' onChange={handlein} type="text"  name="card" placeholder="Card Number" />
    </div>

    <div class="row halves">
      <input  className='input123' onChange={handlein} type="text" name='expiration_date'   placeholder="Expiration Date" />

      <input className='input123' onChange={handlein}  type="text"  name='ccv' placeholder="CCV" />
    </div>

    <div class="row">
      <div class="save-row">
        Save Payment Information
        <div class="switch-wrapper" id="switch">
          <div class="switch-background"></div>
          <div class="switch-handle"></div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <section>
    <Link   to="">  <button  className='button456' onClick={callreservation}    >Submit Payment</button>
    </Link></section>
  </div>
</main>





</div>
  
  )
}

export default Payment