var number = ("10");//enter number
function PrimeRange(number)
{
    let count=0;
    for(let i = 2;i<number;i++)
    {
        for(let j=2;j<=i;j++)
        {
            if((i%j) == 0)
            {
                count++;
            }
        }
        if(count == 0)
        {
            console.log(i);
        } 
    }
}
function prime2(lowerNumber,higherNumber){
    for (let i = lowerNumber; i <= higherNumber; i++)
    {
        let flag = 0;
        for (let j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0)
        {
            console.log(i);
        }
    }
}
prime2(1,10);
PrimeRange(number);