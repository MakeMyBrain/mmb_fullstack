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
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Anxiety of making new friend')}>Anxiety of making new friend</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Compatibility of friend')}>Compatibility of friend</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Loss of friendship')}>Loss of friendship</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Conflicts due to culture or religion')}>Conflicts due to culture or religion</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Conflicts due to opinions')}>Conflicts due to opinions</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Comparison with friend')}>Comparison with friend</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Friend makes you feel inferior')}>Friend makes you feel inferior</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Friend forces you for substance abuse')}>Friend forces you for substance abuse</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Exclusion from friends group')}>Exclusion from friends group</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Friend betrayed for money')}>Friend betrayed for money</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Friend betrayed through relationship affair')}>Friend betrayed through relationship affair</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('Friends gossip about me')}>Friends gossip about me</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick('I am introverted in nature')}>I am introverted in nature</Link>
        <Link to='/' className='subcategory-items' onClick={() => handleClick(`A friend is attracted to me but I don't want that`)}>A friend is attracted to me but I don't want that</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Friends