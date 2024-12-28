import React from "react";
import HomePage from "./HomePage";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("../");
    }
    return(
        <>
            <div className="mb-3">
                <label>Username</label>
                <input className="from-control" type="text" />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input className="from-control" type="text" />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input className="from-control" type="password" />
            </div>
            <button onClick={handleClick}>Register</button>
        </>
    )
}