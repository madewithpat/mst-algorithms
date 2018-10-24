import React, { Component } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Button from "./components/Button";
import AlgoSelector from "./components/AlgoSelector";
import Description from "./components/Description";

import { Graph, Vertex, Edge } from "./Graph";
import * as datamodel from "./Graph/data-model";
import H from "./Graph/H";
import { prim, kruskal } from "./Graph/algorithms";
import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         graph: null,
         primTree: null,
         kruskalTree: null,
         algorithm: "",
         showAlgoSelector: true,
         showAlgoDescription: false,
         algorithmComplete: false
      };
   }

   componentDidMount() {
      const graph = new datamodel.Graph();
      H.vertices.forEach(v => {
         let vertex = new datamodel.Vertex(v.label, v.x, v.y);
         graph.addVertex(vertex);
      });
      H.edges.forEach(e => {
         let startVertex = graph.getVertexByKey(e.endpoints[0]);
         let endVertex = graph.getVertexByKey(e.endpoints[1]);
         let edge = new datamodel.Edge(startVertex, endVertex, e.weight);
         graph.addEdge(edge);
      });

      let primTree = prim(graph);
      let kruskalTree = kruskal(graph);

      this.setState({
         graph,
         primTree,
         kruskalTree
      });
   }

   render() {
      const {
         algorithm,
         showAlgoSelector,
         showAlgoDescription,
         graph,
         primTree,
         kruskalTree,
         algorithmComplete
      } = this.state;

      let graphToRender = graph;
      if (algorithmComplete) {
         if (algorithm.includes("prim")) {
            graphToRender = primTree;
         }

         if (algorithm.includes("kruskal")) {
            graphToRender = kruskalTree;
         }
      }
      return (
         <div className="App">
            <Header />
            <Container>
               <main className="main">
                  <div className="grapharea column">
                     <Graph>
                        {graph &&
                           graphToRender
                              .getAllEdges()
                              .map(e => (
                                 <Edge
                                    key={e.key}
                                    x1={e.startVertex.x}
                                    x2={e.endVertex.x}
                                    y1={e.startVertex.y}
                                    y2={e.endVertex.y}
                                    weight={e.weight}
                                 />
                              ))}

                        {graph &&
                           graphToRender
                              .getAllVertices()
                              .map(v => (
                                 <Vertex
                                    key={v.key}
                                    x={v.x}
                                    y={v.y}
                                    label={v.key}
                                 />
                              ))}
                     </Graph>
                  </div>
                  <div className="textarea column">
                     {showAlgoSelector && (
                        <AlgoSelector
                           algorithms={["Prim's", "Kruskal's"]}
                           selectedAlgorithm={algorithm}
                           onSelect={this.onAlgoSelect}
                           onConfirm={this.onAlgoConfirm}
                        />
                     )}
                     {showAlgoDescription && [
                        <Description algo={algorithm} />,
                        <div className="buttonarea">
                           <Button onClick={this.showMST} label="Get Results" />
                        </div>
                     ]}
                     {algorithmComplete && (
                        <div>
                           <h2>Complete!</h2>
                           <p>MST weight: {`${graphToRender.weight}`}</p>
                           <p>
                              Edge selection order:{" "}
                              {graphToRender
                                 .getAllEdges()
                                 .map(e => e.key)
                                 .join(", ")}
                           </p>
                        </div>
                     )}
                  </div>
               </main>
            </Container>
         </div>
      );
   }

   onAlgoSelect = algorithm => {
      return () => {
         this.setState({ algorithm: algorithm.toLowerCase() });
      };
   };

   onAlgoConfirm = () => {
      this.setState({ showAlgoSelector: false, showAlgoDescription: true });
   };

   showMST = () => {
      this.setState({ showAlgoDescription: false, algorithmComplete: true });
   };
}

const StartButton = ({ onClick }) => <Button onClick={onClick} label="Start" />;

export default App;
