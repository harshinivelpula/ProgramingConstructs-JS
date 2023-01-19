//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
const pro = require("prompt-sync");
 const prompt = pro();

let number = prompt("3"); //Enter Number 
switch (true) 
{
    case 1(number>0 && number <=9) :
        console.log("units");
        break;
    case 2(number>9 && number <=99):
        console.log("tens");
        break;
    case 3(number>99 && number <=999):
        console.log("hundreds");
        break;
    case 4(number>999 && number <=9999) :
        console.log("thousands");
        break;
    case 5(number>9999 && number <=99999):
        console.log("ten thousand");
        break;
    default :
        console.log("invalid input");
        break;          
}