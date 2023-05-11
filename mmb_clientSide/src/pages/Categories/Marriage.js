import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Blogs } from '../../components/Blogs'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Marriage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  const [searchResults, setSearchResults] = useState([]);
  const handleClick = (subcategory) => {
    const results = Blogs.filter((blog) => blog.subcategory === subcategory);
    setSearchResults(results);
    console.log(results);
  }

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
      <h1 id='subcategory-head'>Marriage</h1>
      <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
      <div id='subcategory-list'>
        <div className='subcategory-items' onClick={() => handleClick('Power struggles')}>Power struggles</div>
        <div className='subcategory-items' onClick={() => handleClick('Violence')}>Violence</div>
        <div className='subcategory-items' onClick={() => handleClick('Substance abuse')}>Substance abuse</div>
        <div className='subcategory-items' onClick={() => handleClick('Emotional harassment')}>Emotional harassment</div>
        <div className='subcategory-items' onClick={() => handleClick('Difference of beliefs')}>Difference of beliefs</div>
        <div className='subcategory-items' onClick={() => handleClick('Divorce')}>Divorce</div>
        <div className='subcategory-items' onClick={() => handleClick('Trust issues')}>Trust issues</div>
        <div className='subcategory-items' onClick={() => handleClick('False expectations')}>False expectations</div>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Marriage