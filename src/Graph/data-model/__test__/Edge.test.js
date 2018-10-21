import Edge from "../Edge";
import Vertex from "../Vertex";

describe("Edge", () => {
   it("should create an edge with default weight", () => {
      const A = new Vertex("A");
      const B = new Vertex("B");

      const AB = new Edge(A, B);

      expect.assertions(4);
      expect(AB.weight).toBe(1);
      expect(AB.label).toBe("A-B");
      expect(AB.startVertex).toEqual(A);
      expect(AB.endVertex).toEqual(B);
   });

   // No it shouldn't, this behavior belongs on the Vertex
   it("should add itself to both vertices", () => {
      const A = new Vertex("A");
      const B = new Vertex("B");
      const AB = new Edge(A, B);

      expect(A.neighbors.has(B)).toBe(true);
      expect(A.edges.has(AB)).toBe(true);
      expect(B.neighbors.has(A)).toBe(true);
      expect(B.edges.has(AB)).toBe(true);
   });
});
