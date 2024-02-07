import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  
 // const navigate = useNavigate();
  /*
const[email,setEmail]=useState('');
const [password,setPass]=useState('');


*/




const [creden,setCreden]=useState({

email:"",
password:""

})
 

let name;
let value;

const handleInpu=(e)=>{

  console.log(e);

  name=e.target.name;
  value=e.target.value;






  console.log(name,":",value);
setCreden({...creden,[name]:value});  




console.log(creden);

}















  

const loginuser1=async()=>{
  const{email,password}=creden;
  try{
  
  const res = await fetch('/signin',{
     method:"POST",
     headers:{
     
        "content-Type":"application/json"
     },
     body: JSON.stringify({ email,password }),
  
  
  
  

  })
  
  
  
  const data= await res.json();

  console.log("data:",data)






  }
  
  catch(err)
  {
  
  
  console.log(err);
  
 // navigate('/login', {replace: true});
  
  }
  
  
}
  








  return (
    


   
       <section className='sec'>
    
      
       <div  className='photo-sec'>  
    
       <img className="IMG-LEFT"src='https://i.etsystatic.com/42954342/r/il/b55497/4936548407/il_1588xN.4936548407_e35p.jpg'  width="500px" height="500px"/>
       
       </div>
    
       
     




        
       <div  className='signup-content1'>
       
    
    <h2 className='form-title'>
  Login
    </h2>
    
   
   <form>
    <input type='email' onChange={handleInpu}  name='email' placeholder='your Email'/>
  
    <input type='password' onChange={handleInpu}   name='password' placeholder='your password'/>

    
    <button  onClick={loginuser1} > Login</button>

    </form>
    
       
       
       
    </div>
       
       
       </section>
      )
    }
    
 
    



export default Login
