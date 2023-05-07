import React, { useLayoutEffect } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Lifestyle = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
        <h1 id='subcategory-head'>Lifestyle</h1>
        <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
        <div id='subcategory-list'>
            <div className='subcategory-items'>Anger issues</div>
            <div className='subcategory-items'>Sleep issues</div>
            <div className='subcategory-items'>Work life balance</div>
            <div className='subcategory-items'>Self esteem</div>
            <div className='subcategory-items'>Decision-making</div>
            <div className='subcategory-items'>Gender identity</div>
            <div className='subcategory-items'>Substance abuse</div>
            <div className='subcategory-items'>Jealousy</div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Lifestyle