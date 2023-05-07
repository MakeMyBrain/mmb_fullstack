import React, { useLayoutEffect } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Relationships = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
        <h1 id='subcategory-head'>Relationships</h1>
        <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
        <div id='subcategory-list'>
            <div className='subcategory-items'>Trust issues</div>
            <div className='subcategory-items'>Breakup</div>
            <div className='subcategory-items'>Power struggles</div>
            <div className='subcategory-items'>Compatibility with partner</div>
            <div className='subcategory-items'>Incompatible families</div>
            <div className='subcategory-items'>Not available for each other</div>
            <div className='subcategory-items'>False expectations</div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Relationships