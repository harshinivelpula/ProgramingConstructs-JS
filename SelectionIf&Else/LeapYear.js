//checking Year is Leap Year or not
let year = (Math.floor(Math.random() *2004)+1000);
console.log("Year"+year);
leap1=year % 400;
leap2=year % 100;
leap3=year % 4;
if (leap1== 0 ||  leap2 !=0 && leap3== 0)
{
    console.log("leap year");
}
else console.log("not leap year");