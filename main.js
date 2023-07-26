// Temperature

// const grad = (celsius )=> celsius * 1.8 + 32
// console.log(grad(16));






// RGB


// const rgb = (r, g, b) => {
//     const newRed = r.toString(16);
//     const newGreen = g.toString(16);
//     const newBlue = b.toString(16);
//     let color = `#${newRed}${newGreen}${newBlue}`
//     if(color.length <= 6){
//         color += '0'
//     }
//     return color
// }
// console.log(rgb(10,105,20));
// console.log(rgb(10,105,20).length);






//Flats


// const flats = (allFloors, flatsPerFloor, FlatNumber) => {
//     const flatsPerEntrance = flatsPerFloor * allFloors;
//     const entrance = Math.floor((FlatNumber - 1) / flatsPerEntrance + 1);
//     const floor = Math.floor(((FlatNumber - 1) % flatsPerEntrance) / 4 + 1);
//     return {
//         entrance: entrance,
//         floor: floor
//     }
// }
// console.log(flats(5, 5, 5));









//Credentials

// function capitalizeString(string) {
//         return string[0].toUpperCase() + string.slice(1).toLowerCase();
//       }

// function capitalize() {
//     const firstName = capitalizeString(prompt('Your name').trim()) 
//     const surName = capitalizeString(prompt('Your surname').trim())
//     const fatherName = capitalizeString(prompt('Your father name').trim())
//     const fullName = capitalizeString(prompt('Your full name').trim())
//     return {
//         name: firstName,
//         surname: surName,
//         fatherName: fatherName,
//         fullName: fullName
//     };
//   }
//   console.log(capitalize);







// New line

// const userText = prompt("Введіть рядок з маркером нового рядка (\\n)");

// const newLine = (text) => {
//     return text.split('\\n').join("\n");
// }
// newLine(userText)





// Prompt or


// const age = +prompt('Your age?');

// const promptOr = (info) => (info || false) ? alert(`Your age ${info}`) : alert('Please write your age');  

// promptOr(age)





// Login & password

// const logAndPas = (log, pass) => {
//     const login = prompt('Enter you login');
//     const password = prompt('Enter your password');
    
//     if((login == log) && (password == pass)){
//         alert('Congratulation, its correct')
//     }else if((login !== log) && (password !== pass)){
//         alert('Yor login & password uncorrect')
//     } else if(login != log){
//         alert('Your login uncorrect')
//     } else if(password != pass){
//         alert('Your password uncorrect')
//     }
// }
// logAndPas('admin', 'qwerty')




// For table

// const arrTable = [
//             [0, 0, 0, 0, 0],
//             [0, 1, 2, 3, 4], 
//             [0, 2, 4, 6, 8], 
//             [0, 3, 6, 9, 12], 
//             [0, 4, 8, 12, 16], 
//         ];

// const arrFunction = (newArr) => {
//     let str = "<table>";
//     for(const arr of newArr){
//         str+= `<tr></tr>`;
//         for(const value of arr){
//             str+= `<td>${value}</td>`
//         }
//     }
//     str+= "</table>";
//      return   document.write(str);
// }

// arrFunction(arrTable)





//Filter Lexics

// const stopWords = ['бляха', 'муха', "пляшка", "шабля"];
// const textPrompt = prompt('Введіть будь який текст');

// const stopWordsFunction = (text, arr) => {
//     const newText = text.split(" ");
//     const withOutWords = newText.filter(word => !arr.includes(word));
//     const result = withOutWords.join(" ");
//     return result
// }

// console.log(stopWordsFunction(textPrompt, stopWords)); 





// Form

// Функція для створення елемента input та label
// function createInputElement(labelText, inputType, inputValue) {
//     const label = document.createElement("label");
//     label.textContent = labelText;

//     const input = document.createElement("input");
//     input.type = inputType;
//     input.value = inputValue;

//     label.appendChild(input);
//     return label;
// }

// // Функція для створення форми з об'єкта
// function generateFormFromObject(obj) {
//     const form = document.createElement("form");

//     for (const key in obj) {
//         const value = obj[key];
//         const type = typeof value === "number" ? "number" : typeof value === "boolean" ? "checkbox" : "text";
//         form.appendChild(createInputElement(key + ":", type, value));
//     }

//     return form;
// }

// const car = {
//     "Name": "chevrolet chevelle malibu",
//     "Cylinders": 8,
//     "Displacement": 307,
//     "Horsepower": 130,
//     "Weight_in_lbs": 3504,
//     "Origin": "USA",
//     "in_production": false
// };

// // Виклик функції та додавання форми на сторінку
// const formContainer = document.getElementById("formContainer");
// formContainer.appendChild(generateFormFromObject(car));





//Array of objects sort


// const persons = [
//     { name: "Діма", age: 17 },
//     { name: "Марія", age: 35 },
//     { name: "Катя", age: 73 },
//     { name: "Саша", age: 12 },
// ];

// persons.sort((x,y) => x.age - y.age)
// console.log(persons);
// persons.sort((x, y) => x.name.localeCompare(y.name));
// console.log(person);




