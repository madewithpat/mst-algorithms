import { Edge, Vertex } from "../index";

describe("GraphVertex", () => {
   it("should throw an error when trying to create vertex without value", () => {
      let vertex = null;

      function createEmptyVertex() {
         vertex = new Vertex();
      }

      expect(vertex).toBeNull();
      expect(createEmptyVertex).toThrow();
   });

   it("should create graph vertex", () => {
      const vertex = new Vertex("A");

      expect(vertex).toBeDefined();
      expect(vertex.key).toBe("A");
      expect(vertex.edges).toEqual([]);
   });

   it("should add edges to vertex and check if it exists", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");

      const edgeAB = new Edge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.hasEdge(edgeAB)).toBe(true);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);
      expect(vertexA.edges.length).toBe(1);
      expect(vertexA.edges[0].key).toBe("A_B");
   });

   it("should delete edges from vertex", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB);
      const edgeAC = new Edge(vertexA, vertexC);
      vertexA.addEdge(edgeAB).addEdge(edgeAC);

      expect(vertexA.hasEdge(edgeAB)).toBe(true);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);

      expect(vertexA.hasEdge(edgeAC)).toBe(true);
      expect(vertexC.hasEdge(edgeAC)).toBe(false);

      expect(vertexA.edges.length).toBe(2);

      expect(vertexA.edges[0].key).toBe("A_B");
      expect(vertexA.edges[1].key).toBe("A_C");

      vertexA.deleteEdge(edgeAB);
      expect(vertexA.hasEdge(edgeAB)).toBe(false);
      expect(vertexA.hasEdge(edgeAC)).toBe(true);
      expect(vertexA.edges[0].key).toBe("A_C");

      vertexA.deleteEdge(edgeAC);
      expect(vertexA.hasEdge(edgeAB)).toBe(false);
      expect(vertexA.hasEdge(edgeAC)).toBe(false);
      expect(vertexA.edges.length).toBe(0);
   });

   it("should delete all edges from vertex", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB);
      const edgeAC = new Edge(vertexA, vertexC);
      vertexA.addEdge(edgeAB).addEdge(edgeAC);

      expect(vertexA.hasEdge(edgeAB)).toBe(true);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);

      expect(vertexA.hasEdge(edgeAC)).toBe(true);
      expect(vertexC.hasEdge(edgeAC)).toBe(false);

      expect(vertexA.edges.length).toBe(2);

      vertexA.deleteAllEdges();

      expect(vertexA.hasEdge(edgeAB)).toBe(false);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);

      expect(vertexA.hasEdge(edgeAC)).toBe(false);
      expect(vertexC.hasEdge(edgeAC)).toBe(false);

      expect(vertexA.edges.length).toBe(0);
   });

   it("should return vertex neighbors in cases where current node is start one", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB);
      const edgeAC = new Edge(vertexA, vertexC);
      vertexA.addEdge(edgeAB).addEdge(edgeAC);

      expect(vertexB.neighbors).toEqual([]);

      const neighbors = vertexA.neighbors;

      expect(neighbors.length).toBe(2);
      expect(neighbors[0]).toEqual(vertexB);
      expect(neighbors[1]).toEqual(vertexC);
   });

   it("should return vertex neighbors in case if current node is end one", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeBA = new Edge(vertexB, vertexA);
      const edgeCA = new Edge(vertexC, vertexA);
      vertexA.addEdge(edgeBA).addEdge(edgeCA);

      expect(vertexB.neighbors).toEqual([]);

      const neighbors = vertexA.neighbors;

      expect(neighbors.length).toBe(2);
      expect(neighbors[0]).toEqual(vertexB);
      expect(neighbors[1]).toEqual(vertexC);
   });

   it("should check if vertex has specific neighbor", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.hasNeighbor(vertexB)).toBe(true);
      expect(vertexA.hasNeighbor(vertexC)).toBe(false);
   });

   it("should find edge by vertex", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.findEdge(vertexB)).toEqual(edgeAB);
      expect(vertexA.findEdge(vertexC)).toBeUndefined();
   });

   it("should calculate vertex degree", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");

      expect(vertexA.degree).toBe(0);

      const edgeAB = new Edge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.degree).toBe(1);

      const edgeBA = new Edge(vertexB, vertexA);
      vertexA.addEdge(edgeBA);

      expect(vertexA.degree).toBe(2);
      expect(vertexA.edges.length).toBe(2);
      expect(vertexA.neighbors.length).toBe(1);
   });
});
