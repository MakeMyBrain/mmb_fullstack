import React from 'react'
import './Dialogflow.css'
import { Helmet } from 'react-helmet'
import NavbarComp from './Navbar2'
import Nav3 from './Navbar3'

const Dialogflow = () => {
  return (
    <div>
        <Helmet>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        </Helmet>
      <header>
        <NavbarComp></NavbarComp>
      </header>
<df-messenger
  intent="WELCOME"
  chat-title="KairaAI"
  agent-id="50e3a8a2-4074-4ca6-9d2f-385e7781eba5"
  language-code="en"
  expand="true"
  id="df-mess"
></df-messenger>
      <footer className='nav3'>
        <Nav3></Nav3>
      </footer>
    </div>
  )
}

export default Dialogflow