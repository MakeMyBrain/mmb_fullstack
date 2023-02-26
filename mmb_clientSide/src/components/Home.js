import React, { useEffect } from 'react'
import './Home.css'
import logo from '../media/logo.png'
import stock from '../media/website image.PNG'
import diff from '../media/difference.PNG'
import review from '../media/reviews.PNG'
import { Link } from 'react-router-dom'
import NavbarComp from './Navbar'
import Footer from './Footer'
import Home2 from './Home2'

const Home = () => {
    useEffect(() => {
        document.title = "Talk to psychologists starting at just Rs. 249 | MakeMyBrain"
    }, [])
    return (
        <div>
            {/* <header id='headerbar'>
                <div id='head_text'>MakeMyBrain</div>
                <img src={logo} alt="logo" id='logo_img' />
            </header> */}
            
            <section>
                <Home2></Home2>
            </section>
            
            
        </div>
    )
}

export default Home