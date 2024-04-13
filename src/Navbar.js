import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li className='li'>
            <Link to="/">Home</Link>
            
          </li>
          <li className='li'>
            <Link to="/createcrewmate">Create a Crewmate!</Link>
          </li>
          <li className='li'>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
