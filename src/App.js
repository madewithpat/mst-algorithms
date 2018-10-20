import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./layout/Header";
import Container from "./layout/Container";
import StartPage from "./StartPage";
import PrimPage from "./Prim";
import KruskalPage from "./Kruskal";
import "./App.css";

class App extends Component {
   render() {
      return (
         <div className="App">
            <Header />
            <Container>
               <Route exact path="/" component={StartPage} />
               <Route path="/prim" component={PrimPage} />
               <Route path="/kruskal" component={KruskalPage} />
            </Container>
         </div>
      );
   }
}

export default App;
