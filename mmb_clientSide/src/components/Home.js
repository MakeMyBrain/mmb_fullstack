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
            <header>
                <NavbarComp></NavbarComp>
            </header>
            <section>
                <Home2></Home2>
            </section>
            {/* <main id='main_doc'>
                <div id='flexbox' >
                    <div id='textbox'>
                        <div id='headline'>
                            Share emotions.<br />
                            Discover a Companion.<br />
                            Because You Matter.
                        </div>

                        <div id='subhead'>
                            MakeMyBrain is your partner in every tear you shed.
                        </div>
                        <a href='https://forms.gle/FC8aJN4P5nz7DXAM8' id='button'>Let's Talk</a>
                    </div>
                    <img src={stock} alt="image" id='stock' />
                </div>
                <div id='description'>
                    Discover the most amazing companions handpicked by us who
                    can help you with your emotions and thoughts better
                    than anybody else.
                </div>

                <div id='flexbox'>
                    <div className='flexitems'><div className='difference'>
                        Difference that Matters
                    </div>
                        <img src={diff} alt="difference" id='diff' />
                    </div>
                    <div className='flexitems'>
                        <div className='difference'>
                            What our Customers say!
                        </div>
                        <img src={review} alt="reviews" id='stock' />
                    </div>
                </div>
            </main> */}
            <footer>
                <Footer></Footer>
                {/* <div id='footer'>
                    Copyright © 2022, MakeMyBrain. All Rights Reserved.
                </div> */}
            </footer>
        </div>
    )
}

export default Home