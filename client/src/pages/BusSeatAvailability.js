import React, { useState,useEffect } from 'react';
 // Import your CSS file for styling
 /* seatA: { available: false, key: 'seatA' },
    seatB: { available: false, key: 'seatB' },
    seatC: { available: false, key: 'seatC' },
    seatD: { available: false, key: 'seatD' },
    seatE: { available: false, key: 'seatE' },
    seatF: { available: false, key: 'seatF' },*/
const BusSeatAvailability = () => {
  const [seatAvailable, setSeatAvailable] = useState([]);
 /* const updateSeatAvailability = (seatKey, newAvailability) => {
    setSeatAvailable((prevSeats) => ({
      ...prevSeats,
      [seatKey]: { ...prevSeats[seatKey], available: newAvailability },
    }));
    console.log(seatAvailable);

  };*/
  const handleSeatClick = async(seatId) => {
    setSeatAvailable((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId ? { ...seat, selected: !seat.selected} : seat
     
     
        )
    );
    console.log(seatAvailable);
let s={

  data1:seatAvailable,
  bus_name:"volvo203"
}
    try{
    
      const res = await fetch('/busseat_avilibility_update',{
         method:"POST",
         headers:{
         
            "content-Type":"application/json"
         },
         body: JSON.stringify(s ),
      
      
      
      
  
      })
      
      
      
      const  data= await res.json();
      
      console.log(data);
  
    
  
  
 
  
 
      }
      catch(err)
      {
      
      
      console.log(err);
      
     // navigate('/login', {replace: true});
      
      }


  };
 



  const [busName, setBusName] = useState('volvo203');

  const bus_seat_information=async()=>{
  
    try{
    
    const res = await fetch('/bus_seat_information',{
       method:"POST",
       headers:{
       
          "content-Type":"application/json"
       },
       body: JSON.stringify({ bus_name: busName }),
    
    
    
    

    })
    
    
    
    const  data= await res.json();
    
    console.log(data.seatAvaliable);

    let x=data.seatAvaliable;


console.log("x:",x);

setSeatAvailable(x);
    console.log(seatAvailable);
    }
    
    catch(err)
    {
    
    
    console.log(err);
    
   // navigate('/login', {replace: true});
    
    }
    
    
  }
    
     
  
  
  
  
  useEffect(()=>{
  
    bus_seat_information();
  
   },[]);
  
  
  






  return (
    <div className="bus-seat-container">
      <h2>Bus Seat Availability</h2>
      <div className="bus-seats">
        {seatAvailable.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.selected ? 'unavailable' :  'available'}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.id}
          </div>
     
          ))}
      </div>

      


      </div>
    
            );
        }

export default BusSeatAvailability;
