import NavbarComp from './Navbar'
import Footer from './Footer'
import './Aboutus.css'
import faq from '../media/faq.png'

const Faq = () => {
    return (<div>
        <header>
            <NavbarComp></NavbarComp>
        </header>
        <main>
                <h1 id='head_about'>
                    FAQ.
                </h1>
                <img src={faq} alt='FAQ' id='banner_about'/>
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
                    We offer Companion Talks. These are peer talks with someone who 
                    will listen to what you are feeling, sympathize with you and 
                    share his or her perspective about the problem. Unlike clinical 
                    therapies, we are a platform where you can comfortably discuss 
                    your life without being judged. However, in case of extreme mental 
                    health issues, we advise taking clinical help.
                    </p>
                </div>
            </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>);
}

export default Faq;