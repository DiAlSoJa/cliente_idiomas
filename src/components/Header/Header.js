import React, { useState } from 'react';
import './Header.css'; // Asegúrate de ajustar la ruta al archivo CSS correcto

const Header = () => {

    const toggle = ()=>{
        document.body.classList.toggle("dark-mode");
        document.querySelector(".header .toggle .toggle-button").classList.toggle("active");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("dark-mode","true");
           
        }else{
            localStorage.setItem("dark-mode","false");
        }
    }
    return (
        <header className="header">
            <div className="logo">
                <a href="/">Quiz</a>
            </div>
            {/* <ul>
                <li><a></a></li>
            </ul> */}

            <div className="toggle" >
                <button  className="toggle-button active" onClick={toggle}>
                    <span className="slider"></span> 
                </button>
            </div>
        </header>
    );
}

export default Header;
