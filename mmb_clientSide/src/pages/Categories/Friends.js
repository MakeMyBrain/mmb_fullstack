import React, { useLayoutEffect } from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'
import NavbarComp from '../../components/Navbar'
import Footer from '../../components/Footer'

const Friends = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='subcategory-container'>
        <NavbarComp></NavbarComp>
        <h1 id='subcategory-head'>Friends</h1>
        <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
        <div id='subcategory-list'>
            <Link to='/' className='subcategory-items'>Anxiety of making new friend</Link>
            <Link to='/' className='subcategory-items'>Compatibility of friend</Link>
            <Link to='/' className='subcategory-items'>Loss of friendship</Link>
            <Link to='/' className='subcategory-items'>Conflicts due to culture or religion</Link>
            <Link to='/' className='subcategory-items'>Conflicts due to opinions</Link>
            <Link to='/' className='subcategory-items'>Comparison with friend</Link>
            <Link to='/' className='subcategory-items'>Friend makes you feel inferior</Link>
            <Link to='/' className='subcategory-items'>Friend forces you for substance abuse</Link>
            <Link to='/' className='subcategory-items'>Exclusion from friends group</Link>
            <Link to='/' className='subcategory-items'>Friend betrayed for money</Link>
            <Link to='/' className='subcategory-items'>Friend betrayed through relationship affair</Link>
            <Link to='/' className='subcategory-items'>Friends gossip about me</Link>
            <Link to='/' className='subcategory-items'>I am introverted in nature</Link>
            <Link to='/' className='subcategory-items'>A friend is attracted to me but I don't want that</Link>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Friends