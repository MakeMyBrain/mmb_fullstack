import React, { useLayoutEffect } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Parents = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
        <h1 id='subcategory-head'>Parents</h1>
        <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
        <div id='subcategory-list'>
            <div className='subcategory-items'>Ageing of parents</div>
            <div className='subcategory-items'>Unable to spend time with family</div>
            <div className='subcategory-items'>Conflict between parents</div>
            <div className='subcategory-items'>Divorce of parents</div>
            <div className='subcategory-items'>Death of a parent</div>
            <div className='subcategory-items'>Family pressure over career</div>
            <div className='subcategory-items'>Family pressure over getting married</div>
            <div className='subcategory-items'>Family not accepting my relationship</div>
            <div className='subcategory-items'>Domination of parent</div>
            <div className='subcategory-items'>Parents favour one child over other</div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Parents