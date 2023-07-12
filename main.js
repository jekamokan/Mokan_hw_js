// Confirm

// const fruit = confirm('Do you like apple?');
// const city = confirm('Did you see NYC?');
// const arr =[];
// arr.push(fruit, city);
// console.log(arr);




// Prompts

// const age = +prompt('Enter your age');
// const color = prompt('Which color do you prefer?');
// const arr = [];
// arr[0] = age;
// arr[1] = color;
// console.log(arr);



// Item access

// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
// const value = +prompt('Введіть значення індексу від 0 до 3');
// if(value){
//     alert(`Ваш індекс відповідає значенню "${fruits[value]}"`)
// }else if(value == 0){
//     alert('Ви нічого не ввели')
// }else if(value > fruits.length){
//     alert('Введіть менше значення')
// }else{
//     alert('Ви ввели текст а не цифру')
// }



// Item change

// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
// const index = +prompt('Введіть значення індексу від 0 до 3');
// const newFruit = prompt('Введіть назву нового фрукта яки замінить старий')
// alert(`Це наш старий масив [${fruits}] ви вирішили змінити "${fruits[index]}" на "${newFruit}" отже у наступному вікні буде вже новий масив`)
// fruits[index] = newFruit;
// alert(fruits);



// Multiply table

// const arrTabel = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4, 5], 
//     [0, 2, 4, 6, 8, 10], 
//     [0, 3, 6, 9, 12, 15], 
//     [0, 4, 8, 12, 16, 20], 
//     [0, 5, 10, 15, 20, 25]
// ]
// console.log(arrTabel[5][5] == 25); // true



// Multiply table slice

// const arrTable = [
//         [0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5], 
//         [0, 2, 4, 6, 8, 10], 
//         [0, 3, 6, 9, 12, 15], 
//         [0, 4, 8, 12, 16, 20], 
//         [0, 5, 10, 15, 20, 25]
//     ]
// const newArrTable = arrTable.slice(1, 6);
// console.log(newArrTable);
// const oneWithoutZero = newArrTable[0].slice(1, 6);
// const twoWithoutZero = newArrTable[1].slice(1, 6);
// const threeWithoutZero = newArrTable[2].slice(1, 6);
// const fourWithoutZero = newArrTable[3].slice(1, 6);
// const fiveWithoutZero = newArrTable[4].slice(1, 6);
// const newArr = []
// newArr[0] = oneWithoutZero;
// newArr[2] = twoWithoutZero;
// newArr[3] = threeWithoutZero;
// newArr[4] = fourWithoutZero;
// newArr[5] = fiveWithoutZero;
// console.log(newArr);



// IndexOf Word

// const text = prompt('Введіть рядок з декількох слів');
// const word = prompt('Введіть слово яке потрібно знайти');
// console.log(word);
//  if(text.includes(word)){
//     alert(`Ваше слово у рядку "${text}" починається з номера ${text.indexOf(word)}`)
//  }else if(text.indexOf(word) == -1){
//     alert('Ви ввели слова якого не має в рядку')
//  }




// Reverse

// let arr = [];
// const arrOne = prompt('Введіть значення яке ви хочете додати до масиву');
// const arrTwo = prompt('Введіть значення яке ви хочете додати до масиву');
// const arrThree = prompt('Введіть значення яке ви хочете додати до масиву');
// const arrFour = prompt('Введіть значення яке ви хочете додати до масиву');
// const arrFive = prompt('Введіть значення яке ви хочете додати до масиву');
// arr.push(arrOne, arrTwo, arrThree, arrFour, arrFive);
// console.log(arr);
// const newArr = [];
// newArr[0] = arr.pop();
// newArr[1] = arr.pop();
// newArr[2] = arr.pop();
// newArr[3] = arr.pop();
// newArr[4] = arr.pop();
// console.log(newArr);




// Reverse 2

// let arr = [];
// const arrOne = prompt('Введіть значення яке ви хочете додати до масиву');
// const arrTwo = prompt('Введіть значення яке ви хочете додати до масиву');
// const arrThree = prompt('Введіть значення яке ви хочете додати до масиву');
// const arrFour = prompt('Введіть значення яке ви хочете додати до масиву');
// const arrFive = prompt('Введіть значення яке ви хочете додати до масиву');
// arr.push(arrOne, arrTwo, arrThree, arrFour, arrFive);
// console.log(arr);
// const newArr = [];
// newArr[0] = arr.pop();
// newArr[1] = arr.pop();
// newArr[2] = arr.pop();
// newArr[3] = arr.pop();
// newArr[4] = arr.pop();
// console.log(newArr);
// const secondArr = [];
// const secondFive = newArr.shift();
// const secondFour = newArr.shift();
// const secondThree = newArr.shift();
// const secondTwo = newArr.shift();
// const secondOne = newArr.shift();
// secondArr.unshift(secondOne, secondTwo, secondThree, secondFour, secondFive);
// console.log(secondArr);