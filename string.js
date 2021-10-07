// Strings in JavaScript
console.log("String Quick Book for JavaScipt");

//************************************************************************************************
// A JavaScript string is zero or more characters written inside quotes.
//Defining String
// We can define using single and double quotes,
//************************************************************************************************
// Single quote
var a = 'Kunal';
console.log(typeof a);

// Double quote
var a = "Kunal";
console.log(typeof a);

//Other way
var a =
"How are you doing Kunal?";
console.log(a);

//************************************************************************************************
//Quotes 
// We can using single and double quotes till they won't affect starting and ending quotes. 
// If we start with a single quote, then we can use double quotes. Vise versa.
//************************************************************************************************

//Single quote
var a = "Hi it's raining outside. I can't come."
console.log(a);

//Double quote
var a = 'Hi it"s raining outside. I can"t come.'
console.log(a);

//************************************************************************************************
//Backslash (\) also know as backslash character.
// The backslash (\) escape character turns special characters into string characters.
//************************************************************************************************

//Single quote
var a = 'Hi it\'s raining outside. I can\'t come.';
console.log(a);

//Double quote
var a = "Hi it\"s raining outside. I can\"t come.";
console.log(a);

// Other Example
var a = "Kunal is working with \"FEUJI INC.\" He is working on \"JavaScript\" ";
console.log(a);

//************************************************************************************************
// Escpare sequences are valid in JavaScript. There are total 6 Escape character which are
// \b
// \t
// \r
// \n 
// \b
// \f
// \v
//************************************************************************************************


//************************************************************************************************
//Use of \ and + in Java Scipr
//************************************************************************************************

var a = "Hi it\'s raining outside. I can't come.";
console.log(a);

var a = "Hi Kunal.\
How are you doing?";
console.log(a);

//************************************************************************************************
// String in JavaScript.
// Normally, JavaScript strings are primitive values, created from literals:
// But strings can also be defined as objects with the keyword "new"
//************************************************************************************************

var a = "Kunal Singh";
console.log(typeof a);

var a = new String("Kunal Singh");
console.log(typeof a);


//************************************************************************************************
//Length of String
//************************************************************************************************
var a = "Hi it's raining outside. I can't come."
console.log(a.length);

//************************************************************************************************
// Extracting of String
// There are three methods to do that;
// 1. slice(start, end)
// 2. substring(start, end)
// 3. substr(start, length)
//************************************************************************************************

//************************************************************************************************
// 1. SLICE
// slice(start, end) extracts a part of a string and returns the extracted part in a new string.
// The method takes "2 parameters": the "start position", and the "end position" (end not included).
//************************************************************************************************

// If a parameter is positive, the position is counted from the start of the string.
var a = "Kunal is working with \"FEUJI INC.\" He is working on \"JavaScript\" ";
console.log(a.slice(23,31)); //Print FEUJI INC.
console.log(a.slice(23));

// If a parameter is negative, the position is counted from the end of the string.
var a = "Kunal is working with \"FEUJI INC.\" He is working on \"JavaScript\" ";
console.log(a.slice(-12,-2)); //Print Javascript.
console.log(a.slice(-24));

//************************************************************************************************
// 2. SUBSTRING
// substring(start, end) extracts a part of a string and returns the extracted part in a new string.
// The method takes "2 parameters": the "start position", and the "end position" (end not included).
//************************************************************************************************

// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.
var a = "Kunal is working with \"FEUJI INC.\" He is working on \"JavaScript\" ";
console.log(a.substring(23,32)); //Print FEUJI INC.
console.log(a.substring(23));

//************************************************************************************************
// 3. SUBSTR
// substring(start, length) extracts a part of a string and returns the extracted part in a new string.
// The method takes "2 parameters": the "start position", and the "length" of the extracted part.
//************************************************************************************************

// substr() is similar to slice()
// The difference is that the second parameter specifies the length of the extracted part.

var a = "Kunal is working with \"FEUJI INC.\" He is working on \"JavaScript\" ";
console.log(a.substr(23,9)); //Print FEUJI INC.
console.log(a.substr(23));
console.log(a.substr(-12,4)); // Print Java
console.log(a.substr(-12)); // Print JavaScript"

//************************************************************************************************
// replace()
// The replace() method does not change the string it is called on. It returns a new string.
// By default, the replace() method replaces only the first match.
// By default, the replace() method is case sensitive. Writing TRAINEE (with upper-case) will not work.
// To replace case insensitive, use a regular expression with an /i flag (insensitive)
// Note that regular expressions are written without quotes.
// To replace all matches, use a regular expression with a /g flag (global match):
//************************************************************************************************

var a = "I work in Trainee but after training he will be promoted from Trainee.";
var b = a.replace("Trainee","React Developer");
console.log(a);
console.log(b);

var a = "I work in Trainee";
var b = a.replace("TRAINEE","React Developer");
console.log(a);
console.log(b);

var a = "I work in Trainee";
var b = a.replace(/TRAINEE/i,"React Developer");
console.log(a);
console.log(b);

var a = "I work in Trainee but after training he will be promoted from Trainee.";
var b = a.replace(/Trainee/g,"React Developer");
console.log(a);
console.log(b);

//************************************************************************************************
// UPPER CASR to lower case and vise versa.
// A string is converted to upper case with toUpperCase()
// A string is converted to lower case with toLowerCase()
//************************************************************************************************

var a = "Kunal Singh";
console.log(a.toUpperCase());

var a = "Kunal Singh";
console.log(a.toLowerCase());

//************************************************************************************************
// CONCATINATION.
// concat() joins two or more strings
// The concat() method can be used instead of the plus operator.
//************************************************************************************************

var a ="Hello";
var b ="World";
console.log(a+' '+b);
console.log(a.concat(' ',b)); //contact can be used instead of the plus operator.


//************************************************************************************************
// TRIM.
// trim() method removes whitespace from both sides of a string.
//************************************************************************************************

var a = "            Kunal            ";
console.log(a);
console.log(a.trim());

//************************************************************************************************
// Padding.
// ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.
//************************************************************************************************

var a = "K";
console.log(a.padStart(4,0));
console.log(a.padEnd(4,0));

//************************************************************************************************
// Characters
// There are 3 methods for extracting string characters:
// 1. charAt(position)
// 2. charCodeAt(position)
// 3. Property access [ ]
// The charAt() method returns the character at a specified index (position) in a string.
// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
// ECMAScript 5 (2009) allows property access [ ] on strings
//************************************************************************************************

var a = "Kunal";
console.log(a.charAt(0)); // Returns at position 0 in a string.
console.log(a.charCodeAt(0)); // Returns ASCII code for the string at position 0.
// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)

console.log(a[0]) // Returns K

//************************************************************************************************
// String to an Array
//************************************************************************************************

var a = "KunalSingh";
var fname = a.split("");
var text = "";
for (let i = 0; i< fname.length ; i++)
{
    text = text + fname[i] + "\n"
}
console.log(text);