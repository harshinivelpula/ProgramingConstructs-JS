//1. a + b * c 3. c + a / b 2. a % b + c 4. a * b + c(enter 3 numbers,find max,min)
a = ("8");//enter first value
b = ("10");//enter second value
c = ("20");//enter third value

operation1 = a+b*c;
operation2 = c+a/b;
operation3 = a%b+c;
operation4 = a*b+c;

if (operation1>operation2)
{
    console.log("Maximum" +operation1);
    console.log("Minimum" +operation2);
}
else if (operation1>operation3)
{
    console.log("Maximum" +operation1);
    console.log("Minimum" +operation3);
}
else if (operation1>operation4)
{
    console.log("Maximum" +operation1);
    console.log("Minimum" +operation4);
}
else if (operation2>operation1)
{
    console.log("Maximum" +operation2);
    console.log("Minimum" +operation1);
}
else if (operation2>operation3)
{
    console.log("Maximum" +operation2);
    console.log("Minimum" +operation3);
}
else if (operation2>operation4)
{
    console.log("Maximum" +operation2);
    console.log("Minimum" +operation4);
}
else if (operation3>operation1)
{
    console.log("Maximum" +operation3);
    console.log("Minimum" +operation1);
}
else if (operation3>operation2)
{
    console.log("Maximum" +operation3);
    console.log("Minimum" +operation2);
}
else if (operation3>operation4)
{
    console.log("Maximum" +operation3);
    console.log("Minimum" +operation4);
}
else if (operation4>operation1)
{
    console.log("Maximum" +operation4);
    console.log("Minimum" +operation1);
}
else if (operation4>operation2)
{
    console.log("Maximum" +operation4);
    console.log("Minimum" +operation2);
}
else if (operation4>operation3)
{
    console.log("Maximum" +operation4);
    console.log("Minimum" +operation3);
}