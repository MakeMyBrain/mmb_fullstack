import React from 'react'
import NavbarComp from './Navbar2'
import Nav3 from './Navbar3'
import './Dialoghook.css'

const Dialoghook = () => {

  const iframe = `<iframe
  allow='microphone;'
  width='300'
  height='450'
  src='https://console.dialogflow.com/api-client/demo/embedded/50e3a8a2-4074-4ca6-9d2f-385e7781eba5'>
  </iframe>`
  
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }


  return (
    <div id="newNavFlex">
      <header>
        <NavbarComp></NavbarComp>
      </header>
      <div id='chat_window'>
        <div id='kaira_window'>
        <Iframe iframe={iframe} id='hookwindow' />
        </div>
      </div>
      <footer className='nav3'>
        <Nav3></Nav3>
      </footer>
    </div>
  )
}

export default Dialoghook