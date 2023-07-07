// String: greeting

// const firstName = prompt("Введіть ваше ім'я");
// alert(`${firstName}, наша компанія щиро вітає Bас з Днем Народження!!!♥`);



// String: gopni4ek

// let text = prompt('Введіть будь який текст з декількома комами');
// let newText = text.split(',');
// alert(newText.join(', блін'));



// String: capitalize

// let str = "cANBerRa"
// let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(result);



// String: word count

// const text = 'Привіт я тебе сьогодні бачив з твоєю собакою біля кафе';
// const newText = text.split(' ');
// console.log(newText.length);



// String: credentials

// const firstName = prompt("Введіть ваше ім'я").trim();
// const lastName = prompt("Введіть ваше прізвище").trim();
// const fatherName = prompt("Введіть ваше по батькові").trim();

// це рішення інструментами з лекції

// const correctFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
// const correctLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
// const correctFatherName = fatherName[0].toUpperCase() + fatherName.slice(1).toLowerCase();

// тут мені не сподобався код який повторюється я спробував оптимізувати його
// function capitalizeString(string) {
//     return string[0].toUpperCase() + string.slice(1).toLowerCase();
//   }
//   const correctFirstName = capitalizeString(firstName);
//   const correctLastName = capitalizeString(lastName);
//   const correctFatherName = capitalizeString(fatherName);

// const fullName = `Wellcome to the club ${correctFirstName} ${correctLastName} ${correctFatherName}`;
// alert(fullName);




// String: beer

// let str = "Було жарко. Василь пив пиво вприкуску з креветками"
// let result = str.split(" ").map(word => word === "пиво" ? "чай" : word).join(" ");
// console.log(result)




// String: no tag

// let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
// console.log(str.indexOf('<br />'));
// const firstPart = str.slice(0, 32);
// const secondPart = str.slice(39, 52);
// let result = firstPart + secondPart;
// console.log(result);




// String: big tag

// let str = "якийсь текст у якому є один тег <br /> і всяке інше"
// let info = str.indexOf('br');
// let result = str.slice(32, 38).toUpperCase();
// console.log(result);




// String: new line

// const userText = prompt("Введіть рядок з маркером нового рядка (\\n)");
// const bigString = userText.split('\\n').join("\n");
// console.log(bigString);




// String: youtube

// const userInput = prompt("Введіть текст з посиланням на YouTube:");
// const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|\/v\/|\/embed\/))([\w-]{11})/;
// console.log(userInput.match(regex));
// const videoId = userInput.match(regex)[1]; 
// const embeddedVideoHTML = `
//   <div>
//     <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
//   </div>
// `;
// document.write(embeddedVideoHTML); 