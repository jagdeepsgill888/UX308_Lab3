// 2) Take a variable with the temperature and another variable with the relative humidity and output a clothing suggestion.
//let humid = 80;
//let temp = 10;
//let clothing = convertTemp2Clothing(temp, humid);

function convertTemp2Clothing(temp, humid) {
let clothing;
    if(humid >70 && temp >3){
        clothing = "Umbrella";
    }else if (humid >70 && temp <3){
        clothing = " Winter Jacket for snow";
    }else if (humid <70 && temp <3){
        clothing = "Warm Down jacket";
    }else if (humid <70 && temp >3){
        clothing = "Coat";
    }
    return clothing;
}

//console.log(`In a ${temp}c with ${humid}% humidity, bring a ${clothing}`);

//return(`In a ${temp}c with ${humid}% humidity , bring a ${clothing}`);
//}

export {convertTemp2Clothing}
