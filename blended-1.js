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
// const nums = [-90, 45, 0, 16, -18, 24, -67, 43, 25, -150, 48, 65, 79, -39];

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

//   function urlGenerator(domen) {
//     return function (url) {
//       return `https://${url}.${domen}`
//     }
//   }
// const comUrl = urlGenerator('com');
// console.log(comUrl('google'));
// const uaUrl = urlGenerator('net');
// console.log(uaUrl('ukr'));

// function generateValidator(regExp) {
//   return (value) => {
//     return regExp.test(value)
//   }
// }
// const nameValidator = generateValidator(
// 	/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
// );
// const phoneValidator = generateValidator(
// 	/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
// );
// const emaildValidator = generateValidator(
// 	/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
// );
// console.log(nameValidator("Poly"));
// console.log(nameValidator("5467"));
// console.log(phoneValidator("Mango"));
// console.log(phoneValidator("0502388238"));
// console.log(emaildValidator("krosh@org.ua"));
// console.log(emaildValidator("aJax"));

// Напишіть функію на перевірку рядка на паліндромність

// const isPalindrom = (str) => {
//   return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
// }

// function ifPalindrom() {
//   const userStr = prompt('Введіть рядок для перевірки на паліндромність');
//   if (userStr.trim() === '') {
//     alert('Нажаль ви нічого не ввели');
//   } else {
//     const userStrNorm = userStr.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z0-9 ]/g, '');
//     if (userStrNorm === userStrNorm.split('').reverse().join('')) {
//       alert('Вітаємо! Ваш рядок - паліндром!');
//     }
//     else {
//       alert('Ваш рядок - не паліндром');
//     }
//   }
// }
// ifPalindrom();
// // console.log(isPalindrom('Ані Лорак Кароліна'));

// --------------------------ПЛЕЕР-----------------------------------//
const usersMusic = [
	{
		id: 1,
		author: "Sting",
		name: "Desert Rose",
	},
	{
		id: 2,
		author: "GHOSTEMANE",
		name: "Mercury",
	},
	{
		id: 3,
		author: "Tiesto",
		name: "adagio for string",
	},
	{
		id: 4,
		author: "Scooter",
		name: "4 Am",
	},
	{
		id: 5,
		author: "Kendrick Lamar",
		name: "Savior",
	},
	{
		id: 6,
		author: "Money",
		name: "The Drums",
	},
	{
		id: 7,
		author: "Adele",
		name: "Hello",
	},
];

const tales = [
  {
    id: 1,
    name:'Маленькі казки про їжачків',
    url:'https://youtu.be/BKZK7CYBrEw',
  },
  {
    id: 2,
    name:'Про Гарбузика-боягузика',
    url:'https://youtu.be/bsA7xZTv164',
  },
{
  id:3,
  name:'Крадене сонце',
  url:'https://youtu.be/2LzCXsMjxKk',
  },
{
   id:4,
  name:'Лисиця і журавель',
  url:'https://youtu.be/C2FmAaS6l_Q',
  },
{
   id:5,
  name:'Рукавичка',
  url:'https://youtu.be/IIy9AVSRTR0',
  },
{
  id:6,
  name:'Славний воїн Печериця',
  url:'https://youtu.be/ArdU9tz5nRw',
  }
]

class MusicPlayer {

	constructor(currentTrackID=0, isPaused=true) {
		this.currentTrackID = currentTrackID;
    this.isPaused = isPaused;
	}

  getListOfMusic(musicArray) {
    console.dir(musicArray);
  }

	playMusic(musicArray) {
    if (this.isPaused = false) {
      return console.log(`Music player is already playing!`);
    }
    this.isPaused = false;
    console.log("Плеер поничає грати");

      musicArray.forEach(({ id, author, name }) => {
      this.currentTrackID += 1;
      console.log(`Лічильник треків - ${this.currentTrackID}`);
      console.log(`Now playing track # ${id}, author - ${author}, song - ${name}`);
    });
    this.currentTrackID = 0;
    console.log(`Лічильник треків - ${this.currentTrackID}`);
    this.isPaused = true;
	}

  playTrackId(musicArray, trackNumber) {
    let searchedTrack = musicArray[trackNumber - 1];
    console.log(`Now playing track # ${searchedTrack.id}, author - ${searchedTrack.author}, song - ${searchedTrack.name}`);
    this.currentTrackID = searchedTrack.id;
  }

  playPrewiouseTrack(musicArray, counter) {
     this.currentTrackID = this.currentTrackID - counter;
     let searchedTrack = musicArray[this.currentTrackID - 1];
    console.log(`Now playing track # ${searchedTrack.id}, author - ${searchedTrack.author}, song - ${searchedTrack.name}`);
  }

  playNextTrack(musicArray, counter) {
    this.currentTrackID = this.currentTrackID + counter;
    let searchedTrack = musicArray[this.currentTrackID - 1];
   console.log(`Now playing track # ${searchedTrack.id}, author - ${searchedTrack.author}, song - ${searchedTrack.name}`);
  }

}

const cassettePlayer = new MusicPlayer(0);

// cassettePlayer.getListOfMusic(usersMusic);
// cassettePlayer.playMusic(usersMusic);
// cassettePlayer.playTrackId(usersMusic, 4);
// cassettePlayer.playPrewiouseTrack(usersMusic, 1);
// cassettePlayer.playNextTrack(usersMusic, 2);
// console.log(cassettePlayer);



// Знайти айдішнік
// Вивести в консоль яка пісня грає і її автор
// Створити інтерфейс
// Додати кнопки і П-ку у розмітку для відображення назв
// Додати слухача для кнопок плей і пауз
// Для відео перезаписати метод з аналізом формату
// Створити масив форматів музичних композицій і формати відео для перевірки файлу виклику

// Створити фронт для MVP зразка проекту
// iFrame використовуємо для базової версії
// Використовувати basiclightbox бібліотеку
// Створити плеер для програвання казок в озвучці Доктора Комаровського

// --------------------------ПЛЕЕР-----------------------------------//

/*

Завдання 3

Кнопка "Приховати" ховає текст і замінює назву кнопки на

"Розкрити", при повторному натисканні текст знову стає доступним

і кнопка набуває початкового вигляду.

*/

// const userInput = document.querySelector('#passwordInput');
// const hideBtn = document.querySelector("#passwordButton");

//------Варіант 1

// hideBtn.addEventListener("click", showHideText);

// function showHideText() {
//   if (userInput.value.trim() !== "") {
//     let typeValue = userInput.getAttribute("type");
//     if (typeValue === "text") {
//       userInput.setAttribute("type", "password");
//       hideBtn.textContent = "Показати";
//     } else {
//       userInput.setAttribute("type", "text");
//       hideBtn.textContent = "Приховати";
//     }
//   } else {
//     alert("There is no information");
//   }
//}

// -----------------ВАРІАНТ ІЗ ЗАМИКАННЯМ ---------------------------------

// hideBtn.addEventListener("click", showHideText("show", "hide", "type"));

// function showHideText(textShow, textHide, nameAtr) {
//   return () => {
//     if (userInput.value.trim() !== "") {
//       let typeValue = userInput.getAttribute(nameAtr);
//       if (typeValue === "text") {
//         userInput.setAttribute(nameAtr, "password");
//         hideBtn.textContent = textShow;
//       } else {
//         userInput.setAttribute(nameAtr, "text");
//         hideBtn.textContent = textHide;
//       }
//     } else {
//       alert("There is no information");
//     }
//   }
// }

// ================================ Коти і Собаки=================

const petsList = [
	{ kind: "Dog", year: 2015, name: "lassie" },
	{ kind: "Cat", year: 2016, name: "einstein" },
	{ kind: "Hedgehog", year: 2019, name: "elizabeth" },
	{ kind: "Hamster", year: 2022, name: "alcatraz" },
];
// Створіть функцію  generatePetCard,
// котора отримує 3 аргументи: kind, year, name
// Функція має дповертати розмітку HTML:
// <li class="petCard">
//   <h2>Name Year</h2>
//   <p> Тварина  Kind - Year рік народження. Вік тварини - Years рік.</p>
// </li>

// Вирахувати вік тварини і якщо старша за 1 рік додаємо років замість рік

// Створити новий нумерований список з класом pets

// Строрити 4 картки для тварин використовуючі функцію generatePetCard

// Помістити ці картки у клас у середину списка з класом pets

// Додати список на сторінку  DOM -  у DIV з класом container

// Додати кнопку Видалити на кожну картку тварини

// При кліку на кнопку -видаляємо картку зі структури DOM

const divContainer = document.querySelector(".container");

function generatePetCard(pets) {
	const currentTime = new Date();
	const currentYear = currentTime.getFullYear();
	return pets.reduce((acc, { kind, year, name }) => {
		acc += `<li class="petCard">
<h2>${name} ${year}</h2>
<p> Тварина ${kind} -  ${year} рік народження. Вік тварини - ${
			currentYear - year
		} 
${currentYear - year > 1 ? "Years" : "Year"}.</p>
</li>`;
		return acc;
	}, "");
}
// console.log(generatePetCard(petsList));

// Testing-GIT

// testing-GIT Main
