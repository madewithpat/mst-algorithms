/**
 * A vertex in a simple, undirected graph
 */
export default class Vertex {
   /**
    * @param {(string|number)} label - The Vertex's unique key
    * @param {number} x - The Vertex's x-coordinate
    * @param {number} y - The Vertex's y-coordinate
    */
   constructor(label, x = 0, y = 0) {
      this.label = label;
      this.x = x;
      this.y = y;

      // Sets cannot contain duplicates, the compiler will do that work for us
      this.edges = new Set();
      this.neighbors = new Set();
   }

   /**
    * Adds an edge and neighbor to the Vertex
    * @param {Edge} edge
    */
   addEdge(edge) {
      this.edges.add(edge);

      const newNeighbor =
         edge.startVertex.label === this.label
            ? edge.endVertex
            : edge.startVertex;
      this.neighbors.add(newNeighbor);
   }

   /**
    * Removes an edge from the Vertex
    * @param {Edge} edge
    */
   deleteEdge(edge) {
      this.edges.delete(edge);
   }
}
