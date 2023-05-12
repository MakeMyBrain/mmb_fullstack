import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import mic from '../media/podcast.png'
import './Openup.css'
import NavbarComp from '../components/Navbar'
import Footer from '../components/Footer'
import Timer from '../components/Timer'

const OpenupText = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  const [RecognizedText, setRecognizedText] = useState('');
  const handleInputChange = (event) => {
    setRecognizedText(event.target.value);
  }

  useEffect(() => {
    document.title = "Type - Express your Emotions | MakeMyBrain"
  }, [])
  return (
    <div>
      <NavbarComp></NavbarComp>
      <div className='openup-container'>
        <h1 id='openup-head'>Open Up</h1>
        <Timer></Timer>
        <textarea
          rows='11'
          width='300px'
          placeholder='Type your emotions and feel better...'
          id='openup-text'
          value={RecognizedText}
          onChange={handleInputChange}
        /><br />
        <Link to='/openup/speak' className='openup-express'>Speak</Link>
        <Link to={`/category?RecognizedText=${encodeURIComponent(RecognizedText)}`} className='openup-express'>Next</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default OpenupText
