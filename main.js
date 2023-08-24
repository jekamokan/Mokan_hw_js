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











const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; // Рандомное значение по заданым параметрам
const numZones = 4; // Количество зон
const roundsToWin = 3;// Количество раундов для победы

// Начальное состояние команд и счетчик раундов
let team1Zones = [false, false, false, false]; 
let team2Zones = [false, false, false, false]; 
let team1Score = 0;
let team2Score = 0;

let currentTeam = 1;

let ballZone;

// Функция для начала нового раунда
function startNewRound() {
    const randomZoneIndex = getRandomInt(0, numZones - 1);

    // Обновляем состояние зон для обеих команд
    team1Zones[randomZoneIndex] = true;
    team2Zones[randomZoneIndex] = true;
    console.log(`Зона команды номер 1: ${team1Zones}`);
    console.log(`Зона команды номер 2: ${team1Zones}`);
    console.log(`Команда номер: ${currentTeam}`);
    
    // Определяем, в какой зоне мяч
    ballZone = getRandomInt(0, numZones - 1);
    console.log(`Мяч в зоне: ${ballZone}`);
    
}


// Цикл для симуляции раундов
while (team1Score < roundsToWin && team2Score < roundsToWin) {
    startNewRound();

    // Проверяем, засчитывается ли очко
    if (team2Zones[ballZone] && currentTeam === 1) {
        team1Score ++;
        console.log(`Команда 1 засчитывает очко!
        Team 1: ${team1Score} score;
        Team 2: ${team2Score} score;`);
    } else if (team1Zones[ballZone] && currentTeam === 2) {
        team2Score ++;
        console.log(`Команда 2 засчитывает очко!
        Team 1: ${team1Score} score;
        Team 2: ${team2Score} score;`);
    } else if( team2Zones[ballZone] === false && currentTeam === 1){
        currentTeam = 2;
    } else if(team1Zones[ballZone] === false && currentTeam === 2) {
        currentTeam = 1;
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



