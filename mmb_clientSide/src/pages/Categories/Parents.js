import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Blogs } from '../../components/Blogs'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Parents = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  const [searchResults, setSearchResults] = useState([]);
  const handleClick = (subcategory) => {
    const results = Blogs.filter((blog) => blog.subcategory === subcategory);
    setSearchResults(results);
    console.log(results)
  }
  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
      <h1 id='subcategory-head'>Parents</h1>
      <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
      <div id='subcategory-list'>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Ageing of parents')}`}><div className='subcategory-items' >Ageing of parents</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Unable to spend time with family')}`}><div className='subcategory-items' >Unable to spend time with family</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('conflict between parents')}`}><div className='subcategory-items' >Conflict between parents</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('divorce of parents')}`}><div className='subcategory-items' >Divorce of parents</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Death of a parent')}`}><div className='subcategory-items' >Death of a parent</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('family pressure over career')}`}><div className='subcategory-items' >Family pressure over career</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('family pressure over getting married')}`}><div className='subcategory-items' >Family pressure over getting married</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('family not accepting my relationship')}`}><div className='subcategory-items' >Family not accepting my relationship</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Domination of a parent')}`}><div className='subcategory-items' >Domination of a parent</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Parents favour one child over other')}`}><div className='subcategory-items' >Parents favour one child over other</div></Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Parents