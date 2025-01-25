import { findCubeVol } from "../findCubeVol.js";

describe("test findCubeVol ", function() {
    it("tests 7 edge length", function() {
        let height = 7;
        let width = 7;
        let length = 7;
      let vol = findCubeVol(height, width, length);
      expect(vol).toBe(343); //note not to use "" for numbers
    });
  });