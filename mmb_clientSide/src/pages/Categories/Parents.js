import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
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
        <div className='subcategory-items' onClick={() => handleClick('Ageing of parents')}>Ageing of parents</div>
        <div className='subcategory-items' onClick={() => handleClick('Unable to spend time with family')}>Unable to spend time with family</div>
        <div className='subcategory-items' onClick={() => handleClick('Conflict between parents')}>Conflict between parents</div>
        <div className='subcategory-items' onClick={() => handleClick('Divorce of parents')}>Divorce of parents</div>
        <div className='subcategory-items' onClick={() => handleClick('Death of a parent')}>Death of a parent</div>
        <div className='subcategory-items' onClick={() => handleClick('Family pressure over career')}>Family pressure over career</div>
        <div className='subcategory-items' onClick={() => handleClick('Family pressure over getting married')}>Family pressure over getting married</div>
        <div className='subcategory-items' onClick={() => handleClick('Family not accepting my relationship')}>Family not accepting my relationship</div>
        <div className='subcategory-items' onClick={() => handleClick('Domination of parent')}>Domination of parent</div>
        <div className='subcategory-items' onClick={() => handleClick('Parents favour one child over other')}>Parents favour one child over other</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Parents