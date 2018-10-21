import Vertex from "./Vertex";
import Edge from "./Edge";
import Graph from "./Graph";

const data = {
   vertices: [
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
   ],

   edges: [
      {
         endpoints: ["A", "B"],
         weight: 4
      },
      {
         endpoints: ["A", "C"],
         weight: 2
      },
      {
         endpoints: ["A", "C"],
         weight: 1
      },
      {
         endpoints: ["B", "D"],
         weight: 5
      },
      {
         endpoints: ["C", "D"],
         weight: 8
      },
      {
         endpoints: ["C", "E"],
         weight: 10
      },
      {
         endpoints: ["D", "E"],
         weight: 2
      },
      {
         endpoints: ["D", "F"],
         weight: 6
      },
      {
         endpoints: ["E", "F"],
         weight: 5
      }
   ]
};

const vertices = new Map();
const edges = new Map();

export default new Graph(vertices, edges);
