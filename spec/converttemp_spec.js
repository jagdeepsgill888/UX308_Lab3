import { convertTemp2Clothing } from "../convertTemp2Clothing.js";

describe("test convertTemp2Clothing", function() {
    it("tests humid <70 and temp >3", function() {
      let humid = 60;
      let temp = 4;
      let clothing = convertTemp2Clothing(temp, humid)
      expect(clothing).toBe("Coat");
    });
  });
  