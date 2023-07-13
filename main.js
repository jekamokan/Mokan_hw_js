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



// Copy

// const arrTable = [
//         [0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5], 
//         [0, 2, 4, 6, 8, 10], 
//         [0, 3, 6, 9, 12, 15], 
//         [0, 4, 8, 12, 16, 20], 
//         [0, 5, 10, 15, 20, 25]
//     ]
// const newArr = [arrTable.slice()];
// console.log(newArr);




// Deep Copy

// const arrTable = [
//         [0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5], 
//         [0, 2, 4, 6, 8, 10], 
//         [0, 3, 6, 9, 12, 15], 
//         [0, 4, 8, 12, 16, 20], 
//         [0, 5, 10, 15, 20, 25]
//     ]
// const newArr = [...arrTable];
// console.log(newArr);



// Array Equals

// const arr1 = ['a', 'b', 'c'];
// const arr2 = arr1;
// alert(arr2 === arr1);



// Flat

// const arrTable = [
//         [ 1, 2, 3, 4, 5], 
//         [ 2, 4, 6, 8, 10], 
//         [ 3, 6, 9, 12, 15], 
//         [ 4, 8, 12, 16, 20], 
//         [ 5, 10, 15, 20, 25]
//     ]
//     const newArr = [...arrTable[0], ...arrTable[1],  ...arrTable[2], ...arrTable[3], ...arrTable[4]]
//     console.log(newArr);



// Destruct
// const text = prompt('Напишіть будь яке речення');
// let[a] = text.slice(0, 1);
// let[b] = text.slice(5, 6);
// let[c] = text.slice(9, 10);
// alert(`Перша буква "${a}"  п'ята буква "${b}"  дев'ята буква "${c}"`);


// Destruct default

// const text = prompt('Напишіть будь яке речення');
// const [, secondLetter = '!', , fourthLetter = '!', fifthLetter ='!'] = text
// alert(`Друга буква "${secondLetter}"  четверта буква "${fourthLetter}"  п'ята буква "${fifthLetter}"`);


// Multiply table rest

// const arrTable = [
//         [0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5], 
//         [0, 2, 4, 6, 8, 10], 
//         [0, 3, 6, 9, 12, 15], 
//         [0, 4, 8, 12, 16, 20], 
//         [0, 5, 10, 15, 20, 25]
//     ]
// const[a, [b, ...one], [c, ...two], [d, ...three], [e, ...four], [f, ...five]] = arrTable
// const newArr = [];
// newArr.push(one, two, three, four, five);
// console.log(newArr);


// For Alert

// const names = ["John", "Paul", "George", "Ringo"];
// for(const name of names){
//     alert(name)
// }



// For Select Option

// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let str = "<select>"
// for (const currency of currencies){
// str+= `<option>${currency}</option>`
// }
// str+= "</select>"
// document.write(str) 




// For Table Horizontal

// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
// str+= `<td>${name}</td>`
// }
// str+= "</table>"
// document.write(str) 




// For Table Vertical

// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
// str+= `<tr><td>${name}</td></tr>`
// }
// str+= "</table>"
// document.write(str)




// For Table Letters

// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<table>"
// for (const currency of currencies){ //цикл створює рядки
//      // Одна ітерація циклу створює ОДНИЙ РЯДОК
     
//      str+=`<tr></tr>`
//     console.log(currency)
//     for (const letter of currency){ //цикл створює осередки в одному рядку
//          //одна ітерація циклу створює ОДИН осередок
//          str+= `<td>${letter}</td>`
//         console.log(letter)
//     }
// }
// str+= "</table>"
// document.write(str) //document.write відобразить ваш HTML на сторінці




// For Multiply Table

// const arrTable = [
//             [0, 0, 0, 0, 0],
//             [0, 1, 2, 3, 4], 
//             [0, 2, 4, 6, 8], 
//             [0, 3, 6, 9, 12], 
//             [0, 4, 8, 12, 16], 
//         ];
// let str = "<table>";
// for(const arr of arrTable){
//     str+= `<tr></tr>`;
//     for(const value of arr){
//         str+= `<td>${value}</td>`
//     }
// }
// str+= "</table>";
// document.write(str);




// Function Capitalize

// let str = "cANBerRa"
// let result
// console.log(result) //Canberra