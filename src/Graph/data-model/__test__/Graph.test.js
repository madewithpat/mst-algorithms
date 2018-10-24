import { Graph, Vertex, Edge } from "../index";

describe("Graph", () => {
   it("should add vertices to graph", () => {
      const graph = new Graph();

      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");

      graph.addVertex(vertexA).addVertex(vertexB);

      expect(graph.getVerticesKeys()).toEqual(["A", "B"]);
      expect(graph.getVertexByKey(vertexA.key)).toEqual(vertexA);
      expect(graph.getVertexByKey(vertexB.key)).toEqual(vertexB);
   });

   it("should add edges to a graph", () => {
      const graph = new Graph();

      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");

      const edgeAB = new Edge(vertexA, vertexB);

      graph.addEdge(edgeAB);

      expect(graph.order).toBe(2);
      expect(graph.getAllVertices()[0]).toEqual(vertexA);
      expect(graph.getAllVertices()[1]).toEqual(vertexB);

      const graphVertexA = graph.findVertexByKey(vertexA.key);
      const graphVertexB = graph.findVertexByKey(vertexB.key);

      expect(graph.getVerticesKeys()).toEqual(["A", "B"]);
      expect(graphVertexA).toBeDefined();
      expect(graphVertexB).toBeDefined();

      expect(graph.findVertexByKey("not existing")).toBeUndefined();

      expect(graphVertexA.neighbors.length).toBe(1);
      expect(graphVertexA.neighbors[0]).toEqual(vertexB);
      expect(graphVertexA.neighbors[0]).toEqual(graphVertexB);

      expect(graphVertexB.neighbors.length).toBe(1);
      expect(graphVertexB.neighbors[0]).toEqual(vertexA);
      expect(graphVertexB.neighbors[0]).toEqual(graphVertexA);
   });

   it("should find edge by vertices", () => {
      const graph = new Graph();

      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB, 10);

      graph.addEdge(edgeAB);

      const graphEdgeAB = graph.findEdge(vertexA, vertexB);
      const graphEdgeBA = graph.findEdge(vertexB, vertexA);
      const graphEdgeAC = graph.findEdge(vertexA, vertexC);
      const graphEdgeCA = graph.findEdge(vertexC, vertexA);

      expect(graphEdgeAC).toBeUndefined();
      expect(graphEdgeCA).toBeUndefined();
      expect(graphEdgeAB).toEqual(edgeAB);
      expect(graphEdgeBA).toEqual(edgeAB);
      expect(graphEdgeAB.weight).toBe(10);
   });

   it("should return vertex neighbors", () => {
      const graph = new Graph(true);

      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB);
      const edgeAC = new Edge(vertexA, vertexC);

      graph.addEdge(edgeAB).addEdge(edgeAC);

      const neighbors = graph.getNeighbors(vertexA);

      expect(neighbors.length).toBe(2);
      expect(neighbors[0]).toEqual(vertexB);
      expect(neighbors[1]).toEqual(vertexC);
   });

   it("should throw an error when trying to add edge twice", () => {
      function addSameEdgeTwice() {
         const graph = new Graph(true);

         const vertexA = new Vertex("A");
         const vertexB = new Vertex("B");

         const edgeAB = new Edge(vertexA, vertexB);

         graph.addEdge(edgeAB).addEdge(edgeAB);
      }

      expect(addSameEdgeTwice).toThrow();
   });

   it("should return the list of all added edges", () => {
      const graph = new Graph(true);

      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB);
      const edgeBC = new Edge(vertexB, vertexC);

      graph.addEdge(edgeAB).addEdge(edgeBC);

      const edges = graph.getAllEdges();

      expect(edges.length).toBe(2);
      expect(edges[0]).toEqual(edgeAB);
      expect(edges[1]).toEqual(edgeBC);
   });

   it("should calculate total graph weight for default graph", () => {
      const graph = new Graph();

      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");
      const vertexD = new Vertex("D");

      const edgeAB = new Edge(vertexA, vertexB);
      const edgeBC = new Edge(vertexB, vertexC);
      const edgeCD = new Edge(vertexC, vertexD);
      const edgeAD = new Edge(vertexA, vertexD);

      graph
         .addEdge(edgeAB)
         .addEdge(edgeBC)
         .addEdge(edgeCD)
         .addEdge(edgeAD);

      expect(graph.weight).toBe(0);
   });

   it("should calculate total graph weight for weighted graph", () => {
      const graph = new Graph();

      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");
      const vertexD = new Vertex("D");

      const edgeAB = new Edge(vertexA, vertexB, 1);
      const edgeBC = new Edge(vertexB, vertexC, 2);
      const edgeCD = new Edge(vertexC, vertexD, 3);
      const edgeAD = new Edge(vertexA, vertexD, 4);

      graph
         .addEdge(edgeAB)
         .addEdge(edgeBC)
         .addEdge(edgeCD)
         .addEdge(edgeAD);

      expect(graph.weight).toBe(10);
   });

   it("should be possible to delete edges from graph", () => {
      const graph = new Graph();

      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");

      const edgeAB = new Edge(vertexA, vertexB);
      const edgeBC = new Edge(vertexB, vertexC);
      const edgeAC = new Edge(vertexA, vertexC);

      graph
         .addEdge(edgeAB)
         .addEdge(edgeBC)
         .addEdge(edgeAC);

      expect(graph.size).toBe(3);

      graph.deleteEdge(edgeAB);

      expect(graph.size).toBe(2);
      expect(graph.getAllEdges()[0].key).toBe(edgeBC.key);
      expect(graph.getAllEdges()[1].key).toBe(edgeAC.key);
   });

   it("should should throw an error when trying to delete not existing edge", () => {
      function deleteNotExistingEdge() {
         const graph = new Graph();

         const vertexA = new Vertex("A");
         const vertexB = new Vertex("B");
         const vertexC = new Vertex("C");

         const edgeAB = new Edge(vertexA, vertexB);
         const edgeBC = new Edge(vertexB, vertexC);

         graph.addEdge(edgeAB);
         graph.deleteEdge(edgeBC);
      }

      expect(deleteNotExistingEdge).toThrowError();
   });
});
