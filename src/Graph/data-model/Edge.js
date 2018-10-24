export class Edge {
   /**
    * @param {GraphVertex} startVertex
    * @param {GraphVertex} endVertex
    * @param {number} [weight=1]
    */
   constructor(startVertex, endVertex, weight = 0) {
      this.startVertex = startVertex;
      this.endVertex = endVertex;
      this.weight = weight;
   }

   /**
    * @return {string}
    */
   get key() {
      const startVertexKey = this.startVertex.key;
      const endVertexKey = this.endVertex.key;

      return `${startVertexKey}_${endVertexKey}`;
   }

   /**
    * @return {Edge}
    */
   reverse() {
      const tmp = this.startVertex;
      this.startVertex = this.endVertex;
      this.endVertex = tmp;

      return this;
   }
}
