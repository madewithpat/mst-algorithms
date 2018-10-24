import { Graph, Edge, Vertex } from "../../../data-model";
import example from "../../../H";

import { prim } from "../index";

describe("prim", () => {
   it("should find a simple minimum spanning tree", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");
      const vertexD = new Vertex("D");

      const edgeAB = new Edge(vertexA, vertexB, 1);
      const edgeAD = new Edge(vertexA, vertexD, 3);
      const edgeBC = new Edge(vertexB, vertexC, 1);
      const edgeBD = new Edge(vertexB, vertexD, 3);
      const edgeCD = new Edge(vertexC, vertexD, 1);

      const graph = new Graph();

      graph
         .addEdge(edgeAB)
         .addEdge(edgeAD)
         .addEdge(edgeBC)
         .addEdge(edgeBD)
         .addEdge(edgeCD);

      expect(graph.weight).toEqual(9);

      const minimumSpanningTree = prim(graph);

      expect(minimumSpanningTree.weight).toBe(3);
      expect(minimumSpanningTree.order).toBe(graph.order);
      expect(minimumSpanningTree.size).toBe(graph.order - 1);
   });

   it("should find a more complicated minimum spanning tree", () => {
      const vertexA = new Vertex("A");
      const vertexB = new Vertex("B");
      const vertexC = new Vertex("C");
      const vertexD = new Vertex("D");
      const vertexE = new Vertex("E");
      const vertexF = new Vertex("F");
      const vertexG = new Vertex("G");

      const edgeAB = new Edge(vertexA, vertexB, 2);
      const edgeAD = new Edge(vertexA, vertexD, 3);
      const edgeAC = new Edge(vertexA, vertexC, 3);
      const edgeBC = new Edge(vertexB, vertexC, 4);
      const edgeBE = new Edge(vertexB, vertexE, 3);
      const edgeDF = new Edge(vertexD, vertexF, 7);
      const edgeEC = new Edge(vertexE, vertexC, 1);
      const edgeEF = new Edge(vertexE, vertexF, 8);
      const edgeFG = new Edge(vertexF, vertexG, 9);
      const edgeFC = new Edge(vertexF, vertexC, 6);

      const graph = new Graph();

      graph
         .addEdge(edgeAB)
         .addEdge(edgeAD)
         .addEdge(edgeAC)
         .addEdge(edgeBC)
         .addEdge(edgeBE)
         .addEdge(edgeDF)
         .addEdge(edgeEC)
         .addEdge(edgeEF)
         .addEdge(edgeFC)
         .addEdge(edgeFG);
      expect(graph.weight).toEqual(46);

      const minimumSpanningTree = prim(graph);

      expect(minimumSpanningTree.weight).toBe(24);
      expect(minimumSpanningTree.order).toBe(graph.order);
      expect(minimumSpanningTree.size).toBe(graph.order - 1);
   });

   it("should find minimum spanning tree for our graph", () => {
      const G = new Graph();
      example.vertices.forEach(v => {
         let vertex = new Vertex(v.label, v.x, v.y);
         G.addVertex(vertex);
      });
      example.edges.forEach(e => {
         let startVertex = G.getVertexByKey(e.endpoints[0]);
         let endVertex = G.getVertexByKey(e.endpoints[1]);
         let edge = new Edge(startVertex, endVertex, e.weight);
         G.addEdge(edge);
      });
      const seed = G.getVertexByKey("A");
      const mstOfG = prim(G, seed);
      expect.assertions(4);
      expect(G).not.toBe(mstOfG);
      expect(mstOfG.order).toBe(G.order);
      expect(mstOfG.size).toBe(mstOfG.order - 1);
      expect(mstOfG.weight).toBe(15);
   });
});
