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
const nextBtn = getClass('swiper-button-next');
const nameHeight = getClass('swiper-name-height');
const valueHeight =  getClass('swiper-value-height');
const valueAge = getClass('swiper-value-age');
const valuePeople = getClass('swiper-value-people');
const resetBtn = getClass('reset');

const classNames = [
  'email',//0
  'password',//1
  'birthday',//2
  'sex',//3
  'name',//4
  'zodiac',//5
  'age',//6
  'height',//7
];


const updateStorage = person => {
  const storage = localStorage.getItem('people');
  if (!storage) {
    localStorage.setItem('people', JSON.stringify([person]));
  } else {
    const prevData = JSON.parse(localStorage.getItem('people'));
    localStorage.setItem('people', JSON.stringify([...prevData, person]));
  }
};

const generateNewPerson = () => {
  const result = classNames.reduce((acc, item) => {
    const value = getClass(item).value;
    if (value) {
      acc[item] = value;
    }
    return acc;
  }, {});

  console.log(result);
  return result;
};


const handleSaveButtonClick = () => {
  const newPerson = generateNewPerson();
  updateStorage(newPerson);
  nextBtn.click()

  let people = JSON.parse(localStorage.getItem('people')) || [];
  const totalAge = people.reduce((sum, person) => sum + parseInt(person.age), 0);

  nameHeight.innerText = newPerson.name;
  valueHeight.innerText = newPerson.height + 'cm';
  valueAge.innerText = totalAge + 'лет';
  valuePeople.innerText = people.length;
};

button.addEventListener('click', handleSaveButtonClick);

let tallestPerson;
let maxHeight = 0;

for (const person of people) {
  const height = parseInt(person.height);
  if (height > maxHeight) {
    maxHeight = height;
    tallestPerson = person;
  }
}

resetBtn.addEventListener('click', () => localStorage.removeItem('people'));

