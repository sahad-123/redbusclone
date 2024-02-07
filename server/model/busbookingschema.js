const mongoose= require('mongoose');

const  schedule= new mongoose.Schema({
starting_point:{
    type:String,
    required:true
   
},

destination_point:{
    type:String,
    required:true

},

schedule_date:{


    type:String,
    required:true
},

timing_schedule:[
{

type:mongoose.Schema.Types.ObjectId,
ref:'timing_schedule'

}



],


boording_point:{
    type: [String],
    required:true
       
    
},

dropping_point:{

    type: [String],
    required:true
       
}


});



const  schedule_timing= new mongoose.Schema({
  
 
 
 destination_name:{
    type:String,
    required:true
 }
 
    ,  first_hour_of_starting_time_number:{

        type:Number,
        required:true
       
    },
  
   hour_and_miniute_starting_time_string:{
        type:String,
        required:true
       
    },
    
    
    
  first_hour_of_deprature_time_number:{
        type:Number,
        required:true
    
    },


    hour_and_miniute_deprature_time_string:{
        type:String,
        required:true
       
    },
    
    subboording_point:{
    
    
        type:  mongoose.Schema.Types.Mixed,
        required:true
    }
    ,

        
    dropping_point:{
    
    
        type: mongoose.Schema.Types.Mixed,
        required:true
    }
    ,

    estimated_time:{
        type:String,
        required:true


    },

    fare_amount:{

        type:String,
        required:true

    }
    ,

    Bus:[
        {
        
        type:mongoose.Schema.Types.ObjectId,
        ref:'Bus'
        
        }],


        company_id:[{

            type:mongoose.Schema.Types.ObjectId,
            ref:'Bus_company'

    }    ]
    });



    const  bus= new mongoose.Schema({


bus_number:{

    type:Number,
    required:true
},
bus_name:{


    type:String,
    required:true
},

bus_capacity:{
  type:Number,
  required:true

},

bus_type:{
    type: [String],
    required:true
}
,

bus_facilities:{

    type:  [String],
    required:true

}
,


Bus_company:[
    {
    
    type:mongoose.Schema.Types.ObjectId,
    ref:'Bus_company'
    
    }],
    seatAvaliable:{

        type:Object
    }


    });



    const  bus_company= new mongoose.Schema({

company_name:{

   type:String,
   required:true

}



    });


    const  company_bus_big_area_location= new mongoose.Schema({


biglocation_name:{
    type:String,
    required:true
}
,
Bus_company:[
    {
    
    type:mongoose.Schema.Types.ObjectId,
    ref:'Bus_company'
    
    }],

sublocation:  { type:  mongoose.Schema.Types.Mixed,
required:true
}



    });



        


    const  bus_booking= new mongoose.Schema({

        passenger_name:{


            type:String,
            required:true
        },

Male:{

 type:Boolean,
 required:true

},
Female:{

   type:Boolean,required:true

}
,age:{

type:Number,
requiered:true

},

city_of_residence:{
  type:String,
  required:true

},


city_of_state:{

    type:String,
    required:true

}
,


total_price:{

  type:Number,
  required:true

},
deprature_date:{


    type:String,
    required:true
},
Bus_seat_id:{

    type:String,
    required:true

}
,
Bus_name:{
    type:String,required:true
}
,
boording_point:{

 type:String,
 required:true

},



dropping_point:{

    type:String,
    required:true
   
   },

  start_time:{
type:String,
required:true

  },
  estimated_time:{

   type:String,
   required:true

  }
  

    })


    const  userschema= new mongoose.Schema({

        name:{
         type:String,
         required:true
        
        },
        email:{
         type:String,
         required:true
        
        },
        phone:{
        
            type:Number,
            required:true
        },
    
        password:{
        
        type:String,
        required:true
        
        },cpassword:{
         
            type:String,
            required:true
        
        }
        
        
        
        
        
        
        
        
        
        });












        const  user_booking= new mongoose.Schema({

            userid:{

type:String,
required:true


            },
            username:{

                type:String,
                required:true


            },
             total_price: {
                type:Number,
                required:true


             },
    card_number:{

        type:String,
        required:true

    },
    seat_count:{

        type:Number,
        required:true

    },
    boording_point:{
        type:String,
        required:true

    },
    dropping_point:{

        type:String,
        required:true
    },
    seat_ids:{

type:Array,required:true


    },
    schedule_id:{

        
        type:String,
        required:true
    }
    




        })
    
        const user1=mongoose.model('user1',userschema);
const userbooking=mongoose.model('userbooking',  user_booking)

const schedule_bus=mongoose.model('schedule_bus',schedule);
const  timing_schedule=mongoose.model('timing_schedule',schedule_timing);

const Bus=mongoose.model('Bus',bus);

const Bus_company=mongoose.model('Bus_company',bus_company);

                    const Bus_booking=mongoose.model('Bus_booking',bus_booking);
const buscompany_bigloaction=mongoose.model('buscompany_bigloaction',  company_bus_big_area_location);



module.exports={schedule_bus,userbooking,timing_schedule,user1,Bus,Bus_company,buscompany_bigloaction,Bus_booking};