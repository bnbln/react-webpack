import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Cta from './Cta';

class Excerpt extends Component {
  constructor(props){
    super(props);
    }

  render() {
    return (
       <div style={{
           transform: "translateY("+ this.props.scroll < this.props.inPoint ? "-40%" : "0px" +")",
           transition:"left 0.3s",
           padding: "40px",


         }}>
             <h4 style={{
                 margin: 0,
                 fontFamily: "Roboto Slab",
                 fontSize: "2rem",
                 marginBottom: "20px",
               }}>{this.props.headline}</h4>
               <p className="lead" style={{
                   fontSize: "1.4rem",

                   lineHeight: "2",
                    margin: 0
                 }}>
                 <b>{this.props.lead}</b>
                 <br/>{this.props.text}
                 <span style={{
                     fontFamily: "Roboto Slab",
                     textAlign: "right",
                   }}> - {this.props.author}
                 </span>
               </p>
               {this.props.cta ?
                 <Cta {...this.props}/>
                 : null}
           </div>
    );
  }
}

export default Excerpt;
