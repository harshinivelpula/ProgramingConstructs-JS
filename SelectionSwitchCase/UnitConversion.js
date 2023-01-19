//takes User Inputs and does Unit Conversion of different Length units1. Feet to Inch2. Feet to Meter 3. Inch to Feet4. Meter to Feet
const ps = require("prompt-sync");
 const prompt = ps();

 console.log("Options : 1-Feet to inch \t 2-Inch to feet \t 3-Feet to meter \t 4-Meter to feet" );
 
 let InputLength = prompt("1");//Enter Length
 let choice =prompt("3");//Enter your choice
                    
 switch (choice)
 {
    case '1' :
        console.log("Feet to inch = " +InputLength*8);
        break;
    case '2' :
        console.log("Inch to feet = " +InputLength/8);
        break;
    case '3' :
        console.log("Feet to meter = " +InputLength/3.8);
        break;
    case '4':
        console.log("Meter to feet = " +InputLength*3.8);
        break;
    default :
        console.log("invalid input");
        break;           

 }