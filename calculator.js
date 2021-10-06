// CALCULATOR
// Using switch

var a,b,operator;

function calculatorFor(a, b, operator)
{
    switch(operator)
    {
        case '+':
            console.log('The addition of the two numbers is ',a+b);
            break;

        case '-':
            console.log('The difference of the two numbers is ',a-b);
            break;

        case '/':
            console.log('The division of the two numbers is ',a/b);
            break;

        case '%':
            console.log('The modulous of the two numbers is ',a%b);
            break;
            
        case '*':
            console.log('The multiplication of the two numbers is ',a*b);
            break;
    }
}

calculatorFor(10,5,'+');

// Using if else if else

function calculatorIf(a, b, operator)
{
    if('+' == operator)
    {
        console.log('The addition of the two numbers is ',a+b);
    }
    if('-' == operator)
    {
        console.log('The difference of the two numbers is ',a-b);
    }
    if('/' == operator)
    {
        console.log('The division of the two numbers is ',a/b);
    }
    if('%' == operator)
    {
        console.log('The modulous of the two numbers is ',a%b);
    }
    if('*' == operator)
    {
        console.log('The multiplication of the two numbers is ',a*b);
    }
}

calculatorIf(10,5,'-')