import NavbarComp from './Navbar'
import Footer from './Footer'
import about from '../media/about us banner.png'
import './Aboutus.css'
import { useEffect, useLayoutEffect } from 'react'
import certi from '../media/certificate.JPG'

const AboutUs = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }
      
      );
      useEffect(() => {
        document.title = "About Us | MakeMyBrain"
      }, [])

    return (
        <div>
            <header>
                <NavbarComp></NavbarComp>
            </header>
            <main className='about_body'>
                <h1 id='head_about'>
                    About Us.
                </h1>
                <img src={about} alt='About Us' id='banner_about'/>
                <div id='containers'>
                    <h2 className='about_subhead'>
                        Our Story
                    </h2>
                    <p>
                    Started in 2022, MakeMyBrain is an Indian startup in 
                    the Mental Health wellness space. This platform has been 
                    created by some students of IIT Kharagpur, driven by 
                    the purpose to make mental health more affordable and 
                    approachable for the country through practical modern 
                    solution that are more acceptable by people.<br/><br/>
                    The startup was founded by Binay Bhattacharya in 2022, and incorporated 
                    as a private limited company in 2023. Gradually 
                    the team grew as the strategic and tech arms unfolded. Ujjwal Raj, 
                    Shivam Dwivedi, Sayan Layek and Shrit Gautam brought the tech side 
                    of the company to life, and on the other side Yash Jangade, Abhishek 
                    Kabi, Aryan Gupta and Prithviraj Suryavanshi significantly contributed 
                    to give a direction to the startup. Mr. Arvind Verma, CEO of Vehiclecare, 
                    Mr. Rajiv Sikka, Ex-CEO of Indian Oil - Adani Gas Pvt Ltd, and 
                    Nishant Jindal, a successful Educational Youtuber have 
                    remained a constant support on the growth journey.<br/><br/>
                    Relevant certificate -<br/> 
                    <img src={certi} className='certificate' alt='certificate of practice'/>


                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        Our Mission
                    </h2>
                    <p>
                    MakeMyBrain aims to empower you to open up to
                    the various perspectives of solving the mental 
                    problem that you are presently facing. Standing 
                    firm by the tagline, “Because You Matter”, we are 
                    working hard to increase the awareness regarding mental 
                    health among the Indians.
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        Our Products
                    </h2>
                    <p>

                    Our first product is <b>"Counselling Therapies"</b>, made for people seeking help 
                    with mental issues like depression, anxiety, sleepa and anger problems, OCD, and many 
                    more. Our therapies are highly effective when taken in a pack of 2-3. <br/><br/>    
                    We offer <b>Mind Tales</b> - a huge library of real-life stories on how people 
                    overcame their mental health issues, may it be in career, relationships, 
                    loneliness or trauma. You can read your favorite stories in your own language. 
                    Along with that we have a pool of handpicked therapists who specialize in various 
                    aspects of psychology and have the experience to handle your issues. <br/><br/>
                    The 
                    platform is accompanied by <b>"Mind Your Mind"</b> course on Preventive Mental Health wellness 
                    which contains our recorded videos and chapters on various aspects of mental wellness. The 
                    chapters have been carefully researched upon and verified in order to keep it interesting as 
                    well as meaningful for the audience.
                    
                    </p>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default AboutUs;