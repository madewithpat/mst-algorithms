import React, { Component } from "react";

class Container extends Component {
   render() {
      return (
         <div
            style={{
               width: "80%",
               maxWidth: "1120px",
               alignSelf: "center",
               flexGrow: 1
            }}
         >
            {this.props.children}
         </div>
      );
   }
}

export default Container;
