import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import './Header.css'
import { ToastContainer, toast } from 'react-toastify';
import { showToastMessage } from './Toasty';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () => {
        axios
            .post(`https://mmb-auth.onrender.com/users/login`, {
                email: loginState.email,
            })
            .then((res) => {
                //console.log(res);
                localStorage.removeItem("email");
                localStorage.setItem("email", loginState.email);
                navigate("/Otp");

            })
            .catch((error) => {
                console.log("error.message", error.message);
                showToastMessage("User not registed");
            });
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}

                        />

                    )
                }
            </div>
            <FormAction handleSubmit={handleSubmit} text="Login" />
            <ToastContainer />
        </form>
    )
}