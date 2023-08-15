const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});


const getClass = (el) => document.querySelector('.' + el);

const button =  getClass('swiper-btn-third');
const nameHeight = getClass('swiper-name-height');
const valueHeight =  getClass('swiper-value-height');
const valueAge = getClass('swiper-value-age');
const valuePeople = getClass('swiper-value-people');


const classNames = [
  'swiper__input-email',//0
  'swiper__input-password',//1
  'swiper__input-birthday',//2
  'swiper__input-sex',//3
  'swiper__input-name',//4
  'swiper__input-zodiac',//5
  'swiper__input-age',//6
  'swiper__input-height',//7
];

const inputs = classNames.map(value => getClass(value));


// для примера если не получаеться делать новые обьекты
const people = [
  {email: 'qwer@gmail.com', password: '23242srer', birthday: '1990-10-10', sex: 'male', name: 'Jhon', zodiac: 'Scorpion', age: '34', height: '176'},
  {email: 'ffff@gmail.com', password: 'dsfdsfsdf', birthday: '1994-9-12', sex: 'female', name: 'Michel', zodiac: 'Aries', age: '38', height: '156'},
  {email: 'rrrr@gmail.com', password: '435345345', birthday: '1998-8-8', sex: 'male', name: 'Rick', zodiac: 'Leo ', age: '44', height: '136'},
  {email: 'dfefefef@gmail.com', password: 'rffs#', birthday: '1908-8-8', sex: 'female', name: 'Nicky', zodiac: 'Leo ', age: '49', height: '201'},
  {email: 'aaaaa@gmail.com', password: 'bnbvnvb', birthday: '1992-7-4', sex: 'female', name: 'Samanta', zodiac: 'Taurus ', age: '75', height: '186'}
]
let tallestPerson;
let maxHeight = 0;

  for (const person of people) {
    const height = parseInt(person.height);
    if (height > maxHeight) {
      maxHeight = height;
      tallestPerson = person;
    }
  }

const totalAge = people.reduce((sum, person) => sum + parseInt(person.age), 0);

nameHeight.innerText = tallestPerson.name ;
valueHeight.innerText = tallestPerson.height + 'cm';
valueAge.innerText = totalAge + 'kg';
valuePeople.innerText = people.length;

const persone = {};

const createObjectsElement = (type, index) => persone[type] = inputs[index].value

button.addEventListener('click', function(){
  createObjectsElement('email', 0)
  createObjectsElement('password', 1)
  createObjectsElement('birthday', 2)
  createObjectsElement('sex', 3)
  createObjectsElement('name', 4)
  createObjectsElement('zodiac', 5)
  createObjectsElement('age', 6)
  createObjectsElement('height', 7)
  people.unshift(persone)
  console.log(persone);
  console.log(people);
  localStorage.setItem('people', JSON.stringify(people));
});
