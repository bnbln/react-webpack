import React, { Component } from 'react';

class Tag extends Component {
  constructor(props){
    super(props);
    }

  render() {
    return (
       this.props.layout === "fullscreen" ?
             <div className="tagWrapper" style={{
                 position: "absolute",
                 bottom: "30px",
                 margin: 0,
                 padding: 10,
                 transition: "left 0.3s",

               }}>
               <p><span style={{
                   fontFamily: "Roboto Slab",
                   margin: "0px 50px"


                 }}>{this.props.tagnumber}</span>{this.props.tagname}</p>
             </div> :
          this.props.layout === "feed" ?
          <p><span style={{
              fontFamily: "Roboto Slab",
              marginRight: "50px"
            }}>{this.props.tagnumber}</span>{this.props.tagname}</p> : null
    );
  }
}

export default Tag;
