import React from 'react';
import './menu.css';

const Menu =()=>{
    return(
        <div>
            <div className="burger">
                <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                </div>
            </div>
            <div className="menu-container">
                <div className="menu-logo"><img className="menu-logo-image"src={require('../../assets/logo.png')}alt="dog"/></div>
                <div className="menu-title"></div>
            </div>
        </div>
    );
}

export default Menu;