import React from "react";
import { Navigate } from "react-router";


const Private = ({ children }) => {
    // return ((localStorage.getItem("jwt_token")) ? children : (<Navigate to='/Login' />))
    if (localStorage.getItem("jwt_token")) {
        if (localStorage.getItem("subs") === 'true') {
            return (children)
        }
        else {
            return (<Navigate to='/pricing' />)
        }
    }
    else {
        return (<Navigate to='/Login' />)
    }
};

export default Private;