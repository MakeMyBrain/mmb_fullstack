import './Home2.css'
import open_up from '../media/open_up-removebg-preview.png'
import { Container, Row, Col, ModalTitle } from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";
import { GiShieldEchoes, GiDragonBalls } from "react-icons/gi";
import { SiDiscourse } from "react-icons/si";
import {Link} from "react-router-dom";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import musicboy from '../media/musicboy.png';
import companiontalk from '../media/companiontalk.png';
import therapist from '../media/therapist.png';
import job from '../media/job.png';
import {Users} from './Users';
import { Cards } from './Cards'; 

const Home2 = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    const [query, setQuery] = useState("");
    console.log(Users.filter(user=>user.name.toLowerCase().includes("bi")));
    return (
        <div>
            <div className='banner'>
                <div className="text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary-main">The Best One-Stop<br />
                        Solution for your<br/>
                        Career and<br/>
                        Mental Health.
                        <br/><br/> </span> 
                        <span className='typewrite heading-primary-main'>
                        <Typewriter 
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Real Stories",
                                        "Relatable failures",
                                        "Your language",
                                    ],
                                }}
                            /> 
                            </span>
                        <br />
                        
                        <span class="heading-primary-sub ">Search student stories by college, name, company, problem and more.</span>
                    </h1>
                                        
                        
                    
                    
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div >

            <input type="text" id='button' className='search' placeholder='Search here' onChange={e=> setQuery(e.target.value)}/>
                        {/* <button id='go-button'><FaSearch /></button></form> */}
                        <ul className='list'>
                            {
                                
                                Users.filter((user)=>user.name.toLowerCase().includes(query.toLowerCase()) ||
                                                     user.company.toLowerCase().includes(query.toLowerCase()) ||
                                                     user.mode.toLowerCase().includes(query.toLowerCase()) ||
                                                     user.quote.toLowerCase().includes(query.toLowerCase()) ||
                                                     user.mentalProblem.toLowerCase().includes(query.toLowerCase())
                                ).map((user) => (
                                    <li className='listItem'>
                                        <li className='card-quote'><i>"{user.quote}"</i></li>
                                        <li className='card-name'><br/>{user.name}</li>
                                        <li className='card-desc'>{user.company}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.mode}</li></li>
                                ))
                            }
                        </ul>


                                


                <div data-aos='fade-up'><h2 className='text-center-title'>Why is Opening up to someone so important?</h2></div>
                <br />
                <br />
                <Container>
                    <Row className='d-flex flex-wrap'>
                        <Col className="text-center" sm  data-aos='fade-up'><img src={open_up} alt="" className='open_up shadow-4' /></Col>
                        <Col sm className="fs-3">
                            <div data-aos='fade-up'><TbNumber1 className="ms-1 " size='60' />Releasing stress</div>
                            <div data-aos='fade-up'><TbNumber2 className="ms-1" size='60' />A different perspective</div>
                            <div data-aos='fade-up'><TbNumber3 className="ms-1 " size='60' />Proper structure of thinking</div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <div data-aos='fade-up'><h2 className='text-center-title'>What do we Offer</h2></div>
                    <div id='flexbox'>
                        
                        <div className='flex-list' data-aos='fade-up'>
                            <div><img src={musicboy} alt='Music' className='offer_img'/></div>
                            <div className='offer_title'>Music and AI Bot</div>
                            <Link to='/mood' className='offer_link'>Explore</Link>
                        </div>
                        <div className='flex-list' data-aos='fade-up'>
                            <div><img src={companiontalk} alt='Music' className='offer_img'/></div>
                            <div className='offer_title'>Companion Talks</div>
                            <Link to='/companion' className='offer_link'>Explore</Link>
                        </div>
                        <div className='flex-list' data-aos='fade-up'>
                            <div><img src={therapist} alt='Music' className='offer_img'/></div>
                            <div className='offer_title'>Therapy Talks</div>
                            <Link to='/therapist' className='offer_link'>Explore</Link>
                        </div>
                       
                    </div>

                </Container>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='quality' data-aos='fade-up'>
                <Container >
                    <br />
                    <div data-aos='fade-up'><h2 className='text-center-title text_white'>What we assure</h2></div>
                    <br />
                    <Row data-aos='fade-up'>
                        <Col className="text-center me-2"  ><GiShieldEchoes color='orange' size='60' /><h5 className='text_white'>Your Privacy is<br/>our Responsibility</h5></Col>
                        <Col className="text-center me-2" ><GiDragonBalls color='orange' size='60' /><h5 className='text_white'>Assured Quality<br/>of Services</h5></Col>
                        <Col className="text-center me-2" ><SiDiscourse color='orange' size='60' /><h5 className='text_white'>Talk without<br/>being Judged</h5></Col>
                    </Row>
                </Container>
                <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div >
                <div data-aos='fade-up'><h2 className='text-center-title'>What our Customers say</h2></div>
                
                <div className='test_flexbox' data-aos='fade-up'>
                    <div className='test_flexitem'>
                        <div className='test_para'>I felt a lot of relief after the talk. I would recommend it to 
                        people who can not afford costly therapies.</div>
                        <div className='test_name'>Shruti Khokhar</div>
                    </div>
                    <div className='test_flexitem' data-aos='fade-up'>
                        <div className='test_para'>It was a very interactive session with my companion, and I could 
                        say things I hesitated to talk about.</div>
                        <div className='test_name'>Radhika Jangra</div>
                    </div>
                    <div className='test_flexitem' data-aos='fade-up'>
                        <div className='test_para'>My companion listened to my whole story without 
                        judging, and I got a new perspective.</div>
                        <div className='test_name'>Pooja Bhatt</div>
                    </div>
                    <div className='test_flexitem' data-aos='fade-up'>
                        <div className='test_para'>I am not willing to go to a therapist for every 
                        small issue, but here I can take talks due to low prices.</div>
                        <div className='test_name'>Priya Saha</div>
                    </div>

                </div>

                
            </div>
            <br />
            <br />
        </div>
    );
}

export default Home2;