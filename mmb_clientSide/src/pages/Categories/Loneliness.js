import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Blogs } from '../../components/Blogs'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Loneliness = () => {
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
      <h1 id='subcategory-head'>Loneliness</h1>
      <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
      <div id='subcategory-list'>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('I want to learn to live alone')}`}><div className='subcategory-items' >I want to learn to live alone</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('I want to find someone')}`}><div className='subcategory-items' >I want to find someone</div></Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Loneliness