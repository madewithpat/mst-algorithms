import Vertex from "../Vertex";
import Edge from "../Edge";

describe("Vertex", () => {
   it("should use default coordinates", () => {
      let v = new Vertex("v");

      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.label).toBe("v");
   });

   // Should edges create neighborship or should vertices?
   // I guess we could separate them, so that edges don't add themselves to nodes
   // That way we can cut edges without destroying them...
   // So I guess that means edges shouldn't in fact add themselves to nodes..
});
