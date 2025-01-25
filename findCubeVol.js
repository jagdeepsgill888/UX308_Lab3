//Write a program to calculate the volume of a cube. Start with a variable that contains the length of 1 edge in meters.

let height = 7;
let width = 7;
let length = 7;

function findCubeVol(height, width, length) {
    return height * width * length; 
//return Math.pow(edge, 3); // Volume of a cube is edge^3
}

let vol = findCubeVol(height, width, length);

console.log(`The volume is ${vol} cubic meters.`);

export {findCubeVol}