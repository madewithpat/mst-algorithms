import React, { Component } from "react";
import "./graph.css";

class Graph extends Component {
   render() {
      return (
         <svg
            className="graph"
            width="450"
            height="450"
            xmlns="http://www.w3.org/2000/svg"
         >
            {this.props.children}
         </svg>
      );
   }
}

export default Graph;
