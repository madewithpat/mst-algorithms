import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
   render() {
      return (
         <nav className="App-header">
            <NavLink to="/prim" className="nav-link" activeClassName="active">
               Prim's
            </NavLink>
            <Link to="/" className="home-link">
               <h1 className="title">MST Algorithms</h1>
            </Link>
            <NavLink
               to="/kruskal"
               className="nav-link"
               activeClassName="active"
            >
               Kruskal's
            </NavLink>
         </nav>
      );
   }
}

export default Header;
