// let age = prompt("Введіть свій вік для розрахунку дати народження");
// const today = new Date();
// const currentYear = today.getFullYear();
// const birthYear = currentYear - age;
// console.log(birthYear);

// if(isNaN(age)){
//     alert("Введіть будь ласка ваш вік у цифровому вигляді")
// } 




// let a = 5;  
// let b, c;

// b = a * 5;
// console.log(b);  
// b = c = b/2;
// console.log(b);




// const rate = 39.9;
// const currencyUkraine = prompt('Введіть суму в гривнях ₴ для конвертування у євро €');
// const euro = (+currencyUkraine / rate).toFixed(2);
// alert(`Ваш результат ${euro}€ євро`);




// const firstInput = document.querySelector('.firstvalue');
// const secondInput = document.querySelector('.secondvalue');
// const btn = document.querySelector('.btn');
// btn.addEventListener("click", () => {
//     const result = Math.floor(Number(firstInput.value) /  Number(secondInput.value));
//     console.log(result);
//     alert(result);
//   });





// const allFloors = prompt("Введіть кількість поверхів у будинку:");
// const flatsPerFloor = prompt("Введіть кількість квартир на поверсі:"); 
// const FlatNumber = prompt("Введіть номер квартири:");

// const flatsPerEntrance = flatsPerFloor * allFloors;
// const entrance = Math.floor((FlatNumber - 1) / flatsPerEntrance + 1);
// const flor = Math.floor(((FlatNumber - 1) % flatsPerEntrance) / 4 + 1);

// alert(`${FlatNumber} квартира знаходиться на ${flor} поверсі ${entrance} підїзду`);




// const red = +prompt('Введіть значення червоного від 0 до 225');
// const green = +prompt('Введіть значення зеленого від 0 до 225');
// const blue = +prompt('Введіть значення блакитного від 0 до 225');

// const newRed = red.toString(16);
// const newGreen = green.toString(16);
// const newBlue = blue.toString(16);
// const color = `#${newRed}${newGreen}${newBlue}`;
// alert(`Ваш новий колір ${color}`)





// const celsius = prompt('Введіть температуру у цельсіях')
// const fahrenheit = celsius * 1.8 + 32;
// const fahrenheitInfo = alert(`Зараз  ${fahrenheit} °F по фарингейту`);