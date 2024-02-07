import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const About = () => {
   const { id1, id2 } = useParams();
   const navigate = useNavigate();
const[userdata,setuserdata]=useState({});

  const callAboutPage=async()=>{

try{

const res = await fetch('/about',{
   method:"GET",
   headers:{
      Accept:"application/json",
      "content-Type":"application/json"
   }




})



const  data= await res.json();

console.log("id1:",id1,"id2:",id2);
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

navigate('/login', {replace: true});

}




  }
  useEffect(()=>{

   callAboutPage();

  },[]);


    function f1() {
  
  console.log("hi from");


    }
    return (
   <>

   <section className='sec4'>
   <div  className='container1'>
   <div className='pr1'>
   <img className='ii' width="200px" height="200px" src='https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww&w=1000&q=80'/>
   
<div    className='namse'>
<p1 className='name'>

{userdata.name}
</p1>



<p1 className='prof'>

{userdata.work}
</p1>

<p1 className='ran'>


</p1>
</div>

   </div>


   <div className='pr2'>

<div  className='o1'>

</div>
<div className='o2'>
<p  className='po'>
about
</p>
<div className='abo'>

<div className='abo1'>


<p  className='ss'>
user id:
</p>
<p  className='ss'>
name:
</p>
<p className='ss'>
email:
</p>

<p  className='ss'>
phone:
</p><p   className='ss'>
profession:
</p>

</div>

<div className='abo2'>
<p>
{userdata._id}
</p>


<p>
{userdata.name}
</p>
<p>
{userdata.email}
</p>
<p>
{userdata.phone}
</p>
<p>
{userdata.work}
</p>
<p>

</p>


</div>



</div>



</div>
- 


   </div>
  
   </div>
   </section>
   
   </>
  );
}

export default About


