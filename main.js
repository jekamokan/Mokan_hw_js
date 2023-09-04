const scopeButtons = document.querySelector('.wrapper__buttons');
const scopeList = document.querySelector('.wrapper__content');
const ul = document.createElement('ul');
let CURRENT_PAGE = 2;
// Для кнопок
const buttonData = [
    { text: '<<', disabled: true, id: 0 },
    { text: '<', disabled: true, id: 1 },
    { text: '1', disabled: true, id: 2 },
    { text: '2', disabled: false, id: 3 },
    { text: '3', disabled: false, id: 4 },
    { text: '4', disabled: false, id: 5 },
    { text: '5', disabled: false, id: 6 },
    { text: '>', disabled: false, id: 7 },
    { text: '>>', disabled: false, id: 8 },
];

function createButtons(dataArray, parentElement) {
    dataArray.forEach(item => {
        const button = document.createElement('button');
        button.innerText = item.text;
        button.disabled = item.disabled;
        button.id = item.id;
        parentElement.append(button);
    });
}

createButtons(buttonData, scopeButtons);
///

/// Создаем список из 50 элементов
for (let i = 0; i <= 49; i++) {
    const li = document.createElement('li');
    li.innerText = `Item ${i + 1}`;
    ul.append(li);
}
scopeList.append(ul);

///
const listItems = ul.querySelectorAll("li");
const elementsOnPage = listItems.length / 5;
///

/// коллекция кнопок
const collectionButtons = []
const getBtn = value => scopeButtons.querySelectorAll('button')[value];
for (let i = 0; i <= 8; i++) {
    collectionButtons.push(getBtn(i))
}
console.log(collectionButtons);

// Скрываем все элементы li, кроме первых 10
for (let i = 0; i < listItems.length; i++) {
    if (i >= elementsOnPage) {
        listItems[i].style.display = 'none';
    }
}

const deleteBackGround = () => {
    collectionButtons.forEach(button => {
        button.style.backgroundColor = '';
    });
}

const getCurrentPage = el => CURRENT_PAGE = collectionButtons[el].id;

const addBackGround = el => collectionButtons[el].style.backgroundColor = 'red';

// Только(2,3,4,5)
const clickOnButton = (index, a, b, boolean1, boolean2) => {
    deleteBackGround();
    getCurrentPage(index)
    addBackGround(index);
    for (let i = 0; i < listItems.length; i++) {
        if (i >= elementsOnPage * a && i < elementsOnPage * b) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = boolean1;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = boolean2;
    }
}
//Только 1
const clickOnFirstButton = () => {
    deleteBackGround();
    getCurrentPage(2)
    addBackGround(2);
    for (let i = 0; i < listItems.length; i++) {
        if (i < elementsOnPage) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = true;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = false;
    }
}
// Клики на наши кнопки
collectionButtons[2].style.backgroundColor = 'red';

collectionButtons[2].addEventListener('click', function () {
    clickOnFirstButton()
})
collectionButtons[3].addEventListener('click', function () {
    clickOnButton(3, 1, 2, false, false);
})
collectionButtons[4].addEventListener('click', function () {
    clickOnButton(4, 2, 3, false, false);
})
collectionButtons[5].addEventListener('click', function () {
    clickOnButton(5, 3, 4, false, false);
})
collectionButtons[6].addEventListener('click', function () {
    clickOnButton(6, 4, 5, false, true);
})


// Для кнопок со стрелками
//<<
collectionButtons[0].addEventListener('click', function () {
    clickOnFirstButton()
})

//>>
collectionButtons[8].addEventListener('click', function () {
    clickOnButton(6, 4, 5, false, true);
})

//<
collectionButtons[1].addEventListener('click', function () {
    deleteBackGround();
    if (CURRENT_PAGE == 6) {
        clickOnButton(5, 3, 4, false, false);
    } else if (CURRENT_PAGE == 5) {
        clickOnButton(4, 2, 3, false, false);
    } else if (CURRENT_PAGE == 4) {
        clickOnButton(3, 1, 2, false, false);
    } else if (CURRENT_PAGE == 3) {
        clickOnFirstButton()
    }
});
//>
collectionButtons[7].addEventListener('click', function () {
    deleteBackGround();
    if (CURRENT_PAGE == 2) {
        clickOnButton(3, 1, 2, false, false);
    } else if (CURRENT_PAGE == 3) {
        clickOnButton(4, 2, 3, false, false);
    } else if (CURRENT_PAGE == 4) {
        clickOnButton(5, 3, 4, false, false);
    } else if (CURRENT_PAGE == 5) {
        clickOnButton(6, 4, 5, false, true);
    }
});
