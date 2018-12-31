import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Post from './Post';
import Frontpage from './components/Frontpage';
import Frontpagezwo from './components/Frontpagezwo';
import Home from './Home';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

import video01 from '../assets/video.mp4';
import video02 from '../assets/video2.mp4';

var posts =
  [
    { title: "Video Animation",
      lead: "This is an animation I did",
      text: "watch it on my page",
      attachment: video01,
      tagnumber: "01",
      tagname: "The Coke"
    },
    { title: "Illu",
      lead: "This is an animation I did",
      text: "watch it on my page",
      attachment: video02,
      tagnumber: "02",
      tagname: "The Coke"
    }
  ];
  var texts =
    [
      { headline: "Weisheiten",
        lead: "Was brauch Nahrung um zu wachsen?",
        text: "Richtig, Wasser. Das Meer ist größer als die Welt & viele weitere Geistesblitze",
        author: "Dr. Rainer Winkler, Experde",
      },
      { headline: "Lebensweisheiten",
        lead: "Was brauch Nahrung um zu wachsen?",
        text: "Richtig, Wasser. Das Meer ist größer als die Welt & viele weitere Geistesblitze",
        author: "Dr. Rainer Winkler, Experde"
      }
    ];


console.log(posts);

const routing = (
    <Router>
      <div>
        <Route path="/" exact render={(props) => <App posts={posts} texts={texts} {...props} />} />
        <Route path="/fp" component={Frontpagezwo} />
        <Route path="/post-:id" render={(props) => <Post posts={posts} texts={texts} {...props} />} />
      </div>
    </Router>


)

ReactDOM.render(routing, document.getElementById('app'))
registerServiceWorker();
