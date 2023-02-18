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

// function megaSuperNormStr(array, word) {
//   if (array.includes(word)) {
//     return array.slice(0, array.indexOf(word)).concat(array.slice(array.indexOf(word) + 1)).reverse().join(' ')
//   }
//   else {
//     alert('There is no such word!')
//   }
// }

// console.log(megaSuperNormStr(arr, 'foo'));

//додайте "Маракуя" в кінець
// замініть значення "Борщ" на "Роли"
// видаліть перший елемент масиву та виведіть його в консоль
// додайте "Вассабі" та "Угорь" на початок масиву
/* const menu = ["Суші","Борщ"];
console.log(menu.push("Маракуя"));
console.log(menu)

menu.splice(1, 1, "Роли");
console.log(menu)

console.log(menu.shift());

console.log(menu.unshift("Вассабі", "Угорь"));
console.log(menu); */

// Напишіть функцію для переформатування дати

/* const inputData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 4, name: "Item 4" },
  { id: 7, name: "Item 7" },
];

function updateData(data) {
  const resultObject = {};
  const objectData = {};
  const dataId = [];

  data.forEach((item) => {
    dataId.push(item.id);
    objectData[item.id] = item;
  });
  resultObject.entities = objectData;
  resultObject.byId = dataId;
  return resultObject;
}
console.log(updateData(inputData)); */

// ('function should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });

/* Створіть функцію яка перевіряє два рядки чи являються вони анограмами. */

// function getString() {
//   let string1 = prompt("Write first string");
//   let string2 = prompt("Write second string");
//   if (string1.length !== string2.length) {
//     console.log(`First check ${string1} ${string2}`);
//     return false;
//   };

//   if (string1.toLowerCase() === string2.toLowerCase()) {
// console.log(`Second check ${string1} ${string2}`);
//     return false;

//   };
//   const sortStr1 = string1.toLowerCase().split("").sort().join("");
//   const sortStr2 = string2.toLowerCase().split("").sort().join("");
//   if (sortStr1 !== sortStr2) {
//     console.log(`Third check ${sortStr1} ${sortStr2}`);
//     console.log(string1, string2);
//     return false;
//   };

//   return true;

// }

// console.log(getString());

// ! Task 6
// порахуйте всі позитивні або негативні значення і повертає обʼєкт даних
const nums = [-90, 45, 0, 16, -18, 24, -67, 43, 25, -150, 48, 65, 79, -39];

// function allPosNum(array) {
// 	return array.reduce(
// 		(objData, elem) => {
// 			if (elem > 0) {
// 				return { ...objData, pos: objData.pos + elem };
// 			} else {
// 				return { pos: objData.pos, neg: objData.neg + elem };
// 			}
// 		},
// 		{ pos: 0, neg: 0 }
// 	);
// }
// console.log(allPosNum(nums));

// function allPosNum(array) {
// 	return array.reduce(
//     (objData, elem) => {
      
//       return {
//         ...objData,
//         pos: elem > 0 ? objData.pos + elem : objData.pos,
//         neg: elem > 0 ? objData.neg : objData.neg + elem,
//       }
// 		},
// 		{ pos: 0, neg: 0 }
// 	);
// }
// console.log(allPosNum(nums));


  //-------------------------------------------------------------------------------------------------------------------------------------- 
  
  
  function urlGenerator(domen) {
    return function (url) {
      return `https://${url}.${domen}`
    }
  }
const comUrl = urlGenerator('com');
console.log(comUrl('google'));
const uaUrl = urlGenerator('net');
console.log(uaUrl('ukr'));

function generateValidator(regExp) {
  return (value) => {
    return regExp.test(value)
  }
}
const nameValidator = generateValidator(
	/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
);
const phoneValidator = generateValidator(
	/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
);
const emaildValidator = generateValidator(
	/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
);
console.log(nameValidator("Poly"));
console.log(nameValidator("5467"));
console.log(phoneValidator("Mango"));
console.log(phoneValidator("0502388238"));
console.log(emaildValidator("krosh@org.ua"));
console.log(emaildValidator("aJax"));
