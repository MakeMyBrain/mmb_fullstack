import React from 'react'
import { Link } from 'react-router-dom'
import './Footer2.css'
import { FaOutdent, FaDashcube, FaPen, FaUser } from "react-icons/fa";

const Footer2 = () => {
    return (
        <div >
            <div className='block'>
                <button><FaOutdent /></button>
                <button><FaDashcube /></button>
                <button><FaPen /></button>
                <button><FaUser /></button>
            </div>
        </div>
    )
}

export default Footer2