import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import img01 from '../assets/img01.png';
import img02 from '../assets/img02.png';
import img03 from '../assets/img03.png';
import img04 from '../assets/img04.png';


const wrapperHome = {
  position: "relative",
  width: "100%",
  float: "left"
}

const styleImg = {
  position: "absolute",
  maxWidth: "100%"
}

class Home extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        {img: img01},
        {img: img03},
        {img: img04},
        {img: img02},
      ]

    }

  }
  render() {
    console.log(this.state);
    return (
      <div className="Home" style={wrapperHome}>
        <div className="Feed">
          {this.state.items.map((item, i) =>
            <img src={item.img} key={i} className={"hero-" + i} style={styleImg}/>
        )}
        </div>
        <div className="hero-4">
        </div>
        <div className="hero-5">
        </div>
      </div>
    );
  }
}

export default Home;
