import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar3.css'
import { FaRegComments, FaSignal, FaPen, FaUserAlt } from "react-icons/fa";



const Navbar3 = () => {
    return (
        <div id='navBar3'>
            <div><Link to="/mood"><button><FaSignal /></button></Link></div>
            <div><Link to="/chat"><button><FaRegComments /></button></Link></div>
            <div><Link to="/blogs"><button><FaPen /></button></Link></div>
            <div><Link to="/dashboard"><button><FaUserAlt /></button></Link></div>
        </div>
    );
}

export default Navbar3;