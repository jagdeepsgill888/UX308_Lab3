import { convertMeters2Yards } from "../convertMeters2Yard2.js";

describe("test convertMeters2Yards ", function() {
    it("tests 150m", function() {
      let meters = 150;
      let yards = convertMeters2Yards(meters);
      expect(yards.toFixed(2)).toBe("164.10");
    });
    it("tests 70m", function() {
        let meters = 70;
        let yards = convertMeters2Yards(meters);
        expect(yards.toFixed(2)).toBe("76.58");
      });

  });
  

let meters = 150;
let yards = convertMeters2Yards(meters);
console.log(`${meters} meters is ${yards} yards`)