const getCLass = (el) => document.querySelectorAll('.' + el);
const url = 'https://swapi.dev/api/planets/';
const planetName = getCLass('list__item-title');
let filmName = getCLass('list__item-films');
const planetData = {};

const getPlanets = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const allPlanets = data.results;
    console.log(allPlanets);
    return allPlanets
}

const createNewCard = (arr) => {
    arr.forEach((element, index) => {
        console.log(element.name);
        planetName[index].innerText = element.name;
    });
}

// const getFilmsCollection = async (planet) => {
//     const filmsUrls = planet.films;
//     const films = [];
//     for (const filmUrl of filmsUrls) {
//         const response = await fetch(filmUrl);
//         const filmData = await response.json();
//         films.push(filmData.title);
//     }
//     planetData[planet.name] = films;
// };

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


const createFilmsInCard = () => {
    planetName.forEach((el, index) => {
        const planetNameText = el.textContent;
        console.log(planetNameText);
        const currentFilms = planetData[planetNameText];
        console.log(currentFilms);
        const filmElement = document.querySelectorAll('.list__item-films')[index];
        
        if (currentFilms && currentFilms.length > 0) {
            filmElement.innerText = currentFilms.join(', ' + '\n');
        } else {
            filmElement.innerText = 'Нет данных о фильмах';
        }
    });
}



(async () => {
    const planets = await getPlanets();
    createNewCard(planets);

    for (const planet of planets) {
        await getFilmsCollection(planet);
    }

    createFilmsInCard();
})();