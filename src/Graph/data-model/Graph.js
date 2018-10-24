export class Graph {
   /**
    * @param {boolean} isDirected
    */
   constructor() {
      this.vertices = new Map();
      this.edges = new Map();
   }

   /**
    * @property {number} weight - Sum of all edge weights in this graph
    */
   get weight() {
      return this.getAllEdges().reduce((weight, graphEdge) => {
         return weight + graphEdge.weight;
      }, 0);
   }

   /**
    * @property {number} order - The number of vertices in this graph
    */
   get order() {
      return this.vertices.size;
   }

   /**
    * @property {number} size - The number of edges in this graph
    */
   get size() {
      return this.edges.size;
   }

   /**
    * @param {GraphVertex} newVertex
    * @returns {Graph}
    */
   addVertex(newVertex) {
      if (!this.vertices.has(newVertex.key)) {
         this.vertices.set(newVertex.key, newVertex);
      }

      return this;
   }

   /**
    * @param {string} vertexKey
    * @returns {GraphVertex|undefined}
    */
   getVertexByKey(vertexKey) {
      if (this.vertices.has(vertexKey)) {
         return this.vertices.get(vertexKey);
      }
   }

   /**
    * @param {GraphVertex} vertex
    * @returns {GraphVertex[]}
    */
   getNeighbors(vertex) {
      return vertex.neighbors;
   }

   /**
    * @return {GraphVertex[]}
    */
   getAllVertices() {
      return Array.from(this.vertices.values());
   }

   /**
    * @return {GraphEdge[]}
    */
   getAllEdges() {
      return Array.from(this.edges.values());
   }

   /**
    * @param {GraphEdge} edge
    * @returns {Graph}
    */
   addEdge(edge) {
      // Try to find and end start vertices.
      let startVertex = this.getVertexByKey(edge.startVertex.key);
      let endVertex = this.getVertexByKey(edge.endVertex.key);

      // Insert start vertex if it wasn't inserted.
      if (!startVertex) {
         this.addVertex(edge.startVertex);
         startVertex = this.getVertexByKey(edge.startVertex.key);
      }

      // Insert end vertex if it wasn't inserted.
      if (!endVertex) {
         this.addVertex(edge.endVertex);
         endVertex = this.getVertexByKey(edge.endVertex.key);
      }

      // Check if edge has been already added.
      if (this.edges.has(edge.key)) {
         throw new Error("Edge has already been added before");
      } else {
         this.edges.set(edge.key, edge);
      }

      // Add edge to the vertices.
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);

      return this;
   }

   /**
    * @param {GraphEdge} edge
    */
   deleteEdge(edge) {
      // Delete edge from the list of edges.
      if (this.edges.has(edge.key)) {
         this.edges.delete(edge.key);
      } else {
         throw new Error("Edge not found in graph");
      }

      // Try to find and end start vertices and delete edge from them.
      const startVertex = this.getVertexByKey(edge.startVertex.key);
      const endVertex = this.getVertexByKey(edge.endVertex.key);

      startVertex.deleteEdge(edge);
      endVertex.deleteEdge(edge);
   }

   /**
    * @param {GraphVertex} startVertex
    * @param {GraphVertex} endVertex
    * @return {(GraphEdge|undefined)}
    */
   findEdge(startVertex, endVertex) {
      const vertex = this.getVertexByKey(startVertex.key);

      if (!vertex) {
         return undefined;
      }

      return vertex.findEdge(endVertex);
   }

   /**
    * @param {string} vertexKey
    * @returns {GraphVertex}
    */
   findVertexByKey(vertexKey) {
      if (this.vertices.has(vertexKey)) {
         return this.vertices.get(vertexKey);
      }
   }

   /**
    * @return {string[]}
    */
   getVerticesKeys() {
      return Array.from(this.vertices.keys());
   }
}
