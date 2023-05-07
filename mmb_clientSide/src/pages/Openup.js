import React, { useEffect, useLayoutEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mic from '../media/podcast.png'
import './Openup.css'
import NavbarComp from '../components/Navbar'
import Footer from '../components/Footer'

const Openup = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
    useEffect(() => {
        document.title = "Open Up - Express your Emotions | MakeMyBrain"
    }, [])
  return (
    
    <div>
        <NavbarComp></NavbarComp>
        <div className='openup-container'>
            <h1 id='openup-head'>Open Up</h1>
            <img src={mic} alt='Mic' id='mic-img'/>
            <div id='openup-subhead'>You get a 5-minute window to express your emotions by typing or speaking.</div>
            <Link to='/openup/text' className='openup-express'>Type</Link>
            <Link to='/openup/speak' className='openup-express'>Speak</Link>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Openup