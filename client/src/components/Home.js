import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaBus } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';



const section1b1={

  width:'100%',

  height: '100px',


  backgroundColor: '#ffffff',
  color:'#fff',

position:'relative',

  bottom:'380px'

};
  /*

  const bannerstyle={

width:'100%',
height: '640px',
backgroundImage: `url(${imageUrl})`





  }*/

  const textstyle={

    fontSize: '30px',
    fontWeight: 'bolder',
   color: 'white',
   fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"

  }

 const centered ={
    position: 'absolute',
    top: '190%',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height:'70%'
  }
  
  const inputp={


    width:'70%',
    height: '100px',
    backgroundColor: '#FFFFFF',
position: 'relative',

right: '45px',


top:'30px',
borderRadius: '20px'



  }
  const col1={

    fontSize: '40px',
  color: '#007',
width:'25%',
height: '100%',
border:'1px solid #e0e0e0',
borderTop: 'none',
borderBottom: 'none',
borderLeft:'none'

  }

    const col2={

      fontSize: '40px',
      color: '#007',
    width:'25%',
    height: '100%',
    border:'1px solid #e0e0e0',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft:'none'
    }


    const col3={
      fontSize: '40px',
      color: '#007',
    width:'25%',
    height: '100%',
    border:'1px solid #e0e0e0',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft:'none'


    }

   const col4={
    fontSize: '40px',
    color: '#007',
  width:'25%',
  height: '100%',
  border:'1px solid #e0e0e0',
  borderTop: 'none',
  borderBottom: 'none',
  borderTopRightRadius:'20px' ,

  borderBottomRightRadius:'20px' ,
  backgroundColor: 'rgba(216, 78, 85, 1)'
  }

 const pchang={

  position: 'relative',
 top:'30px',

 width: '100%',
 height:'75%'

  }

  const pf={


   fontSize: '25px',
   'color': 'white',
   fontWeight: 'bolder',
   textAlign: 'center',
position: 'relative',

left:'25px',
top:'25px'

  }
  const fds={


    fontSize: '15px'
  }

  const inps={
  width:'50%',

  height: '50%',
position: 'relative',
bottom: '60px',
border: 'none',
fontSize: '15px'
  }
 


const Home = () => {
  const { userid} = useParams();
  const [mess,setmess]=useState({

    starting_point:"",
    destination_point:"",
    schedule_date:""
     })
     const navigate = useNavigate();
 
     let nam,value;
   const callfun=(e)=>{
 
     nam=e.target.name;
     value=e.target.value;
     
     
     console.log("nam:",nam,"value:",value);
     
     setmess({...mess,[nam]:value});
     
     }
 

let data;
let info;
let info1;
let info2;
let info3;

const[userdata,setuserdata]=useState('');
  const callHOMEPAGE1=async()=>{
console.log("hello  from callhomepage1");
//const navigate = useNavigate();

let s={

   starting_point:mess.starting_point,
   destination_point:mess.destination_point,
   schedule_date:mess.schedule_date

}



try{
            
  const res = await fetch('/obtain_schedule_info',{
     method:"POST",
     headers:{
     
        "content-Type":"application/json"
     },
     body: JSON.stringify(s),
  
  
  
  

  })
  
  
  
  data= await res.json();
  
console.log(data);

info=data.id;
info1=data.starting_point;
info2=data.destination_point;
info3=`${mess.schedule_date}`;
  }
  
  catch(err)
  {
    
    
    console.log(err);
    
      }
      navigate(`/filter-section/${info}/${info1}/${info2}/${info3}/${userid}`);

    }


      useEffect(()=>{

    
    
      },[]);

  return (

<section >
<div className='sec3'>

<div className='section1b1' style={section1b1}>

<h1 className='Tpro'>


</h1>


<div className='banner  d-flex  flex-column align-items-center' >
<div  className='centered-element'  style={centered}>
<div className='text-part'  style={textstyle}>
<p>  India's No. 1 Online Bus Ticket Booking Site</p>
</div>

<div  className='input-part  d-flex gap-' style={inputp}>
<div  className='col1 d-flex' style={col1}>
<div className='p-chang  d-flex gap-4' style={pchang}><FaBus className='fs-2' />

     <div  className='input-content  d-flex flex-column gap-3' >
     <div> <p className='fd-s' style={fds}> From</p></div>
<div ><input type='text' onChange={callfun} style={inps} name="starting_point" className='inp-s' placeholder='' /> </div>

     </div>

</div>
 </div>
 <div  className='col2 d-flex' style={col2}>

 <div   className='p-chang  d-flex gap-4' style={pchang}><FaBus  className='fs-2'/>

 <div  className='input-content  d-flex flex-column gap-3'>
 <div> <p  className='fd-s' style={fds} > TO</p></div>
 <div ><input  className='inp-s' onChange={callfun}  name="destination_point" style={{...inps,...fds}}  type='text' placeholder='' /> </div>

 </div>


 </div>
 </div>

 <div  className='col3 d-flex' style={col3}>
 <div  className='p-chang  d-flex gap-4' style={pchang}><FaCalendarAlt className='fs-2' />
 
 <div  className='input-content  d-flex flex-column gap-3' >
 <div> <p className='fd-s' style={fds}> Date</p></div>
 <div ><input  name="schedule_date"className='inp-s' onChange={callfun} style={{...inps,...fds}}  type='' placeholder='Date/month/year' /> </div>

 </div>
 
 
 </div>
 </div>

 <div  className='col4  d-flex' style={col4}>

 <div onClick={()=>callHOMEPAGE1()} className='p-chang d-flex p-f' style={{...pf,...pchang}} >SEARCH BUSES</div>
 </div>




</div>
</div>
</div>


</div>


</div>
</section>


    )
}

export default Home
