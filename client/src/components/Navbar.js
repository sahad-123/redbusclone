import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
  
const Navbar =()=>{

    return(
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink  className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/Contact">Contact</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/login123">Login</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" to="/signu">Registration</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link" to="/filter-section">Filter-section</NavLink>
</li>

<li className="nav-item">
<NavLink className="nav-link" to="/logout">logout</NavLink>
</li>



    </ul>
   
  </div>
</nav>

</>
    
)


}
export default Navbar