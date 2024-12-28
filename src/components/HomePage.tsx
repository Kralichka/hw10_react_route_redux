import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <>
            <div className="mb-3">
                <h2>Welcome to HomePage!</h2>
                <div className="mb-3">
                    <Link to="/login">Login</Link>

                </div>

                <Link to="/register">Register</Link>
            </div>
        </>
    )
}