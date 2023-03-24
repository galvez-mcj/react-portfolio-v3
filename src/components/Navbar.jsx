import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="nav-bar">
        <div className="nav-logo">
          <Link to={`/`}>Tinay</Link>
        </div>
        <nav className="nav-items">
          <Link to={`about`} className="nav-item">About</Link>
          <Link to={`projects`} className="nav-item">Projects</Link>
          <Link to={`skills`} className="nav-item">Skills</Link>
          <Link to={`contact`} className="nav-item">Contact</Link>
        </nav>
    </header>
  )
}

export default Navbar
