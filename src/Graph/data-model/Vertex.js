export class Vertex {
   /**
    * @param {string} key
    * @param {number} x
    * @param {number} y
    */
   constructor(key, x = 0, y = 0) {
      if (key == undefined) {
         throw new Error("Vertex must have a key");
      }
      this.key = key;
      this.x = x;
      this.y = y;
      this.edges = [];
   }

   get degree() {
      return this.edges.length;
   }

   get neighbors() {
      const neighbors = this.edges
         .map(e => (e.startVertex == this ? e.endVertex : e.startVertex))
         .sort((a, b) => {
            if (a.key.toLowerCase() < b.key.toLowerCase()) {
               return -1;
            }
            if (a.key.toLowerCase() > b.key.toLowerCase()) {
               return 1;
            }

            return 0;
         });

      return neighbors.filter((v, i, a) => v != a[i - 1]);
   }

   /**
    * @returns {GraphEdge[]}
    */
   getEdges() {
      return Array.from(this.edges.values());
   }

   /**
    * @param {GraphEdge} edge
    * @returns {Vertex}
    */
   addEdge(edge) {
      if (!this.edges.includes(edge)) {
         this.edges.push(edge);
      }

      return this;
   }

   /**
    * @param {GraphEdge} edge
    */
   deleteEdge(edge) {
      this.edges = this.edges.filter(e => e != edge);
   }

   /**
    * @return {Vertex}
    */
   deleteAllEdges() {
      this.edges = [];

      return this;
   }

   /**
    * @param {GraphEdge} requiredEdge
    * @returns {boolean}
    */
   hasEdge(requiredEdge) {
      return this.edges.includes(requiredEdge);
   }

   /**
    * @param {Vertex} vertex
    * @returns {boolean}
    */
   hasNeighbor(vertex) {
      return this.neighbors.includes(vertex);
   }

   /**
    * @param {Vertex} vertex
    * @returns {(GraphEdge|null)}
    */
   findEdge(vertex) {
      return this.edges.find(
         e => e.startVertex == vertex || e.endVertex == vertex
      );
   }
}
