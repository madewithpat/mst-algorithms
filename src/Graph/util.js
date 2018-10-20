export const createAdjMatrix = (V, E) => {
   let matrix = [];

   while (matrix.length < V.length) {
      let row = [];
      while (row.length < V.length) {
         row.push(0);
      }
      matrix.push(row);
   }

   E.forEach(e => {
      let i = V.indexOf(V.find(v => v.label === e.from));
      let j = V.indexOf(V.find(v => v.label === e.to));

      matrix[i][j] = e.weight;
   });

   return matrix;
};
