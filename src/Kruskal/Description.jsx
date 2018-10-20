import React from "react";

const Description = () => {
   return (
      <div class="content">
         <h2>Kruskal's Algorithm</h2>
         <p>
            Kruskal's algorithm finds a Minimum Spanning Tree (MST) by examining
            every edge at once, and adding the lowest weight edges which do not
            create cycles to the graph. The algorithm is complete once all of
            the nodes are connected.
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
};

export default Description;
