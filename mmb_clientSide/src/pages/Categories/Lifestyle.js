import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Blogs } from '../../components/Blogs'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Lifestyle = () => {
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
      <h1 id='subcategory-head'>Lifestyle</h1>
      <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
      <div id='subcategory-list'>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Anger issues')}`}><div className='subcategory-items' >Anger issues</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Sleep issues')}`}><div className='subcategory-items' >Sleep issues</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Work life balance')}`}><div className='subcategory-items' >Work life balance</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Self esteem')}`}><div className='subcategory-items' >Self esteem</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Decision making')}`}><div className='subcategory-items' >Decision-making</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Gender Identity')}`}><div className='subcategory-items' >Gender identity</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Substance abuse')}`}><div className='subcategory-items' >Substance abuse</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Jealousy')}`}><div className='subcategory-items' >Jealousy</div></Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Lifestyle