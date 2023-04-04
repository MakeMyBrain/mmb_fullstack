import NavbarComp from './Navbar'
import Footer from './Footer'
import about from '../media/about us banner.jpg'
import './Aboutus.css'
import { useLayoutEffect } from 'react'

const AboutUs = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }
      
      );

    return (
        <div>
            <header>
                <NavbarComp></NavbarComp>
            </header>
            <main>
                <h1 id='head_about'>
                    About Us.
                </h1>
                <img src={about} alt='About Us' id='banner_about'/>
                <div id='containers'>
                    <h2>
                        Our Story
                    </h2>
                    <p>
                    Started in 2022, MakeMyBrain is an Indian startup in 
                    the career and Mental Health space. This platform has been 
                    created by some students of IIT Kharagpur, driven by 
                    the purpose to make mental health more affordable and 
                    approachable for the youth.
                    </p>
                    <hr/>
                    <h2>
                        Our Mission
                    </h2>
                    <p>
                    MakeMyBrain aims to empower you to open up to
                    the various perspectives of solving the mental 
                    problem that you are presently facing. Standing 
                    firm by the tagline, “Because You Matter”, we are 
                    working hard to increase the awareness regarding mental 
                    health among the youth.
                    </p>
                    <hr/>
                    <h2>
                        Our Products
                    </h2>
                    <p>
                    We offer aMind Tales - a huge library of real-life stories on how people 
                    overcame their mental health issues, may it be in career, relationships, 
                    loneliness or trauma. You can read your favorite stories in your own language. 
                    Along with that we have a pool of handpicked therapists who specialize in various 
                    aspects of psychology and have the experience to handle your issues. <br/><br/>The 
                    platform is accompanied by "Velvet Vibes" feature that plays suitable 
                    music as per your chosen present mood. Unlike clinical 
                    therapies, we are a platform where you can comfortably discuss 
                    your life without being judged, and also check out the various ways the people 
                    all over the world have solved their issues, in your own Indian language. 
                    However, in case of extreme mental health issues, we advise taking clinical help.
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