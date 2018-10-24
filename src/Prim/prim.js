import { Graph } from "../Graph/data-model";

/**
 * @param {Graph} graph
 * @return {Graph}
 */
export default function prim(graph, seed) {
   // Init new graph that will contain minimum spanning tree of original graph.
   const minimumSpanningTree = new Graph();

   // Set of vertices that has been already visited.
   const visitedVertices = new Map();

   // Vertex from which we will start graph traversal.
   const startVertex =
      typeof seed == "object" ? seed : graph.getAllVertices()[0];

   // Add start vertex to the set of visited ones.
   visitedVertices.set(startVertex.key, startVertex);

   // This priority queue will contain all the edges that are starting from
   // visited nodes and they will be ranked by edge weight - so that on each step
   // we would always pick the edge with minimal edge weight.
   let edges = startVertex.getEdges().sort(edgeSorter);
   // let edgeIterator = edges.values();
   // let nextEdge = edgeIterator.next();

   // Now let's explore all queued edges.
   while (minimumSpanningTree.order < graph.order) {
      // Fetch next queued edge with minimal weight.
      /** @var {GraphEdge} currentEdge */
      const currentMinEdge = edges.shift();

      // Find out the next unvisited minimal vertex to traverse.
      let nextMinVertex = null;
      if (!visitedVertices.has(currentMinEdge.startVertex.key)) {
         nextMinVertex = currentMinEdge.startVertex;
      } else if (!visitedVertices.has(currentMinEdge.endVertex.key)) {
         nextMinVertex = currentMinEdge.endVertex;
      }

      // If all vertices of current edge has been already visited then skip this round.
      if (nextMinVertex) {
         // Add current min edge to MST.
         minimumSpanningTree.addEdge(currentMinEdge);

         // Add vertex to the set of visited ones.
         visitedVertices.set(nextMinVertex.key, nextMinVertex);

         // Add all current vertex's edges to the queue.

         nextMinVertex.getEdges().forEach(graphEdge => {
            // Add only vertices that link to unvisited nodes.
            if (
               !visitedVertices.has(graphEdge.startVertex.key) ||
               !visitedVertices.has(graphEdge.endVertex.key)
            ) {
               edges.push(graphEdge);
            }
         });

         edges.sort(edgeSorter);
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
