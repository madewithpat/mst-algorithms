import React from "react";

const Description = () => {
   return (
      <div class="content">
         <h2>Prim's Algorithm</h2>
         <p>
            Prim's algorithm finds a Minimum Spanning Tree (MST) by starting
            with a seed vertex, and greedily selecting edges with the lowest
            cost that connect the component containing the seed to the graph's
            other components. The algorithm is complete once all of the nodes
            are connected.
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
            Here we've selected <strong>A</strong> as the seed. Click below to
            get started.
         </p>
      </div>
   );
};

export default Description;
