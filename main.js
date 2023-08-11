// Квартира в ней комнаты - в каждой комнате ширина и длинна => вернуть площадь квартиры

// const rooms = [
//     {width: 5, length: 10},
//     {width: 5, length: 10},
// ]
// const getSquareRoom = (a, b) => a * b
// const getSquareFlat = () => getSquareRoom(rooms[0].width, rooms[0].length) + getSquareRoom(rooms[1].width, rooms[1].length);
// console.log(getSquareFlat());


//PROMPT и ты вводишь слово => найти сколько гласных и согласных букв 


// const getCount = (word, vowels) => {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }

// const word = prompt('Введите слово');
// const vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];

// let vowelsCount = getCount(word, vowels);
// let consonantsCount = word.length - vowelsCount;

// console.log(`Гласных ${vowelsCount} и согласных ${consonantsCount}`);




// Инпут в HTML => вводим имейл и проверяем его на валидность => проверяем на наличие @ .com / .ua / .ru

    // const input = document.getElementById('input');
    // const button = document.getElementById('button');

    // button.addEventListener("click",  () => alert(validateEmail(input.value) ? "Email is valid." : "Email is not valid."));
    // function validateEmail(value) {
    //   const valueRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ua|ru|net)$/;
    //   return valueRegex.test(value);
    // }




// К примеру в вас есть кофе (1кг, 2кг) => задача сделать функцию,// запытаете зерна - ставите помол (грамм за порцию) и считаете кол-во чашек


// const coffeeWeight = 1000;
// const grindValue = 0.8;
// const gramsPerCup = 10;

// function getCoffeeCups(coffeeWeight, grindValue, gramsPerCup) {

//     const grindCoffeeWeight = coffeeWeight * grindValue;
//     const cups = Math.floor(grindCoffeeWeight / gramsPerCup);

//     return cups;
// }

// const cups = getCoffeeCups(coffeeWeight, grindValue, gramsPerCup);
// console.log(`Можно приготовить примерно ${cups} чашек кофе.`);





// У вас есть дистанция и длинна шага => покажите за сколько мы ее пройдем 
// ответ должен быть вы прошли за (0 часов 12 минут 10 секунд)

// const distance = 1000; // дистанция в метрах
// // формула для вычисления длины шага(Длина шага = (Рост / 4) + 0,37)
// const stepLength = 0.4; // длина шага в метрах

// function calculateTime(distance, stepLength) {
//     const numberOfSteps = distance / stepLength;
//     const timePerStep = 1; // Время на один шаг (в секундах)
//     const totalTimeInSeconds = numberOfSteps * timePerStep; // 2500 sec

//     const hours = Math.floor(totalTimeInSeconds / 3600);  // 3600 это секунд в одном часе
//     const minutes = Math.floor((totalTimeInSeconds % 3600) / 60); // остаток секунд которые не укладываются в час мы делим на 60,что бы перевести секунды в минуты
//     const seconds = totalTimeInSeconds % 60;

//     return `Вы прошли за ${hours} часов ${minutes} минут ${seconds} секунд`;
// }



// console.log(calculateTime(distance, stepLength));
