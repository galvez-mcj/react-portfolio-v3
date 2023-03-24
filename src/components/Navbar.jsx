import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className="nav-bar sticky">
      <div className="nav-container">
        <Link className="nav-brand bold" to={`/`}>
          <img className="nav-logo" src={logo} alt="site logo"/>
          <span className="primary">mcj.</span>galvez
        </Link>
        <nav className="nav-items">
          <Link to={`about`} className="nav-item">About</Link>
          <Link to={`projects`} className="nav-item">Projects</Link>
          <Link to={`skills`} className="nav-item">Skills</Link>
          <Link to={`contact`} className="nav-item">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
