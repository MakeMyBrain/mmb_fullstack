import React, { useEffect, useLayoutEffect } from 'react'
import { Users } from "./Users"
import { useLocation, useParams } from 'react-router-dom'
import './Story.css'
import NavbarComp from './Navbar'
import Footer from './Footer'
import Aos from "aos";
import 'aos/dist/aos.css';

const Story = () => {
  // const location = useLocation()
  const { index } = useParams()
  console.log(index)

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.title = "Mind Tales - Real Career Stories"
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })




  return (
    <div>
      {Users.map(user => user.url === (index) && (
        <div>
          <NavbarComp />
          <div key={user.id}>
            <div className='story-head'>{user.quote}</div>
            <div id='story-name'>{user.name}&nbsp;&nbsp;</div>
            <div id='story-cred'>{user.company}&nbsp;&nbsp;<br />{user.mode}&nbsp;&nbsp;<br />{user.college}&nbsp;&nbsp;</div>
            <div>
              <hr id='story-line' data-aos='fade-up' />
              <div className='story-subhead' data-aos='fade-up'>Mental issues I faced</div>
              <div className='story-content' data-aos='fade-up'>{user.mentalProblem}</div>
              <hr id='story-line' data-aos='fade-up' />
              <div className='story-subhead' data-aos='fade-up'>How I solved my mental issues</div>
              <div className='story-content' data-aos='fade-up'>{user.mentalSolution}</div>
              <hr id='story-line' data-aos='fade-up' />
              <div className='story-subhead' data-aos='fade-up'>Career problems I faced</div>
              <div className='story-content' data-aos='fade-up'>{user.careerProblem}</div>
              <hr id='story-line' data-aos='fade-up' />
              <div className='story-subhead' data-aos='fade-up'>How I solved my career problems</div>
              <div className='story-content' data-aos='fade-up'>{user.careerSolution}</div>
              <hr id='story-line' data-aos='fade-up' />
              <div className='story-subhead' data-aos='fade-up'>My Roadmap</div>
              <div className='story-content' data-aos='fade-up'>{user.roadmap}<br />{user.resources}</div>
              <hr id='story-line' data-aos='fade-up' />
              <div className='story-subhead' data-aos='fade-up'>My Message</div>
              <div className='story-content' data-aos='fade-up'>{user.message}</div>
              <br /><br />
            </div>
          </div>
          <Footer />
        </div>
      ))}
    </div>
  );
}

export default Story