import NavbarComp from './Navbar'
import Footer from './Footer'
import about from '../media/about us banner.jpg'
import './Aboutus.css'

const AboutUs = () => {
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
                    the Mental Health space. This platform has been 
                    created by some students of IIT Kharagpur, driven by 
                    the purpose to make mental health more affordable and 
                    approachable for the youth.
                    </p>
                    <hr/>
                    <h2>
                        Our Mission
                    </h2>
                    <p>
                    MakeMyBrain aims to empower you to express your emotions 
                    and thoughts to the fullest, without the fear of being 
                    judged. Standing firm by the tagline, “Because You Matter”, 
                    we are working hard to increase the awareness regarding mental 
                    health among the youth.
                    </p>
                    <hr/>
                    <h2>
                        Our Products
                    </h2>
                    <p>
                    We offer a specialized AI Bot - KairaAI. Trained with numerous client 
                    data and healing information, KairaAI is a conversational NLP model that 
                    sympathizes with you at low times and provide practical and genuine 
                    solutions to the problems which you thought would never be solved. Along 
                    with that we have a pool of handpicked therapists who specialize in various 
                    aspects of psychology and have the experience to handle your issues. The 
                    Chatbot is accompanied by "Music for your Mood" feature that plays suitable 
                    music as per your chosen present mood. Unlike clinical 
                    therapies, we are a platform where you can comfortably discuss 
                    your life without being judged. However, in case of extreme mental 
                    health issues, we advise taking clinical help.
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