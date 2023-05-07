import React, { useLayoutEffect } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Parenting = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
        <h1 id='subcategory-head'>Parenting</h1>
        <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
        <div id='subcategory-list'>
            <div className='subcategory-items'>Unable to spend time with child</div>
            <div className='subcategory-items'>Death of a child</div>
            <div className='subcategory-items'>Depression after childbirth</div>
            <div className='subcategory-items'>Talking about sex with child</div>
            <div className='subcategory-items'>Treating children equally</div>
            <div className='subcategory-items'>Dividing roles among parents</div>
            <div className='subcategory-items'>Comparison with other kids</div>
            <div className='subcategory-items'>Burnout due to parenting</div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Parenting