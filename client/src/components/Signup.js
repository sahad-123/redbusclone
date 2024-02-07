import React from 'react';

/*import { useState } from 'react';*/
const signup= () => {

//const [user,setuser]=useState();


let name,value;

const handleInpu=(e)=>{

  console.log(e);

  name=e.target.name;
  value=e.target.value;

  console.log(name,":",value);




}





  return (
   <section className='sec'>

   
   <div  className='signup-content'>
   

<h2 className='form-title'>
signup
</h2>


<form    method='post' action='/signup'>
<input type='text'   name='name1' onChange={handleInpu} placeholder='your name'/>
<input type='email'  name='email1' placeholder='your Email'/>
<input type='text'  name='ph-num' placeholder='mobile number'/>
<input type='text'  name='pro' placeholder='your  profession'/>
<input type='password'  name='pass1' placeholder='your password'/>
<input type='password'  name='conpas1' placeholder='condirm your password'/>

<button> Register</button>
</form>


   
   
   
</div>

   <div  className='photo-sec'>  

   <img src='https://4.imimg.com/data4/IT/NQ/MY-13785395/bus-ticket-booking-services-1000x1000.gif'  width="500px" height="500px"/>
   
   </div>
   
 
   
   
   </section>
  )
}

export default signup
