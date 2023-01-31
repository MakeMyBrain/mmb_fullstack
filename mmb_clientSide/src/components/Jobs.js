import React from 'react'
import './Jobs.css'
import NavbarComp from './Navbar'
import Footer from './Footer'
import { useEffect, useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
import Binay_cv from "../media/resume/Strategy_Resume_Binay_Bhattacharya.pdf"

const Jobs = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }
      
      );
      useEffect(() => {
        document.title = "Hire the next Revolution for your company | MakeMyBrain"
    }, [])
  return (
    <div>
        <header>
            <NavbarComp></NavbarComp>
        </header>
        <h1 id="mood_heading">Hire the next Revolution for your Company</h1>
        <div id='jobs_tagline'>
            Choose the best talents suiting your company's job description and uplift growth. 
            It's important to realize that great talent is not always hired, it's often made 
            with culture and efforts. <br/>
            This page is under construction. We are sorry for the inconvenience.
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        {/*<div className='jobs_flexbox'>
            <div className='jobs_flexitem'>
                <div className='jobs_title'>Rounak Kumar</div>
                <div className='jobs_desc'>SDE | NIT Patna'22</div>
                <div className='jobs_desc'>Last Company - Ola</div>
                <div className='jobs_email'>rounakj.ug18.me@nitp.ac.in</div>
                <a href={Binay_cv} className='jobs_resume'>View Resume</a><br/><br/>
                <a href="https://api.whatsapp.com/send?phone=7979033873&text=Talk%20to%20Rounak" className='jobs_button' >Send Message</a>
            </div>

            <div className='jobs_flexitem'>
                <div className='jobs_title'>Rounak Kumar</div>
                <div className='jobs_desc'>SDE | NIT Patna'22</div>
                <div className='jobs_desc'>Last Company - Ola</div>
                <div className='jobs_email'>rounakj.ug18.me@nitp.ac.in</div>
                <a href={Binay_cv} className='jobs_resume'>View Resume</a><br/><br/>
                <a href="https://api.whatsapp.com/send?phone=7979033873&text=Talk%20to%20Rounak" className='jobs_button' >Send Message</a>
            </div>

            <div className='jobs_flexitem'>
                <div className='jobs_title'>Rounak Kumar</div>
                <div className='jobs_desc'>SDE | NIT Patna'22</div>
                <div className='jobs_desc'>Last Company - Ola</div>
                <div className='jobs_email'>rounakj.ug18.me@nitp.ac.in</div>
                <a href={Binay_cv} className='jobs_resume'>View Resume</a><br/><br/>
                <a href="https://api.whatsapp.com/send?phone=7979033873&text=Talk%20to%20Rounak" className='jobs_button' >Send Message</a>
            </div>

            <div className='jobs_flexitem'>
                <div className='jobs_title'>Rounak Kumar</div>
                <div className='jobs_desc'>SDE | NIT Patna'22</div>
                <div className='jobs_desc'>Last Company - Ola</div>
                <div className='jobs_email'>rounakj.ug18.me@nitp.ac.in</div>
                <a href={Binay_cv} className='jobs_resume'>View Resume</a><br/><br/>
                <a href="https://api.whatsapp.com/send?phone=7979033873&text=Talk%20to%20Rounak" className='jobs_button' >Send Message</a>
            </div>

            
  </div>*/}

        <footer>
            <Footer></Footer>
        </footer>

    </div>
  )
}

export default Jobs