import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("../");
    }
    return(
        <>
            <div className="mb-3">
                <label>Login</label>
                <input className="from-control" type="text" />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input className="from-control" type="password" />
            </div>
            <button onClick={handleClick}>Login</button>
        </>
    )
}