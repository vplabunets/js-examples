// let available = 100;
// let ordered = 0;
// console.log(available);
// console.log(ordered);

//   let message;
//   console.log(available);
//   console.log(ordered);
//   if (ordered === 0) {
//     message = "Your order is empty!";
//     console.log(message);
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//     console.log(message);
//   } else {
//     message = "The order is accepted, our manager will contact you";
//     console.log(message);
//   }

//   return message;
//   // Change code above this line
// }
// console.log(checkStorage);
// let message = "Get best sale offers now!";

// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   message = message.toLowerCase();

//   result = message.includes("spam") || message.includes("sale");

//   // Change code above this line
//   return result;
// }
// // console.log(checkForSpam("Get best sale offers now!"));

// function calculateTotal(number) {
//   // Change code below this line
//   for (let i = 1; i <= number; i += 1) {
//     number = number + i;
//     console.log(i);
//   }
//   console.log(number);
//   return number;
//   // Change code above this line
// }
// console.log(checkForSpam(3));

// let number = 3;
// for (let i = number; i >= 1; i -= 1) {
//   console.log(i);
//   let sum = 0;
//   sum = sum + i;
//   //   console.log(number);
// }
// // console.log(number);
// // console.log(sum);
// console.log(sum);

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   //   console.log(i);
//   let sum = 0;
//   sum = sum + i;
//   sum += sum;
//   console.log(sum);
// }

//Task #24
// const numbers = [12, 24, 8, 41, 76];
// let value = 20;
// const newNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     console.log(numbers[i]);
//     newNumbers.push(numbers[i]);
//     console.log(newNumbers);
//   }
// }
// console.log(newNumbers);

//Task #26

// let Array3 = [];
// const Array1 = [0, 2, 3];
// const Array2 = [2, 1, 17, 19];
// // console.log(Array2.includes(17));
// for (let i = 0; i < Array1.length; i += 1) {
//   // console.log(Array1[i]);
//   // console.log(Array2.includes(Array1[i]));
//   // console.log(Array2.includes(Array1[i]) === true);
//   // }
//   if (Array2.includes(Array1[i]) === true) {
//     console.log(Array3);
//   }
//   Array3 = Array1.push(Array1[i]);
//

// Taks 29

function getEvenNumbers(start, end) {
  const array = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}
console.log(getEvenNumbers(20, 20));
