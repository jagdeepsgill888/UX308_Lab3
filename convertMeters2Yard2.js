// 1) Take a variable with distance in metres as input and output the same distance converted to yards.

function convertMeters2Yards(Meters) {
    let Yards = Meters * 1.094;
    return Yards;
}
//let killometers = 150;
//let miles = convertKillometers2Miles(killometers);
//console.log(`${killometers} Killometers is ${miles} miles`)

export {convertMeters2Yards}