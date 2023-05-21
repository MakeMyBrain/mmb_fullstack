import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { showToastMessage } from './Toasty';


const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);
    const navigate = useNavigate();
    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        createAccount()
    }

    //handle Signup API Integration here
    const createAccount = () => {
        axios
            .post(`https://mmb-auth.onrender.com/users/signup`, {
                name: signupState.username,
                email: signupState.email,
                gender: signupState.gender,
                dateofbirth: String(signupState.dob),

            })
            .then((res) => {
                console.log(res);
                localStorage.setItem("email", signupState.email);
                navigate("/Otp");
            })
            .catch((error) => {
                console.log("error.message", error.message);
                showToastMessage("User already registed", "negative");
            });
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
                <FormAction handleSubmit={handleSubmit} text="Signup" />
                <ToastContainer />
            </div>



        </form>
    )
}