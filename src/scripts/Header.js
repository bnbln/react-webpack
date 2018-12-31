import React, { Component } from 'react';
import logo from '../assets/Logo.svg';

const wrapperHeader = {
  position: "fixed",
  width: "20%",
  top: "60px",
  margin: "0px 20%"
}

const styleLogo = {
  width: "50px"
}

class Header extends Component {
  render() {
    return (
      <div className="Header" style={wrapperHeader}>
        <img src={logo} style={styleLogo}/>


      </div>
    );
  }
}


export default Header;
