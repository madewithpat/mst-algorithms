import React from "react";

export const Edge = ({ selected = false, weight = 1, x1, x2, y1, y2 }) => {
   let slope;
   if (x1 < x2) {
      slope = (y2 - y1) / (x2 - x1);
   } else if (x1 > x2) {
      slope = (y1 - y2) / (x1 - x2);
   } else {
      slope = undefined;
   }
   let xOffset = slope < 0 ? 6 : 0;
   let xMid = (x2 + x1) / 2 - xOffset;
   let yMid = (y2 + y1) / 2;
   return (
      <g>
         <line
            stroke={selected ? "red" : "black"}
            strokeWidth="4"
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
         />
         <text x={xMid} y={yMid} fill="#61dafb">
            {weight}
         </text>
      </g>
   );
};
export default Edge;
