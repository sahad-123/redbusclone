import React, { useEffect,useState ,useId} from 'react';
import { Link, useParams } from 'react-router-dom';

const Contact= () => {
  
 const id1=100
  const {id}= useParams();
  console.log("id1:",id);
  const[userdata,setuserdata]=useState('');
  /*const callcontactPage=async()=>{

    try{
    
    const res = await fetch('/contact',{
       method:"GET",
       headers:{
       
          "content-Type":"application/json"
       }
    
    
    
    
    })
    
    
    
    const  data= await res.json();
    
    
    console.log("data:",data);
    const data1=data.information;
    setuserdata(data1);
    console.log("userdata:",userdata);
    if(!res.status===200){
       const error=new Error(res.error);
    
       throw error;
    }
    
    
    }
    
    catch(err)
    {
    
    
    console.log(err);
    
   // navigate('/login', {replace: true});
    
    }
    
    
    
    
      }*/

const [mess,setmess]=useState({

name:"",
email:"",
phone:"",
  
   message:""
})
let nam,value;
const handlein=(e)=>{

nam=e.target.name;
value=e.target.value;


console.log("nam:",nam,"value:",value);

setmess({...mess,[nam]:value});

}

const contact=async(e)=>{


   e.preventDefault();
 const{name,email,phone,message}=mess;
   const res=await fetch('/contact',{
 
 method:"POST",
 headers:{
   "content-type":"application/json"
 },
 body:JSON.stringify({
   name,email,phone,message
 })
 
 
   });
   const data= res.json();
 
 
   console.log("res data :",data);
   if(res.status=== 400 || !data){
 
 
   window.alert("message not sended");
   }
   else{
 
     window.alert("message sended sucessfully");
     //navigate('/', {replace: true});
   }
 
 
 
 
   
 
 
 
 }
 
 
/*
      useEffect(()=>{

    
         callcontactPage();
     
       },[]);*/

const id2=300
  return (


    <section className='sec2'>
   
    <div className='upper1'>
    <Link to={`/contact/${id1}/${id2}`}> tap</Link>
 <div className='row1'>
 <h1 className='b1'>phone</h1>
 <p className='b1'>933058489</p>
 
 </div>
 
    
 <div className='row2'>
 
 <h1 className='b1'>Email</h1>
 <p className='b1'>sumi55@gmail.com</p>
 
 </div>
 
    
 <div className='row3'>
 <h1 className='b1'>addrees</h1>
 <p className='b1'>kolkata,14  lane</p>
 
 
 </div>
 
 
 
    </div>
    
 
 
 
 <div  className='lower1'>
 <h1 className='gt'>
 Get in touch
 </h1>
 
 <div className='secondone'>

<input  type='text' className='pip1'  onChange={handlein} name='name' placeholder='your name'  value={userdata.name}/>

<input  type='email' name='email' onChange={handlein} className='pip2' placeholder='your email'   value={userdata.email}/>

<input  type='text' name='phone'   onChange={handlein} className='pip3' placeholder='phone'  value={userdata.phone}/>


 </div>

 <input className='mes' type='text'  onChange={handlein}name='message' placeholder='message'/>

<button  onClick={contact} className='but'>
send
</button>
 </div>
 
 
 
 
 
    
    </section>
   

  )

}

export default Contact