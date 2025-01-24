import { convertKillometers2Miles } from "../convertKillo2Miles.js";

describe("test convertKillometers2Miles ", function() {
    it("tests 150 km", function() {
      let killometers = 150;
      let miles = convertKillometers2Miles(killometers);
      expect(miles.toFixed(2)).toBe("93.23");
    });
    it("tests 70km", function() {
        let killometers = 70;
        let miles = convertKillometers2Miles(killometers);
        expect(miles.toFixed(2)).toBe("43.51");
      });

  });
  

let killometers = 150;
let miles = convertKillometers2Miles(killometers);
console.log(`${killometers} Killometers is ${miles} miles`)