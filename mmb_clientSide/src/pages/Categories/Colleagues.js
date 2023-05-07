import React, { useLayoutEffect } from 'react'
import Footer from '../../components/Footer'
import NavbarComp from '../../components/Navbar'
import './Categories.css'

const Colleagues = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='subcategory-container'>
      <NavbarComp></NavbarComp>
        <h1 id='subcategory-head'>Colleagues</h1>
        <div id='subcategory-subhead'>Select the category that relates to your problem.</div>
        <div id='subcategory-list'>
            <div className='subcategory-items'>Bullying and harassment</div>
            <div className='subcategory-items'>Sexual harassment by colleague</div>
            <div className='subcategory-items'>Incompatible boss</div>
            <div className='subcategory-items'>Narcissist nature of a colleague</div>
            <div className='subcategory-items'>Colleague does not talk properly</div>
            <div className='subcategory-items'>Colleagues gossip about me</div>
            <div className='subcategory-items'>Colleagues do bitching to boss</div>
            <div className='subcategory-items'>A colleague is too much friendly</div>
            <div className='subcategory-items'>Colleague does not work in team</div>
            <div className='subcategory-items'>Peer pressure of performance</div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Colleagues