import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Signu= () => {

  const navigate = useNavigate();

const [user,setuser]=useState({
name:"",
email:"",
phone:""   ,
 password:"",
 cpassword:""


});


let name,value;

const handleInpu=(e)=>{

  console.log(e);

  name=e.target.name;//  like in case of target name  of input of name is  name1 
    // target name  of  input of type of email is email1 
    // target name of input of  type of  password is pass

    // target name of input of  type of  password is cpass
  value=e.target.value;

//  like in case of target value of  input of type of email  is depending on 
// what value user giving as like aniketkumarsaha5@gmail.com
 // target  value of input of type of password   can be depend on what value 
 // user giveing as like 0234@deep
 //etc





  console.log(name,":",value);
setuser({...user,[name]:value});  //  

//  setuser is function and user is object here setuser saveing any key and value respect to key 
// in user object

// ex:  setuser({...user,aniket}) if it is to be set as like  const [user,setuser]=useState("")
   // then setuser saveing  "aniket"  value in user variable or object 
console.log(user);

}


const Postdata=async(e)=>{
 // const history=useHistory();
  e.preventDefault();
  const{name,email,phone,password,cpassword}=user;
  const res= await fetch("https://redbus-backend-jzz8.onrender.com/bus_user_register", {
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({
    name,email,phone,password,cpassword
  })


  });
  const res1 =await res.json();

 console.log("res1:",res.status)




  if(res.status === 422 || !res1){

    window.alert("invalid registration");
    console.log("invalid registration");
  }
else{
  window.alert(" registration  sucessful");
  console.log("registration   sucessful");

//history.push("/login");
navigate('https://redbus-backend-jzz8.onrender.com/login123', {replace: true});



}

}
  return (
   <section className='sec'>

   
   <div  className='signup-content'>
   

<h2 className='form-title'>
signup
</h2>


<form    method='POST' action='/signu'>
<input type='text'   name='name' onChange={handleInpu} placeholder='your name'/>
<input type='email'  name='email'  onChange={handleInpu} placeholder='your Email'/>
<input type='text'  name='phone'  onChange={handleInpu} placeholder='mobile number'/>

<input type='password'  name='password' onChange={handleInpu}  placeholder='your password'/>
<input type='password'  name='cpassword'   onChange={handleInpu} placeholder='condirm your password'/>

<button  onClick={Postdata}> Register</button>
</form>


   
   
   
</div>

   <div  className='photo-sec'>  

   <img  className='IMAGE-RIGHT'  src='https://play-lh.googleusercontent.com/rDkghxc6_44hZOUc2Gx2oXhRgnvgDDP4_u0G2xM3_bF761PZMSB174eIgWM2n8ZAn8g'  width="500px" height="500px"/>
   
   </div>
   
 
   
   
   </section>
  )
}









export default Signu







