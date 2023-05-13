import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'
import { Blogs } from '../../components/Blogs'
import { Link } from 'react-router-dom'

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
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Bullying and harassment')}`}><div className='subcategory-items' >Bullying and harassment</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Sexual harrassment by colleague')}`}><div className='subcategory-items' >Sexual harassment by colleague</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Incompatible boss')}`}><div className='subcategory-items' >Incompatible boss</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Narcissist nature of a colleague')}`}><div className='subcategory-items' >Narcissist nature of a colleague</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent("Colleague doesn't talk properly")}`}><div className='subcategory-items' >Colleague does not talk properly</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Colleagues gossip about me')}`}><div className='subcategory-items' >Colleagues gossip about me</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Colleagues do bitching to boss')}`}><div className='subcategory-items' >Colleagues do bitching to boss</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('A colleague is too much friendly')}`}><div className='subcategory-items' >A colleague is too much friendly</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent("Colleague doesn't work in team")}`}><div className='subcategory-items' >Colleague does not work in team</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Peer pressure of performance')}`}><div className='subcategory-items' >Peer pressure of performance</div></Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Colleagues