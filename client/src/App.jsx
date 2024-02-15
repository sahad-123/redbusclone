import React from "react";

import {Routes,Route} from "react-router-dom";
import "./App.css";
import  Home from "./components/Home";
import  Login from "./components/Login";
import  About from "./components/About";
import  Contact from "./components/Contact";
import  Signu  from "./components/Signu";
import Navbar from "./components/Navbar";
import BusSeatAvailability from "./pages/BusSeatAvailability2";
import Filtersection from './pages/Filtersection'
import schedule_home_page from "./pages/Schedule_home_page";
import Bookingseat from "./pages/Booking_seat";

import Sbdoor from "./pages/Sbdoor";
import Bookingseat_sucess from "./pages/Bookingseat_sucess";

import Payment from "./pages/Payment";
import Loginchange from "./pages/Loginchange";
//import  Logout from "./components/Logout";
function App() {
  return (
<>




<image src="https://icons8.com/icon/25623/chair" width="100px"  height="100px"  />



<Navbar/>


<Routes>

   <Route path='/:userid' element={<Home/>}/>  
   <Route path='/about' element={<About/>}/>  
   <Route path='/contact' element={<Contact/>}/>  
   <Route path='/login/:id1/:id2/:id3/:id4/:id5/:userid' element={<BusSeatAvailability/> }/>  
   <Route path='/signu' element={<Signu/>}/>  
   <Route path='/filter-section/:info/:info1/:info2/:info3/:userid' element={<Filtersection/>}/>

<Route   path='/schedule_search'   element={<schedule_home_page/>}/>

<Route   path='/select-boor-dropping-show-price/:countr/:schu_id/:seat_ids/:id3/:id2/:countr1/:userid'   element={<Sbdoor/>}/>
<Route   path='/Booking/:schedule_id/:seat_count/:bor/:dro/:seat_ids/:id3/:id2/:price/:countr1/:userid'   element={<Bookingseat/>}/>
<Route   path='/Booking_sucess/:schedule_id/:seat_count/:bor/:dro/:seat_ids/:id3/:id2/:price/:countr1/:userid'   element={<Bookingseat_sucess/>}/>
<Route   path='/payment1/:schedule_id/:seat_count/:bor/:dro/:seat_ids/:id3/:id2/:price/:countr1/:total_price/:userid'   element={<Payment/>}/>
<Route   path='/login123'   element={<Loginchange/>}/>

</Routes>


</>
  );
}

export default App;
