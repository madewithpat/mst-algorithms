/**
 * An Edge in a simple, undirected graph
 */
export default class Edge {
   /**
    * @param {Vertex} startVertex - The first endpoint of the Edge
    * @param {Vertex} endVertex - The second endpoint of the Edge
    * @param {number} [weight=1] - The Edge's weight, default is 1
    */
   constructor(startVertex, endVertex, weight = 1) {
      this.startVertex = startVertex;
      this.endVertex = endVertex;
      this.weight = weight;
   }

   /**
    * @return {string}
    */
   get label() {
      const startLabel = this.startVertex.label;
      const endLabel = this.endVertex.label;

      return `${startLabel}-${endLabel}`;
   }
}
