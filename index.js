

console.log(arrValues);

// let word = prompt ('Введите строку');
// let wordLen = word.length - 1;

// for (let i=0; i < wordLen / 2; i=i+1) {
//     if (word [i] == word [wordLen-i]) {
//         alert ('Введенная строка - палиндром!');
//     } else {
//         alert ('Введенная строка - не палиндром!');
//         break;
//     }
// }


// Задание 1:

// let number = prompt(`Введите любое число`);

// alert(+number);
// alert(+number * +number);
// alert(+number * +number * +number);



// Задание 2:

// let discount = prompt(`Введите Ваш промокод`);

// if (discount === `скидка` ) {
//     alert(`Промокод применён`);
// } else {
//     alert(`Промокод не работает`);
// }



// Задание 3:

// let name = prompt(`Введите Ваше имя`);
// let year = +prompt(`Введите год Вашего Дня Рождения`);

// alert(`${name}: ${2024 - +year}`);



// Задание 4:

// let name = prompt(`Введите Ваше имя`);
// let year = +prompt(`Введите год Вашего Дня Рождения`);
// let years = '';

// if (year % 10 === 0) {
//     let years = 'лет';
// } else if (year % 10 === 1) {
//     let years = 'год';
// } else if (year % 10 === 2, 3, 4) {
//     let years = 'года';
// } else if (year % 10 === 5, 6, 7, 8, 9) {
//     let years = 'лет';
// };

// alert(`${name}: ${2024 - +year} ${years}`);



// Задание 5:

// let age = +prompt(`Для одобрения кредита напишите Ваш возраст`, ``);

// if (+age < 18) {
//     alert(`Мы не можем выдать Вам кредит`);
// }   else if (+age < 21) {
//     alert(`Мы можем выдать Вам кредит максимум на 50000`);
//  }  else if (+age < 35) {
//     alert(`Мы можем выдать Вам кредит максимум на 400000`);
//  }  else if (+age < 65) {
//     alert(`Мы можем выдать Вам кредит максимум на 1000000`);
//  }

//  let sum = +prompt(`Введите сумму, которую хотите взять в кредит`);

//  if (+sum % 1000 === 0) {
//    alert(`Мы одобряем Ваш кредит на сумму ${sum}`);
//  } else {
//    alert(`Сумма кредита должна быть кратна 1000`);
//  }




// Задание 6.6.1:

// let string = prompt('Введите Ваш палиндром');
// let rightToLeft = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//     rightToLeft += string[i];
// }

// let leftToRight = '';

// for (let j = rightToLeft.length - 1; j >= 0; j -= 1) {
//     let string = '';
//     leftToRight += rightToLeft[j];
// }

// let lowerLeftToRight = leftToRight.toLowerCase();
// let lowerRightToLeft = rightToLeft.toLowerCase(); 

// console.log(lowerLeftToRight);
// console.log(lowerRightToLeft);

//     if (lowerLeftToRight == lowerRightToLeft) {
//             alert ('Введённая строка - палиндром!');
//         } else {
//             alert ('Введённая строка - не палиндром!');
//         }



// Задание 6.6.2:

// const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
// const set = new Set(arr);

// const newArr = Array.from(set);
// console.log(newArr);



// Задание 6.6.3:

// let numberOfUser = +prompt(`Введите число`);

// const arr = [];

// for (i = 0; i <= numberOfUser; i ++ ) {
//     arr.push(i);
// }

// console.log(arr);



// Задание 6.6.4:

// ---



// Задание 6.6.5:

// const obj = {
//     some: 'some',
//     dom: 'text',
//     arr: [1, 2, 3, 4, 5],
//     tom: 'there'
// };

// const arrValues = [];

// for (let key in obj) {
//     if (arrValues.isArray(obj[key])) {
//         arrValues.push(obj[key]);
//     } else {
//     arrValues.push(obj[key]);
//     }
// }
