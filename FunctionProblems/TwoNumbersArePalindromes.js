var number = ("0");//enter number
var number2 = ("1");//enter number

function Palindrome(number,number2)
{
    let rem, temp, final = 0;
    temp = number;
    while(number>0)
    {
        rem = number%10;
        number = parseInt(number/10);
        final = final*10+rem;
    }
    if(final == temp && final == number2 )
    {
        console.log("is palindrome");
    }
    else{
        console.log("not palindrome");
    }	
}
Palindrome(1,11);