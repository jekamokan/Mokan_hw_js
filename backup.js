// let bucket5 = 5;
// let bucket3 = 3;
// let bucket4 = 0;

// const getNewBucket = () => {
//     while(bucket4 < 4){
//         let count = bucket5 % bucket3;
//         bucket4 += count
//     }
//     return bucket4;
// }

// getNewBucket();
// console.log(bucket4);


// function measureWater() {
//     let bucket5 = 5; 
//     let bucket3 = 3; 

//     let currentBucket5 = 0;
//     let currentBucket3 = 0;

//     currentBucket5 = bucket5;

//     while (currentBucket5 !== 4) {
//       const amountToPour = Math.min(currentBucket5, bucket3 - currentBucket3);
//       currentBucket5 -= amountToPour;
//       console.log(currentBucket5);
//       currentBucket3 += amountToPour;
//       console.log(currentBucket3);

//       if (currentBucket5 === 0) {
//         currentBucket5 = bucket5;
//       }

//       if (currentBucket3 === bucket3) {
//         currentBucket3 = 0;
//       }
//     }
//     return currentBucket5; 
//   }

//   console.log(measureWater()); 





// Функция для генерации случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Количество зон
const numZones = 4;

// Количество раундов для победы
const roundsToWin = 3;



// Начальное состояние команд и счетчик раундов
let team1Zones = [false, false, false, false]; // Пусть начально зона 4 открыта для команды 1
let team2Zones = [false, false, false, false]; // Пусть начально зона 4 открыта для команды 2
let team1Score = 0;
let team2Score = 0;

// const currentTeam = 1;
// Переменные для текущего раунда
let ballZone, teamWithBall;

// Функция для начала нового раунда
function startNewRound() {
    const randomZoneIndex = getRandomInt(0, numZones - 1);

    // Обновляем состояние зон для обеих команд
    team1Zones[randomZoneIndex] = true;
    team2Zones[randomZoneIndex] = true;
    console.log(`Зона команды номер 1: ${team1Zones}`);
    console.log(`Зона команды номер 2: ${team1Zones}`);
    // Определяем, кто закрыл зону с мячом
    teamWithBall = getRandomInt(1, 2);
    console.log(`Команда номер: ${teamWithBall}`);
    // Определяем, в какой зоне мяч
    ballZone = getRandomInt(0, numZones - 1);
    console.log(`Мяч в зоне: ${ballZone}`);
    
}
// Цикл для симуляции раундов
while (team1Score < roundsToWin && team2Score < roundsToWin) {
    startNewRound();

    // Проверяем, засчитывается ли очко
    if (team2Zones[ballZone] && teamWithBall === 1) {
        team1Score++;
        console.log("Команда 1 засчитывает очко!");
    } else if (team1Zones[ballZone] && teamWithBall === 2) {
        team2Score++;
        console.log("Команда 2 засчитывает очко!");
    } else {
        console.log("Мяч попал в закрытую зону. Продолжаем раунд.");
    }

    // Меняем состояние зон перед следующим раундом
    team1Zones = [false, false, false, false];
    team2Zones = [false, false, false, false];
}

// Определяем победителя
if (team1Score >= roundsToWin) {
    console.log("Команда 1 победила!");
} else {
    console.log("Команда 2 победила!");
}



