import React from 'react'
import "./Blogs.css"
import NavbarComp from "./Navbar2";
import Navbar3 from "./Navbar3";
import Player from './Player';

const Blogs = () => {
  return (
    <div id="newNavFlex">
        <header>
            <NavbarComp></NavbarComp>
        </header>
        
        Blogs
        <footer className="nav3">
        <Navbar3></Navbar3>
      </footer>

      
        </div>
  )
}

export default Blogs