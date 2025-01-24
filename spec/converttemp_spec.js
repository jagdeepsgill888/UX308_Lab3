import { convertTemp2Clothing } from "../convertTemp2Clothing.js";

describe("test convertTemp2Clothing ", function() {
    it("tests 20c with 90% humidity", function() {
      let temp = 20;
      let humid = 90;
      let clothing = convertTemp2Clothing(temp, humid);
      expect(clothing).toBe("Jacket");
    });
    it("tests 70m", function() {
        let meters = 70;
        let yards = convertMeters2Yards(meters);
        expect(yards.toFixed(2)).toBe("76.58");
      });

  });
  

let meters = 150;
let yards = convertMeters2Yards(meters);


//let clothing = Jacket;
 if(temp >=3 && humid >=80 {
    clothing = "jacket";
} if else (temp <=2 && humid >=80 {
    clothing = "jacket";