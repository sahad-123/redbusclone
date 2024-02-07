import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import { RiSteering2Line } from "react-icons/ri";
import { TbArmchair2 } from "react-icons/tb";
import { PiArmchairFill } from "react-icons/pi";
import white from "../images/white-seat.png";
import green from "../images/green-image-2.png";

import black from "../images/black-seat-2.png";

function BusSeatAvailability2() {

  const navigate = useNavigate();
 
  const { id1,id2,id3,id4,id5,userid} = useParams();

  console.log("id1,id2,id3,id4,id5:",id1,id2,id3,id4,id5)


  const [isPressed, setIsPressed] = useState(false);
  const [changingseat, setchangingseat] = useState([]);
  //const[ordersended,setordersended]=useState([]);


  const [updaterow2, setupdaterow2] = useState([]);
  const [updaterow3, setupdaterow3] = useState([]);
  const [updaterow1, setupdaterow1] = useState([]);
/*
  useEffect(() => {
   // console.log(updaterow1, updaterow1.length);
  }, [updaterow1]);*/
  //[seatAvailable, setSeatAvailable] = useState([]);
 /*  let updaterow1=[];
   let updaterow2=[];
   let updaterow3=[];

*/
const [info,setinfo]=useState({



    
})

 // setinfo({...info,ida:id5})


useEffect(() => {
  console.log("id5:",info.ida);
 }, [info]);

  

  const ordering2 = async () => {


    setchangingseat((prevChangingSeat) => {
      const updatedSeats = prevChangingSeat.map((seat1) => {
        //let i=0;

        setRow1((prevSeats) =>
          prevSeats.map((seat) => {
            if (seat.id === seat1.id) {
              // Update the seat in the array
              const  updatedSeat= { ...seat, selected: false, empty: false };
              // Update the separate state x
              let check = 0;
              if (updaterow1.length == 0) {
         updaterow1.push(updatedSeat);
         console.log("from updaterow.length==0 for length of updaterow1",updaterow1.length,updaterow1[0]);
             /*   setupdaterow1((prevSeats) =>
                  prevSeats ? [...prevSeats, updatedSeat] : [updatedSeat]
                );*/

//console.log("from if updaterow1.length==0:",updaterow1)

                // updaterow1.push(updatedSeat)
              } else {
                console.log("into this block");
                check = 0;
                updaterow1.map((Element) => {
                  if (Element.id == updatedSeat.id) {
                    check = check + 1;
                    console.log(Element.id, "!==", updatedSeat.id);
                  }
                });
                if (check < 1) {
                  //  updaterow1.push(updatedSeat);
                  //console.log("IF PART OF CHECK==1:");
                /*  setupdaterow1((prevSeats) =>
                    prevSeats ? [...prevSeats, updatedSeat] : [updatedSeat]
                  );*/

updaterow1.push(updatedSeat);
console.log("from check<1 for length of updaterow1",updaterow1.length,updaterow1[1]);

              /*    console.log(
                    "if chceck==1:",
                    updaterow1,
                    "updaterow1.length:",
                    updaterow1.length,
                    "oth element",
                    updaterow1[0],
                    updatedSeat
                  );*/

                //  console.log("check<1:setupdaterow1:",updaterow1)
                }
                console.log("out of else partof end of check1:",updaterow1.length,updaterow1[0],updaterow1[1]);
              }

              return updatedSeat;
            }

            return seat;
          })
        );
     
console.log("our of setrow1:",updaterow1);
/*
  updaterow1.map(ele=>{
ordering3(ele);
  //console.log("from end of set row1:=>",ele);

  })*/
  //ordering3(updaterow1);


        setRow2((prevSeats) =>
          prevSeats.map((seat) => {
            if (seat.id === seat1.id) {
              // Update the seat in the array
              const updatedSeat = { ...seat, selected: false, empty: false };
              // Update the separate state x
              let check = 0;
              if (updaterow2.length == 0) {
                updaterow2.push(updatedSeat);
              } else {
                check = 0;
                updaterow2.map((Element) => {
                  if (Element.id == updatedSeat.id) {
                    check = check + 1;
                    console.log(Element.id, "!==", updatedSeat.id);
                  }
                });
                if (check < 1) {
                  updaterow2.push(updatedSeat);
                  //console.log("IF PART OF CHECK==1:");

                  console.log(
                    "if chceck==1:",
                    updaterow2,
                    "updaterow2.length:",
                    updaterow2.length,
                    updatedSeat
                  );
                }
              }

              return updatedSeat;
            }

            return seat;
          })
        );

        setRow3((prevSeats) =>
          prevSeats.map((seat) => {
            if (seat.id === seat1.id) {
              // Update the seat in the array
              const updatedSeat = { ...seat, selected: false, empty: false };
              // Update the separate state x
              let check = 0;
              if (updaterow3.length == 0) {
                updaterow3.push(updatedSeat);
              } else {
                check = 0;
                updaterow3.map((Element) => {
                  if (Element.id == updatedSeat.id) {
                    check = check + 1;
                    console.log(Element.id, "!==", updatedSeat.id);
                  }
                });
                if (check < 1) {
                  updaterow3.push(updatedSeat);
                  //console.log("IF PART OF CHECK==1:");

                  console.log(
                    "if chceck==1:",
                    updaterow3,
                    "updaterow3.length:",
                    updaterow3.length,
                    updatedSeat
                  );
                }
              }

              return updatedSeat;
            }

            return seat;
          })
        );
        ordering3(updaterow1,updaterow2,updaterow3);
        return seat1;
      });

      return updatedSeats;
    });
  //  console.log("out of out of out of end of  main function:",updaterow1.length,updaterow1[0],updaterow1[1]);
    //console.log("before chages eow1,row2, row3",row1,row2,row3);
  //  console.log(changingseat);
    console.log(
      "after changes updaterow1 updaterow2 updaterow3",
      updaterow1,
      updaterow2,
      updaterow3
    );

   console.log("updaterow1:", updaterow1.length, updaterow1);

    /*setSeatAvailable(updaterow1);
console.log("chec:",seatAvailable);*/
    //ordering3(updaterow1,updaterow2,updaterow3);

    updaterow1.map((Element) => {
      console.log("row::", Element);
    });
  };

  /*

const ordering4 = async () => {
  setchangingseat((prevChangingSeat) => {
    const updatedSeats = prevChangingSeat.map((seat1) => {
      setRow1((prevSeats) =>
        prevSeats.map((seat) => {
          if (seat.id === seat1.id) {
            const updatedSeat = { ...seat, selected: false, empty: false };
            updateStateIfNotExists(updaterow1, updatedSeat);
            return updatedSeat;
          }
          return seat;
        })
      );

      setRow2((prevSeats) =>
        prevSeats.map((seat) => {
          if (seat.id === seat1.id) {
            const updatedSeat = { ...seat, selected: false, empty: false };
            updateStateIfNotExists(updaterow2, updatedSeat);
            return updatedSeat;
          }
          return seat;
        })
      );

      setRow3((prevSeats) =>
        prevSeats.map((seat) => {
          if (seat.id === seat1.id) {
            const updatedSeat = { ...seat, selected: false, empty: false };
            updateStateIfNotExists(updaterow3, updatedSeat);
            return updatedSeat;
          }
          return seat;
        })
      );

      return seat1;
    });

    return updatedSeats;
  });

  console.log("after changes updaterow1 updaterow2 updaterow3", updaterow1, updaterow2, updaterow3);

  console.log(updaterow1.length,"updaterow.length",updaterow1);

};

const updateStateIfNotExists = (stateArray, updatedSeat) => {
  if (stateArray.every((element) => element.id !== updatedSeat.id)) {
    setupdaterow1((prevSeats) =>
    prevSeats ? [...prevSeats, updatedSeat] : [updatedSeat]
  );
  }
};
*/
  // Rest of your component code...
let x1=[];
let updaterow1a=[];
let str1="";
let str;



  const ordering3 = async (ele,ele1,ele2) => {
  console.log("from ordering3........:",ele,ele1,ele2,"length one by one:",ele.length,ele1.length,ele2.length);
/*
if(x1.length == 0){ 

  x1.push(ele);
}
else{

  


   let check = 0;
    x1.map((Element) => {
      if (Element.id == ele.id) {
        check = check + 1;
       // console.log(Element.id, "!==", updatedSeat.id);
      }
    });
    if (check < 1) {
 x1.push(ele)

    }








}
*/

//console.log("x1new:",x1,x1.length);

    
let updaterow1a=[];
let updaterow1b=[];
let updaterow1c=[];
let combinec=[];
row1.map(Element=>{
let count=0;
  ele.map(ele11=>{

    if(Element.id==ele11.id){
updaterow1a.push(ele11);
    count++;
      
           }
           else{
           // console.log(ele);
           }

  })

if(count==0){

updaterow1a.push(Element);
//console.log(Element);
//x1.push(Element);

}

})


row2.map(Element1=>{
  let count=0;
    ele1.map(ele1b=>{
  
      if(Element1.id==ele1b.id){
  updaterow1b.push(ele1b);
      count++;
        
             }
             else{
             // console.log(ele);
             }
  
    })
  
  if(count==0){
  
  updaterow1b.push(Element1);
  //console.log(Element);
  //x1.push(Element);
  
  }
  
  })

  row3.map(Element2=>{
    let count=0;
      ele2.map(ele1c=>{
    
        if(Element2.id==ele1c.id){
    updaterow1c.push(ele1c);
        count++;
          
               }
               else{
               // console.log(ele);
               }
    
      })
    
    if(count==0){
    
    updaterow1c.push(Element2);
    //console.log(Element);
    //x1.push(Element);
    
    }
    
    })



/*
ele1.map(element1=>{

  console.log("ele1:",element1);

})
*/

console.log("updaterow1a:",updaterow1a,"updaterow1b",updaterow1b,"updaterow1c",updaterow1c);


combinec.push(updaterow1a);
combinec.push(updaterow1b);
combinec.push(updaterow1c);
console.log("combinec:",combinec);


/**
|--------------------------------------------------
|
|--------------------------------------------------
*/


let s={

  data1:combinec,
  bus_name:id2
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
  
    console.log("from  ordering 3 of    seatchanging :" ,changingseat);
  /*
  let schu_id=id5;
 const myObject = { seat_changing:changingseat };
  const encodedObject = encodeURIComponent(JSON.stringify(myObject));
  
     */

 
      }
      catch(err)
      {
      
      
      console.log(err);
      
     // navigate('/login', {replace: true});
      
      }

let countr=0;
let countr1=0
      let schu_id=id5;
      let c=[];
      let seat_ids="";
      const myObject = { seat_changing:changingseat };
    
     for(let i=0;changingseat.length>i;i++){
           if(changingseat.id!==0){
   countr=countr+1;
   countr1=countr1+1;
console.log(changingseat[i].id,"id!!a==0");
seat_ids += `&${changingseat[i].id}`;

console.log("seat_ids:",seat_ids);



           }

     }
    // console.log("countr:",countr);
    //  const encodedObject = encodeURIComponent(JSON.stringify(myObject));
  //  const encodedData = encodeURIComponent(JSON.stringify(c));
   






    navigate(`/select-boor-dropping-show-price/${countr}/${schu_id}/${seat_ids}/${id3}/${id2}/${countr1}/${userid}`);
















//console.log("row1a:",row1);
    /*
updaterow1.map(ele=>{
console.log("ele:",ele);
  //updaterow1a.push(ele);
})*/
    /*
updaterow1.forEach((element, index) => {
  console.log("ele:",element);
});
*/ /*
row2.map(Element=>{

  if(Element.id!==updaterow2.id){

updaterow2.push(Element);

  }

})




row3.map(Element=>{

  if(Element.id!==updaterow3.id){

updaterow3.push(Element);

  }

})

*/

    console.log(
      "from ordering3  after updateing all: ",
      "updaterow1:",
      updaterow1,
      "updaterow2:",
      updaterow2,
      "updaterow3",
      updaterow3
    );
    /*
setchec(updaterow1);
console.log("chec:",chec);
*/
    //console.log("updaterow1a:",updaterow1a);
  };
console.log("updaterow1aof end:",updaterow1a);


  const handleMouseDown = () => {
    setIsPressed(true);
  };

  /*
  const ordering=async()=>{
  setchangingseat((prevChangingSeat) => {
    const updatedSeats = prevChangingSeat.map((seat1) => {
  
      setRow1((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seat1.id ? { ...seat, selected: false} : seat
      
      
        )
        
      )
  
      setRow2((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seat1.id ? { ...seat, selected: false} : seat
      
      
        )
      )
  
      setRow3((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seat1.id ? { ...seat, selected: false} : seat
      
      
        )
      )
      return seat1;
    });

    return updatedSeats;
  });
//console.log("after-ordering-row1:",row1);
/*ordersended.push(row1);
ordersended.push(row2);
ordersended.push(row3);
setordersended(row1);
setordersended(row2);
setordersended(row3);
*/ /*
setordersended((prevordersended) => [
  ...prevordersended,
  [...row1], // Create a new copy of row1
  [...row2], // Create a new copy of row2
  [...row3], // Create a new copy of row3
]);
*/

  //main reult
  //console.log("first-ordersended:",ordersended);
  //console.log("first,row1,row2,row3:",row1,row2,row3);
  //ordering2();

  /*
let s={

  data1:ordersended,
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













}





  

*/

  const handleMouseUp = () => {
    setIsPressed(false);
    console.log("Button Clicked!");
    // Perform any action or navigation here
  };

  useEffect(() => {
    bus_seat_information();
  }, []);

  const bus_seat_information = async () => {
    let bus_name = "volvo203";

    try {
      const res = await fetch("/bus_seat_information", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ bus_name: id2 }),
      });

      console.log("afterloading:", row1);
      const data = await res.json();

      console.log(
        "businformation-data-full:",
        data.bus_information.seatAvaliable[0]
      );
      let x1 = data.bus_information.seatAvaliable[0];
      let x2 = data.bus_information.seatAvaliable[1];
      let x3 = data.bus_information.seatAvaliable[2];
      console.log("x1,x2,x3:", x1, x2, x3);

      setRow1(x1);
      setRow2(x2);
      setRow3(x3);
      // console.log("row1,roew2,row3",row1,row2,row2);
    } catch (err) {
      console.log(err);

      // navigate('/login', {replace: true});
    }
  };

  const handleSeatClickrow1green = async (seatId) => {
    console.log(seatId);

    setRow1((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          // Update the seat in the array
          const updatedSeat = {
            ...seat,
            selected: !seat.selected,
            empty: !seat.empty,
          };
          // Update the separate state x

          setchangingseat((prevChangingSeat) => {
            const updatedSeats = prevChangingSeat.map((seat) => {
              if (seat.id === updatedSeat.id) {
                // Update the value of a particular property of the seat
                return { ...seat, id: 0 };
              }
              return seat;
            });

            return updatedSeats;
          });

          return updatedSeat;
        }
        return seat;
      })
    );

    console.log(changingseat);

    console.log(changingseat, "row1green", row1);
  };

  const handleSeatClickrow1white = async (seatId) => {
    console.log("before insertion:", changingseat, seatId);

    setRow1((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          // Update the seat in the array
          const updatedSeat = {
            ...seat,
            selected: !seat.selected,
            empty: !seat.empty,
          };
          // Update the separate state x
          let check = 0;
          if (changingseat.length == 0) {
            changingseat.push(updatedSeat);
          } else {
            changingseat.map((Element) => {
              if (Element.id !== updatedSeat.id) {
                check = 1;
              } else {
                check = 0;
              }
            });
            if (check == 1) {
              changingseat.push(updatedSeat);
            }
          }

          return updatedSeat;
        }

        return seat;
      })
    );
   // console.log(changingseat, "after insertion:", seatId);
   console.log(changingseat, "row1white", row1);
   
   
   for(let i=0;changingseat.length>i;i++){
    if(changingseat.id!==0){
  //countr=countr+1;
  console.log(changingseat[i].id,"id!!==0");
  str1 += `${changingseat[i].id}&`;
  
  console.log("str1:",str1);
    }
    
  }
  };
  //console.log("from outer:",changingseat);

  console.log("length", changingseat.length);

  const handleSeatClick1row2green = async (seatId) => {
    setRow2((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          // Update the seat in the array
          const updatedSeat = {
            ...seat,
            selected: !seat.selected,
            empty: !seat.empty,
          };
          // Update the separate state x

          setchangingseat((prevChangingSeat) => {
            const updatedSeats = prevChangingSeat.map((seat) => {
              if (seat.id === updatedSeat.id) {
                // Update the value of a particular property of the seat
                return { ...seat, id: 0 };
              }
              return seat;
            });

            return updatedSeats;
          });

          return updatedSeat;
        }
        return seat;
      })
    );
   // console.log(changingseat, "row2green", row2);
  };

  const handleSeatClick1row2white = async (seatId) => {
    console.log("before insertion:", changingseat, seatId);

    setRow2((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          // Update the seat in the array
          const updatedSeat = {
            ...seat,
            selected: !seat.selected,
            empty: !seat.empty,
          };
          // Update the separate state x
          let check = 0;
          if (changingseat.length == 0) {
            changingseat.push(updatedSeat);
          } else {
            changingseat.map((Element) => {
              if (Element.id !== updatedSeat.id) {
                check = 1;
              } else {
                check = 0;
              }
            });
            if (check == 1) {
              changingseat.push(updatedSeat);
            }
          }

          return updatedSeat;
        }
        return seat;
      })
    );
    //console.log(changingseat,"after insertion:",seatId);
 //   console.log(changingseat, "row2white", row2);



 for(let i=0;changingseat.length>i;i++){
  if(changingseat.id!==0){
//countr=countr+1;
console.log(changingseat[i].id,"id!!==0");
str1 += `${changingseat[i].id}&`;

console.log("str1:",str1);
  }
  
}


  };

  console.log(
    "changingseat:",
    "Chantgingseat.length from outer:",
    changingseat.length,
    changingseat[0]
  );

  const handleSeatClick2row3green = async (seatId) => {
    setRow3((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          // Update the seat in the array
          const updatedSeat = {
            ...seat,
            selected: !seat.selected,
            empty: !seat.empty,
          };
          // Update the separate state x

          setchangingseat((prevChangingSeat) => {
            const updatedSeats = prevChangingSeat.map((seat) => {
              if (seat.id === updatedSeat.id) {
                // Update the value of a particular property of the seat
                return { ...seat, id: 0 };
              }
              return seat;
            });

            return updatedSeats;
          });

          return updatedSeat;
        }
        return seat;
      })
    );

   // console.log(changingseat, "row3wgreen", row3);
  };

  const handleSeatClick2row3white = async (seatId) => {
    console.log("before insertion:", changingseat, seatId);

    setRow3((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          // Update the seat in the array
          const updatedSeat = {
            ...seat,
            selected: !seat.selected,
            empty: !seat.empty,
          };
          // Update the separate state x
          let check = 0;
          if (changingseat.length == 0) {
            changingseat.push(updatedSeat);
          } else {
            changingseat.map((Element) => {
              if (Element.id !== updatedSeat.id) {
                check = 1;
              } else {
                check = 0;
              }
            });
            if (check == 1) {
              changingseat.push(updatedSeat);
            }
          }

          return updatedSeat;
        }
        return seat;
      })
    );
    // console.log(changingseat,"after insertion:",seatId);
  //  console.log(changingseat, "row3white", row3);
  };
let count1=0

  for(let  i=0; changingseat.length>i;i++){

      if(changingseat[i].id!==0){

    console.log("selected seat:", changingseat[i].id,changingseat[i].selected);

      }

  }



  const [row1, setRow1] = useState([]);

  const [row2, setRow2] = useState([]);

  const [row3, setRow3] = useState([]);

  let leftside = "left";

  let rightside = "right";

  let midsided = "midsided";

  return (
    <>
      <div
        className="full d-flex align-items-center justify-content-center "
        style={{ width: "1279px", height: "800px" }}
      >
        <div className=" w-25 border border-3 border-dark h-75 rounded rotate-right-to-left">
          <div className="steering-buses-seats1 w-100 h-100    ">
         <RiSteering2Line className="fs-1 position-relative  top-4 left-2 opacity-25" />

            <div className="buses-seats2 w-100 h-ab75 bg-light d-flex justify-content-between  align-items-center ">
              <div className="left-sided-buses w-50 h-100 flex-column border border border-info  d-flex   ">
                {row1.map((seat) => (
                  <div
                    className={`myseat ${isPressed ? "pressed" : ""}`}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
                    {seat.empty === false && seat.selected === true ? (
                      <img
                        src={green}
                        onClick={() => handleSeatClickrow1green(seat.id)}
                        alt="image1"
                        width="70px"
                        height="28px"
                      />
                    ) : seat.empty === true && seat.selected === false ? (
                      <img
                        src={white}
                        alt="image1"
                        onClick={() => handleSeatClickrow1white(seat.id)}
                        width="70px"
                        height="28px"
                      />
                    ) : seat.empty === false && seat.selected === false ? (
                      <img src={black} width="70px" height="28px" />
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="right-sided-buses w-50 h-100 flex-column   d-flex">
                {row2.map((seat) => (
                  <div
                    id="m1"
                    className={`myseat  ${isPressed ? "pressed" : ""}`}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
                    {seat.empty === false && seat.selected === true ? (
                      <img
                        src={green}
                        alt="image1"
                        onClick={() => handleSeatClick1row2green(seat.id)}
                        width="70px"
                        height="28px"
                      />
                    ) : seat.empty === true && seat.selected === false ? (
                      <img
                        src={white}
                        alt="image1"
                        onClick={() => handleSeatClick1row2white(seat.id)}
                        width="70px"
                        height="28px"
                      />
                    ) : seat.empty === false && seat.selected === false ? (
                      <img
                        src={black}
                        alt="image1"
                        width="70px"
                        height="28px"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="d-flex flex-row gap-manually   w-100">
              {row3.map((seat) => (
                <div
                  className={`myseat  ${isPressed ? "pressed" : ""}`}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  {seat.empty === false && seat.selected === true ? (
                    <img
                      src={green}
                      alt="image1"
                      width="50px"
                      height="28px"
                      onClick={() => handleSeatClick2row3green(seat.id)}
                    />
                  ) : seat.empty === true && seat.selected === false ? (
                    <img
                      src={white}
                      alt="image1"
                      width="50px"
                      height="28px"
                      onClick={() => handleSeatClick2row3white(seat.id)}
                    />
                  ) : seat.empty === false && seat.selected === false ? (
                    <img src={black} alt="image1" width="50px" height="28px" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  
    
      <div   className="d-flex but-show gap align-items-center">
      <div   className="showing_bar  d-flex  flex-row ">
 <p  className="jp">SEAT NO:</p>     { changingseat && changingseat.map((item)=>(

    item.id!==0?(<p  className="te-show">{item.id},</p>):null
  

  ))}
    
      </div>
    

<div className="butr">

      <button
        onClick={() => ordering2()}
        type="button"
        className="btn btn-primary butt position-relative "
      >
        Booking....
      </button>

      </div>

      </div>
    </>
  );
}

export default BusSeatAvailability2;
