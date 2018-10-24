import { Graph } from "../../data-model";

/**
 * @param {Graph} graph
 * @return {Graph}
 */
export function kruskal(graph) {
   // Init new graph that will contain minimum spanning tree of original graph.
   const minimumSpanningTree = new Graph();
   graph
      .getAllVertices()
      .forEach(vertex => minimumSpanningTree.addVertex(vertex));

   const edges = graph.getAllEdges().sort(edgeSorter);

   // Create disjoint sets for all graph vertices.
   const components = graph.getVerticesKeys().map(key => [key]);

   // Go through all edges started from the minimum one and try to add them
   // to minimum spanning tree. The criteria of adding the edge would be whether
   // it is forms the cycle or not (if it connects two vertices from the same component or not).
   while (components.length > 1) {
      let currentEdge = edges.shift();
      const c1 = components.find(component =>
         component.includes(currentEdge.startVertex.key)
      );
      const c2 = components.find(component =>
         component.includes(currentEdge.endVertex.key)
      );

      if (components.indexOf(c1) != components.indexOf(c2)) {
         const index1 = components.indexOf(c1);
         const index2 = components.indexOf(c2);
         const union = [...c1, ...c2];

         components.splice(components.indexOf(c1), 1, union);
         components.splice(components.indexOf(c2), 1);
         minimumSpanningTree.addEdge(currentEdge);
      }
   }

   return minimumSpanningTree;
}

const edgeSorter = (a, b) => {
   if (a.weight - b.weight < 0) {
      return -1;
   } else if (a.weight - b.weight > 0) {
      return 1;
   }

   return 0;
};
