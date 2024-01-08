// 3.10-exam



// 1

// function getSum(n) {
//   let sum1 = 0;
//   let sum2 = 0;

//   for (let i = 1; i <= n; i++) {
//     sum1 += 2 * i - 1;
//     sum2 += 2 * i;    
//   }

//   return sum1 + sum2;
// }

// let n = 3;
// let result = getSum(n);
// console.log(result)


// 2

// function getHighestNumberOfDigits(arr) {
//     let maxDigits = 0;
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const numStr = String(arr[i]);
//         const numDigits = numStr.length;

//         if (numDigits > maxDigits) {
//             maxDigits = numDigits;
//             result = arr[i];
//         }
//     }

//     return result;
// }

// let arr = [1589, 31851, 512, 180975, 78];
// let output = getHighestNumberOfDigits(arr);
// console.log(output);


// 3

// function getStringArr(arr) {
//     let resultArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             resultArr.push(arr[i]);
//         }
//     }

//     return resultArr;
// }

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];
// let output = getStringArr(arr);
// console.log(output);

// 4

// function getPunctuationNumber(str) {
//     const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
    
//     let punctuationCount = 0;
    
//     for (let i = 0; i < str.length; i++) {
//         let currentChar = str[i];
//         if (punctuationSigns.indexOf(currentChar) !== -1) {
//             punctuationCount++;
//         }
//     }
    
//     return punctuationCount;
// }

// let str = "Hello! How are you? I'm doing great. What's new?";
// let result = getPunctuationNumber(str);
// console.log(result);


// 5

// function switchLetters(str) {
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         let currentChar = str[i];

//         if (currentChar >= 'a' && currentChar <= 'z') {
//             result += currentChar.toUpperCase();
//         } else if (currentChar >= 'A' && currentChar <= 'Z') {
//             result += currentChar.toLowerCase();
//         } else {
//             result += currentChar;
//         }
//     }

//     return result;
// }

// let str = "Abdulaziz Programmer";
// let result = switchLetters(str);
// console.log(result);

// 6

// function changeObjToArr(obj) {
//     let result = [];

//     for (let key in obj) {
//         result.push(`${key}${obj[key]}`);
//     }

//     return result;
// }

// let obj = { a: 1, b: 2, c: 3 };
// let result = changeObjToArr(obj);
// console.log(result);

// 7

// function seperateStudents(students) {
//     let result = {
//         grant: [],
//         contract: []
//     };

//     for (let i = 0; i < students.length; i++) {
//         let student = students[i];
//         if (student.isGrant) {
//             result.grant.push(student.name);
//         } else {
//             result.contract.push(student.name);
//         }
//     }

//     return result;
// }

// let students = [
//     { name: "Jurabek", isGrant: false },
//     { name: "Elbek", isGrant: true },
//     { name: "Shamshod", isGrant: false },
//     { name: "Kamola", isGrant: false },
//     { name: "Gulnoza", isGrant: true },
//     { name: "Savlatbek", isGrant: false },
// ];

// let result = seperateStudents(students);
// console.log(result);

// 8

// function getTotalPages(books) {
//     let totalPages = 0;

//     for (let i = 0; i < books.length; i++) {
//         if (books[i].isReadFinished) {
//             totalPages += books[i].pages;
//         }
//     }

//     return totalPages;
// }

// const books = [
//     { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//     { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//     { name: "Atom habits", pages: 328, isReadFinished: true },
//     { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//     { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//     { name: "The Hobbit", pages: 310, isReadFinished: false },
//     { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//     { name: "Harry Potter", pages: 320, isReadFinished: true },
//     { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//     { name: "To the Lighthouse", pages: 209, isReadFinished: true }
// ];

// let result = getTotalPages(books);
// console.log(result);





// 5.10-exam

// 1

// function getOddDividersSum(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0 && i % 2 !== 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// let n = 30;
// let result = getOddDividersSum(n);
// console.log(result);


// 2


// function search(arr, str) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase().includes(str.toLowerCase())) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let arr = ["Abdulaziz", "Shahobiddin", "Shohrux", "Shukurjon", "Azamat", "Rahmatulla"];
// let str = "az";
// let result = search(arr, str);
// console.log(result);

// 3

// function getDividersSum(arr, n) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % n === 0) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;
// let result = getDividersSum(arr, n);
// console.log(result);

// 4

// function checkSentence(str) {
//     if (str.length === 0) {
//         return false;
//     }

//     let firstChar = str[0];
//     if (!(firstChar >= 'A' && firstChar <= 'Z')) {
//         return false;
//     }

//     let lastChar = str[str.length - 1];
//     if (lastChar !== '.') {
//         return false;
//     }

//     return true;
// }

// let str = "Abdulaziz programmer is full-stack developer.";
// let result = checkSentence(str);
// console.log(result);

// 5

function getNumberOfCases(str) {
    let result = {
        upperCases: 0,
        lowerCases: 0
    };

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        if (currentChar >= 'A' && currentChar <= 'Z') {
            result.upperCases++;
        } else if (currentChar >= 'a' && currentChar <= 'z') {
            result.lowerCases++;
        }
    }

    return result;
}

let str = "Abdulaziz Programmer";
let result = getNumberOfCases(str);
console.log(result);
