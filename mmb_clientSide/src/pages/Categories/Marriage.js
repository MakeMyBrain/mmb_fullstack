import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Blogs } from '../../components/Blogs'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Marriage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  const RecognizedText = "Power struggles"
  const handleClick = (subcategory) => {
    // const results = Blogs.filter((blog) => blog.subcategory === subcategory);
    // setRecognizedText(subcategory);
  }

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
      <h1 id='subcategory-head'>Marriage</h1>
      <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
      <div id='subcategory-list'>
        <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Power struggles')}`}><div className='subcategory-items' >Power struggles</div></Link>
        <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Violence')}`}><div className='subcategory-items' >Violence in marriage</div></Link>
        <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Emotional harassment')}`}><div className='subcategory-items' >Emotional harassment</div></Link>
        <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Difference of beliefs')}`}><div className='subcategory-items' >Difference of beliefs</div></Link>
        <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Divorce')}`}><div className='subcategory-items' >Divorce</div></Link>
        <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Trust issues')}`}><div className='subcategory-items' >Trust issues</div></Link>
        <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('False expectations')}`}><div className='subcategory-items' >False expectations</div></Link>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Marriage