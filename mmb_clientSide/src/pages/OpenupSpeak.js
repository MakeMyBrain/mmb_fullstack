import React, { useEffect, useLayoutEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mic from '../media/podcast.png'
import './Openup.css'
import NavbarComp from '../components/Navbar'
import Footer from '../components/Footer'
import Timer from '../components/Timer'
import { useState } from 'react'
import SearchBlogFromQuery from '../searchAlgorithm/search-query'
import SpeechRecognitionComponent from '../components/SpeechRecognitionComponent'

const OpenupSpeak = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  const [childVariable, setChildVariable] = useState('');

  const handleChildVariable = (variable) => {
    setChildVariable(variable);
  };
  const handleClick = () => {
    const def_result = SearchBlogFromQuery(childVariable);
    console.log(def_result);
  }
  useEffect(() => {
    document.title = "Speak - Express your Emotions | MakeMyBrain"
  }, [])
  return (
    <div>
      <NavbarComp></NavbarComp>
      <div className='openup-container'>
        <h1 id='openup-head'>Open Up</h1>
        <Timer></Timer>
        <div id='openup-subhead-speak'>Select your preferred language to start speaking.</div>
        <SpeechRecognitionComponent sendVariable={handleChildVariable} />
        <Link to='/openup/text' className='openup-express'>Type</Link>
        <Link to='/category' className='openup-express' onClick={handleClick}>Next</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default OpenupSpeak