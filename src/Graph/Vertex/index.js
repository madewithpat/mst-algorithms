import React from "react";

const Vertex = ({ x, y, label, selected = false }) => {
   return (
      <g>
         <circle
            cx={x}
            cy={y}
            r={20}
            stroke={selected ? "black" : "blue"}
            strokeWidth={4}
            fill={selected ? "red" : "#61dafb"}
         />
         <text x={x - 5} y={y + 5}>
            {label}
         </text>
      </g>
   );
};

export default Vertex;
