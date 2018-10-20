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

export const V = [
   {
      label: "A",
      x: 175,
      y: 70
   },
   {
      label: "B",
      x: 110,
      y: 150
   },
   {
      label: "C",
      x: 260,
      y: 150
   },
   {
      label: "D",
      x: 205,
      y: 220
   },
   {
      label: "E",
      x: 330,
      y: 300
   },
   {
      label: "F",
      x: 140,
      y: 365
   }
];

export const E = [
   {
      from: "A",
      to: "B",
      weight: 4
   },
   {
      from: "A",
      to: "C",
      weight: 2
   },
   {
      from: "B",
      to: "C",
      weight: 1
   },
   {
      from: "B",
      to: "D",
      weight: 5
   },
   {
      from: "C",
      to: "D",
      weight: 8
   },
   {
      from: "C",
      to: "E",
      weight: 10
   },
   {
      from: "D",
      to: "E",
      weight: 2
   },
   {
      from: "D",
      to: "F",
      weight: 6
   },
   {
      from: "E",
      to: "F",
      weight: 5
   }
];
