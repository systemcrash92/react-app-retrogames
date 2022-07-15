import React from "react";
import './Navbar.css';
import ButtonCart from "../Buttoncart/Buttoncart";

const Navbar = () =>{
    return (
        <header>
            <button type="button" className="btn-navbar">HOME</button>
            <button type="button" className="btn-navbar">GAMES</button>
            <ButtonCart />



        </header>



    );


}

export default Navbar