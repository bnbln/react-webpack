import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { Grid, Row, Col } from 'react-bootstrap';

import Logo from './components/Logo';
import Videosquare from './components/Videosquare';
import Excerpt from './components/Excerpt';

import video01 from '../assets/video.mp4';
import video02 from '../assets/video2.mp4';

class Post extends Component {
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
    var postid = this.props.match.params.id;
    var data = this.props.posts[postid];
    console.log(data);
    var main = document.getElementById("main");
    if (main) {
      var main = main.offsetTop;
    }

    return (
      <Grid style={{height: "300vh"}}>
        <Row>

          <Col>

              <Logo {...this.state} animation={false}/>
          </Col>

          <Col md={12}>
            <Row style={{height: "70vh"}}>
              <Videosquare {...this.state}
                i={1}
                layout="post"
                tag={true}
                tagnumber={data.tagnumber}
                tagname={data.tagname}
                video={data.attachment}
                />
            </Row>
          </Col>
          <div id="main" style={{
                opacity: this.state.scroll * 0.004,
                  position: "fixed",
                  left: Math.min(this.state.scroll, 273) +"px" ,
                  width: "50%",
                  top: "50vh"
            }}>
            <Col xs={8} sm={6} md={8}>
                <Row>
                <h1>{data.title}</h1>
                  <p><span style={{
                      fontFamily: "Roboto Slab",
                      }}>{data.tagnumber} </span>
                    {data.tagname}</p>
                    <p><span style={{
                        fontFamily: "Roboto Slab",
                      }}>{data.lead} </span>
                    {data.text}</p>
              </Row>
            </Col>

        </div>
        </Row>
      </Grid>
    );
  }
}

export default Post;
