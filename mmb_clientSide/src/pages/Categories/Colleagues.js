import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'
import { Blogs } from '../../components/Blogs'

const Colleagues = () => {
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
      <h1 id='subcategory-head'>Colleagues</h1>
      <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
      <div id='subcategory-list'>
        <div className='subcategory-items' onClick={() => handleClick('Bullying and harassment')}>Bullying and harassment</div>
        <div className='subcategory-items' onClick={() => handleClick('Sexual harassment by colleague')}>Sexual harassment by colleague</div>
        <div className='subcategory-items' onClick={() => handleClick('Incompatible boss')}>Incompatible boss</div>
        <div className='subcategory-items' onClick={() => handleClick('Narcissist nature of a colleague')}>Narcissist nature of a colleague</div>
        <div className='subcategory-items' onClick={() => handleClick('Colleague does not talk properly')}>Colleague does not talk properly</div>
        <div className='subcategory-items' onClick={() => handleClick('Colleagues gossip about me')}>Colleagues gossip about me</div>
        <div className='subcategory-items' onClick={() => handleClick('Colleagues do bitching to boss')}>Colleagues do bitching to boss</div>
        <div className='subcategory-items' onClick={() => handleClick('A colleague is too much friendly')}>A colleague is too much friendly</div>
        <div className='subcategory-items' onClick={() => handleClick('Colleague does not work in team')}>Colleague does not work in team</div>
        <div className='subcategory-items' onClick={() => handleClick('Peer pressure of performance')}>Peer pressure of performance</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Colleagues