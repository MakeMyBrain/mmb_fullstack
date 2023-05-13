import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Unable to spend time with child')}`}><div className='subcategory-items' >Unable to spend time with child</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Death of a child')}`}><div className='subcategory-items' >Death of a child</div></Link>  
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Depression after childbirth')}`}><div className='subcategory-items' >Depression after childbirth</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Talking about sex with child')}`}><div className='subcategory-items' >Talking about sex with child</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Treating children equally')}`}><div className='subcategory-items' >Treating children equally</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('dividing roles among parents')}`}><div className='subcategory-items' >Dividing roles among parents</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('comparison with other kids')}`}><div className='subcategory-items' >Comparison with other kids</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Burnout due to parenting')}`}><div className='subcategory-items' >Burnout due to parenting</div></Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Parenting