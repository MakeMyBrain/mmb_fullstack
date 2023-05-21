import React from 'react'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import './Pricing.css'

const Pricing = () => {
  return (
    <div>
    <NavbarComp></NavbarComp>
      <div id='pricing-body'>
      <h1 id='pricing-head'>Choose your package</h1>
      <div id='package-box'>
        <div id='package-items'>
          <div id='corporate-circle'>
            <div id='employee-count'>&lt; 50</div>
            <div id='employee-text'>Employees</div>
          </div>
          <div id='subs-price'>₹2,999/mo</div>
          <div id='subs-quarter-price'>₹7,499 per quarter</div>
          <div id='features'>Mind Tales • e-Mags • Weekly Sessions</div>
          <div id='therapy-price'>₹999</div>
          <div id='therapy-text'>per therapy session</div>
          <a href="https://api.whatsapp.com/send?phone=7979033873&text=Session%20with%20Vinamra" id='pricing-button'>I want to know about Standard package</a>
        </div>

        <div id='package-items'>
          <div id='corporate-circle'>
            <div id='employee-count'>50-200</div>
            <div id='employee-text'>Employees</div>
          </div>
          <div id='subs-price'>₹9,999/mo</div>
          <div id='subs-quarter-price'>₹25,999 per quarter</div>
          <div id='features'>Mind Tales • e-Mags • Weekly Sessions</div>
          <div id='therapy-price'>₹999</div>
          <div id='therapy-text'>per therapy session</div>
          <a href="https://api.whatsapp.com/send?phone=7979033873&text=Session%20with%20Vinamra" id='pricing-button'>I want to know about Premium package</a>
        </div>

        <div id='package-items'>
          <div id='corporate-circle'>
            <div id='employee-count'>&gt; 200</div>
            <div id='employee-text'>Employees</div>
          </div>
          <div id='subs-price'>₹24,999/mo</div>
          <div id='subs-quarter-price'>₹62,999 per quarter</div>
          <div id='features'>Mind Tales • e-Mags • Weekly Sessions</div>
          <div id='therapy-price'>₹999</div>
          <div id='therapy-text'>per therapy session</div>
          <a href="https://api.whatsapp.com/send?phone=7979033873&text=Session%20with%20Vinamra" id='pricing-button'>I want to know about Exclusive package</a>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Pricing