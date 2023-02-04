"use strict";
// // За допомогою циклу for додайте всі четні числа від min до max

// function coutnEven() {
//   const userMin = Number(prompt("Write min number"));
//   const userMax = Number(prompt("Write max number"));
//   console.log(typeof (userMin));
//   console.log(typeof (userMax));
//   let total = 0;

//   if (isNaN(userMin) || isNaN(userMax)) {
//     alert(numberCheck(userMin, userMax));

//   }
//   for (let i = userMin; i <= userMax; i += 1) {
//     if (i % 2 !== 0) {
//       continue
//     }
//     console.log(i);
//     total += i;
//   }
//   console.log(total);
//   return
// }
// coutnEven();

// function numberCheck(num1, num2) {
//   let result;
//   if (isNaN(num1) && isNaN(num2)) {
//     result = `First number = ${num1}, Second number = ${num2}`;
//   } else if (isNaN(num1)) {
//     result = `First number = ${num1}`;
//   } else {
//     result = `Second number = ${num2}`;
//   }
//   return result;
// }

// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами

// const arr = ['Best', 'the', 'foo', 'is', 'JS'];

// function normalizedStr(array) {
//   const newArr = [...array];
//   const reversedArray = newArr.reverse();
//   console.log(reversedArray);
//   const delEl = reversedArray.splice(2, 1);
//   console.log(delEl);
//   console.log(reversedArray);
//   console.log(arr);
//   const resultStr = reversedArray.join(' ');
//   console.log(resultStr);
//   return
// }

// console.log(normalizedStr(arr));

// function normStr(array, number) {
//   return array.slice(0, number - 1).concat(array.slice(number)).reverse().join(' ')
// }

// console.log(normStr(arr, 3));

// function superNormStr(array, word) {
//   const idx = array.indexOf(word);
//   // console.log(idx);
//   return array.slice(0, idx).concat(array.slice(idx + 1)).reverse().join(' ')
// }

// console.log(superNormStr(arr, 'foo'));




