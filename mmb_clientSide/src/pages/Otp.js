import { useNavigate } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import "../components/Header.css"
import { ToastContainer, toast } from 'react-toastify';
import { showToastMessage } from "../components/Toasty";

const Otp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp);
        const email = localStorage.getItem("email");
        axios
            .post(`https://mmb-auth.onrender.com/users/verify`, {
                email: email,
                otp: otp,
            })
            .then((res) => {
                // console.log("res");
                // localStorage.setItem("logstat", true);
                //console.log(res.data.token);
                localStorage.removeItem("jwt_token");
                localStorage.removeItem("subs");
                localStorage.setItem("jwt_token", res.data.token);
                localStorage.setItem("subs", res.data.subscribe);
                // showToastMessage("Successfull login", "positive");
                navigate('/')
            })
            .catch((error) => {
                console.log("error.message", error.message);
                showToastMessage("Wrong OTP", "positive");
            });
    }
    return (
        <div >
            <div className="otp-container">
                <h1 id="otp-head">Enter OTP</h1>
                <div id="otp-subhead">Please enter the OTP that we have just sent you on your email address. This OTP is being used for the verification of the email address provided by you.</div>
                <div className="otp-box">
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props}
                            className='otp-input'
                        />}
                    />
                    <ToastContainer />
                </div>
                <button onClick={handleSubmit} className='otp-button'>Submit</button>
            </div>
        </div>
    );
}

export default Otp;