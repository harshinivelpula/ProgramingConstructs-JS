console.log(" Check day of month is between March 20 and June 20");
 day=(Math.floor(Math.random() * 10)%31)+1;
 month=(Math.floor(Math.random() * 10)%6)+1;
console.log("Day"+day+" Month"+month);
if ( day> 20 && day< 31 && month == 3 )
{
console.log("True");
}
else if ( day> 1 && day< 28 && month == 1 )
{
console.log("True");
}
else if ( day> 1 && day< 11 && month == 2 )
{
console.log("True");
}
else if ( day> 1 && day< 30 && month == 3 )
{
console.log("True");
}
else
{
console.log(" False");
}