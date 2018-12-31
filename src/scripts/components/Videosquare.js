import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Tag from './Tag';

class Videosquare extends Component {
  constructor(props){
    super(props);
    }

  render() {
    return (
      <Link to={"/post-"+this.props.i}>
        {this.props.layout === "fullscreen" ?
        <figure className="imageBox fullscreen" style={{
            margin: 0,
            position: "fixed",
            width: this.props.width > this.props.height ?  this.props.height : this.props.width,
            height: "auto",
            right: 0,
            overflow: "hidden",
            transform: "translateY("+ this.props.scroll +"px)",
            opacity: 1 - this.props.scroll * 0.004
          }}>
           <video autoPlay loop width="100%">
             <source src={this.props.video} type="video/mp4" />
           </video>
           {
             this.props.tag ?
               <Tag {...this.props}
                 inPoint={20}
                 display="none"
                 /> : null}

        </figure> :
        this.props.layout === "feed" ?
        <figure className="imageBox" style={{
            margin: 0,
            display: this.props.scroll === 0 ? "none" : "block",
            position: "relative",
            width: "100%",
            height: "auto",
            overflow: "hidden",
            marginBottom: "40px"
          }}>
           <video autoPlay loop width="100%">
             <source src={this.props.video} type="video/mp4" />
           </video>
           {
             this.props.tag ?
               <Tag {...this.props}
                 inPoint={320}
                 display="none"
                 /> : null}

        </figure> :
        this.props.layout === "post" ?
        <figure className="imageBox post" style={{
            margin: 0,
            position: "fixed",
            width: this.props.width > this.props.height ?  this.props.height : this.props.width,
            height: "auto",
            right: 0,
            overflow: "hidden",
            transform: "translateX("+ Math.min(this.props.scroll, 273) +"px)",          }}>
           <video autoPlay loop width="100%">
             <source src={this.props.video} type="video/mp4" />
           </video>
           {
             this.props.tag ?
               <Tag {...this.props}
                 inPoint={20}
                 display="none"
                 /> : null}

        </figure> : null
      }
        </Link>

    );
  }
}

export default Videosquare;
