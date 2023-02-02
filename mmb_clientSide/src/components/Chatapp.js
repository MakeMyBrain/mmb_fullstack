import React from 'react'
import './Chatapp.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/analytics';
import { useRef, useState } from 'react';
import { FaJedi } from "react-icons/fa";


firebase.initializeApp({

    apiKey: "AIzaSyAoce9zcsiaPSfnVi1gF5Q9oJ0ic2jVGEY",
  authDomain: "mmbchatbot.firebaseapp.com",
  databaseURL: "https://mmbchatbot-default-rtdb.firebaseio.com",
  projectId: "mmbchatbot",
  storageBucket: "mmbchatbot.appspot.com",
  messagingSenderId: "33231669002",
  appId: "1:33231669002:web:cefab66ad64aec14e49cf3",
  measurementId: "G-F3Z3L7PVQX"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chatapp = () => {
    const [user] = useAuthState(auth);

    return (
        <div id='chatapp_margin'>
            <h1 id='chat_head'>
            </h1>
            <h2 id='chat_subhead'>
            </h2>
            <div id='chat_area'>
                <div id='chatbox_head'>
                    <div id='chatbot_head_head'>
                        Talk to Kaira
                    </div>
                    <div id='chatbot_head_subhead'>
                        Your AI Companion
                    </div>
                    <div>
                        <SignOut />
                    </div>

                </div>
                <div id="signin">
                    <section>
                        {user ? <ChatRoom /> : <SignIn className='signinbtn'/>}
                    </section>
                </div>

            </div>

        </div>
    )
}
function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <button className="sign-in" onClick={signInWithGoogle} id="signinbtn">Sign in with Google</button>
        </div>
    )

}

function SignOut() {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()} id="signoutbtn">Sign Out</button>
    )
}


function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <mainchat>

            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>

        </mainchat>

        <form onSubmit={sendMessage}>

            <input  value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

            <button id='message_btn' onClick={clearFields} type="submit" disabled={!formValue}>►</button>

        </form>
    </>)
}

function clearFields(){
    document.getElementsById('inputID').value = "";
  }


function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <p>{text}</p>
        </div>
    </>)
}

export default Chatapp