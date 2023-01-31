import React from 'react'
import './Therapist.css'
import NavbarComp from './Navbar'
import Footer from './Footer'
import { useEffect, useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';

import vinamra from "../media/therapists/vinamra.png"
import shalmaly from "../media/therapists/shalmaly.jpg"

const Therapist = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }
      
      );
      useEffect(() => {
        document.title = "Choose your Therapist and talk about your mental health problems | MakeMyBrain"
    }, [])
  return (
    <div>
        <header>
            <NavbarComp></NavbarComp>
        </header>
        <div id="therapist_heading">Choose your Therapist</div>
        <div id='c-t_flexbox'>
            <Link to="/companion" id='therapist_c'>Companions</Link>
            <Link to="/therapist" id='therapist_t'>Therapists</Link>
        </div>
        <div id='t-c-desc'>Talk to a clinically certified therapist and open up about your mental health issues, 
            get solutions and get one week of free chat support from Team MakeMyBrain.
        </div>





        <div id='therapist_flexbox'>
            
                
            <div className='therapist_card'>
                <img src={vinamra} alt="Vinamra Vasudeva" className='therapist_img'/>
                <div>
                   <div className='therapist_title'>Vinamra Vasudeva</div>
                   <div className='therapist_tagline'>Your guide for hard-hitting insights!</div>
                   <div className='therapist_tagline'>1+ yrs of experience</div>      
                   <div className='therapist_tagline'>Anxiety • Productivity • Lifestyle</div>                                
                   <div className='therapist_price'>₹ <s>1000</s> 749/- per session</div>
                   <div className='therapist_language'>Speaks - English, Kannada, Hindi</div>
                   <a href="https://api.whatsapp.com/send?phone=7979033873&text=Session%20with%20Vinamra" className='therapist_button'>Send Message</a>
            </div>              
            </div>

            <div className='therapist_card'>
                <img src={shalmaly} alt="Shalmaly Chatterjee" className='therapist_img'/>
                <div>
                   <div className='therapist_title'>Shalmaly Chatterjee</div>
                   <div className='therapist_tagline'>It's a battle, but you don't need to fight it alone!</div>
                   <div className='therapist_tagline'>6+ yrs of experience</div>      
                   <div className='therapist_tagline'>Depression • Relationship • Adolescence</div>                                
                   <div className='therapist_price'>₹ <s>1000</s> 699/- per session</div>
                   <div className='therapist_language'>Speaks - English, Hindi, Bengali</div>
                   <a href="https://api.whatsapp.com/send?phone=7979033873&text=Session%20with%20Shalmaly" className='therapist_button'>Send Message</a>

            </div>              
            </div>

            
        </div>










        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default Therapist