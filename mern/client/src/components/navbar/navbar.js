import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
      <Navbar bg="dark" variant="dark" expand ="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../../assets/C.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Choiced
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Nav;

// import React from "react";
 
// // We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.min.css";
 
// // We import NavLink to utilize the react router.
// import { NavLink } from "react-router-dom";
 
// // Here, we display our Navbar
// export default function Navbar() {
//  return (
//    <div>
//      <nav className="navbar navbar-expand-lg navbar-light bg-light">
//        <NavLink className="navbar-brand" to="/">Choiced Logo Here, not Netflix
//        <img style={{"width" : 10 + '%'}} src="https://lh3.googleusercontent.com/jcbqFma-5e91cY9MlEasA-fvCRJK493MxphrqbBd8oS74FtYg00IXeOAn0ahsLprxIA=w300-rw" alt="Netflix"></img>
//        </NavLink>
//        <button
//          className="navbar-toggler"
//          type="button"
//          data-toggle="collapse"
//          data-target="#navbarSupportedContent"
//          aria-controls="navbarSupportedContent"
//          aria-expanded="false"
//          aria-label="Toggle navigation"
//        >
//          <span className="navbar-toggler-icon"></span>
//        </button>
 
//        <div className="collapse navbar-collapse" id="navbarSupportedContent">
//          <ul className="navbar-nav ml-auto">
//            <li className="nav-item">
//              <NavLink className="nav-link" to="/movie">
//                Choiced
//              </NavLink>
//            </li>
//          </ul>
//        </div>
//      </nav>
//    </div>
//  );
// }