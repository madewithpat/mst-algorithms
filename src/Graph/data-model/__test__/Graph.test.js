import Graph from "../Graph";
import Vertex from "../Vertex";
import Edge from "../Edge";

describe("Graph", () => {
   it("should be empty when ctor is called without params", () => {
      const G = new Graph();

      expect(G.order).toBe(0);
      expect(G.size).toBe(0);
      expect(G.weight).toBe(0);
   });

   it("should intialize V and E with Map arguments", () => {
      let vertices = new Map();
      vertices.set("A", new Vertex("A"));
      vertices.set("B", new Vertex("B"));
      vertices.set("C", new Vertex("C"));

      const ab = new Edge(vertices.get("A"), vertices.get("B"), 2);
      const bc = new Edge(vertices.get("B"), vertices.get("C"), 4);
      let edges = new Map([[ab.label, ab], [bc.label, bc]]);

      const G = new Graph(vertices, edges);

      expect(G.order).toBe(3);
      expect(G.size).toBe(2);
      expect(G.weight).toBe(6);
   });

   it("should correctly add edges", () => {
      let G = new Graph();

      G.addVertex(new Vertex("A"));
      G.addEdge(new Edge(G.V.get("A"), new Vertex("B")));

      const A = G.V.get("A");
      const B = G.V.get("B");
      expect(G.E.has("A-B")).toBe(true);
      expect(A.neighbors.has(B)).toBe(true);
   });
});
