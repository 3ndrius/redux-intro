import React from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {

  console.log(props);
    return(
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
         <div className="container">
  <Link className="navbar-brand" to="/">Times</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" to="/categories">Categories</NavLink>
      </li> 
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>
</nav>

    )
};

export default withRouter(Navbar);