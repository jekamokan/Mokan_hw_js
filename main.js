const getCLass = (el) => document.querySelectorAll('.' + el);
const url = 'https://swapi.dev/api/planets/';
const planetName = getCLass('list__item-title');
const heroName = getCLass('list__item-heroes');
const cardBtns = document.querySelectorAll('.list__item-btn');
const planetData = {};
const heroesData = {};


const getPlanets = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const allPlanets = data.results;
    console.log(allPlanets);
    return allPlanets
}

const addPlanetName = (arr) => {
    arr.forEach((element, index) => {
        console.log(element.name);
        planetName[index].innerText = element.name;
    });
}

const getFilmsCollection = async (planet) => {
    const filmsUrls = planet.films;
    const filmPromises = filmsUrls.map(async (filmUrl) => {
        const response = await fetch(filmUrl);
        const filmData = await response.json();
        return filmData.title;
    });

    const films = await Promise.all(filmPromises);
    planetData[planet.name] = films;
};

const getHeroesCollection = async (hero) => {
    const heroUrls = hero.residents;
    const heroPromises = heroUrls.map(async (heroUrl) => {
        const response = await fetch(heroUrl);
        const heroData = await response.json();
        return heroData.name;
    });

    const heros = await Promise.all(heroPromises);
    heroesData[hero.name] = heros;
};


const createFilmsAndHeroesInCard = () => {
    planetName.forEach((el, index) => {
        const planetNameText = el.textContent;
        const currentFilms = planetData[planetNameText];
        const filmElement = document.querySelectorAll('.list__item-films')[index];
        const heroElement = document.querySelectorAll('.list__item-heroes')[index];

        if (currentFilms && currentFilms.length > 0) {
            filmElement.innerText = currentFilms.join(', ' + '\n');
        } else {
            filmElement.innerText = 'Нет данных о фильмах';
        }

        if (planetNameText in heroesData) {
            const planetHeroes = heroesData[planetNameText];
            if (planetHeroes && planetHeroes.length > 0) {
                heroElement.innerText = planetHeroes.join(', ' + '\n');
            } else {
                heroElement.innerText = 'Нет данных о героях';
            }
        } else {
            heroElement.innerText = 'Нет данных о героях';
        }
    });
}

cardBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const listItem = document.querySelectorAll('.list__item')[index];
        const listItemWrapper = listItem.querySelector('.list__item-wrapper');

        listItem.classList.toggle('active--li');
        listItemWrapper.classList.toggle('active--wrapper');
        btn.classList.toggle('active--btn');
    });
});


(async () => {
    const planets = await getPlanets();
    addPlanetName(planets);
    // проходимся по каждой планете и получаем колекцию фильмов
    for (const planet of planets) {
        await getFilmsCollection(planet);
    }
    // проходимся по каждой планете и получаем колекцию героев
    for (const hero of planets) {
        await getHeroesCollection(hero);
    }
    createFilmsAndHeroesInCard()
})();