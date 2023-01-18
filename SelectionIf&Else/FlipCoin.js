//flip coin to print heads or tails
toss = Math.floor(Math.random()*10) % 2;
if(toss == 0)
{
    console.log("Head");
}
else
{
    console.log("Tail");
}