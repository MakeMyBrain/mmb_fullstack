import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Blogs } from '../../components/Blogs'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Parenting = () => {
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
      <h1 id='subcategory-head'>Parenting</h1>
      <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
      <div id='subcategory-list'>
        <div className='subcategory-items' onClick={() => handleClick('Unable to spend time with child')}>Unable to spend time with child</div>
        <div className='subcategory-items' onClick={() => handleClick('Death of a child')}>Death of a child</div>
        <div className='subcategory-items' onClick={() => handleClick('Depression after childbirth')}>Depression after childbirth</div>
        <div className='subcategory-items' onClick={() => handleClick('Talking about sex with child')}>Talking about sex with child</div>
        <div className='subcategory-items' onClick={() => handleClick('Treating children equally')}>Treating children equally</div>
        <div className='subcategory-items' onClick={() => handleClick('Dividing roles among parents')}>Dividing roles among parents</div>
        <div className='subcategory-items' onClick={() => handleClick('Comparison with other kids')}>Comparison with other kids</div>
        <div className='subcategory-items' onClick={() => handleClick('Burnout due to parenting')}>Burnout due to parenting</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Parenting