let para = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

// Remove punctuation and convert the paragraph to lowercase
let cleanedPara = para.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();

// Split the paragraph into words and count their occurrences
let words = cleanedPara.split(/\s+/);
let wordCount = {};
words.forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});

// Display the count of each word
for (let word in wordCount) {
  console.log(`'${word}' appears ${wordCount[word]} times`);
}


let str = "sr@fEEnsdR sd ... saw QQQ";

let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
    console.log(str[i])
    count++;
  }
}

console.log(`The number of capital letters in the string is: ${count}`);


let input_str = "1234-3453-2222-5444";

const convertInputStringToArray = (input_str) => {
  return input_str.split("");
};

const checkForTheValidNumber = (number) => {
  let num = convertInputStringToArray(number);
  if (num.length == 19) {
    for (let i = 0; i < num.length; i++) {
      console.log(typeof num[i]);
      if (i + (1 % 5) == 0) {
        if (num[i] != "-") {
          return console.log("Not a valid number");
        }
      } else {
        if (typeof num[i] != "string") {
          return console.log("Not a valid number 3rd if");
        } else {
          return console.log("Valid Number");
        }
      }
    }
  } else {
    return console.log("Not a valid number");
  }
};

checkForTheValidNumber(input_str);


// Reverse a string

let text = "good";

const reverseAString = (str) => {
    revStr = "";
    str = str.split("");
    for(let i = str.length; i > 0; i--){
        console.log(str[i])
        revStr = revStr + str[i];
    }
    return revStr;
}

console.log(reverseAString(text));


// WAP to move all the zeros to the end let x[= [5,0,2,0,4,0,3,9,0,7]

// let x = [5,0,2,0,4,0,3,9,0,7];

// const moveZeroToLast = (arr) => {
//     let newArr = [];
//     let flag = 0;
//     if(arr.length > 0){
//         if (arr.length > 1){
//             for(let i=0; i < arr.length; i++){
//                 if(Number(arr[i] != 0)){
//                     newArr.push(arr[i]);
//                     flag = 1;
//                 }
//             }
//             if(flag){
//                 let diff = arr.length - newArr.length
//                 for(let j = 0; j < diff; j++){
//                     newArr.push("0");
//                 }   
//             }
//             return newArr;
//         }else{
//             return arr;
//         }
//     } else {
//         console.log("Empty Array");
//     }
// }

// console.log(moveZeroToLast(x));


// WAP to print the sum of the array let x[]={"2.9","4.5","9.0"}

// let x=["2.9","4.5","9.0"];

// const sumOfArrayItem = (arr) => {
//     let sum = 0;
//     if(arr.length > 0){
//         if(arr.length > 1){
//             for(let i = 0; i < arr.length; i ++) {
//                 sum = sum + Number(arr[i]);
//             }
//             return(sum)
//         }
//         else {
//             return arr[0];
//         }
//     } else {
//         console.log("Array is empty")
//     }
// }

// console.log(sumOfArrayItem(x));
