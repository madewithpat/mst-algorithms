import React, { Component } from "react";
import Button from "./Button";

class AlgoSelector extends Component {
   render() {
      const { algorithms, selectedAlgorithm, onSelect, onConfirm } = this.props;
      return (
         <div>
            <h2>
               {selectedAlgorithm.length > 0
                  ? selectedAlgorithm
                  : "Select an Algorithm"}
            </h2>
            <div className="buttonarea">
               {algorithms.map(algo => (
                  <Button key={algo} onClick={onSelect(algo)} label={algo} />
               ))}
               {selectedAlgorithm && (
                  <Button onClick={onConfirm} label="Next" />
               )}
            </div>
         </div>
      );
   }
}

export default AlgoSelector;
