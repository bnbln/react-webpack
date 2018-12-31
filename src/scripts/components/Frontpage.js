import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import img01 from '../../assets/img01.png';
import img02 from '../../assets/img02.png';
import img03 from '../../assets/img03.png';
import img04 from '../../assets/img04.png';

const styleRoot = {
  height: "4000px"
}

class Frontpage extends Component {
  constructor(props){
    super(props);
    this.state = { width: 0, height: 0, scroll: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.scrolling = this.scrolling.bind(this);
    }
  componentDidMount() {
    this.scrolling();
    window.addEventListener('scroll', this.scrolling);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
      setTimeout(() => {
        this.setState({fadein: 1});
      }, 100);
      setTimeout(() => {
        this.setState({look: 1});
        }, 1000);
    }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  scrolling() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    console.log(this.state);
    var titleheight = document.getElementById("title");
    console.log(titleheight);
    console.log(Math.min(this.state.scroll, 800));
    return (
      <div style={styleRoot}>
        <h1 style={{
            position: "fixed",
            opacity: "0.6",
            zIndex: "10",
            maxWidth: "40%",
            fontSize: "55px",
            textAlign: "left",
            right: "50px",
            marginTop: this.state.height * 0.5 +"px",
            transform: "translateX(-"+ Math.min(this.state.scroll, this.state.width/2) +"px)"
          }} id="title">Christoph Halstenberg</h1>
        <figure className="imageBox" style={{position: "fixed", margin: "0px", transform: "translateX("+ this.state.scroll +"px)" }}>
          <img src={img01} style={{
              width:this.state.width > this.state.height ?  this.state.height : this.state.width,
              maxWidth: "100%",
              height: "auto",

              opacity: this.state.scroll / 100 }}/>
        </figure>
      </div>
    );
  }
}

export default Frontpage;
