import React, { useLayoutEffect } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Marriage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
        <h1 id='subcategory-head'>Marriage</h1>
        <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
        <div id='subcategory-list'>
            <div className='subcategory-items'>Power struggles</div>
            <div className='subcategory-items'>Violence</div>
            <div className='subcategory-items'>Substance abuse</div>
            <div className='subcategory-items'>Emotional harassment</div>
            <div className='subcategory-items'>Difference of beliefs</div>
            <div className='subcategory-items'>Divorce</div>
            <div className='subcategory-items'>Trust issues</div>
            <div className='subcategory-items'>False expectations</div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Marriage