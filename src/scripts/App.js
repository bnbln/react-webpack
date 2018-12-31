import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { Grid, Row, Col } from 'react-bootstrap';

import Logo from './components/Logo';
import Videosquare from './components/Videosquare';
import Excerpt from './components/Excerpt';

class App extends Component {
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
    window.removeEventListener('scroll', this.scrolling);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  scrolling() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    var main = document.getElementById("main");
    if (main) {
      var main = main.offsetTop;
    }

    return (
      <Grid style={{height: "auto"}}>
        <Row>

          <Col>

              <Logo {...this.state} animation={true}/>
                <button
                  style={{
                    display: this.state.scroll < 20 ? "block" : "none",
                    border: "0.8px solid red",
                    borderRadius: "0px",
                    position: "absolute",
                    bottom: 50,
                    left: "50px",
                    zIndex: "20",
                    color: "red",
                    opacity: this.state.scroll < 8 ? 1 : 0,
                    transition: "opacity 0.2s",

                  }}
                  onClick={() => {
                  window.scrollTo(0, main-8);
                }}>scroll</button>
          </Col>
          {this.props.posts[0] ?
            <Col md={12}>
              <Row style={{height: "70vh"}}>
                <Videosquare {...this.state}
                  i={0}
                  layout="fullscreen"
                  tag={true}
                  tagnumber={this.props.posts[0].tagnumber}
                  tagname={this.props.posts[0].tagname}
                  video={this.props.posts[0].attachment}
                  />
              </Row>
            </Col>
          : null}
          <div id="main" style={{
                opacity: this.state.scroll * 0.004
            }}>

          {this.props.posts[1] ?
          <Col xs={8} sm={6} md={8}>
              <Row>
              <Videosquare {...this.state}
                  i={1}
                layout="feed"
                tag={false}
                tagnumber={this.props.posts[1].tagnumber}
                tagname={this.props.posts[1].tagname}
                video={this.props.posts[1].attachment}
                />
            </Row>
          </Col>
          : null}
          {this.props.texts[0] ?
            <Col xs={10} sm={6} md={4}>
                <Excerpt {...this.state}
                  inPoint={1400}
                  headline={this.props.texts[0].headline}
                  lead={this.props.texts[0].lead}
                  text={this.props.texts[0].text}
                  author={this.props.texts[0].author}
                  cta={true}
                  ctaText="MEHR"
                  />
              </Col> :null
          }
          {this.props.texts[1] ?

          <Col xs={10} sm={10} md={4}>
              <Excerpt {...this.state}
                inPoint={1400}
                headline={this.props.texts[1].headline}
                lead={this.props.texts[1].lead}
                text={this.props.texts[1].text}
                author={this.props.texts[1].author}
                cta={true}
                ctaText="MEHR"
                />
            </Col>
            :null
        }
        </div>
        </Row>
      </Grid>
    );
  }
}

export default App;
