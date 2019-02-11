import React, { Component } from 'react';
import '../stylesheets/header.scss'

class Header extends Component {
    render(){
        return(
            <div className="header-container">
                <div className="logo-container">
                    <img className="logo-header" src="/images/logo-marvel-studios.png" alt="marvel-logo"/>
                </div>

                <div className="menu-container">
                    <a href="/">Home</a>
                    <a href="/characters">Characters</a>
                    <a href="/series">Series</a>
                    <a href="/comics">Comics</a>
                </div>
            </div>
        )
    }   
}

export default Header;
