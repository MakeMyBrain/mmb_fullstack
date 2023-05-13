import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Blogs } from '../../components/Blogs'
import './Categories.css'
import { Link } from 'react-router-dom'
import NavbarComp from '../../components/Navbar'
import Footer from '../../components/Footer'

const Friends = () => {
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
      <h1 id='subcategory-head'>Friends</h1>
      <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
      <div id='subcategory-list'>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Anxiety of making new friend')}`}><div className='subcategory-items' >Anxiety of making new friend</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Compatibility with friend')}`}><div className='subcategory-items' >Compatibility with friend</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Loss of friendship')}`}><div className='subcategory-items' >Loss of friendship</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('conflicts due to culture or religion')}`}><div className='subcategory-items' >Conflicts due to culture or religion</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Conflicts due to opinions')}`}><div className='subcategory-items' >Conflicts due to opinions</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Comparison with friend')}`}><div className='subcategory-items' >Comparison with friend</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Friend makes you feel inferior')}`}><div className='subcategory-items' >Friend makes you feel inferior</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Friend forces for substance abuse')}`}><div className='subcategory-items' >Friend forces you for substance abuse</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Exclusion from friends group')}`}><div className='subcategory-items' >Exclusion from friends group</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Friend betrayed for money')}`}><div className='subcategory-items' >Friend betrayed for money</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Friend betrayed through relationship affair')}`}><div className='subcategory-items' >Friend betrayed through relationship affair</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('Friends gossip about me')}`}><div className='subcategory-items' >Friends gossip about me</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent('I am introverted in nature')}`}><div className='subcategory-items' >I am introverted in nature</div></Link>
      <Link className='subcategory-links' to={`/All?RecognizedText=${encodeURIComponent("A friend is attracted to me but I don't want that")}`}><div className='subcategory-items' >A friend is attracted to me but I don't want that</div></Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Friends