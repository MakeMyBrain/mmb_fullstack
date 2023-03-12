import React from 'react'
import "./Dashboard.css"
import NavbarComp from "./Navbar2";
import Navbar3 from "./Navbar3";
import Player from './Player';

const Dashboard = () => {
  return (
    <div id="newNavFlex">
        <header>
            <NavbarComp></NavbarComp>
        </header>
        
        Dashboard
        <footer className="nav3">
        <Navbar3></Navbar3>
      </footer>

      
        </div>
  )
}

export default Dashboard