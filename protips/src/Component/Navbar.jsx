import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"

function Navbar(){
    
    return(
        <>
            <div id="navbar">
                <Link id="logo" className="link-style" to="/">Kalvium 💙</Link>
                <div id="links">
                    <Link id="contact" className="link-style" to="/Contacts">Contacts</Link>
                    <Link className="link-style" to="/Forms">Registration Form</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;