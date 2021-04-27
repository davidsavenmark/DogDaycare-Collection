import React from 'react';
import './menu.css';
import logo from './logo.png';




const toggleMenuClasses =()=>{
    let hamburgerIcon = document.getElementById('burger');
    hamburgerIcon.classList.toggle("is-active");
    let mobileMenu = document.getElementById('menu-container');
    mobileMenu.classList.toggle('opened')
}
const Menu =()=>{
    return(
        <div>
            <div className="burger"id="burger"onClick={toggleMenuClasses}>
                <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                </div>
            </div>
            <div className="menu-container"id="menu-container">
                <div className="menu-logo"><img className="menu-logo-img"src={logo}alt="logo"/></div>     
                <div className="menu-title">Dailydog</div>
                <a className="menu-essentialfoods"href="https://www.essentialfoods.com/"target="_blank">Essential Foods</a>
                <a className="menu-instagram"href="https://www.instagram.com/iccotheshihtzu/"target="_blank">iccotheshihtzu</a>
            </div>
        </div>
    );
}

export default Menu;