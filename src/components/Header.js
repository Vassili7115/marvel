import React from 'react';
import '../stylesheets/header.scss'

const Header = () => {
        return(
            <div className="header-container">
                <div className="logo-container">
                    <a href="/"><img className="logo-header" src="/images/logo-marvel-studios.png" alt="marvel-logo"/></a>
                </div>
                <div className="menu-container">
                    <a href="/">Home</a>
                    <a href="/characters">Characters</a>
                    <a href="/comics">Comics</a>
                    <a href="/series">Series</a>
                </div>
            </div>
        )
    }   

export default Header;
