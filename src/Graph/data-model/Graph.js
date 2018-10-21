/**
 * A simple, undirected graph
 */
export default class Graph {
   constructor(V = new Map(), E = new Map()) {
      /*
            Need checks for...
            - if |V| == 0 and |E| > 0, throw error
            - if |E| > (|V| * |V| - 1 ? 2), throw error
      */

      this.V = V;
      this.E = E;
   }

   /**
    *
    * @param {Vertex} vertex - The Vertex to be added
    * @returns {Graph}
    */
   addVertex = vertex => {
      if (this.V.has(vertex.label)) {
         throw new Error(`Vertex ${vertex.label} already exists in this graph`);
      } else {
         this.V.set(vertex.label, vertex);

         let sortedVertices = new Map(Array.from(this.V).sort());
         this.V = sortedVertices;
      }
      return this;
   };

   /**
    * Removes the specified Vertex from the graph, along with all of its Edges
    * @param {Vertex} vertex - The Vertex to be deleted
    * @returns {Graph}
    */
   deleteVertex = vertex => {
      if (this.V.has(vertex.label)) {
         for (let edge of vertex.edges) {
            const neighbhor =
               edge.startVertex.label == vertex.label
                  ? edge.endVertex
                  : edge.startVertex;
            neighbhor.deleteEdge(edge);

            this.deleteEdge(edge);
         }

         this.V.delete(vertex.label);
      }
   };

   /**
    * Adds an Edge to the Graph's edge set, E
    * @param {Edge} edge - The Edge to be added
    * @returns {Graph}
    */
   addEdge = edge => {
      let startVertex = edge.startVertex;
      let endVertex = edge.endVertex;

      if (!this.V.has(startVertex.label)) {
         this.addVertex(startVertex);
      }

      if (!this.V.has(endVertex.label)) {
         this.addVertex(endVertex);
      }

      if (this.E.has(edge.label)) {
         throw new Error(`Edge ${edge.label} already exists in this graph`);
      } else {
         this.E.set(edge.label, edge);
         startVertex.addEdge(edge);
         endVertex.addEdge(edge);
      }

      return this;
   };

   /**
    * Removes the specified Edge from the Graph
    * @param {Edge} edge - The edge to be deleted
    * @returns {Graph}
    */
   deleteEdge = edge => {
      if (this.E.has(edge.label)) {
         const startVertex = edge.startVertex;
         const endVertex = edge.endVertex;

         startVertex.deleteEdge(edge);
         endVertex.deleteEdge(edge);

         this.E.delete(edge.label);
      } else {
         throw new Error(`Edge ${edge.label} does not exist in this graph`);
      }

      return this;
   };

   get order() {
      return Array.from(this.V).length;
   }

   get size() {
      return Array.from(this.E).length;
   }

   get weight() {
      let weight = Array.from(this.E).reduce((weight, edgeTuple) => {
         return weight + edgeTuple[1].weight;
      }, 0);

      return weight;
   }
}
