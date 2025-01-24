//Take a variable with distance in **kilometres** as input and output the same distance *converted* to **miles*.

function convertKillometers2Miles(killometers) {
    let miles = killometers /1.609;
    return miles;
}
//let killometers = 150;
//let miles = convertKillometers2Miles(killometers);
//console.log(`${killometers} Killometers is ${miles} miles`)

export {convertKillometers2Miles}