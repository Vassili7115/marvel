import React, { Component } from 'react';
import '../stylesheets/header.scss'

// import { Menu } from 'semantic-ui-react'

class Header extends Component {

    render(){
        return(
                <div className="logo-container">
                    <img className="logo-header" src="/images/logo_marvel.png" alt="marvel-logo"/>
                </div>
        )
    }   
}

export default Header;
