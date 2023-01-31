import React from 'react'
import './Companion.css'
import NavbarComp from './Navbar'
import Footer from './Footer'
import { useEffect, useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';

import jasmine from "../media/companions/jasmine.jpg"
import priyanshi from "../media/companions/priyanshi.jpg"
import hriti from "../media/companions/hriti.JPG"

const Companion = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }
    
      );
      useEffect(() => {
        document.title = "Choose your Companion and express your emotions at just Rs. 249 | MakeMyBrain"
    }, [])
  return (
    <div>
        <header>
            <NavbarComp></NavbarComp>
        </header>
        <div id="companion_heading">Choose your Companion</div>
        <div id='c-t_flexbox'>
            <Link to="/companion" id='companion_c'>Companions</Link>
            <Link to="/therapist" id='companion_t'>Therapists</Link>
        </div>
        <div id='t-c-desc'>Talk to a companion about your emotions, thoughts and loneliness. Get 
        solutions for a better well being, and one week of free chat support from Team MakeMyBrain.
        </div>
        <div id='companion_flexbox'>
            
                
            <div className='companion_card'>
                <img src={jasmine} alt="Jasmine Bhandari" className='companion_img'/>
                <div>
                   <div className='companion_title'>Jasmine Bhandari</div>
                   <div className='companion_tagline'>Here to hear, because your mental health is as important as your 
                    physical health.
                   </div>
                   <div className='companion_price'>₹ <s>500</s> 249/- per talk</div>
                   <div className='companion_language'>Speaks - English, Hindi</div>
                   <a href="https://api.whatsapp.com/send?phone=7979033873&text=Talk%20to%20Jasmine" className='therapist_button'>Send Message</a>

            </div>              
            </div>

            <div className='companion_card'>
                <img src={hriti} alt="Hriti Banerjee" className='companion_img'/>
                <div>
                   <div className='companion_title'>Hriti Banerjee</div>
                   <div className='companion_tagline'>Let me be the space you unpack your emotional baggage at.
                   </div>
                   <div className='companion_price'>₹ <s>500</s> 249/- per talk</div>
                   <div className='companion_language'>Speaks - English, Hindi, Bengali</div>  
                   <a href="https://api.whatsapp.com/send?phone=7979033873&text=Talk%20to%20Hriti" className='therapist_button'>Send Message</a>

                </div>              
            </div>

            <div className='companion_card'>
                <img src={priyanshi} alt="Priyanshi Mathur" className='companion_img'/>
                <div>
                   <div className='companion_title'>Priyanshi Mathur</div>
                   <div className='companion_tagline'>Psychologist by day, your listening companion by evening.
                   </div>
                   <div className='companion_price'>₹ <s>500</s> 249/- per talk</div>
                   <div className='companion_language'>Speaks - English, Hindi</div>  
                   <a href="https://api.whatsapp.com/send?phone=7979033873&text=Talk%20to%20Priyanshi" className='therapist_button'>Send Message</a>

                </div>              
            </div>


        </div>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default Companion