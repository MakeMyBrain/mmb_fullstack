import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar3.css'
import { FaRegComments, FaSignal, FaPen, FaUserAlt } from "react-icons/fa";



const Navbar3 = () => {
    return (
        <div id='navBar3'>
            <div><button><FaSignal /></button></div>
            <div><button><FaRegComments /></button></div>
            <div><button><FaPen /></button></div>
            <div><button><FaUserAlt /></button></div>
        </div>
    );
}

export default Navbar3;