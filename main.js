
const task = prompt('Оберіть завдання зі списку для відображення його функціонування: Number: odd , String: lexics , Boolean , Boolean: if , Comparison: sizes , Ternary , Training , Prompt: or , Confirm: or this days , Confirm: if this days , Default: or , Default: if , Login and password , Currency exchange , Scissors . ');


if(task == 'Number: odd'){

const value = prompt('Введіть число');
const newValue = +value;
if(newValue){
    alert(`Ви ввели ${value}`);
} else{
    alert("Введіть тільки числа");
}

}else if(task =='String: lexics'){

const text = prompt('Введіть будь який текст(ЗАБОРОНЕНІ СЛОВА!!!: карамболь, струмінь');
console.log(text);
if(text.includes('карамболь')){
    alert('Ви використали заборонені слова')
} else if(text.includes('струмінь')){
    alert('Ви використали заборонені слова')
}

}else if(task =='Boolean'){

const age = confirm('Вам є 18?');
console.log(`Вам є 18? ${age}`);
const country = confirm('Ви були у Новій Зеландії?');
console.log(`Ви були у Новій Зеландії? ${country}`);
const pet = confirm('Чи є у Вас домашня тварина?');
console.log(`Чи є у Вас домашня тварина? ${pet}`);

}else if(task =='Boolean: if'){

const age = confirm('Вам є 18?');
if(age){
    alert('Ви повнолітній, я Вас вітаю)')
} else{
    alert('Вам треба трошки підрости.')
}
const country = confirm('Ви були у Новій Зеландії?');
if(country){
    alert('І шо там? гарно?)))')
} else{
    alert('Не гайте час,купуйте швиденько квиток.')
}
const pet = confirm('Чи є у Вас домашня тварина?');
if(pet){
    alert('Класс))) я теж обожнюю тваринок.')
} else{
    alert('Шкода що немає(')
}    

}else if(task =='Comparison: sizes'){

const curentSizeThings = +prompt('Write your size to convert in USA size. From 40 to 54');
if(curentSizeThings < 40){
    alert('Not enough, but you can choose size 6(S)')
} else if(curentSizeThings <= 42){
    alert('Your size 8(M)')
}
 else if(curentSizeThings <= 44){
    alert('Your size 10')
}
 else if(curentSizeThings <= 46){
    alert('Your size 12(L)')
}
 else if(curentSizeThings <= 48){
    alert('Your size 14')
}
 else if(curentSizeThings <= 50){
    alert('Your size 16(XL)')
}
 else if(curentSizeThings <= 52){
    alert('Your size 18')
}
 else if(curentSizeThings <= 54){
    alert('Your size 20(XXL)')
} else{
    alert('To much, but you can choose size 20(XXL)')
}    

}else if(task =='Ternary'){

const sex = confirm('Are you man?');
alert(sex ? 'Hi is a man' : 'She is a women');    

}else if(task =='Training'){

console.log(!!2); // true
console.log(!!0); // flase
console.log(!!1); // true
// or
console.log(2 || 1); //true
console.log(2 || 0); //true
//and
console.log(2 && 1); //true
console.log(1 && 2); //true
console.log(0 && 2); //flase
// or and and difference
console.log(0 || 1 || 2 );// 1
console.log(0 && 1 && 2); //false
console.log(2 || 1 || 0); //2
console.log(2 && 1 && 0); //false
console.log(confirm('left') || confirm('right')); // если будет хотя бы один true вернет true, в остальных случаях false
console.log(confirm('left') && confirm('right')); //если будет хотя бы один false вернет false, если будет два true вернет true
//null, undefined, so on
console.log(null || 2); //true
console.log(undefined && 1); //false
 console.log(alert("Hello") && confirm('Are you sexy?'));; // undefinde
 console.log(alert("Hello") || confirm('Are you drunk?'));; // true
//brackets and complex expressions
console.log((undefined || 2) && (3 || 0)); //3
console.log((2 && 1) || (null && 0)); //true 1
console.log((2 > 1) && "greater"); //true
console.log((2 < 1) && null); //false
console.log(null && (2 < 1));// null
// ternary operator
console.log(1 ? "one" : "not one");// 'one'
console.log(0 ? "zero" : "not zero"); // 'not zero'
console.log("0" ? "\"zero\"" : "not `zero`"); // 'zero'
console.log(parseInt("0") ? 'true' : 'false'); //false
console.log(("" || 2) && (3 || "3.5") || (4 && 5)); //true 3
console.log((-1 + 1) && "zero"); //false
console.log("-1" + 1 && "oups"); //false oups
console.log((typeof null === 'object') ? "null is object" : "null is null"); // 'null is object'
// ternary && ||
console.log(Math.random() < 0.5 && 'less' || 'more');
console.log((a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a);
//in for array
console.log([2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found');    

}else if(task =='Prompt: or'){

const age = +prompt('Your age?');
(age || false) ? alert(`Your age ${age}`) : alert('Please write your age');    

}else if(task =='Confirm: or this days'){

const shopping = confirm('Shoping ?');
(shopping || false) ? alert('Lets go') : alert('ти - бяка');    

}else if(task =='Confirm: if this days'){

const shopping = confirm('Shoping ?');
if(shopping){
    alert('Lets go')
} else{
    alert('ти - бяка')
}

}else if(task =='Default: or'){

let firstName = prompt('Your name?');
let lastName = prompt('Your last name?');
let fatherName = prompt('Your father name?');

firstName = firstName || 'Ivan';
lastName = lastName || 'Ivanov';
fatherName = fatherName || 'Ivanovich';

(firstName || lastName || fatherName) ? alert(`${firstName} ${lastName} ${fatherName}`) : alert('Write your BIO');    

}else if(task =='Default: if'){

let firstName = prompt('Your name?');
let lastName = prompt('Your last name?');
let fatherName = prompt('Your father name?');

firstName = firstName || 'Ivan';
lastName = lastName || 'Ivanov';
fatherName = fatherName || 'Ivanovich';

if(firstName || lastName || fatherName){
    alert(`${firstName} ${lastName} ${fatherName}`)
}else{
    alert('Write your BIO');
}    

}else if(task =='Login and password'){

const login = prompt('Enter you login');
const password = prompt('Enter your password');

if((login == 'admin') && (password == 'qwerty')){
    alert('Congratulation, its correct')
} else if(login != 'admin'){
    alert('Your login uncorrect')
} else if(password != 'qwerty'){
    alert('Your password uncorrect')
}

}else if(task =='Currency exchange'){

const sellBuy = confirm('Якщо ви хочете купити, натисніть кнопку зліва, якщо продати кнопку зправа');
const text = prompt('Введіть ваші значення у вигляді : сума валюта(usd,eur)').toLowerCase();
const eur = 40;
const usd = 36;
const valueArray = text.split(' ');
const amount = valueArray[0];
const currency = valueArray[1];

if(sellBuy && text.includes('usd')){
    let uahToUsd = amount * 36;
    alert(`Щоб купити ${amount} ${currency} вам потрібно ${uahToUsd} гривень за курсом (${usd} гривень за долар)`)
}else if(sellBuy && text.includes('eur')){
    let uahToEur = amount * 40;
    alert(`Щоб купити ${amount} ${currency} вам потрібно ${uahToEur} гривень за курсом (${eur} гривень за долар)`)
}else if((sellBuy==false) && text.includes('usd')){
    let usdToUah = amount * 36;
    alert(`Ви отримаєте ${usdToUah} гривень`)
}else if((sellBuy==false) && text.includes('eur')){
    let eurToUah = amount * 40;
    alert(`Ви отримаєте ${eurToUah} гривень`)
}    

}else if(task =='Scissors'){

const user = prompt('Введіть одне з цих значень: "камінь-ножиці-папір"');
let computer = Math.random().toFixed(1);
console.log(computer);

if(computer <= 0.3){
    computer = 'камінь';
    alert(`Ваш опонент обрав ${computer}`)
    if(user == 'камінь'){
        alert(`У вас нічия (Ви (${user}) опонент (${computer}))`)
    } else if(user == 'ножиці'){
        alert(`Ви програли (Ви (${user}) опонент (${computer}))`)
    } else if(user == 'папір'){
        alert(`Ви виграли (Ви (${user}) опонент (${computer}))`)
    }
} else if(computer <= 0.6){
    computer = 'ножиці';
    alert(`Ваш опонент обрав ${computer}`)
    if(user == 'ножиці'){
        alert(`У вас нічия (Ви (${user}) опонент (${computer}))`)
    } else if(user == 'папір'){
        alert(`Ви програли (Ви (${user}) опонент (${computer}))`)
    } else if(user == 'камінь'){
        alert(`Ви виграли (Ви (${user}) опонент (${computer}))`)
    }
} else if(computer <= 1){
    computer = 'папір';
    alert(`Ваш опонент обрав ${computer}`)
    if(user == 'папір'){
        alert(`У вас нічия (Ви (${user}) опонент (${computer}))`)
    } else if(user == 'камінь'){
        alert(`Ви програли (Ви (${user}) опонент (${computer}))`)
    } else if(user == 'ножиці'){
        alert(`Ви виграли (Ви (${user}) опонент (${computer}))`)
    }
}    

}
