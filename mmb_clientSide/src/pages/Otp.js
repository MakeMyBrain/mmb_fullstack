import { useNavigate } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { useState } from 'react';
import OtpInput from 'react-otp-input';

const Otp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp);
        const email = localStorage.getItem("email");
        axios
            .post(`http://localhost:5000/users/verify`, {
                email: email,
                otp: otp,
            })
            .then((res) => {
                console.log("sucess");
                // localStorage.setItem("logstat", true);
                navigate('/')
            })
            .catch((error) => {
                console.log("error.message", error.message);
            });
    }
    return (
        <div >
            <div>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Otp;