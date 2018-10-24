import React, { Component } from "react";

class Description extends Component {
   render() {
      const prim = (
         <div className="content">
            <h2>Prim's Algorithm</h2>
            <p>
               Prim's algorithm finds a Minimum Spanning Tree (MST) by starting
               with a seed vertex, and greedily selecting edges with the lowest
               cost that connect the component containing the seed to the
               graph's other components. The algorithm is complete once all of
               the nodes are connected.
            </p>
            <p>
               More detailed info can be found{" "}
               <a
                  href="https://en.wikipedia.org/wiki/Prim%27s_algorithm"
                  target="blank"
               >
                  here
               </a>
            </p>
            <p>
               Here we've selected <strong>A</strong> as the seed. Click below
               to get started.
            </p>
         </div>
      );

      const kruskal = (
         <div className="content">
            <h2>Kruskal's Algorithm</h2>
            <p>
               Kruskal's algorithm finds a Minimum Spanning Tree (MST) by
               examining every edge at once, and adding the lowest weight edges
               which do not create cycles to the graph. The algorithm is
               complete once all of the nodes are connected.
            </p>
            <p>
               More detailed info can be found{" "}
               <a
                  href="https://en.wikipedia.org/wiki/Kruskal%27s_algorithm"
                  target="blank"
               >
                  here
               </a>
            </p>
            <p>Click below to get started.</p>
         </div>
      );

      let content;
      if (this.props.algo.includes("prim")) {
         content = prim;
      }
      if (this.props.algo.includes("kruskal")) {
         content = kruskal;
      }
      return content;
   }
}

export default Description;
