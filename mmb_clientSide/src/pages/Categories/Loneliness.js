import React, { useLayoutEffect } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Loneliness = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
        <h1 id='subcategory-head'>Loneliness</h1>
        <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
        <div id='subcategory-list'>
            <div className='subcategory-items'>I want to learn to live alone</div>
            <div className='subcategory-items'>I want to find someone</div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Loneliness