import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Cta extends Component {
  constructor(props){
    super(props);
    }

  render() {
    return (
     <button style={{
         marginTop: "20px",
         fontWeight: 800,
         padding:"20px 40px",
         color:"white",
         backgroundColor:"black",
         border:"0px",
         fontSize:"1rem"}}>
         {this.props.ctaText}
       </button>
    );
  }
}

export default Cta;
