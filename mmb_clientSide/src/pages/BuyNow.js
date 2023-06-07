import React, { useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import stresskit from '../media/web-product-non.png'
import './Product.css'

const BuyNow = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      })
    useEffect(() => {
        document.title = "30% Discount - Pre-order your Stress Relief Kit | MakeMyBrain"
      }, [])

  return (
    <div>
        <NavbarComp></NavbarComp>
        <div className='ascend_container'>
            <div className='ascend_head'>
                ASCEND
            </div>
            <div className='ascend_subhead'>
                <b>INDIA'S 1st STRESS RELIEF KIT</b>
            </div>
            <img src={stresskit} className='ascend_img'/>

            <div className='ascend_content'>We are going to begin our sale shortly. Until that golden day, 
            we are accepting pre-orders from you, so that you can avail a huge 30% discount on the original 
            price, and decrease your stress 30% more than others :P
        </div>
            <a href='https://forms.gle/sChdFMLyD5zLLmzo8' className='ascend_button'>Pre-order Now</a>
            <div className='ascend_offer'>Pay only when you finally place your order</div>
            
        
        </div>
        <Footer></Footer>
    </div>
  )
}

export default BuyNow