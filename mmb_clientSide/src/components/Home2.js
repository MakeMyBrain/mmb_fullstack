import './Home2.css'
import logo from "../media/mmb_logo.png"
import open_up from '../media/open_up-removebg-preview.png'
import { Container, Row, Col, ModalTitle } from "react-bootstrap";
import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";
import { GiShieldEchoes, GiDragonBalls } from "react-icons/gi";
import { SiDiscourse } from "react-icons/si";
import {Link} from "react-router-dom";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import musicboy from '../media/musicboy.png';
import companiontalk from '../media/companiontalk.png';
import therapist from '../media/therapist.png';
import job from '../media/job.png';

const Home2 = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <div id='homepage'>
            <div className='banner'>
                <div className="text-box">
                    <img src={logo} alt='MakeMyBrain Pvt Ltd' id='mmb_logo'/>
                    <h1 class="heading-primary">
                        <span class="heading-primary-main">One-Stop Solution for your</span> 
                        <span className='typewrite heading-primary-main'>
                        <Typewriter 
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 30,
                                    strings: [
                                        "Stress.",
                                        "Breakup.",
                                        "Loneliness.",
                                        "Anger.",
                                    ],
                                }}
                            /> 
                            </span>
                        <br />
                    </h1>
                    <Link to='/mood' id='button2'>Explore</Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Home2;