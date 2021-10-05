//************************************************************************************************
// Comparison Operators
//************************************************************************************************
// Operator	Description
// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	        less than or equal to
// ?	        ternary operator
//************************************************************************************************

//************************************************************************************************
// Double Equal to Operator only check equal value and changes type of one to another to make equal.
//************************************************************************************************

var a,b,c,d,e;

a = 10;
b = 20.12;
c = "Hello";
d = 20;

if (a == b) 
{
    console.log("Double equal is True to where type of a is -> "+typeof a+" <- and -> "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
else 
{
    console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}

// if (a == c) {
//     console.log("Double equal is True to where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }
// else 
// {
//     console.log("Double equal is False to where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }
// if (a == d) 
// {
//     console.log("Double equal is True to where type of a is -> "+typeof a+" <- and -> "+typeof d+" and d is -> "+a+" and d is -> "+d);
// }
// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
// }

//************************************************************************************************
// Triple equal to opperator equal value and equal type
//************************************************************************************************

a = 10;
b = 20;
c = 20.12;
d = "Hello";

if (a === b) 
{
    console.log("Double equal to is True  where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
else 
{
    console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}

// if (a === c) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }
// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// if (a === d) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof d+" and a is -> "+a+" and b is -> "+d);
// }
// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

//************************************************************************************************
// not equal
//************************************************************************************************

a = 10;
b = 20;
c = 20.12;
d = "Hello";

if (a != b) 
{
    console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
else 
{
    console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
// if (a != c) {
//     console.log("Double equal is True to where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// if (a != d) {
//     console.log("Double equal is True to where type of a is -> "+typeof a+" and "+typeof d+" and a is -> "+a+" and b is -> "+d);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

//************************************************************************************************
//  not equal value or not equal type
//************************************************************************************************

a = 10;
b = 20;
c = 20.12;
d = "Hello";

if (a !== b) 
{
    console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
else 
{
    console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
// if (a !== c) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// if (a !== d) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof d+" and a is -> "+a+" and b is -> "+d);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

//************************************************************************************************
// greater than
//************************************************************************************************

a = 10;
b = 20;
c = 20.12;
d = "Hello";

if (a > b) 
{
    console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
else 
{
    console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
// if (a > c) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }
b
// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// if (a > d) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof d+" and a is -> "+a+" and b is -> "+d);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

//************************************************************************************************
// greater than equal to
//************************************************************************************************

a = 10;
b = 20;
c = 20.12;
d = "Hello";

if (a >= b) 
{
    console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
else 
{
    console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
// if (a >= c) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// if (a >= d) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof d+" and a is -> "+a+" and b is -> "+d);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

//************************************************************************************************
// less then
//************************************************************************************************

a = 10;
b = 20;
c = 20.12;
d = "Hello";

if (a < b) 
{
    console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
else 
{
    console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
// if (a < c) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// } is False

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// if (a < d) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof d+" and a is -> "+a+" and b is -> "+d);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

//************************************************************************************************
// less then equal to
//************************************************************************************************

a = 10;
b = 20;
c = 20.12;
d = "Hello";

if (a <= b) 
{
    console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
else 
{
    console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof b+" and b is -> "+a+" and b is -> "+b);
}
// if (a <= c) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" and "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }

// if (a <= d) {
//     console.log("Double equal to is True where type of a is -> "+typeof a+" and "+typeof d+" and a is -> "+a+" and b is -> "+d);
// }

// else 
// {
//     console.log("Double equal to is False where type of a is -> "+typeof a+" <- and -> "+typeof c+" and a is -> "+a+" and b is -> "+c);
// }