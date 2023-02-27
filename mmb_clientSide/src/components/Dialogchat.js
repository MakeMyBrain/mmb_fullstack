import React from 'react'
import NavbarComp from './Navbar2'
import './Dialogchat.css'

const Dialogchat = () => {

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
        <Iframe iframe={iframe} />
        </div>
      </div>
    </div>
  )
}

export default Dialogchat